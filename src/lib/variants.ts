export function slugifyVariantTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[\/\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getVariantDisplayTitle(
  productTitle: string,
  variantTitles: string[],
  selectedVariantTitle: string,
): string {
  const selected = selectedVariantTitle.trim();
  if (!selected || selected.toLowerCase() === "default title") return productTitle;

  const candidates = variantTitles
    .map((title) => title.trim())
    .filter((title) => title && title.toLowerCase() !== "default title")
    .sort((a, b) => b.length - a.length);

  for (const candidate of candidates) {
    const escaped = candidate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`\\b${escaped}\\b`, "i");

    if (pattern.test(productTitle)) {
      return productTitle.replace(pattern, selected);
    }
  }

  return `${productTitle} - ${selected}`;
}

export function titleIncludesVariant(title: string, variantTitle: string): boolean {
  const titleSlug = slugifyVariantTitle(title);
  const variantSlug = slugifyVariantTitle(variantTitle);

  return variantSlug.length > 0 && titleSlug.includes(variantSlug);
}

export function findProductHandleForVariant(
  products: Array<{ node: { handle: string; title: string } }>,
  currentProduct: { handle: string; title: string },
  variantTitles: string[],
  selectedVariantTitle: string,
): string | undefined {
  const targetTitle = getVariantDisplayTitle(
    currentProduct.title,
    variantTitles,
    selectedVariantTitle,
  );
  const targetTitleSlug = slugifyVariantTitle(targetTitle);
  const variantSlug = slugifyVariantTitle(selectedVariantTitle);

  const exactTitleMatch = products.find(
    (product) => slugifyVariantTitle(product.node.title) === targetTitleSlug,
  );
  if (exactTitleMatch) return exactTitleMatch.node.handle;

  const exactHandleMatch = products.find((product) => product.node.handle === targetTitleSlug);
  if (exactHandleMatch) return exactHandleMatch.node.handle;

  if (titleIncludesVariant(currentProduct.title, selectedVariantTitle)) {
    return currentProduct.handle;
  }

  const baseTokens = slugifyVariantTitle(
    variantTitles.reduce(
      (title, variantTitle) =>
        title.replace(new RegExp(variantTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), ""),
      currentProduct.title,
    ),
  )
    .split("-")
    .filter((token) => token.length > 2);

  const relatedMatches = products
    .filter((product) => {
      const searchable = `${slugifyVariantTitle(product.node.title)}-${product.node.handle}`;
      return variantSlug && searchable.includes(variantSlug);
    })
    .map((product) => {
      const searchable = `${slugifyVariantTitle(product.node.title)}-${product.node.handle}`;
      const score = baseTokens.reduce(
        (total, token) => total + (searchable.includes(token) ? 1 : 0),
        0,
      );
      return { product, score };
    })
    .sort((a, b) => b.score - a.score);

  return relatedMatches[0]?.score ? relatedMatches[0].product.node.handle : undefined;
}

export function isListingVariantProduct(product: {
  node: {
    handle: string;
    title: string;
    variants: { edges: Array<{ node: { title: string; selectedOptions?: Array<{ value: string }> } }> };
  };
}): boolean {
  const searchable = `${slugifyVariantTitle(product.node.title)}-${product.node.handle}`;
  const optionTitles = product.node.variants.edges.flatMap((edge) => [
    edge.node.title,
    ...(edge.node.selectedOptions ?? []).map((option) => option.value),
  ]);

  return optionTitles
    .filter((title) => title && title.toLowerCase() !== "default title")
    .some((title) => searchable.includes(slugifyVariantTitle(title)));
}
