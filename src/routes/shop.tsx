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
    }
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
  loader: ({ context, deps }) => context.queryClient.ensureQueryData(productsQueryOptions(deps.q, 48)),
  component: ShopPage,
});

type Filter = "all" | "luxury" | "sport" | "autographed";

function ShopPage() {
  const { q } = Route.useLoaderDeps();
  const { data: products } = useSuspenseQuery(productsQueryOptions(q, 48));
  const search = Route.useSearch();
  const category = search.category;
  const initialFilter: Filter =
    category === "luxury" || category === "sport" || category === "autographed" ? category : "all";
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => {
      const tags = (p.node.tags ?? []).map((t) => t.toLowerCase());
      const type = (p.node.productType ?? "").toLowerCase();
      if (filter === "luxury") return tags.includes("luxury") || type.includes("luxury");
      if (filter === "sport") return tags.includes("sport") || type.includes("sport");
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
  }, [products, filter]);

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
