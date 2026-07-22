import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useCartStore, B as Button, f as formatPrice } from "./router-BWu5p0Ec.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { L as LoaderCircle, P as Plus } from "../_libs/lucide-react.mjs";
function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const node = product.node;
  const variant = node.variants.edges[0]?.node;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const handleAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });
    toast.success("Added to bag", { description: node.title, position: "top-center" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, ease: "easeOut" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$handle", params: { handle: node.handle }, className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-transparent rounded-sm", children: [
          image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image.url,
              alt: image.altText ?? node.title,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest", children: "No image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleAdd,
              disabled: isLoading || !variant,
              size: "sm",
              className: "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 gradient-ember text-ember-foreground hover:opacity-90 font-display uppercase tracking-widest text-xs",
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
                "Add"
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 sm:mt-4 flex items-start justify-between gap-2 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display uppercase tracking-wider text-sm sm:text-base leading-tight truncate", children: node.title }),
            node.productType && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-1 truncate", children: node.productType })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-semibold text-gold whitespace-nowrap", children: formatPrice(price.amount, price.currencyCode, node.description) })
        ] })
      ] })
    }
  );
}
function EmptyState({ message = "No products yet" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-dashed border-border rounded-md py-20 px-8 text-center bg-card/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl uppercase tracking-widest text-muted-foreground", children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-md mx-auto", children: "Try adjusting your filters or check back later for new arrivals." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block mt-6 text-xs uppercase tracking-widest text-ember hover:underline",
        children: "← Back home"
      }
    )
  ] });
}
export {
  EmptyState as E,
  ProductCard as P
};
