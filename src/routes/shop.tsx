import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { productsQueryOptions } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";
import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — SportsLuxuryIndia" },
      { name: "description", content: "Browse the full SportsLuxuryIndia edit — luxury, sport, and autographed memorabilia, side by side." },
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
  const [filter, setFilter] = useState<Filter>("all");

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
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-widest text-ember mb-2">Collection</p>
        <h1 className="text-display text-6xl md:text-8xl uppercase leading-none">All Products</h1>
      </header>

      <div className="flex flex-wrap gap-2 mb-10">
        {(["all", "luxury", "sport", "autographed"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 text-xs uppercase tracking-widest rounded-sm border transition ${
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
        <EmptyState message={products.length === 0 ? "No products yet" : "Nothing matches that filter"} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
