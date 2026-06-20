import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CartDrawer } from "./CartDrawer";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "All Products" },
  { to: "/contact", label: "Contact" },
] as const;

const shopCategories = [
  { to: "/shop", search: { category: "luxury" }, label: "Luxury Shop" },
  { to: "/shop", search: { category: "sport" }, label: "Sports Shop" },
  { to: "/shop", search: { category: "autographed" }, label: "Autographed Items" },
] as const;

export function SiteHeader() {
  const currentPath = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex items-center justify-center p-2 -ml-2 rounded-sm hover:bg-muted transition" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:w-80">
              <SheetHeader>
                <SheetTitle className="text-left font-display text-lg sm:text-xl tracking-[0.12em] uppercase flex items-center gap-2">
                  <span>Sports<span className="text-ember">Luxury</span><span className="text-india drop-shadow-sm">India</span></span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="h-4 sm:h-5 w-auto animate-flag shrink-0 rounded-sm" />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className={`px-3 py-3 text-sm uppercase tracking-widest rounded-sm transition-colors ${
                        currentPath === item.to
                          ? "text-foreground bg-muted font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="my-3 border-t border-border" />
                <p className="px-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Shop by category</p>
                {shopCategories.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      to={item.to}
                      search={item.search}
                      className="px-3 py-3 text-sm uppercase tracking-widest rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link to="/" className="flex items-center justify-center min-w-0 gap-2">
          <span className="font-display text-sm sm:text-2xl tracking-[0.12em] sm:tracking-[0.2em] uppercase truncate">
            Sports<span className="text-ember">Luxury</span><span className="text-india drop-shadow-sm">India</span>
          </span>
          <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="h-3 sm:h-5 w-auto animate-flag shrink-0 rounded-sm" />
        </Link>

        <CartDrawer />
      </div>
    </header>
  );
}
