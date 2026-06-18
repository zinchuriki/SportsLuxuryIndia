import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { productsQueryOptions } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";
import { EmptyState } from "@/components/EmptyState";
import { isListingVariantProduct } from "@/lib/variants";

export const Route = createFileRoute("/shop")({
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
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions(undefined, 48)),
  component: ShopPage,
});

type Filter = "all" | "luxury" | "sport" | "autographed";

function ShopPage() {
  const { data: products } = useSuspenseQuery(productsQueryOptions(undefined, 48));
  const search = useSearch({ from: "/shop" }) as { category?: string };
  const category = search.category;
  const initialFilter: Filter =
    category === "luxury" || category === "sport" || category === "autographed" ? category : "all";
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const listingProducts = products.filter((p) => !isListingVariantProduct(p));
    const byFilter = listingProducts.filter((p) => {
      if (filter === "all") return true;
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

    if (!q) return byFilter;

    return byFilter
      .filter((p) => {
        const node = p.node;
        const inTitle = node.title.toLowerCase().includes(q);
        const inDesc = (node.description ?? "").toLowerCase().includes(q);
        const inVariant = node.variants.edges.some((e) => {
          const v = e.node;
          if (v.title.toLowerCase().includes(q)) return true;
          return v.selectedOptions?.some((o) => o.value.toLowerCase().includes(q));
        });
        return inTitle || inDesc || inVariant;
      });
  }, [products, filter, query]);

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
          Collection
        </p>
        <h1 className="text-display text-4xl sm:text-6xl md:text-8xl uppercase leading-none">
          All Products
        </h1>
      </header>

      <div className="mb-6 sm:mb-8 relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products or variants (e.g. blue)"
          className="w-full pl-10 pr-3 py-2 bg-secondary border border-border rounded-sm text-sm focus:outline-none focus:border-ember"
        />
      </div>

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
          {filtered.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
