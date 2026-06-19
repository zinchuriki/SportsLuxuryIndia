## Goal

When a user clicks a variant option (e.g. "Blue") on a product page, the page updates to that variant with its own clean shareable URL. Variants are also discoverable from the shop listing.

## Changes

### 1. New route: `/product/$handle/$variantHandle`

Create `src/routes/product.$handle.$variantHandle.tsx` — a variant-specific product page.

- Loads the same product via `productByHandleQueryOptions(handle)`.
- Resolves the variant by slugifying each variant's title (e.g. "Blue" → `blue`, "Red / Large" → `red-large`) and matching against `variantHandle`. Throws `notFound()` if no match.
- Renders the same UI as the current product page, but:
  - Locked to the matched variant (no `?variant=` query param).
  - `displayImages` always filtered to that variant's image (with fallback to full gallery if the variant has no image assigned in Shopify).
  - Clicking a different variant option calls `navigate({ to: "/product/$handle/$variantHandle", params: { handle, variantHandle: slug(otherVariant.title) } })`.
  - `head()` includes variant-specific title, description, og:image (variant image), and canonical `/product/<handle>/<variantSlug>`.

### 2. Update `src/routes/product.$handle.tsx`

- Remove the `?variant=` search-param plumbing (`validateSearch`, `useSearch`, query-based filtering).
- Show the full gallery and the product's default/first variant.
- Variant buttons navigate to `/product/$handle/$variantHandle` (the new route) instead of mutating a search param.
- Keep "Add to bag" using the currently displayed variant.

### 3. Shared helper

Add a tiny `slugifyVariantTitle(title: string)` util (in `src/lib/shopify.ts` or a new `src/lib/variants.ts`) used by both routes so slugs stay consistent. Rule: lowercase, replace `/` and whitespace with `-`, strip non `[a-z0-9-]`, collapse repeats.

### 4. Shop search includes variants

In `src/routes/shop.tsx`, extend the existing search/filter logic so a query like "blue" also matches a product when any of its `variants.edges[].node.selectedOptions[].value` (or variant title) contains the term. The grid still renders one card per product — but matching by variant means searching "blue" surfaces products that have a Blue variant. The product card links to `/product/$handle/$variantHandle` for the matched variant when the search term matched a specific variant (so clicking the result lands directly on Blue); otherwise links to `/product/$handle` as today.

## Notes

- The legacy `?variant=<id>` URLs become unused. They'll still render the base product page (search param is just ignored) so old links don't 404, but the canonical URLs are now the new path-based ones.
- No Shopify Admin changes required. Variant-image filtering still depends on the merchant assigning images to variants; behavior falls back gracefully when they haven't.
- No changes to cart, checkout, or contact page.
