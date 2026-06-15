import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-16 sm:mt-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 grid gap-8 sm:gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl sm:text-3xl tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            Sports<span className="text-ember">Luxury</span>India
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-sm">
            Where luxury meets performance — and legends sign off. Curated objects, elite sports gear, and authentic autographed memorabilia.
          </p>
        </div>
        <div>
          <h4 className="text-display uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Luxury</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Sport</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Autographed</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-display uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 sm:py-6 px-4 text-center text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} SportsLuxuryIndia — Crafted for performance
      </div>
    </footer>
  );
}
