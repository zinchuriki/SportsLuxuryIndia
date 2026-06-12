# Athletic-Luxe E-Commerce Store

A mixed curated catalog blending luxury and sports products, with a bold athletic-luxe aesthetic and a real Shopify-powered checkout.

## 1. Enable Shopify (new development store)
- Call the Shopify enable flow to provision a new development store (free to build on; 30-day trial begins only when you claim it; a paid Shopify plan is required to sell live).
- After creation, offer the "Claim Store" step so you can start the trial whenever you're ready.
- All product, cart, and checkout data will be powered by Shopify; the storefront UI is built fully custom in Lovable.

## 2. Seed the curated catalog
Create starter products across both worlds so the store feels alive on day one:
- Luxury: a signature watch, leather weekender, designer sneaker, fragrance, sunglasses.
- Sports: performance running shoe, premium yoga set, carbon road bike accessory, tennis racket, training apparel.
- Each product gets multiple variants where relevant (size/color), high-quality imagery, and editorial copy.
- Organized into two top-level collections (Luxury, Sport) plus a "Crossover" featured collection for the athletic-luxe hero pieces.

## 3. Visual design — Bold Athletic-Luxe
- Deep charcoal/near-black base with a single high-energy accent (ember/electric coral) and metallic gold highlights for the luxury side.
- Oversized condensed display type paired with a clean modern sans for body.
- High-contrast hero with kinetic motion (marquee, parallax product reveal), oversized product imagery, asymmetric grids, dramatic shadows and subtle grain.
- Semantic design tokens in `src/styles.css` (no hardcoded colors in components); shadcn variants extended for the look.

## 4. Storefront routes (each a real TanStack route with its own SEO metadata)
- `/` — Home: kinetic hero, dual-world split (Luxury / Sport), featured Crossover collection, brand story strip, newsletter.
- `/shop` — All products grid with filters (collection, price, size).
- `/collections/$handle` — Luxury, Sport, Crossover collection pages.
- `/products/$handle` — Product detail: gallery, variant picker, add-to-cart, related products.
- `/cart` — Cart drawer + dedicated cart page; "Checkout" hands off to Shopify-hosted checkout.
- `/about` — Brand story.
- `/contact` — Contact page.

## 5. Cart & checkout
- Persistent client cart synced to Shopify Storefront API.
- Mini-cart drawer accessible from the header.
- Checkout button redirects to Shopify's secure hosted checkout (handles payments, taxes, shipping).

## Technical notes
- TanStack Start file-based routes under `src/routes/`; root layout stays in `__root.tsx`.
- Shopify Storefront API used via the integration that's wired up after enabling — product/collection/cart fetching happens in route loaders via `ensureQueryData` + `useSuspenseQuery`.
- Design tokens (colors, gradients, shadows, fonts) defined in `src/styles.css`; components use semantic classes only.
- Motion via `framer-motion` for the hero and section reveals.
- Each route defines its own `head()` meta (title, description, og:title, og:description); product/collection routes derive `og:image` from loader data.

## What I need from you before building
Approve this plan, then I'll trigger the Shopify enable flow. After the store is created I'll offer the Claim step and start seeding products and building the storefront.
