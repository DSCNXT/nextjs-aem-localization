# AEM Headless Next.js — Localization Demo

A working demonstration of a headless AEM/Next.js architecture with live i18n routing across `en-US`, `es-MX`, and `pt-BR`. Runs fully locally without a live AEM instance by mocking the GraphQL and page model layers.

---

## Attribution

Forked from [adobe/aem-headless-app-templates](https://github.com/adobe/aem-headless-app-templates). This project diverges significantly from the upstream template to demonstrate a mock-first local development pattern and a locale-as-metadata content modeling strategy.

---

## Architecture Overview

- **Next.js** handles routing, SSR, and i18n locale resolution
- **Mock GraphQL layer** mirrors the `@adobe/aem-headless-client-js` interface, returning structured Content Fragment data without a live AEM endpoint
- **Locale-as-metadata** — each Content Fragment carries a `locale` field (`en-US`, `es-MX`, `pt-BR`). The GraphQL query filters by locale at query time. No AEM folder-path conventions are used for localization.
- **`NEXT_PUBLIC_AEM_MOCK=true`** toggles between mock and live AEM. Swapping to a real AEM Cloud endpoint requires only an env change.

### URL structure

| URL | Locale |
|-----|--------|
| `localhost:3000/adventures` | `en-US` (default) |
| `localhost:3000/es-MX/adventures` | `es-MX` |
| `localhost:3000/pt-BR/adventures` | `pt-BR` |

---

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

---

## Installation

```bash
git clone https://github.com/DSCNXT/nextjs-aem-localization.git
cd nextjs-aem-localization
npm install
cp .env.development.example .env.development
```

---

## Running Locally

```bash
npm run dev -- --webpack
```

Open [http://localhost:3000/adventures](http://localhost:3000/adventures).

Use the **EN / ES / PT** switcher in the top-right nav to toggle locales. The adventure cards, headings, and URLs all update to reflect the active locale.

> **Note:** The `--webpack` flag is required due to a Turbopack compatibility issue with the webpack config inherited from the upstream template.

---

## Environment Variables

All env vars live in `.env.development`. Key variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_AEM_MOCK` | Set to `true` to use mock data. Remove or set to `false` to connect to a live AEM instance. |
| `NEXT_PUBLIC_AEM_HOST` | AEM author/publish host (used when mock is disabled) |
| `NEXT_GRAPHQL_ENDPOINT` | AEM GraphQL persisted query endpoint |
| `NEXT_PUBLIC_AEM_ROOT` | Root path for AEM page model (used when mock is disabled) |

---

## Mock Data

Mock content lives in `/mock`:

| File | Purpose |
|------|---------|
| `adventures.data.js` | Adventure Content Fragment data with `locale` field |
| `adventures.mock.js` | Drop-in `AdventureClient` replacement |
| `getPages.mock.js` | Static nav, replaces Sling JSON page model fetch |

To connect to a live AEM instance, set `NEXT_PUBLIC_AEM_MOCK=false` in `.env.development` and update `NEXT_PUBLIC_AEM_HOST` and `NEXT_GRAPHQL_ENDPOINT` to point to your AEM environment.

---

## Connecting to a Live AEM Instance

1. Set `NEXT_PUBLIC_AEM_MOCK=false` in `.env.development`
2. Update `NEXT_PUBLIC_AEM_HOST` to your AEM author or publish URL
3. Ensure your AEM instance has the WKND shared package installed and GraphQL persisted queries configured
4. Restart the dev server
````
