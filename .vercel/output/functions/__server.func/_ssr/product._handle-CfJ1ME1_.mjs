import { r as reactExports, W as jsxRuntimeExports } from "./server-CZPPjn-5.mjs";
import { u as useSuspenseQuery, L as LoaderCircle } from "./loader-circle-DsZOph1N.mjs";
import { a as Route2, u as useCartStore, f as formatPrice, B as Button, S as ShoppingBag, b as productByHandleQueryOptions, c as createLucideIcon, t as toast } from "./router-ZAigrvxl.mjs";
import { A as ArrowLeft } from "./arrow-left-Cym9nbjA.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function ProductPage() {
  const {
    handle
  } = Route2.useParams();
  const {
    data: product
  } = useSuspenseQuery(productByHandleQueryOptions(handle));
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variants = product.variants.edges.map((e) => e.node);
  const [variantId, setVariantId] = reactExports.useState(variants[0]?.id);
  const variant = variants.find((v) => v.id === variantId) ?? variants[0];
  const allImages = product.images.edges.map((e) => e.node);
  const hasMultipleVariants = variants.length > 1;
  const displayImages = hasMultipleVariants && variant.image ? [variant.image] : allImages;
  const [selectedImage, setSelectedImage] = reactExports.useState(variant.image ?? allImages[0] ?? null);
  const scrollContainerRef = reactExports.useRef(null);
  const navigateImage = (direction, e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = displayImages.findIndex((img) => img.url === selectedImage.url);
    if (currentIndex === -1) return;
    let newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) newIndex = displayImages.length - 1;
    if (newIndex >= displayImages.length) newIndex = 0;
    setSelectedImage(displayImages[newIndex]);
    if (scrollContainerRef.current) {
      const button = scrollContainerRef.current.children[newIndex];
      if (button) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  };
  if (!product) return null;
  const wrapped = {
    node: product
  };
  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: wrapped,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });
    toast.success("Added to bag", {
      description: product.title,
      position: "top-center"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.history.back(), className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-6 sm:mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
      " Back"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-transparent rounded-sm flex items-center justify-center group", children: [
          displayImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => navigateImage("left", e), className: "absolute left-2 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border text-foreground rounded-full shadow-sm hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
          selectedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedImage.url, alt: selectedImage.altText ?? product.title, className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-muted-foreground", children: "No image" }),
          displayImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => navigateImage("right", e), className: "absolute right-2 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border text-foreground rounded-full shadow-sm hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" }) })
        ] }),
        displayImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollContainerRef, className: "flex gap-2 overflow-x-auto pb-1 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']", children: displayImages.map((img) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedImage(img), className: `h-16 w-16 shrink-0 overflow-hidden rounded-sm border bg-transparent transition sm:h-20 sm:w-20 ${selectedImage?.url === img.url ? "border-foreground ring-1 ring-foreground" : "border-border opacity-60 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.url, alt: "", className: "h-full w-full object-contain" }) }, img.url)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        product.productType && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2 sm:mb-3", children: product.productType }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-3xl sm:text-5xl md:text-6xl uppercase leading-none", children: product.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-6 text-2xl sm:text-3xl text-gold font-semibold", children: formatPrice(variant.price.amount, variant.price.currencyCode, product.description) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line", children: product.description }),
        variants.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 sm:mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Select option" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: variants.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setVariantId(v.id);
            if (v.image) {
              setSelectedImage(v.image);
            } else {
              setSelectedImage(allImages[0] ?? null);
            }
          }, disabled: !v.availableForSale, className: `px-3 sm:px-4 py-2 text-[10px] sm:text-xs uppercase tracking-widest rounded-sm border transition ${v.id === variantId ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"} ${!v.availableForSale ? "opacity-40 line-through" : ""}`, children: v.title }, v.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleAdd, disabled: isLoading || !variant?.availableForSale, size: "lg", className: "mt-8 sm:mt-10 w-full gradient-ember text-ember-foreground hover:opacity-90 font-display tracking-widest uppercase text-sm sm:text-base", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
          "Add to bag"
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ProductPage as component
};
