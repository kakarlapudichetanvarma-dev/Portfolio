# Portfolio Frontend — React + Tailwind

## Requirements
- Node.js 18+

## Run (dev)
```bash
npm install
npm run dev
```
Opens on **http://localhost:5173**. API calls to `/api/*` are proxied to
`http://localhost:8080` (see `vite.config.js`) — so start the Spring Boot backend
first, or requests will fail.

## Build for production
```bash
npm run build
```
Outputs static files to `dist/`. Serve these with any static host, or drop them into
the Spring Boot backend's `src/main/resources/static/` folder to serve both from one
process (then point fetch calls at the same origin — no proxy needed).

## Structure
```
src/
  App.jsx                    — assembles the page
  index.css                  — Tailwind v4 import + theme tokens (colors, fonts)
  components/
    Navbar.jsx
    Hero.jsx
    Projects.jsx              — fetches GET /api/projects
    Skills.jsx
    ContactForm.jsx           — posts to POST /api/contact
    Footer.jsx
```

Tailwind v4 config lives in `src/index.css` under `@theme` — no `tailwind.config.js`
needed. Colors/fonts there mirror the original design (dark background, mono display
face, green accent).
