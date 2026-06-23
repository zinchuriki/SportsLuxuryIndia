import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { productsQueryOptions } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";
import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): { category?: string; q?: string } => {
    return {
      category: search.category as string | undefined,
      q: search.q as string | undefined,
    };
  },
  loaderDeps: ({ search }) => ({ q: search.q }),
  head: () => ({
    meta: [
      { title: "Shop — SportsLuxuryIndia" },
      {
        name: "description",
        content:
          "Browse the full SportsLuxuryIndia edit — luxury, sport, and autographed memorabilia, side by side.",
      },
      { property: "og:title", content: "Shop — SportsLuxuryIndia" },
      { property: "og:description", content: "Browse the full SportsLuxuryIndia edit." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  loader: ({ context, deps }) =>
    context.queryClient.ensureQueryData(productsQueryOptions(deps.q, 48)),
  component: ShopPage,
});

type Filter = "all" | "luxury" | "sport" | "autographed";

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
      else
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(query: string, text: string): boolean {
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
  const { q } = Route.useLoaderDeps();
  // Fetch a larger batch of products to perform frontend filtering instead of relying on Shopify's strict backend search
  const { data: products } = useSuspenseQuery(productsQueryOptions(undefined, 250));
  const search = Route.useSearch();
  let category = search.category?.toLowerCase();
  if (category === "sports") category = "sport";
  const initialFilter: Filter =
    category === "luxury" || category === "sport" || category === "autographed"
      ? (category as Filter)
      : "all";
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const filtered = useMemo(() => {
    let result = products;

    if (q) {
      result = result.filter((p) =>
        fuzzyMatch(
          q,
          p.node.title + " " + (p.node.productType || "") + " " + (p.node.tags?.join(" ") || ""),
        ),
      );
    }

    if (filter !== "all") {
      result = result.filter((p) => {
        const tags = (p.node.tags ?? []).map((t) => t.toLowerCase());
        const type = (p.node.productType ?? "").toLowerCase();
        if (filter === "luxury") return tags.includes("luxury") || type.includes("luxury");
        if (filter === "sport")
          return tags.includes("sport") || tags.includes("sports") || type.includes("sport");
        if (filter === "autographed")
          return (
            tags.includes("autographed") ||
            tags.includes("autograph") ||
            tags.includes("signed") ||
            tags.includes("memorabilia") ||
            type.includes("autograph") ||
            type.includes("memorabilia")
          );
        return true;
      });
    }

    return result;
  }, [products, filter, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-4 sm:mb-6"
      >
        <ArrowLeft className="w-3 h-3" /> Back
      </Link>
      <header className="mb-8 sm:mb-12">
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2">
          {search.q ? "Search Results" : "Collection"}
        </p>
        <h1 className="text-display text-4xl sm:text-6xl md:text-8xl uppercase leading-none truncate">
          {search.q ? `"${search.q}"` : "All Products"}
        </h1>
      </header>

      <div className="flex flex-wrap gap-2 mb-6 sm:mb-10">
        {(["all", "luxury", "sport", "autographed"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 sm:px-5 py-2 text-[10px] sm:text-xs uppercase tracking-widest rounded-sm border transition ${
              filter === f
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          message={products.length === 0 ? "No products yet" : "Nothing matches that filter"}
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
