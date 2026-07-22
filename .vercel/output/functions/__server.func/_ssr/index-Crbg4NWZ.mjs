import { W as jsxRuntimeExports, r as reactExports } from "./server-CZPPjn-5.mjs";
import { L as Link, p as productsQueryOptions, c as createLucideIcon } from "./router-ZAigrvxl.mjs";
import { u as useSuspenseQuery } from "./loader-circle-DsZOph1N.mjs";
import { m as motion, E as EmptyState, P as ProductCard } from "./EmptyState-BFJNLyeE.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
var initQueue = () => {
  if (window.si) return;
  window.si = function a(...params) {
    window.siq = window.siq || [];
    window.siq.push(params);
  };
};
var name = "@vercel/speed-insights";
var version = "2.0.0";
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = "production";
    if (env === "development" || env === "test") ;
  } catch {
  }
  return "production";
}
function isDevelopment() {
  return detectEnvironment() === "development";
}
function getScriptSrc(props) {
  if (props.scriptSrc) {
    return makeAbsolute(props.scriptSrc);
  }
  if (isDevelopment()) ;
  if (props.dsn) {
    return "https://va.vercel-scripts.com/v1/speed-insights/script.js";
  }
  if (props.basePath) {
    return makeAbsolute(`${props.basePath}/speed-insights/script.js`);
  }
  return "/_vercel/speed-insights/script.js";
}
function loadProps(explicitProps, confString) {
  var _a;
  let props = explicitProps;
  if (confString) {
    try {
      props = {
        ...(_a = JSON.parse(confString)) == null ? void 0 : _a.speedInsights,
        ...explicitProps
      };
    } catch {
    }
  }
  const dataset = {
    sdkn: name + (props.framework ? `/${props.framework}` : ""),
    sdkv: version
  };
  if (props.sampleRate) {
    dataset.sampleRate = props.sampleRate.toString();
  }
  if (props.route) {
    dataset.route = props.route;
  }
  if (isDevelopment()) ;
  if (props.dsn) {
    dataset.dsn = props.dsn;
  }
  if (props.endpoint) {
    dataset.endpoint = makeAbsolute(props.endpoint);
  } else if (props.basePath) {
    dataset.endpoint = makeAbsolute(`${props.basePath}/speed-insights/vitals`);
  }
  return {
    src: getScriptSrc(props),
    beforeSend: props.beforeSend,
    dataset
  };
}
function makeAbsolute(url) {
  return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/") ? url : `/${url}`;
}
function injectSpeedInsights(props = {}, confString) {
  var _a;
  if (!isBrowser() || props.route === null) return null;
  initQueue();
  const { beforeSend, src, dataset } = loadProps(props, confString);
  if (document.head.querySelector(`script[src*="${src}"]`)) return null;
  if (beforeSend) {
    (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", beforeSend);
  }
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  for (const [key, value] of Object.entries(dataset)) {
    script.dataset[key] = value;
  }
  script.onerror = () => {
    console.log(
      `[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`
    );
  };
  document.head.appendChild(script);
  return {
    setRoute: (route) => {
      script.dataset.route = route ?? void 0;
    }
  };
}
function getBasePath() {
  if (typeof process === "undefined" || typeof process.env === "undefined") {
    return void 0;
  }
  return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function getConfigString() {
  if (typeof process === "undefined" || typeof process.env === "undefined") {
    return void 0;
  }
  return process.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
function SpeedInsights(props) {
  reactExports.useEffect(() => {
    var _a;
    if (props.beforeSend) {
      (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
  }, [props.beforeSend]);
  const setScriptRoute = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!setScriptRoute.current) {
      const script = injectSpeedInsights(
        {
          framework: props.framework ?? "react",
          basePath: props.basePath ?? getBasePath(),
          ...props
        },
        props.configString ?? getConfigString()
      );
      if (script) {
        setScriptRoute.current = script.setRoute;
      }
    }
  }, [props]);
  reactExports.useEffect(() => {
    if (setScriptRoute.current && props.route) {
      setScriptRoute.current(props.route);
    }
  }, [props.route]);
  return null;
}
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
