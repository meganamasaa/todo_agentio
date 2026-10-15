# Agentio — Creator Performance Mirror

A prototype dashboard for [Agentio](https://agentio.com) that reflects a creator's sponsorship performance back to them and surfaces brand matches.

## Sections
- **Fingerprint** — the creator's audience and content profile across key dimensions
- **Growth signals** — what's trending up and why it matters to sponsors
- **Integration arc** — performance across past brand integrations
- **Matches** — recommended brands, scored by fit

Data is mocked in `src/data/creatorData.ts`.

## Stack
React 19 · TypeScript · Vite · CSS Modules

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run lint
```

## Deploy
Vercel (Vite preset). Pushes to `main` deploy to production.
