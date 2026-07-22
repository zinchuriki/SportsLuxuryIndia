import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SpeedInsights } from "../_libs/vercel__speed-insights.mjs";
import { u as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { p as productsQueryOptions } from "./router-DbF-rMdo.mjs";
import { E as EmptyState, P as ProductCard } from "./EmptyState-C-8M3bl6.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { h as Sparkles, Z as Zap, i as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const MARQUEE_WORDS = ["Performance", "Luxury", "Precision", "Speed", "Craft", "Power", "Heritage", "Edge"];
function Index() {
  const {
    data: products
  } = useSuspenseQuery(productsQueryOptions(void 0, 8));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-grain", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full gradient-ember blur-[120px] opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full gradient-luxe blur-[140px] opacity-20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 md:pt-32 md:pb-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        ease: "easeOut"
      }, className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-6 sm:mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-gold" }),
            "New season · Limited drops"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-ember" }),
            "100+ Orders Fulfilled"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display text-[16vw] md:text-[8rem] uppercase leading-[0.85]", children: [
              "Move",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Differently." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl", children: "A curated edit where luxury meets performance. Objects engineered for the way you train, travel, and live — with the heft of heritage and the bite of the modern world." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 sm:mt-10 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 gradient-ember text-ember-foreground font-display tracking-widest uppercase text-xs sm:text-sm rounded-sm hover:opacity-90 transition", children: [
              "Shop the edit",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/3 flex justify-center lg:justify-end shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("picture", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("source", { srcSet: "/logo.webp", type: "image/webp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Sports Luxury Logo", width: 600, height: 600, fetchPriority: "high", decoding: "async", className: "w-64 sm:w-80 lg:w-full max-w-md h-auto object-contain drop-shadow-2xl mix-blend-lighten" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border overflow-hidden bg-card/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap py-3 sm:py-4", children: [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg sm:text-3xl uppercase tracking-[0.25em] sm:tracking-[0.3em] mx-5 sm:mx-8 text-muted-foreground", children: [
        word,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember mx-3 sm:mx-4", children: "/" })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-24 grid md:grid-cols-3 gap-4 sm:gap-6", children: [{
      label: "Luxury",
      title: "Luxury Shop",
      copy: "Watches, leather, and accessories built once — to last forever.",
      cls: "gradient-luxe text-gold-foreground"
    }, {
      label: "Sport",
      title: "Sports Shop",
      copy: "Performance gear engineered for athletes who demand the edge.",
      cls: "gradient-ember text-ember-foreground"
    }, {
      label: "Autographed",
      title: "Autographed Items",
      copy: "Authentic memorabilia — signed, verified, and ready to display.",
      cls: "bg-foreground text-background"
    }].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.6
    }, className: `relative overflow-hidden rounded-md p-6 sm:p-10 md:p-14 min-h-[240px] sm:min-h-[360px] flex flex-col justify-end ${w.cls}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] sm:text-xs uppercase tracking-widest opacity-70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 sm:w-4 sm:h-4 inline mr-1" }),
        w.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-3xl sm:text-5xl md:text-6xl uppercase leading-none", children: w.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 sm:mt-4 max-w-md text-sm sm:text-base opacity-90", children: w.copy }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
        category: w.label.toLowerCase()
      }, className: "mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-medium underline-offset-4 hover:underline self-start", children: [
        "Explore ",
        w.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }, w.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8 sm:mb-12 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2", children: "The Edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-4xl sm:text-5xl md:text-7xl uppercase", children: "Crossover." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-xs sm:text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-2", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "The drop hasn't landed yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.node.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border mt-16 sm:mt-24 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left", children: [{
      k: "01",
      t: "Curated, not assembled",
      c: "Every piece earns its place — no filler, no trend-chasing."
    }, {
      k: "02",
      t: "Made to be used hard",
      c: "Lab-tested. Trail-proven. Backed by a lifetime promise."
    }, {
      k: "03",
      t: "Direct from the maker",
      c: "We work hand-in-hand with the studios behind the icons."
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-ember text-3xl sm:text-4xl mb-2 sm:mb-3", children: b.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-display uppercase tracking-widest text-base sm:text-lg", children: b.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: b.c })
    ] }, b.k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedInsights, {})
  ] });
}
export {
  Index as component
};
