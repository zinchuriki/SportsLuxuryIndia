import { Link } from "@tanstack/react-router";

export function EmptyState({ message = "No products yet" }: { message?: string }) {
  return (
    <div className="border border-dashed border-border rounded-md py-20 px-8 text-center bg-card/30">
      <div className="font-display text-3xl uppercase tracking-widest text-muted-foreground">
        {message}
      </div>
      <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
        Try adjusting your filters or check back later for new arrivals.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 text-xs uppercase tracking-widest text-ember hover:underline"
      >
        ← Back home
      </Link>
    </div>
  );
}
