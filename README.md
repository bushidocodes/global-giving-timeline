# GlobalGiving Timeline

A small React + Redux single-page app that displays a chronological timeline of
posts (text, images, and video) for a selected [GlobalGiving](https://www.globalgiving.org/)
organization. Pick an organization from the dropdown and the app fetches and
renders its posts oldest-to-newest, polling for new posts every few seconds.

## Tech stack

- **Frontend:** React 19, Redux Toolkit + React Redux, React Select, styled-components, `react-player` for embedded video
- **Build tooling:** [Vite](https://vitejs.dev/) (this project was originally bootstrapped with Create React App and has since migrated to Vite)
- **Language:** TypeScript
- **Backend (local):** a small Express server in [`server/`](server/) that replicates the original (now defunct) AWS Lambda API

## Prerequisites

- [Node.js](https://nodejs.org/) (18+ recommended) and npm

## Getting started

The app needs two processes running at once: the **frontend** dev server and the
**local API server**. Start the API server first so the frontend has data to load.

### 1. Start the local API server

```sh
cd server
npm install
npm start
```

This serves the API at `http://localhost:3001` with two endpoints:

- `GET /dev/getorganizations` — the list of organizations
- `GET /dev/getorgbyposttest?orgId=<id>` — timeline posts for one organization

The port can be overridden with the `PORT` environment variable. The data it
serves lives in [`server/data/`](server/data/). For auto-reload during
development, use `npm run dev` (nodemon) instead of `npm start`.

### 2. Start the frontend

From the repository root:

```sh
npm install
npm start
```

This runs Vite and opens the app at `http://localhost:4000`.

## Configuration

The frontend reads the API base URL from the `VITE_API_BASE_URL` environment
variable (see `src/reducers/timeline.ts` and `src/reducers/orgs.ts`). A default
is committed in [`.env`](.env):

```
VITE_API_BASE_URL=http://localhost:3001/dev
```

This matches the local API server above. To point the app at a different
backend, change this value (or override it in a `.env.local` file, which Vite
loads with higher priority and which is not committed).

## Available scripts

Run from the repository root:

| Script | Description |
| --- | --- |
| `npm start` | Start the Vite dev server (`http://localhost:4000`) |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run lint` | Lint and check format with Biome |
| `npm run lint:fix` | Lint, format, and auto-fix with Biome |
| `npm run format` | Format with Biome |
| `npm run format:check` | Check formatting without writing |

## Project structure

```
.
├── index.html            # Vite HTML entry point
├── vite.config.js        # Vite config (dev server on port 4000)
├── src/                  # Frontend source
│   ├── App.tsx           # Root component
│   ├── components/       # Select, TimelineList, TimelineListItem, ErrorBoundary
│   ├── actions/          # Redux thunk actions
│   ├── reducers/         # orgs, timeline, settings reducers
│   └── store.ts          # Redux store
├── server/               # Local Express API (replaces the original Lambda backend)
│   ├── index.js
│   └── data/             # Organization and post fixtures
└── scripts/
    └── deploy.sh         # Deploy the production build to AWS S3 + CloudFront
```

## Deployment

[`scripts/deploy.sh`](scripts/deploy.sh) publishes a production build to AWS. It
requires the [AWS CLI](https://aws.amazon.com/cli/) installed and configured with
credentials that can write to the target S3 bucket and invalidate the CloudFront
distribution referenced in the script.

```sh
npm run build      # produces dist/
./scripts/deploy.sh
```
