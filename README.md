# News Explorer

A modern news search application built with React. This project is a **full-stack portfolio piece** by **Taliba Ali Latif**, demonstrating responsive UI, authentication flows, API integration, and a consistent design system.

## Live demo (deployed on GitHub Pages)

**[Open News Explorer](https://jazzmine-flora.github.io/final-project-frontend)**

The app is deployed at the link above. You can search news, sign in with a demo account (see below), and save articles. No installation required.

## Features

- **News search**: Search articles by topic via NewsAPI
- **User auth**: Sign up, sign in, and sign out (mock backend; data stored locally for demo)
- **Saved articles**: Bookmark articles when signed in; view and remove them on the Saved page
- **Responsive layout**: Desktop, tablet, and mobile breakpoints
- **Design system**: Typography (Roboto, Roboto Slab), spacing, and tokens applied across the app
- **Accessibility**: Focus states, semantic HTML, and ARIA where needed

## Tech stack

- **Frontend:** React 19, React Router, Vite
- **Styling:** CSS with custom properties (design tokens), Flexbox, Grid
- **Data:** NewsAPI for news; localStorage for auth and saved articles (demo)
- **Deployment:** GitHub Pages (static hosting)

## Demo accounts

For reviewers and portfolio visitors:

| Account | Email             | Password   |
|---------|-------------------|------------|
| 1       | test@example.com  | password123 |
| 2       | demo@example.com  | demo123     |

You can also sign up with your own email; data is stored locally for this portfolio demo.

## Run locally

```bash
git clone https://github.com/Jazzmine-Flora/final-project-frontend.git
cd final-project-frontend
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Deploy to GitHub Pages

This repo is set up to deploy to GitHub Pages from the `main` branch:

```bash
npm run build    # optional: test production build locally
npm run deploy   # builds and deploys to gh-pages branch
```

The live site will be at `https://<your-username>.github.io/final-project-frontend/`. Ensure `base` in `vite.config.js` matches your repo path (e.g. `/final-project-frontend/` for this repo).

## Scripts

- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint
- `npm run deploy`: Build and deploy to GitHub Pages

## Project structure

```
src/
├── components/     # React components (Header, Main, SearchForm, NewsCard, About, Footer, modals, etc.)
├── utils/          # newsApi, mockAuthApi, localStorage helpers
├── vendor/fonts/   # Roboto, Roboto Slab (local fonts)
└── index.css       # Design system and global styles
```

## Portfolio context

This project was built as a portfolio piece to showcase:

- Modern React patterns (hooks, composition, controlled forms)
- Responsive, accessible UI with a clear design system
- Integration with external APIs and local persistence
- Auth UX (sign in, sign up, protected routes)
- Deployment to GitHub Pages

---

**Created by Taliba Ali Latif**  
TripleTen Software Engineering program · Portfolio project

*News Explorer · Powered by [News API](https://newsapi.org)*
