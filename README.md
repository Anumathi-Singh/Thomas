# St. Thomas College of Education

A responsive college website and three distinct portal previews for students, faculty, and administrators.

## Run locally

```powershell
cd D:\thomas
npm.cmd install
npm.cmd run dev
```

Open the URL printed by Vite. `npm.cmd run build` checks TypeScript and produces `dist/`. `npm.cmd run preview` serves that production build.

## Stack

React, TypeScript, Vite, Lucide icons, and custom responsive CSS. Campus Connect at `D:\CBIT` uses React/TypeScript with Expo and React Native; this public website shares its core language and component approach and uses a web-specific Vite build. No backend is connected yet.

## Structure

- `src/components/`: shared brand and future reusable components
- `src/data/`: verified college identity, programmes, image placeholders
- `src/pages/`: role-based portal login and dashboard screens
- `src/styles/`: portal styling, alongside the public-site `src/styles.css`
- `docs/`: research and implementation notes
- `public/`: future college logos, campus photos, and downloads
- `tests/`: browser smoke tests
- `artifacts/`: desktop/mobile visual review screenshots

## Preview routes

- `/`: public college website
- `/portal/student`: student login and learning dashboard
- `/portal/faculty`: faculty login and teaching dashboard
- `/portal/admin`: administrator login and operations dashboard

Use **Explore demo portal** to access each preview. Login forms validate required input but do not authenticate. Role separation is presentation only; secure sessions, server-side authorization, database integration, password recovery, and admission delivery remain future backend work. No submitted password is stored or sent. Demo resource saves last only for the current component session.

Programme dialogs, enquiry preview, mobile navigation, portal navigation, search, demo resource saves, and sign-out work. Dashboard counts, names, schedules, and resources are fictional, visibly labelled sample content. Enquiries are not transmitted. Do not use real credentials.

All photography is illustrative Unsplash content saved in `public/images`; replace with approved campus photos before launch. Google Fonts currently require an internet connection, with system font fallbacks. The shield mark is a temporary typographic identity, not the official crest.

## Verification

```powershell
npx.cmd playwright install chromium
npm.cmd test
```

Tests cover the enquiry preview, all three portal flows, resource saving, empty search results, mobile navigation, horizontal overflow, and screenshot generation.

## September 30 UI revision
Society masthead, sticky original navigation, dedicated B.Ed/D.Ed pages, official archive imagery, gallery, contact page, website search and reading preferences are now implemented. See docs/St-Thomas-Master-UI-Prompt.md for the full UI roadmap and docs/research.md for verified sources and implementation boundaries. Current photos come from the college archive; any earlier description of stock imagery is superseded. All services remain UI previews.


## Academic Spectrum visual update
Replaces Forest & Ivory with navy, indigo, coral, teal, lavender and amber. Adds one-time hero entrance and scroll reveals, richer interaction states, an interactive B.Ed/D.Ed pathway explorer, and three journey shortcuts. Reduced-motion preferences disable transitions. Production build and all eight existing checks pass; pathway switching and system reduced-motion behaviour were additionally verified.
