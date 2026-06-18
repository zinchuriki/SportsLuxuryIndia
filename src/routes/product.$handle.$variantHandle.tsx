import { createFileRoute, notFound, redirect, useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { productByHandleQueryOptions, productsQueryOptions } from "@/lib/queries";
import { ProductDetailFlipkart } from "@/components/ProductDetailFlipkart";
import { findProductHandleForVariant, slugifyVariantTitle } from "@/lib/variants";

export const Route = createFileRoute("/product/$handle/$variantHandle")({
  loader: async ({ context, params }) => {
    const product = await context.queryClient.ensureQueryData(
      productByHandleQueryOptions(params.handle),
    );
    if (!product) throw notFound();

    const variant = product.variants.edges.find(
      (e) => slugifyVariantTitle(e.node.title) === params.variantHandle,
    )?.node;
    if (!variant) throw notFound();

    const allProducts = await context.queryClient.ensureQueryData(
      productsQueryOptions(undefined, 48),
    );
    const variantTitles = product.variants.edges.map((e) => e.node.title);
    const productHandle = findProductHandleForVariant(
      allProducts,
      product,
      variantTitles,
      variant.title,
    );

    if (productHandle && productHandle !== params.handle) {
      throw redirect({
        to: "/product/$handle",
        params: { handle: productHandle },
        replace: true,
      });
    }

    return product;
  },
  head: ({ loaderData, params }) => {
    const p = loaderData;
    if (!p) return {};
    const variant = p.variants.edges.find(
      (e) => slugifyVariantTitle(e.node.title) === params?.variantHandle,
    )?.node;
    const image = p.images?.edges?.[0]?.node?.url ?? variant?.image?.url;
    const title = `${p.title} - SportsLuxuryIndia`;
    const desc = p.description?.slice(0, 160) ?? "SportsLuxuryIndia product";

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
      links: [{ rel: "canonical", href: `/product/${p.handle}/${params?.variantHandle}` }],
    };
  },
  component: VariantProductPage,
});

function VariantProductPage() {
  const { handle, variantHandle } = Route.useParams();
  const navigate = useNavigate({ from: "/product/$handle/$variantHandle" });
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
      selectedVariantHandle={variantHandle}
      onBack={handleBack}
      onSelectVariant={handleSelectVariant}
    />
  );
}
