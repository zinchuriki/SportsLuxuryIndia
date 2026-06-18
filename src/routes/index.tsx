import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { productsQueryOptions } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";
import { EmptyState } from "@/components/EmptyState";
import { isListingVariantProduct } from "@/lib/variants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
      { name: "description", content: "Curated luxury objects, elite sports gear, and authentic autographed memorabilia. A bold athletic-luxe edit, built for the way you move." },
      { property: "og:title", content: "SportsLuxuryIndia — Luxury, Sport & Autographed" },
      { property: "og:description", content: "Curated luxury, sport, and authentic autographed memorabilia." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQueryOptions(undefined, 24)),
  component: Index,
});

const MARQUEE_WORDS = ["Performance", "Luxury", "Precision", "Speed", "Craft", "Power", "Heritage", "Edge"];

function Index() {
  const { data: products } = useSuspenseQuery(productsQueryOptions(undefined, 24));
  const featuredProducts = products.filter((product) => !isListingVariantProduct(product)).slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full gradient-ember blur-[120px] opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full gradient-luxe blur-[140px] opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 md:pt-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8">
              <Sparkles className="w-3 h-3 text-gold" />
              New season · Limited drops
            </div>
            <h1 className="text-display text-[16vw] md:text-[10rem] uppercase leading-[0.85]">
              Move<br />
              <span className="text-ember">Differently.</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
              A curated edit where luxury meets performance. Objects engineered for the way you train, travel, and live —
              with the heft of heritage and the bite of the modern world.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 gradient-ember text-ember-foreground font-display tracking-widest uppercase text-xs sm:text-sm rounded-sm hover:opacity-90 transition"
              >
                Shop the edit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border overflow-hidden bg-card/50">
          <div className="flex animate-marquee whitespace-nowrap py-3 sm:py-4">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span key={i} className="font-display text-lg sm:text-3xl uppercase tracking-[0.25em] sm:tracking-[0.3em] mx-5 sm:mx-8 text-muted-foreground">
                {word} <span className="text-ember mx-3 sm:mx-4">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THREE WORLDS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-24 grid md:grid-cols-3 gap-4 sm:gap-6">
        {[
          {
            label: "Luxury",
            title: "Luxury Shop",
            copy: "Watches, leather, and accessories built once — to last forever.",
            cls: "gradient-luxe text-gold-foreground",
          },
          {
            label: "Sport",
            title: "Sports Shop",
            copy: "Performance gear engineered for athletes who demand the edge.",
            cls: "gradient-ember text-ember-foreground",
          },
          {
            label: "Autographed",
            title: "Autographed Items",
            copy: "Authentic memorabilia — signed, verified, and ready to display.",
            cls: "bg-foreground text-background",
          },
        ].map((w) => (
          <motion.div
            key={w.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden rounded-md p-6 sm:p-10 md:p-14 min-h-[240px] sm:min-h-[360px] flex flex-col justify-end ${w.cls}`}
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] sm:text-xs uppercase tracking-widest opacity-70">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
              {w.label}
            </div>
            <h3 className="text-display text-3xl sm:text-5xl md:text-6xl uppercase leading-none">{w.title}</h3>
            <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base opacity-90">{w.copy}</p>
            <Link
              to="/shop"
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-medium underline-offset-4 hover:underline self-start"
            >
              Explore {w.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-end justify-between mb-8 sm:mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2">The Edit</p>
            <h2 className="text-display text-4xl sm:text-5xl md:text-7xl uppercase">Crossover.</h2>
          </div>
          <Link to="/shop" className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {featuredProducts.length === 0 ? (
          <EmptyState message="The drop hasn't landed yet" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.map((p) => (
              <ProductCard key={p.node.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* BRAND STRIP */}
      <section className="border-t border-border mt-16 sm:mt-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left">
          {[
            { k: "01", t: "Curated, not assembled", c: "Every piece earns its place — no filler, no trend-chasing." },
            { k: "02", t: "Made to be used hard", c: "Lab-tested. Trail-proven. Backed by a lifetime promise." },
            { k: "03", t: "Direct from the maker", c: "We work hand-in-hand with the studios behind the icons." },
          ].map((b) => (
            <div key={b.k}>
              <div className="text-display text-ember text-3xl sm:text-4xl mb-2 sm:mb-3">{b.k}</div>
              <h4 className="text-display uppercase tracking-widest text-base sm:text-lg">{b.t}</h4>
              <p className="text-sm text-muted-foreground mt-2">{b.c}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
