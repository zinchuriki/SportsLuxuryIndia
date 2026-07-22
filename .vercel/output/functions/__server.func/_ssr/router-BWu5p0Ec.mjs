import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, q as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, O as Outlet, d as useRouterState, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, T as Trigger, C as Close, P as Portal, a as Content, b as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as create, p as persist, a as createJSONStorage } from "../_libs/zustand.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { M as Menu, S as Search, X, a as ShoppingBag, T as Trash2, b as Minus, P as Plus, c as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const appCss = "/assets/styles-CLpEL3Qp.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatPrice(amount, currencyCode, description) {
  const numPrice = Number.parseFloat(amount);
  if (numPrice === 0 && description) {
    const rangeRegex = /(?:[$€£¥₹]|USD|EUR|GBP|JPY|INR)\s*[\d,]+(?:\.\d+)?\s*(?:-|to)\s*(?:[$€£¥₹]|USD|EUR|GBP|JPY|INR)?\s*[\d,]+(?:\.\d+)?/i;
    const match = description.match(rangeRegex);
    if (match) {
      return match[0];
    }
    const singleRegex = /(?:[$€£¥₹]|USD|EUR|GBP|JPY|INR)\s*[\d,]+(?:\.\d+)?/i;
    const singleMatch = description.match(singleRegex);
    if (singleMatch) {
      return singleMatch[0];
    }
  }
  return `${currencyCode} ${numPrice.toFixed(2)}`;
}
const Sheet = Root;
const SheetTrigger = Trigger;
const SheetClose = Close;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const WHATSAPP_NUMBER = "919711009880";
function generateWhatsAppMessage(items) {
  if (items.length === 0) return "";
  const lines = items.map((item, i) => {
    const name = item.product.node.title;
    const variant = item.selectedOptions.map((o) => o.value).join(" / ");
    const qty = item.quantity;
    const price = `${item.price.currencyCode} ${parseFloat(item.price.amount).toFixed(2)}`;
    return `${i + 1}. ${name}${variant ? ` (${variant})` : ""} — Qty: ${qty} @ ${price}`;
  });
  const total = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || "INR";
  const message = `Hello SportsLuxuryIndia! %0A%0AI'd like to place an order:%0A%0A${lines.join("%0A")}%0A%0A*Total: ${currency} ${total.toFixed(2)}*%0A%0APlease confirm availability and payment details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.variantId === item.variantId);
        if (existingItem) {
          const newQuantity = existingItem.quantity + item.quantity;
          set({
            items: items.map(
              (i) => i.variantId === item.variantId ? { ...i, quantity: newQuantity } : i
            )
          });
        } else {
          set({ items: [...items, { ...item, lineId: null }] });
        }
      },
      updateQuantity: (variantId, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          set({ items: items.filter((i) => i.variantId !== variantId) });
          return;
        }
        set({
          items: items.map((i) => i.variantId === variantId ? { ...i, quantity } : i)
        });
      },
      removeItem: (variantId) => {
        const { items } = get();
        set({ items: items.filter((i) => i.variantId !== variantId) });
      },
      clearCart: () => set({ items: [] }),
      getWhatsAppOrderUrl: () => generateWhatsAppMessage(get().items)
    }),
    {
      name: "shopify-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items })
    }
  )
);
function CartDrawer() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const { items, updateQuantity, removeItem, getWhatsAppOrderUrl, clearCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + Number.parseFloat(i.price.amount) * i.quantity, 0);
  const handleOrder = () => {
    const url = getWhatsAppOrderUrl();
    if (url) {
      window.open(url, "_blank");
      setIsOpen(false);
      clearCart();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", className: "relative text-foreground hover:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
      totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-ember text-ember-foreground border-0", children: totalItems })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-lg flex flex-col h-full bg-card border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "flex-shrink-0 border-b border-border pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-display text-2xl tracking-wider uppercase", children: "Your Bag" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { className: "text-muted-foreground", children: totalItems === 0 ? "Empty — go pick something" : `${totalItems} item${totalItems !== 1 ? "s" : ""}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col flex-1 pt-6 min-h-0", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-12 w-12 text-muted-foreground mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your bag is empty" })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto pr-2 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: items.map((item) => {
          const variant = item.product.node.variants.edges.find((v) => v.node.id === item.variantId)?.node;
          const image = variant?.image || item.product.node.images?.edges?.[0]?.node;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-4 p-3 border border-border rounded-md bg-secondary/30",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-transparent rounded overflow-hidden flex-shrink-0", children: image && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: image.url,
                    alt: item.product.node.title,
                    className: "w-full h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display uppercase tracking-wide text-sm truncate", children: item.product.node.title }),
                  item.selectedOptions[0]?.value !== "Default Title" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: item.selectedOptions.map((o) => o.value).join(" • ") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mt-2 text-gold", children: formatPrice(item.price.amount, item.price.currencyCode, item.product.node.description) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end justify-between flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "h-6 w-6",
                      onClick: () => removeItem(item.variantId),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "icon",
                        className: "h-6 w-6",
                        onClick: () => updateQuantity(item.variantId, item.quantity - 1),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm", children: item.quantity }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "icon",
                        className: "h-6 w-6",
                        onClick: () => updateQuantity(item.variantId, item.quantity + 1),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                      }
                    )
                  ] })
                ] })
              ]
            },
            item.variantId
          );
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 space-y-4 pt-4 border-t border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-xl uppercase tracking-wider", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-gold", children: totalPrice > 0 ? `${items[0]?.price.currencyCode || "INR"} ${totalPrice.toFixed(2)}` : "TBD" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleOrder,
              size: "lg",
              disabled: items.length === 0,
              className: "w-full bg-green-600 hover:bg-green-700 text-white font-display tracking-widest uppercase text-base",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 mr-2" }),
                "Place Order on WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Your order will be sent via WhatsApp for confirmation & payment." })
        ] })
      ] }) })
    ] })
  ] });
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/shop", label: "All Products" },
  { to: "/contact", label: "Contact" }
];
const shopCategories = [
  { to: "/shop", search: { category: "luxury" }, label: "Luxury Shop" },
  { to: "/shop", search: { category: "sport" }, label: "Sports Shop" },
  { to: "/shop", search: { category: "autographed" }, label: "Autographed Items" }
];
function SiteHeader() {
  const currentPath = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q");
    if (q.trim()) {
      navigate({ to: "/shop", search: { q } });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 sm:gap-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "inline-flex items-center justify-center p-2 -ml-2 rounded-sm hover:bg-muted transition", "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "left", className: "w-72 sm:w-80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "text-left font-display text-lg sm:text-xl tracking-[0.12em] uppercase flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Sports",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Luxury" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-india drop-shadow-sm", children: "India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", alt: "India Flag", width: 20, height: 13, decoding: "async", className: "h-4 sm:h-5 w-auto animate-flag shrink-0 rounded-sm" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-8 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearch, className: "relative mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                name: "q",
                type: "search",
                placeholder: "Search products...",
                className: "w-full h-10 pl-9 pr-4 rounded-md border border-input bg-background/50 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all"
              }
            )
          ] }),
          nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              className: `px-3 py-3 text-sm uppercase tracking-widest rounded-sm transition-colors ${currentPath === item.to ? "text-foreground bg-muted font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
              children: item.label
            }
          ) }, item.to)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 border-t border-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: "Shop by category" }),
          shopCategories.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              search: item.search,
              className: "px-3 py-3 text-sm uppercase tracking-widest rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
              children: item.label
            }
          ) }, item.label))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center justify-center min-w-0 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm sm:text-2xl tracking-[0.12em] sm:tracking-[0.2em] uppercase truncate", children: [
        "Sports",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Luxury" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-india drop-shadow-sm", children: "India" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", alt: "India Flag", width: 20, height: 13, decoding: "async", className: "h-3 sm:h-5 w-auto animate-flag shrink-0 rounded-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearch, className: "relative hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "q",
            type: "search",
            placeholder: "Search...",
            className: "w-32 lg:w-48 h-9 pl-9 pr-3 rounded-full border border-input bg-background/50 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border mt-16 sm:mt-24 bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 grid gap-8 sm:gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl sm:text-3xl tracking-[0.15em] sm:tracking-[0.2em] uppercase", children: [
          "Sports",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Luxury" }),
          "India"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-sm", children: "Where luxury meets performance — and legends sign off. Curated objects, elite sports gear, and authentic autographed memorabilia." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-display uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-foreground", children: "All Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-foreground", children: "Luxury" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-foreground", children: "Sport" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-foreground", children: "Autographed" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-display uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-5 sm:py-6 px-4 text-center text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " SportsLuxuryIndia — Crafted for performance"
    ] })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-[12rem] leading-none text-ember", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl uppercase tracking-widest", children: "Off the map" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This page doesn't exist. Let's get you back on track." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-sm gradient-ember text-ember-foreground px-6 py-3 font-display tracking-widest uppercase text-sm",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-3xl uppercase tracking-widest", children: "Something broke" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try again or head home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-sm gradient-ember text-ember-foreground px-6 py-3 font-display tracking-widest uppercase text-sm",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "rounded-sm border border-border px-6 py-3 font-display tracking-widest uppercase text-sm hover:bg-secondary",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
      {
        name: "description",
        content: "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. Athletic-luxe, built for India."
      },
      { name: "author", content: "SportsLuxuryIndia" },
      { property: "og:site_name", content: "SportsLuxuryIndia" },
      { property: "og:title", content: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
      {
        property: "og:description",
        content: "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. Athletic-luxe, built for India."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
      {
        name: "twitter:description",
        content: "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. Athletic-luxe, built for India."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57f214df-f1d1-4b7c-bb3f-04b5cd7b9254/id-preview-c28328ea--c09cb4a7-bc9b-455a-943b-253834c56438.lovable.app-1781523440059.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57f214df-f1d1-4b7c-bb3f-04b5cd7b9254/id-preview-c28328ea--c09cb4a7-bc9b-455a-943b-253834c56438.lovable.app-1781523440059.png"
      }
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preload", as: "image", href: "/logo.webp", type: "image/webp" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function AppShell() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", theme: "dark" })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, {}) });
}
const SHOPIFY_API_VERSION = "2025-07";
const SHOPIFY_STORE_PERMANENT_DOMAIN = "elevate-ace-net08.myshopify.com";
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = "5def745bdcdab22d03e738b724ace1e3";
async function storefrontApiRequest(query, variables = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({ query, variables })
  });
  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Your store needs an active Shopify billing plan. Visit https://admin.shopify.com to upgrade."
    });
    return null;
  }
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (data.errors)
    throw new Error(
      `Shopify: ${data.errors.map((e) => e.message).join(", ")}`
    );
  return data;
}
const PRODUCT_FIELDS = `
  id title description handle productType tags
  priceRange { minVariantPrice { amount currencyCode } }
  images(first: 20) { edges { node { url altText } } }
  variants(first: 20) {
    edges { node {
      id title
      price { amount currencyCode }
      availableForSale
      selectedOptions { name value }
      image { url altText }
    } }
  }
  options { name values }
`;
const PRODUCTS_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges { node { ${PRODUCT_FIELDS} } }
    }
  }
`;
const PRODUCT_BY_HANDLE_QUERY = `
  query GetProduct($handle: String!) {
    product(handle: $handle) { ${PRODUCT_FIELDS} }
  }
`;
async function fetchProducts(first = 24, query) {
  const data = await storefrontApiRequest(PRODUCTS_QUERY, { first, query });
  return data?.data?.products?.edges ?? [];
}
async function fetchProductByHandle(handle) {
  const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
  return data?.data?.product ?? null;
}
const productsQueryOptions = (query, first = 24) => queryOptions({
  queryKey: ["products", { query, first }],
  queryFn: () => fetchProducts(first, query),
  staleTime: 6e4
});
const productByHandleQueryOptions = (handle) => queryOptions({
  queryKey: ["product", handle],
  queryFn: () => fetchProductByHandle(handle),
  staleTime: 6e4
});
const $$splitComponentImporter$4 = () => import("./shop-DJfAwtMx.mjs");
const Route$4 = createFileRoute("/shop")({
  validateSearch: (search) => {
    return {
      category: search.category,
      q: search.q
    };
  },
  loaderDeps: ({
    search
  }) => ({
    q: search.q
  }),
  head: () => ({
    meta: [{
      title: "Shop — SportsLuxuryIndia"
    }, {
      name: "description",
      content: "Browse the full SportsLuxuryIndia edit — luxury, sport, and autographed memorabilia, side by side."
    }, {
      property: "og:title",
      content: "Shop — SportsLuxuryIndia"
    }, {
      property: "og:description",
      content: "Browse the full SportsLuxuryIndia edit."
    }, {
      property: "og:url",
      content: "/shop"
    }],
    links: [{
      rel: "canonical",
      href: "/shop"
    }]
  }),
  loader: ({
    context,
    deps
  }) => context.queryClient.ensureQueryData(productsQueryOptions(deps.q, 48)),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-BA2El-9D.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Elev8"
    }, {
      name: "description",
      content: "Get in touch with the Elev8 team — concierge, support, and partnerships."
    }, {
      property: "og:title",
      content: "Contact — Elev8"
    }, {
      property: "og:description",
      content: "Get in touch with the Elev8 team."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-HxihrQ8d.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Sports Luxury"
    }, {
      name: "description",
      content: "Learn about Sports Luxury, our mission, vision, and founder Rahul Sharma."
    }, {
      property: "og:title",
      content: "About Us — Sports Luxury"
    }, {
      property: "og:description",
      content: "Bridging the gap between dreams and reality in sports luxury."
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-8Zd9lSyx.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SportsLuxuryIndia — Luxury, Sport & Autographed"
    }, {
      name: "description",
      content: "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. A bold athletic-luxe edit, built for the way you move."
    }, {
      property: "og:title",
      content: "SportsLuxuryIndia — Luxury, Sport & Autographed"
    }, {
      property: "og:description",
      content: "Curated luxury, sport, and authentic autographed memorabilia."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  loader: ({
    context
  }) => context.queryClient.ensureQueryData(productsQueryOptions(void 0, 8)),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./product._handle-Az2KJdgM.mjs");
const Route = createFileRoute("/product/$handle")({
  loader: async ({
    context,
    params
  }) => {
    const product = await context.queryClient.ensureQueryData(productByHandleQueryOptions(params.handle));
    if (!product) throw notFound();
    return product;
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData;
    const image = p?.images?.edges?.[0]?.node?.url;
    const title = p ? `${p.title} — SportsLuxuryIndia` : "Product — SportsLuxuryIndia";
    const desc = p?.description?.slice(0, 160) ?? "SportsLuxuryIndia product";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "product"
      }, ...image ? [{
        property: "og:image",
        content: image
      }, {
        name: "twitter:image",
        content: image
      }] : []],
      links: p ? [{
        rel: "canonical",
        href: `/product/${p.handle}`
      }] : []
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ShopRoute = Route$4.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const ProductHandleRoute = Route.update({
  id: "/product/$handle",
  path: "/product/$handle",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ShopRoute,
  ProductHandleRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$4 as R,
  Route as a,
  productByHandleQueryOptions as b,
  formatPrice as f,
  productsQueryOptions as p,
  router as r,
  useCartStore as u
};
