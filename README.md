# SportsLuxuryIndia

> Curated luxury objects, elite sports gear, and authentic autographed memorabilia — athletic-luxe, built for India.

## Overview

SportsLuxuryIndia is a full-stack e-commerce storefront that surfaces three distinct product worlds:

| Category | Description |
|---|---|
| **Luxury** | Watches, leather goods, and accessories built to last |
| **Sport** | Performance gear engineered for elite athletes |
| **Autographed** | Authentic signed memorabilia, verified and ready to display |

The site is powered by a **Shopify Storefront API** backend and built with **TanStack Start** for server-side rendering, deploying to **Vercel** via Nitro.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, file-based SSR routing) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + custom design tokens |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) (cart store) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Commerce | [Shopify Storefront API](https://shopify.dev/docs/api/storefront) (GraphQL) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Server Runtime | [Nitro](https://nitro.unjs.io/) (Vercel preset) |
| Analytics | [Vercel Speed Insights](https://vercel.com/docs/speed-insights) |
| Package Manager | [Bun](https://bun.sh/) |

---

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── CartDrawer.tsx   # Slide-out cart with line-item management
│   ├── ProductCard.tsx  # Product grid card with variant support
│   ├── SiteHeader.tsx   # Navigation + cart trigger
│   ├── SiteFooter.tsx   # Footer
│   ├── EmptyState.tsx   # Empty list fallback
│   └── ui/              # shadcn/ui primitives
├── hooks/               # Custom React hooks (e.g. useCartSync)
├── lib/
│   ├── shopify.ts       # Shopify Storefront API client + GraphQL queries
│   ├── queries.ts       # TanStack Query option factories
│   ├── config.server.ts # Server-side environment config
│   ├── variants.ts      # Product variant helpers
│   └── utils.ts         # General utilities (cn, etc.)
├── routes/
│   ├── __root.tsx       # Root layout (header, footer, providers, SEO)
│   ├── index.tsx        # Home page (hero, marquee, category cards, featured)
│   ├── shop.tsx         # Shop page with category filtering
│   ├── product.$handle.tsx # Product detail page
│   ├── about.tsx        # About page
│   └── contact.tsx      # Contact page
├── stores/
│   └── cartStore.ts     # Zustand cart store (persisted)
├── styles.css           # Global styles + design tokens
└── server.ts            # Nitro SSR entry with error handling
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) >= 1.x (or Node.js >= 20 with npm)
- A Shopify store with the Storefront API enabled

### Install dependencies

```bash
bun install
# or
npm install
```

### Environment variables

Create a `.env` file in the project root (or set these in your Vercel dashboard):

```env
# Shopify Storefront API
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
```

> The Shopify store domain and Storefront token are currently hardcoded in
> `src/lib/shopify.ts`. For production, move these to environment variables
> via `src/lib/config.server.ts`.

### Run the development server

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `dev` | Start the local Vite dev server with HMR |
| `build` | Production build (SSR + Nitro bundle) |
| `build:dev` | Development-mode build |
| `preview` | Preview the production build locally |
| `lint` | Run ESLint |
| `format` | Format all files with Prettier |

---

## Deployment

The project is pre-configured to deploy on **Vercel** using the Nitro `vercel` preset.

1. Push to your Git repository.
2. Import the project in the [Vercel dashboard](https://vercel.com/new).
3. Add the required environment variables.
4. Vercel will automatically build and deploy on every push.

---

## Key Features

- **SSR with streaming** — pages are server-rendered via TanStack Start + Nitro for fast initial loads and SEO.
- **Shopify Storefront integration** — products, variants, and cart operations all go through Shopify's GraphQL Storefront API.
- **Persistent cart** — cart state is managed by Zustand and synced with Shopify checkout.
- **Category filtering** — the shop page supports URL-driven filtering by `luxury`, `sport`, and `autographed` categories.
- **Framer Motion animations** — hero, product cards, and section reveals use scroll-aware entrance animations.
- **Responsive design** — fully mobile-first layout with a dedicated mobile navigation drawer.
- **Full SEO metadata** — canonical links, Open Graph, and Twitter Card tags on every route.

---

## License

Private — all rights reserved. © SportsLuxuryIndia.
