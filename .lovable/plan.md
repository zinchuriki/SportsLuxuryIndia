## Fix Product Image Cropping

### Problem
Product images in the shop grid (`ProductCard`) and product detail page (`product.$handle`) are cropped by `object-cover`, cutting off edges of non-square images.

### Solution
Update both components to use `object-contain` so images scale proportionally and remain fully visible.

#### Changes

**1. `src/components/ProductCard.tsx`**
- Change the product image class from `object-cover` to `object-contain`.
- Keep `group-hover:scale-105` and `overflow-hidden`; with `object-contain` the zoom reveals more detail rather than tightening a crop, so clipping at the container edge is minimal and acceptable.
- The `aspect-[4/5]` container already has `bg-secondary`, which provides a clean background for any letterboxing.

**2. `src/routes/product.$handle.tsx`**
- Change the main product image class from `object-cover` to `object-contain`.
- Change the thumbnail images class from `object-cover` to `object-contain`.
- Add `bg-secondary` to thumbnail containers so any letterboxed space matches the main image container aesthetic.
- The `aspect-square` containers define the frame; `object-contain` ensures the entire image is visible within that frame.

### Verification
- Preview a product with a non-square image (e.g., landscape or portrait orientation) to confirm the full image is visible without cropping.
- Hover over a product card to confirm the zoom effect feels natural.