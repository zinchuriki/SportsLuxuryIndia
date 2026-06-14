import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.2em] uppercase">
            Sports<span className="text-ember">Luxury</span>India
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Where luxury meets performance — and legends sign off. Curated objects, elite sports gear, and authentic autographed memorabilia.
          </p>
        </div>
        <div>
          <h4 className="text-display uppercase tracking-widest text-sm mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Luxury</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Sport</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Autographed</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-display uppercase tracking-widest text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} Elev8 — Crafted for performance
      </div>
    </footer>
  );
}
