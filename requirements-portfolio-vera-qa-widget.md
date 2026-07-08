# Portfolio Site — Vera Q&A Widget Integration Requirements

## Context

This repo is Ömer's personal portfolio site (Vite + React, deployed on Vercel). A separate, already-deployed backend (`rag.omerharmankaya.com`) exposes an authenticated external endpoint for the Vera Q&A RAG chatbot (built for a different project — the Vera-Finance landing page — and now being reused here as a second consumer).

**No backend changes are needed for this task.** The backend endpoint, its auth model, and its shared secret already exist and are reused as-is. This repo only adds its own proxy + widget on the consuming side.

**This spec covers data flow and functional behavior only — no visual design, layout, or styling.** Component styling is handled separately; do not make styling decisions, choose colors, fonts, or layout. Build the component logic and structure only.

## Goal

1. A Vercel serverless function in this repo that proxies chat requests to the external RAG backend, without ever exposing the backend URL or shared secret to the client.
2. A client-side component that manages conversation state and calls that proxy function.

## In scope

- Vercel serverless function at `api/vera-qa.ts` (project root, **not** inside `src/`)
- Client-side state management for a conversation (messages, loading, error states)
- Input validation (client and server side)
- Environment variables for backend URL and shared secret, configured in this Vercel project's settings

## Out of scope

- Any visual design, colors, typography, spacing, or layout
- Placement decisions on the page (separate design task)
- Backend changes of any kind — the endpoint already exists and is shared with another consumer
- Multi-turn conversation memory sent to the backend (v1 sends `history: []`)
- Streaming/typing-effect responses (v1 is request/response)

## Functional requirements

### 1. Project structure note (Vite + Vercel specifics)

- This is a Vite SPA, not Next.js — there is no framework-level routing for server code. Vercel auto-detects a top-level `/api` directory and deploys each file inside it as an individual serverless function, regardless of frontend framework.
- Create `api/vera-qa.ts` using the standard Vercel Node.js serverless function signature (`export default function handler(req, res) { ... }`, using `@vercel/node` types). Do not use an edge runtime — not needed here.
- For local development, `vite dev` alone will not serve `/api` routes. Use `vercel dev` to run frontend and function together locally, or configure the Vite dev server to proxy `/api/*` requests to a locally running `vercel dev` instance. Pick whichever is simpler to set up in this repo and note which one you used.

### 2. Serverless function — `api/vera-qa.ts`

- Only accept `POST`; respond `405` for any other method.
- Reads two environment variables (set in this Vercel project's own settings — Vercel projects do not share env vars across projects, even though the values match the other repo's):
  - `VERA_QA_BACKEND_URL` — e.g. `https://rag.omerharmankaya.com/api/external/vera-qa`
  - `VERA_QA_SHARED_SECRET` — same value as configured in the Vera landing page project
- On receiving a request from the client:
  1. Validate `question` is present, non-empty, and ≤1000 characters. If invalid, respond `400` with `{ "error": { "code": "invalid_request", "message": "..." } }` without calling the backend.
  2. Forward the request to `VERA_QA_BACKEND_URL` with header `X-Vera-QA-Secret: <VERA_QA_SHARED_SECRET>` and body `{ "question": ..., "history": [] }`.
  3. Relay the backend's response (status code and JSON body) back to the client as-is.
  4. If the backend call fails entirely (network error, timeout), respond `500` with `{ "error": { "code": "internal_error", "message": "Something went wrong. Please try again." } }` — do not leak the backend URL or raw error details to the client.
- Suggested timeout on the outbound call to the backend: 15 seconds.

### 3. Client-side widget component

Functional behavior only (no styling):

- Maintains conversation state as an array of messages: `{ role: 'user' | 'assistant', content: string, sources?: { title: string, excerpt: string, url: string | null }[] }`
- On submit:
  - Ignore empty/whitespace-only input
  - Append the user's message to state immediately
  - Set a loading flag while awaiting the response
  - POST `{ question, history: [] }` to `/api/vera-qa`
  - On success, append an assistant message with `content = answer` and `sources = sources`
  - On error response, append an assistant-role message with a generic error string (e.g. "Something went wrong. Please try again.") — do not surface raw error codes to the user
  - Clear loading flag when the request settles (success or failure)
- No persistence across page reloads required — in-memory React state (`useState`/`useReducer`) is sufficient
- Enforce the same 1000-character max length on the input client-side as a first line of defense (the function still validates independently)

### 4. Environment variables (set in this Vercel project)

- `VERA_QA_BACKEND_URL` — same value as in the Vera landing page project
- `VERA_QA_SHARED_SECRET` — same value as in the Vera landing page project (deliberately shared across both consumers per current design; not generated fresh here)

## Integration Contract (matches the backend's existing endpoint — do not change without confirming with the backend repo)

**Endpoint**
```
POST /api/external/vera-qa
Host: rag.omerharmankaya.com
```

**Required header**
```
X-Vera-QA-Secret: <shared secret value>
```

**Request body**
```json
{
  "question": "string, required, 1-1000 chars",
  "history": [
    { "role": "user" | "assistant", "content": "string" }
  ]
}
```
`history` is optional and may be omitted or sent as an empty array in v1.

**Success response — `200`**
```json
{
  "answer": "string",
  "sources": [
    { "title": "string", "excerpt": "string", "url": "string | null" }
  ]
}
```

**Error response — any non-200**
```json
{
  "error": {
    "code": "unauthorized" | "invalid_request" | "rate_limited" | "internal_error",
    "message": "string, human-readable, safe to display"
  }
}
```

## Acceptance criteria

- [ ] `api/vera-qa.ts` deploys as a working Vercel serverless function (visible in Vercel's function list after deploy)
- [ ] Submitting a question end-to-end returns a real answer from the backend
- [ ] Empty input cannot be submitted (blocked client-side, and rejected server-side if it somehow arrives)
- [ ] Input over 1000 characters is rejected before hitting the backend
- [ ] Backend URL and shared secret never appear in any client-side bundle or network request visible in browser devtools
- [ ] A simulated backend failure (e.g. wrong URL) results in a graceful in-UI error message, not a crash
- [ ] Conversation state correctly accumulates multiple question/answer turns in one session
- [ ] Non-POST requests to `/api/vera-qa` return `405`
