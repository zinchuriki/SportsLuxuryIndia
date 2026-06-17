## Goal
On the product detail page, when the user selects a variant (e.g. "Blue"), show only that variant's image(s) instead of all product images.

## Approach
Shopify's Storefront API exposes `variant.image` (the image assigned to each variant in the admin). We'll fetch it and use it to filter the gallery.

## Changes

1. **`src/lib/shopify.ts`** — extend the `variants` selection in `PRODUCT_FIELDS` to also request:
   ```
   image { url altText }
   ```
   and add the matching `image` field to the `ShopifyProduct.variants` TypeScript type.

2. **`src/routes/product.$handle.tsx`**
   - Derive `displayImages`:
     - If the selected variant has an `image`, find that image in the product's `images` list (match by URL) and show only that one (plus any other images sharing the same variant assignment if present). If no match, fall back to `[variant.image]`.
     - If the variant has no image assigned, fall back to all product images (current behavior).
   - Reset `imgIdx` to `0` whenever `variantId` changes (via `useEffect` on `variantId`) so we don't index out of bounds after switching variants.
   - Render the main image and thumbnails from `displayImages` instead of `images`.

## Notes
- This relies on the merchant assigning images to variants in Shopify Admin. If a variant has no image attached, we keep showing all product images — there is no reliable way to filter by color name alone.
- No changes needed to the shop grid, cart, or checkout.
