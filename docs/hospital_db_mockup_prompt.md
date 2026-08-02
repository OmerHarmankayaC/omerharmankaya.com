# Build prompt — interactive "database explorer" mockup (Hospital DBMS)

Build a single, self-contained, interactive component for a portfolio project detail page (`project-hospital.html`). It is a faux **database client** (think TablePlus / phpMyAdmin) that lets a visitor browse the hospital database schema I designed. It is the database-themed sibling of the mockups on my other project pages (a Safari/browser mockup on the IEEE page, a phone mockup on the Vera page). It must feel native to a dark, editorial portfolio — not like an embedded third-party tool.

## Context
- Plain static site, hand-written HTML/CSS/JS. No framework, no build step. The component must drop straight into an existing page.
- It sits full-width in the page flow, alongside body text. Do not use `position: fixed`.
- The schema data below is **real** (my actual ER model). Do not invent or rename tables, columns, keys, or relationships. The sample row values ARE placeholders — keep them realistic but they can be edited freely.

## Component overview
A rounded "app window" with three parts:
1. **Title bar** — three macOS-style traffic-light dots on the left; centered monospace label `hospital_dbms · sqlite`.
2. **Left sidebar** — list of all 8 tables. Each item: a small outline icon, the table name (monospace), and a muted row-count on the right. The selected table is highlighted (accent-tinted background + 2px accent left border). Hover state on the others.
3. **Main panel** (updates when a table is selected):
   - A monospace query line that reflects the selection, e.g. `SELECT * FROM patients;` with the SQL keywords in the accent color and the table name in the FK/link color.
   - **Columns** section: one row per column showing the column name (monospace), its type (muted monospace), and a key badge — `PK` (accent-tinted) or `FK → <table>` (link-color-tinted).
   - **Sample rows** section: a compact table (2 rows) showing 3–4 representative columns. Use `table-layout: fixed`, truncate overflow with ellipsis — no horizontal scrolling.
   - **Relationships** section: a short list of this table's relationships (e.g. `patient_id → patients`, `referenced by appointments, billing, …`).

## Interactions (vanilla JS, no dependencies)
- Click a table in the sidebar → main panel switches to that table.
- Click an `FK → <table>` badge, OR a table name in the Relationships section → jump to that table (this is the "navigate through the schema" feel; same idea as paging through screens in an app mockup).
- Default selected table on load: `patients`.
- Sidebar items should be keyboard-focusable and activ: with Enter/Space.

## Visual style — dark theme
Match this palette (warm dark + terracotta). If the page already defines CSS variables for these, prefer those; otherwise use these values:
- window background `#16150F`, title bar `#1E1C15`, sidebar `#19170F`
- borders `#34322A` (outer) / `#26241D` (inner dividers)
- text primary `#E5E2D7`, muted `#8F8C80`
- accent (terracotta) `#C2693F` — used for: selected table, PK badge, SQL keywords
- link/FK color `#9FC0CE` (muted blue) — used for: FK badges, clickable relationship targets
- monospace font for all db/code text (column names, types, query, table names); sans-serif for labels/UI
- rounded window (~14px), thin 1px borders, NO drop shadows, NO gradients
- minimum font-size 12px

## Responsive
- Below ~520px: the sidebar becomes a horizontal, scrollable row of table chips above the main panel (selected chip uses a 2px accent bottom border instead of a left border; hide the row counts).

## Accessibility
- Start with a visually-hidden summary sentence for screen readers.
- Sidebar items are real buttons or have `role="button"`, `tabindex="0"`, and `aria-label`.
- Decorative icons get `aria-hidden="true"`.

## Tech constraints
- One self-contained block (inline `<style>` + markup + `<script>`), no external JS libraries. An icon font is optional — if you use one, fall back gracefully (a small glyph or nothing) so it works offline.
- No console errors. Escape any text rendered into HTML.

## Schema data (REAL — do not alter structure)
Encode this as a JS object. `PK` = primary key, `FK → X` = foreign key referencing table X. Row counts are illustrative.

**patients** (≈128 rows)
- `id` INTEGER · PK
- `name` TEXT
- `birth_date` DATE
- `contact` TEXT
- `address` TEXT
- `medical_history` TEXT
- `insurance` TEXT
- relationships: referenced by `appointments`, `laboratory`, `prescriptions`, `billing`
- sample rows: `(1, "Ali Yılmaz", "1992-04-11", "0532…", "Çankaya, Ankara", "Asthma", "SGK")`, `(2, "Sarah Johnson", "1988-09-23", "0541…", "Kadıköy, İstanbul", "None", "Private")`

**doctors** (≈24 rows)
- `id` INTEGER · PK
- `name` TEXT
- `availability` TEXT
- `contact` TEXT
- `address` TEXT
- `department_no` INTEGER · FK → departments
- `supervisor_id` INTEGER · FK → doctors  (self-reference; nullable)
- relationships: `department_no → departments`, `supervisor_id → doctors (oversees)`, attends `appointments`, gives `prescriptions`, asks `laboratory`
- sample rows: `(1, "Dr. Elif Demir", "Mon–Fri", "0533…", "—", 3, NULL)`, `(2, "Dr. Mark Lee", "Tue–Sat", "0544…", "—", 1, 1)`

**appointments** (≈341 rows)
- `appointment_no` TEXT · PK
- `date` DATE
- `status` TEXT
- `patient_id` INTEGER · FK → patients
- `doctor_id` INTEGER · FK → doctors
- relationships: `patient_id → patients`, `doctor_id → doctors`, linked to `billing`
- sample rows: `("A-1042", "2026-07-15", "Scheduled", 1, 1)`, `("A-1043", "2026-07-16", "Checked-in", 2, 2)`

**prescriptions** (≈512 rows)
- `prescription_no` TEXT · PK
- `medicine` TEXT
- `patient_id` INTEGER · FK → patients
- `doctor_id` INTEGER · FK → doctors
- relationships: `patient_id → patients`, `doctor_id → doctors`
- sample rows: `("P-0091", "Amoxicillin 500mg", 1, 1)`, `("P-0092", "Ibuprofen 400mg", 2, 2)`

**laboratory** (≈206 rows)
- `lab_no` TEXT · PK
- `test_type` TEXT
- `test_date` DATE
- `results` TEXT
- `patient_id` INTEGER · FK → patients
- `doctor_id` INTEGER · FK → doctors
- relationships: `patient_id → patients`, `doctor_id → doctors`
- sample rows: `("L-3310", "Blood panel", "2026-07-12", "Normal", 1, 1)`, `("L-3311", "X-ray", "2026-07-13", "Pending", 2, 2)`

**billing** (≈298 rows)
- `billing_no` TEXT · PK
- `price` DECIMAL
- `status` TEXT
- `patient_id` INTEGER · FK → patients
- `appointment_no` TEXT · FK → appointments
- relationships: `patient_id → patients`, `appointment_no → appointments`
- sample rows: `("B-7781", "₺1.860", "Paid", 1, "A-1042")`, `("B-7782", "₺930", "Pending", 2, "A-1043")`

**nurses** (≈40 rows)
- `id` INTEGER · PK
- `name` TEXT
- `contact` TEXT
- `address` TEXT
- `assigned_doctor_id` INTEGER · FK → doctors
- relationships: `assigned_doctor_id → doctors`
- sample rows: `(1, "Ayşe Kaya", "0532…", "—", 1)`, `(2, "John Carter", "0541…", "—", 2)`

**departments** (8 rows)
- `department_no` INTEGER · PK
- `department_name` TEXT
- `head_doctor_id` INTEGER · FK → doctors
- relationships: `head_doctor_id → doctors`
- sample rows: `(1, "Cardiology", 2)`, `(3, "Pediatrics", 1)`

Sidebar order: patients, doctors, appointments, prescriptions, laboratory, billing, nurses, departments.

## Acceptance criteria
- Renders as a single dark "DB client" window; all 8 tables listed; `patients` selected by default.
- Clicking any table updates the query line, columns (with correct PK/FK badges), sample rows, and relationships.
- Clicking an FK badge or a relationship target navigates to that table.
- Works down to ~360px wide (sidebar collapses to a chip row); no horizontal page scroll; no fixed positioning; no external dependencies; no console errors.
