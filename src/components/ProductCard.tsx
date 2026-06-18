import { Link } from "@tanstack/react-router";
import { Loader2, Plus, Star } from "lucide-react";
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
  const amount = parseFloat(price.amount);
  const mrp = Number.isNaN(amount) ? null : amount * 1.18;
  const discount = mrp ? Math.round(((mrp - amount) / mrp) * 100) : 0;

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
      <div className="relative aspect-square overflow-hidden bg-white">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? node.title}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#878787] text-xs uppercase tracking-widest">
            No image
          </div>
        )}
        <Button
          onClick={handleAdd}
          disabled={isLoading || !variant}
          size="sm"
          className="absolute bottom-3 right-3 h-9 rounded-sm bg-[#ff9f00] px-3 text-xs font-bold uppercase text-white opacity-0 shadow-md transition-all duration-300 hover:bg-[#fb8c00] group-hover:opacity-100"
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
      <div className="border-t border-[#f0f0f0] bg-white p-3">
        <div className="min-w-0">
          <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-[#212121]">
            {node.title}
          </h3>
          {node.productType && (
            <p className="mt-1 truncate text-xs font-medium text-[#878787]">{node.productType}</p>
          )}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-sm bg-[#388e3c] px-1.5 py-0.5 text-[11px] font-bold text-white">
            4.4 <Star className="h-2.5 w-2.5 fill-current" />
          </span>
          <span className="text-xs font-semibold text-[#878787]">Assured</span>
        </div>
        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <p className="text-base font-semibold text-[#212121]">
            {price.currencyCode} {amount.toFixed(2)}
          </p>
          {mrp && (
            <p className="text-xs text-[#878787] line-through">
              {price.currencyCode} {mrp.toFixed(2)}
            </p>
          )}
          {discount > 0 && <p className="text-xs font-semibold text-[#388e3c]">{discount}% off</p>}
        </div>
        <p className="mt-1 text-xs font-semibold text-[#388e3c]">Free delivery</p>
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
      <Link
        to="/product/$handle"
        params={{ handle: node.handle }}
        className="group block overflow-hidden rounded-sm bg-white text-[#212121] shadow-sm transition hover:shadow-md"
      >
        {inner}
      </Link>
    </motion.div>
  );
}
