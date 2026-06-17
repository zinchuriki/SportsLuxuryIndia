import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Loader2, ShoppingBag, ArrowLeft } from "lucide-react";
import { productByHandleQueryOptions } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$handle")({
  loader: async ({ context, params }) => {
    const product = await context.queryClient.ensureQueryData(productByHandleQueryOptions(params.handle));
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const p = loaderData;
    const image = p?.images?.edges?.[0]?.node?.url;
    const title = p ? `${p.title} — SportsLuxuryIndia` : "Product — SportsLuxuryIndia";
    const desc = p?.description?.slice(0, 160) ?? "SportsLuxuryIndia product";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
      ],
      links: p ? [{ rel: "canonical", href: `/product/${p.handle}` }] : [],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const { data: product } = useSuspenseQuery(productByHandleQueryOptions(handle));
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const variants = product!.variants.edges.map((e) => e.node);
  const [variantId, setVariantId] = useState(variants[0]?.id);
  const variant = variants.find((v) => v.id === variantId) ?? variants[0];
  const images = product!.images.edges.map((e) => e.node);

  const displayImages = useMemo(() => {
    if (variant?.image?.url) {
      const match = images.find((img) => img.url === variant.image!.url);
      return match ? [match] : [variant.image];
    }
    return images;
  }, [variant, images]);

  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => {
    setImgIdx(0);
  }, [variantId]);

  if (!product) return null;

  const wrapped = { node: product } as Parameters<typeof addItem>[0]["product"] & {};

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: wrapped,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to bag", { description: product.title, position: "top-center" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-12">
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-6 sm:mb-8"
      >
        <ArrowLeft className="w-3 h-3" /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="aspect-square overflow-hidden bg-secondary rounded-sm">
            {images[imgIdx] ? (
              <img src={images[imgIdx].url} alt={images[imgIdx].altText ?? product.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
            )}
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-5 gap-2 mt-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`aspect-square overflow-hidden rounded-sm border transition ${i === imgIdx ? "border-ember" : "border-border opacity-60 hover:opacity-100"}`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          {product.productType && (
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-ember mb-2 sm:mb-3">{product.productType}</p>
          )}
          <h1 className="text-display text-3xl sm:text-5xl md:text-6xl uppercase leading-none">{product.title}</h1>
          <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl text-gold font-semibold">
            {variant.price.currencyCode} {parseFloat(variant.price.amount).toFixed(2)}
          </p>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>

          {variants.length > 1 && (
            <div className="mt-6 sm:mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Select option</p>
              <div className="flex flex-wrap gap-2">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariantId(v.id)}
                    disabled={!v.availableForSale}
                    className={`px-3 sm:px-4 py-2 text-[10px] sm:text-xs uppercase tracking-widest rounded-sm border transition ${
                      v.id === variantId
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    } ${!v.availableForSale ? "opacity-40 line-through" : ""}`}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleAdd}
            disabled={isLoading || !variant?.availableForSale}
            size="lg"
            className="mt-8 sm:mt-10 w-full gradient-ember text-ember-foreground hover:opacity-90 font-display tracking-widest uppercase text-sm sm:text-base"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <><ShoppingBag className="w-4 h-4 mr-2" />Add to bag</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
