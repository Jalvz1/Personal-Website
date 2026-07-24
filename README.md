# Personal Portfolio Site

My personal website — an About section, a Skills grid, and a filterable Projects
gallery with detail modals. Built with **React + Vite + Tailwind CSS v4**. It's a
static site (no backend/database); all content lives in plain data files.

---

## Working on it from another device

You only need **Git** and **Node.js 20 or newer** installed.

### 1. Clone the repo
```bash
git clone https://github.com/Jalvz1/personal-site.git
cd personal-site
```
> Replace `personal-site` with the actual repo name if it's different.

### 2. Install dependencies
`node_modules` is **not** in the repo, so install it once after cloning:
```bash
npm install
```

### 3. Run it
```bash
npm run dev
```
Open the URL it prints (usually http://localhost:5173). The page hot-reloads as
you edit files.

That's it — you're working. When you're done, [commit and push](#saving-your-changes-back-to-github).

---

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time on a device, or after pulling new deps) |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Where to edit things

Most edits are just **content in data files** — you rarely touch the components.

| To change… | Edit |
|---|---|
| Projects (cards + modals) | `src/data/projects.js` |
| Skills (badges) | `src/data/skills.js` |
| Your name / nav links | `src/components/Navbar.jsx` |
| Hero headline & buttons | `src/components/Hero.jsx` |
| About bio & photo | `src/components/About.jsx` |
| Résumé file | replace `public/resume.pdf` |

### Adding images and PDFs
Put files in the **`public/`** folder (never `dist/` — that gets wiped on build):
- Per-project assets → `public/projects/<project-id>/` (screenshots, PDFs)
- General images (e.g. your photo) → `public/images/`

Reference them from code by the path after `public`, e.g. a file at
`public/projects/zoo-web-app/home.png` is used as `/projects/zoo-web-app/home.png`.

**Screenshots:** use ~16:9 landscape images, ideally ~1280×720 or 1600×900.

---

## Saving your changes back to GitHub

Before you start on a device, pull the latest:
```bash
git pull
```
After making changes:
```bash
git add .
git commit -m "describe what you changed"
git push
```
> The first `git push` on a device asks for a password — use a **GitHub Personal
> Access Token**, not your account password (GitHub → Settings → Developer
> settings → Personal access tokens).

---

## Project structure

```
index.html                 App entry HTML
src/
  main.jsx                 React entry point
  App.jsx                  Assembles the sections
  index.css                Tailwind import + smooth scroll
  components/              UI (Navbar, Hero, About, Skills, Reveal, ...)
    projects/              Projects section (grid, card, modal)
  data/                    Content — projects.js, skills.js
public/                    Static assets served from the site root
  images/                  Photos
  projects/<id>/           Per-project screenshots & PDFs
  resume.pdf               Your résumé (opens from the navbar)
vite.config.js             Vite + React + Tailwind plugins
```

---

## Deploying

Run `npm run build` and deploy the generated `dist/` folder to any static host —
[Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages all
work with zero config (point them at this repo and they build it for you).

---

## Tech stack

React 19 · Vite · Tailwind CSS v4 · react-icons
