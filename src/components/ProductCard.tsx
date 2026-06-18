import { Link } from "@tanstack/react-router";
import { Loader2, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const node = product.node;
  const variant = node.variants.edges[0]?.node;
  const image = node.images.edges[0]?.node ?? variant?.image;
  const price = node.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to bag", { description: node.title, position: "top-center" });
  };

  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary rounded-sm">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? node.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
            No image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Button
          onClick={handleAdd}
          disabled={isLoading || !variant}
          size="sm"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 gradient-ember text-ember-foreground hover:opacity-90 font-display uppercase tracking-widest text-xs"
        >
          {isLoading ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <>
              <Plus className="w-3 h-3 mr-1" />
              Add
            </>
          )}
        </Button>
      </div>
      <div className="mt-3 sm:mt-4 flex items-start justify-between gap-2 sm:gap-4">
        <div className="min-w-0">
          <h3 className="font-display uppercase tracking-wider text-sm sm:text-base leading-tight truncate">
            {node.title}
          </h3>
          {node.productType && (
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-1 truncate">
              {node.productType}
            </p>
          )}
        </div>
        <p className="text-sm sm:text-base font-semibold text-gold whitespace-nowrap">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </p>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to="/product/$handle" params={{ handle: node.handle }} className="group block">
        {inner}
      </Link>
    </motion.div>
  );
}
