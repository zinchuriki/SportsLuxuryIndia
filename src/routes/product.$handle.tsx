import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { productByHandleQueryOptions, productsQueryOptions } from "@/lib/queries";
import { ProductDetailFlipkart } from "@/components/ProductDetailFlipkart";
import { findProductHandleForVariant } from "@/lib/variants";

export const Route = createFileRoute("/product/$handle")({
  loader: async ({ context, params }) => {
    const product = await context.queryClient.ensureQueryData(
      productByHandleQueryOptions(params.handle),
    );
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
        ...(image
          ? [
              { property: "og:image", content: image },
              { name: "twitter:image", content: image },
            ]
          : []),
      ],
      links: p ? [{ rel: "canonical", href: `/product/${p.handle}` }] : [],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const navigate = useNavigate({ from: "/product/$handle" });
  const { data: product } = useSuspenseQuery(productByHandleQueryOptions(handle));
  const { data: allProducts } = useSuspenseQuery(productsQueryOptions(undefined, 48));

  const variants = product!.variants.edges.map((e) => e.node);

  if (!product) return null;
  const variantTitles = variants.map((v) => v.title);

  const handleBack = () => {
    navigate({ to: "/shop" });
  };

  const handleSelectVariant = (v: (typeof variants)[number]) => {
    const productHandle = findProductHandleForVariant(allProducts, product, variantTitles, v.title);
    if (!productHandle) return;

    navigate({
      to: "/product/$handle",
      params: { handle: productHandle },
      replace: true,
    });
  };

  return (
    <ProductDetailFlipkart
      product={product}
      allProducts={allProducts}
      onBack={handleBack}
      onSelectVariant={handleSelectVariant}
    />
  );
}
