import { createFileRoute } from "@tanstack/react-router";
import { Star, Target, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sports Luxury" },
      {
        name: "description",
        content: "Learn about Sports Luxury, our mission, vision, and founder Rahul Sharma.",
      },
      { property: "og:title", content: "About Us — Sports Luxury" },
      {
        property: "og:description",
        content: "Bridging the gap between dreams and reality in sports luxury.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:py-32">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-20 md:mb-32 flex flex-col items-center">
        <h1 className="text-display text-5xl md:text-7xl uppercase tracking-widest text-foreground">
          Welcome to
          <br />
          <span className="text-ember">Sports Luxury</span>
        </h1>
        <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm md:text-base font-medium">
          By Rahul Sharma
        </p>
        <div className="pt-8">
          <img src="/logo.png" alt="Sports Luxury Logo" className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 lg:order-1 space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At <strong className="text-foreground font-medium">Sports Luxury</strong>, we believe
            that aspiration should never be limited by affordability. Our vision is simple yet
            powerful — to make luxury and premium sports experiences accessible to every
            middle-class dreamer who has always desired to own and experience the best the world has
            to offer.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Founded by <strong className="text-foreground font-medium">Rahul Sharma</strong>, a
            seasoned banker with over 20 years of industry experience, Sports Luxury is built on
            strong foundations of expertise, passion, and purpose. Rahul holds an MBA in Finance and
            Marketing and is a University Gold Medalist in B.Com from the prestigious Delhi
            University, bringing both academic excellence and deep professional insight into the
            brand.
          </p>
        </div>
        <div className="order-1 lg:order-2 relative group flex justify-center">
          <div className="absolute -inset-4 bg-gradient-to-br from-ember/20 to-india/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
          <img
            src="/rahul-sharma.jpeg"
            alt="Rahul Sharma, Founder of Sports Luxury"
            className="w-full max-w-md h-auto rounded-2xl object-cover shadow-2xl relative z-10 border border-border/50"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
            }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-32">
        {/* Vision */}
        <div className="space-y-8 p-10 bg-muted/30 rounded-3xl border border-border/50 hover:bg-muted/50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-ember/10 flex items-center justify-center text-ember">
            <Star className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-display uppercase tracking-wider text-foreground">
            Our Vision
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Sports Luxury is more than a brand — it is a movement to bridge the gap between dreams
              and reality. We aim to empower individuals who aspire to own:
            </p>
            <ul className="space-y-4">
              {[
                "Premium global brands",
                "High-quality sports equipment",
                "Exclusive celebrity-autographed items",
                "Rare celebrity-used products",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember shrink-0"></span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-medium text-foreground/80 italic border-l-4 border-ember pl-4">
              All at prices that make these dreams achievable.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="space-y-8 p-10 bg-muted/30 rounded-3xl border border-border/50 hover:bg-muted/50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-india/10 flex items-center justify-center text-india">
            <Target className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-display uppercase tracking-wider text-foreground">
            Our Mission
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Our mission is to:</p>
            <ul className="space-y-4">
              {[
                "Make luxury and sports affordable",
                "Enable access to aspirational products for every passionate individual",
                "Build trust through authenticity and quality",
                "Deliver happiness by fulfilling long-awaited wishlists",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-india shrink-0"></span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bigger Dream */}
      <div className="text-center max-w-4xl mx-auto space-y-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-ember to-transparent opacity-50 rounded-full"></div>
        <div className="pt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border text-foreground shadow-sm mb-8">
            <Globe className="w-8 h-8 opacity-80" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-widest text-foreground mb-8">
            Our Bigger Dream
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-12">
            From India to the world, Sports Luxury envisions becoming one of the largest and most
            trusted brands in the sports and luxury market globally. We are committed to showcasing
            India’s entrepreneurial strength while serving customers across borders with pride and
            excellence.
          </p>

          <div className="inline-block px-8 py-5 rounded-full bg-muted/50 border border-border shadow-sm">
            <p className="text-lg md:text-xl text-foreground font-medium tracking-wide flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Because every dream deserves to be lived, not just imagined.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
