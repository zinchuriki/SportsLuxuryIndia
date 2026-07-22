import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { R as Route$4, p as productsQueryOptions } from "./router-BWu5p0Ec.mjs";
import { E as EmptyState, P as ProductCard } from "./EmptyState-Bo0P93_2.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array.from({
    length: b.length + 1
  }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
      else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}
function fuzzyMatch(query, text) {
  const q = query.toLowerCase().trim();
  const t = text.toLowerCase();
  if (t.includes(q)) return true;
  const qWords = q.split(/\s+/).filter(Boolean);
  if (qWords.length === 0) return true;
  const tWords = t.split(/[\s,.\-_]+/).filter(Boolean);
  return qWords.every((qw) => {
    if (tWords.some((tw) => tw.includes(qw))) return true;
    const maxDist = qw.length > 5 ? 2 : qw.length > 3 ? 1 : 0;
    return tWords.some((tw) => levenshtein(qw, tw) <= maxDist);
  });
}
function ShopPage() {
  const {
    q
  } = Route$4.useLoaderDeps();
  const {
    data: products
  } = useSuspenseQuery(productsQueryOptions(void 0, 250));
  const search = Route$4.useSearch();
  let category = search.category?.toLowerCase();
  if (category === "sports") category = "sport";
  const initialFilter = category === "luxury" || category === "sport" || category === "autographed" ? category : "all";
  const [filter, setFilter] = reactExports.useState(initialFilter);
  const filtered = reactExports.useMemo(() => {
    let result = products;
    if (q) {
      result = result.filter((p) => fuzzyMatch(q, p.node.title + " " + (p.node.productType || "") + " " + (p.node.tags?.join(" ") || "")));
    }
    if (filter !== "all") {
      result = result.filter((p) => {
        const tags = (p.node.tags ?? []).map((t) => t.toLowerCase());
        const type = (p.node.productType ?? "").toLowerCase();
        if (filter === "luxury") return tags.includes("luxury") || type.includes("luxury");
        if (filter === "sport") return tags.includes("sport") || tags.includes("sports") || type.includes("sport");
        if (filter === "autographed") return tags.includes("autographed") || tags.includes("autograph") || tags.includes("signed") || tags.includes("memorabilia") || type.includes("autograph") || type.includes("memorabilia");
        return true;
      });
    }
    return result;
  }, [products, filter, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-4 sm:mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
      " Back"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-8 sm:mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2", children: search.q ? "Search Results" : "Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-display text-4xl sm:text-6xl md:text-8xl uppercase leading-none truncate", children: search.q ? `"${search.q}"` : "All Products" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6 sm:mb-10", children: ["all", "luxury", "sport", "autographed"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-3 sm:px-5 py-2 text-[10px] sm:text-xs uppercase tracking-widest rounded-sm border transition ${filter === f ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"}`, children: f }, f)) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: products.length === 0 ? "No products yet" : "Nothing matches that filter" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.node.id)) })
  ] });
}
export {
  ShopPage as component
};
