import { queryOptions } from "@tanstack/react-query";
import { fetchProductByHandle, fetchProducts } from "@/lib/shopify";

export const productsQueryOptions = (query?: string, first = 24) =>
  queryOptions({
    queryKey: ["products", { query, first }],
    queryFn: () => fetchProducts(first, query),
    staleTime: 60_000,
  });

export const productByHandleQueryOptions = (handle: string) =>
  queryOptions({
    queryKey: ["product", handle],
    queryFn: () => fetchProductByHandle(handle),
    staleTime: 60_000,
  });
