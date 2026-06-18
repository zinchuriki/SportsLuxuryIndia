import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Heart,
  Loader2,
  MapPin,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Tag,
  Truck,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";
import { findProductHandleForVariant, slugifyVariantTitle } from "@/lib/variants";

type ProductNode = ShopifyProduct["node"];
type ProductVariant = ProductNode["variants"]["edges"][number]["node"];

interface ProductDetailFlipkartProps {
  product: ProductNode;
  allProducts: ShopifyProduct[];
  selectedVariantHandle?: string;
  onBack: () => void;
  onSelectVariant: (variant: ProductVariant) => void;
}

function formatPrice(price: { amount: string; currencyCode: string }) {
  return `${price.currencyCode} ${parseFloat(price.amount).toFixed(2)}`;
}

function getMrp(amount: string) {
  const value = parseFloat(amount);
  if (Number.isNaN(value)) return null;
  return value * 1.18;
}

export function ProductDetailFlipkart({
  product,
  allProducts,
  selectedVariantHandle,
  onBack,
  onSelectVariant,
}: ProductDetailFlipkartProps) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const variants = product.variants.edges.map((e) => e.node);
  const variant =
    variants.find((v) => slugifyVariantTitle(v.title) === selectedVariantHandle) ?? variants[0];
  const variantTitles = variants.map((v) => v.title);

  const gallery = useMemo(() => {
    const seen = new Set<string>();
    return [
      ...product.images.edges.map((e) => e.node),
      ...variants.map((v) => v.image).filter(Boolean),
    ].filter((image): image is { url: string; altText: string | null } => {
      if (!image || seen.has(image.url)) return false;
      seen.add(image.url);
      return true;
    });
  }, [product.images.edges, variants]);

  const displayImage = gallery[activeImageIndex] ?? variant?.image ?? gallery[0];
  const mrp = getMrp(variant?.price.amount ?? "0");
  const discount = mrp ? Math.round(((mrp - parseFloat(variant.price.amount)) / mrp) * 100) : 0;
  const wrapped = { node: product } as Parameters<typeof addItem>[0]["product"] & {};
  const highlights = [
    product.productType ? `Category: ${product.productType}` : "Curated premium product",
    variant?.availableForSale ? "In stock and ready to reserve" : "Currently unavailable",
    "Direct WhatsApp assisted checkout",
    "Securely packed before dispatch",
  ];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product.id, variant?.id]);

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
    <div className="min-h-screen bg-[#f1f3f6] text-[#172337]">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-4 sm:py-5">
        <button
          onClick={onBack}
          className="mb-3 inline-flex items-center gap-2 rounded-sm bg-white px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#2874f0] shadow-sm transition hover:text-[#174ea6]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to shop
        </button>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,47%)_minmax(0,53%)]">
          <section className="bg-white shadow-sm">
            <div className="grid gap-3 p-3 sm:grid-cols-[76px_minmax(0,1fr)] sm:p-4 lg:sticky lg:top-4">
              <div className="order-2 flex gap-2 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">
                {gallery.length > 0 ? (
                  gallery.map((image, index) => (
                    <button
                      key={image.url}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-sm border bg-white transition sm:h-[76px] sm:w-[76px] ${
                        index === activeImageIndex
                          ? "border-[#2874f0] ring-1 ring-[#2874f0]"
                          : "border-[#e0e0e0] hover:border-[#2874f0]"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.altText ?? product.title}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))
                ) : (
                  <div className="h-16 w-16 rounded-sm border border-[#e0e0e0] bg-[#f5f5f5]" />
                )}
              </div>

              <div className="order-1 sm:order-2">
                <div className="relative aspect-square overflow-hidden rounded-sm border border-[#f0f0f0] bg-white">
                  <button className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#878787] shadow-md transition hover:text-[#2874f0]">
                    <Heart className="h-5 w-5" />
                  </button>
                  {displayImage ? (
                    <img
                      src={displayImage.url}
                      alt={displayImage.altText ?? product.title}
                      className="h-full w-full object-contain p-4"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[#878787]">
                      No image
                    </div>
                  )}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Button
                    onClick={handleAdd}
                    disabled={isLoading || !variant?.availableForSale}
                    className="h-12 rounded-sm bg-[#ff9f00] text-sm font-bold uppercase text-white shadow-none hover:bg-[#fb8c00]"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        Add to Bag
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleAdd}
                    disabled={isLoading || !variant?.availableForSale}
                    className="h-12 rounded-sm bg-[#fb641b] text-sm font-bold uppercase text-white shadow-none hover:bg-[#e85b18]"
                  >
                    <Zap className="h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#878787]">
                SportsLuxuryIndia
              </p>
              <h1 className="mt-2 text-xl font-semibold leading-snug text-[#212121] sm:text-2xl">
                {product.title}
              </h1>
              {variant?.title && variant.title.toLowerCase() !== "default title" && (
                <p className="mt-1 text-sm text-[#878787]">{variant.title}</p>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-sm bg-[#388e3c] px-2 py-1 text-xs font-bold text-white">
                  4.4 <Star className="h-3 w-3 fill-current" />
                </span>
                <span className="text-sm font-semibold text-[#878787]">
                  1,284 Ratings & 126 Reviews
                </span>
                <BadgeCheck className="h-4 w-4 text-[#2874f0]" />
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[#388e3c]">Special price</p>
                <div className="mt-1 flex flex-wrap items-end gap-3">
                  <p className="text-3xl font-semibold text-[#212121]">
                    {variant ? formatPrice(variant.price) : "Price unavailable"}
                  </p>
                  {mrp && (
                    <p className="pb-1 text-base text-[#878787] line-through">
                      {variant.price.currencyCode} {mrp.toFixed(2)}
                    </p>
                  )}
                  {discount > 0 && (
                    <p className="pb-1 text-base font-semibold text-[#388e3c]">{discount}% off</p>
                  )}
                </div>
                <p className="mt-1 text-xs text-[#878787]">Inclusive of all taxes</p>
              </div>

              <div className="mt-5 border-t border-[#f0f0f0] pt-5">
                <h2 className="text-base font-semibold text-[#212121]">Available offers</h2>
                <div className="mt-3 space-y-2 text-sm text-[#212121]">
                  {[
                    "Bank Offer: 10% instant discount on select cards",
                    "Partner Offer: Extra savings on prepaid reservations",
                    "Assured packaging for premium collectibles and gear",
                  ].map((offer) => (
                    <p key={offer} className="flex gap-2">
                      <Tag className="mt-0.5 h-4 w-4 shrink-0 text-[#14be47]" />
                      <span>{offer}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {variants.length > 1 && (
              <div className="bg-white p-4 shadow-sm sm:p-6">
                <div className="grid gap-3 sm:grid-cols-[120px_minmax(0,1fr)]">
                  <p className="text-sm font-semibold text-[#878787]">Options</p>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((v) => {
                      const productHandle = findProductHandleForVariant(
                        allProducts,
                        product,
                        variantTitles,
                        v.title,
                      );
                      const isSelected = v.id === variant?.id || productHandle === product.handle;

                      return (
                        <button
                          key={v.id}
                          onClick={() => onSelectVariant(v)}
                          disabled={!productHandle}
                          className={`min-h-11 rounded-sm border px-4 py-2 text-sm font-semibold transition ${
                            isSelected
                              ? "border-[#2874f0] text-[#2874f0]"
                              : "border-[#e0e0e0] text-[#212121] hover:border-[#2874f0]"
                          } ${!productHandle ? "opacity-40 line-through" : ""}`}
                        >
                          {v.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, title: "Delivery", copy: "Fast dispatch after confirmation" },
                { icon: RotateCcw, title: "Returns", copy: "Easy support on eligible orders" },
                { icon: ShieldCheck, title: "Assured", copy: "Verified source and packaging" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-4 shadow-sm">
                  <item.icon className="h-5 w-5 text-[#2874f0]" />
                  <h3 className="mt-3 text-sm font-semibold text-[#212121]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#878787]">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f0f0f0] pb-4">
                <h2 className="text-lg font-semibold text-[#212121]">Product details</h2>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2874f0]">
                  <MapPin className="h-4 w-4" />
                  Check delivery by pincode
                </span>
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
                <div>
                  <h3 className="text-sm font-semibold text-[#212121]">Description</h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#333]">
                    {product.description || "Product information will be updated shortly."}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#212121]">Highlights</h3>
                  <ul className="mt-2 space-y-2 text-sm text-[#333]">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#878787]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
