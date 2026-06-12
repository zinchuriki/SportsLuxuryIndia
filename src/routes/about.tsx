import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elev8" },
      { name: "description", content: "Elev8 is a curated marketplace where luxury heritage meets athletic performance." },
      { property: "og:title", content: "About — Elev8" },
      { property: "og:description", content: "Where luxury heritage meets athletic performance." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs uppercase tracking-widest text-ember mb-4">Our Story</p>
      <h1 className="text-display text-6xl md:text-8xl uppercase leading-none">
        Luxury for the<br />
        <span className="text-ember">athlete in motion.</span>
      </h1>

      <div className="mt-16 grid md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
        <p>
          Elev8 was built for the in-between — the people who don't choose between a hand-stitched leather weekender
          and a carbon-fiber running shoe. They want both. They use both. Sometimes in the same day.
        </p>
        <p>
          We curate from the workshops behind the icons and the labs behind the records. Every piece is chosen by hand,
          tested in motion, and held to a single standard: it has to earn its place in your life.
        </p>
      </div>

      <div className="mt-20 border-t border-border pt-12 grid md:grid-cols-3 gap-10">
        {[
          { n: "12+", l: "Heritage makers" },
          { n: "100%", l: "Lifetime guarantee" },
          { n: "0", l: "Filler products" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-display text-6xl text-ember">{s.n}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
