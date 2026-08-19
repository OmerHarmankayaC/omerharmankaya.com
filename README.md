# omerharmankaya.com

My personal site. A landing page, a works index, and one page per project.

**Live:** [omerharmankaya.com](https://www.omerharmankaya.com)

Two of the project pages are not screenshots — they are wired to the running
systems they describe:

- **LoadCast** — the electricity demand chart and accuracy table fetch live
  from `loadcast.omerharmankaya.com/api/embed/*`, so the page shows the model's
  current forecast against actual consumption rather than a saved image.
- **Vera Q&A** — the widget posts questions through a serverless function
  (`api/vera-qa.ts`) that adds a shared secret and forwards them to the RAG
  backend, so the browser never holds the credential.

The whole site is bilingual (Turkish / English); the language switch sets
`document.documentElement.lang` and the React islands re-render from it.

## Stack

Multi-page static site built with Vite. Plain HTML and CSS for the pages, with
React + Recharts mounted only where a chart or a widget needs it
(`EpiasChart.jsx`, `EpiasTable.jsx`). Deployed on Vercel.

```
index.html                 landing
works.html                 works index
project-*.html             one page per project
EpiasChart / EpiasTable    React islands, live LoadCast data
qa-widget                  Vera Q&A widget
api/vera-qa.ts             serverless proxy to the RAG backend
styles.css                 global stylesheet
```

## Development

```bash
npm install
npm run dev       # vite dev server, proxies /api/vera-qa to the RAG backend
npm run build     # builds every page listed in vite.config.js
npm run preview
```

The Q&A widget needs two environment variables; without them the rest of the
site still runs and only the widget is unavailable.

| Variable | Description |
|---|---|
| `VERA_QA_BACKEND_URL` | RAG backend endpoint |
| `VERA_QA_SHARED_SECRET` | Sent as `X-Vera-QA-Secret` |

## Licence

The code is here to be read. The written content, images, and CV are mine —
please don't reuse them as your own.
