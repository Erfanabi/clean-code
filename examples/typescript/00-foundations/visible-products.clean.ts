// Lesson 00-04 — Readability (clean version)
export interface Product {
  readonly id: string;
  readonly priceInToman: number;
  readonly stockQuantity: number;
  readonly isDeleted: boolean;
  readonly isMembersOnly: boolean;
}

export interface Viewer {
  readonly isMember: boolean;
}

export type PriceSortOrder = 'none' | 'lowest-first' | 'highest-first';

export interface ProductListOptions {
  readonly includeOutOfStock: boolean;
  readonly sortByPrice: PriceSortOrder;
}

export function getVisibleProducts(
  products: readonly Product[],
  viewer: Viewer | null,
  options: ProductListOptions,
): Product[] {
  const visibleProducts = products.filter((product) => isVisibleTo(product, viewer, options));
  return sortByPrice(visibleProducts, options.sortByPrice);
}

function isVisibleTo(product: Product, viewer: Viewer | null, options: ProductListOptions): boolean {
  if (product.isDeleted) return false;

  const isInStock = product.stockQuantity > 0;
  if (!isInStock && !options.includeOutOfStock) return false;

  const viewerIsMember = viewer?.isMember ?? false;
  if (product.isMembersOnly && !viewerIsMember) return false;

  return true;
}

function sortByPrice(products: Product[], order: PriceSortOrder): Product[] {
  switch (order) {
    case 'lowest-first':
      return products.toSorted((a, b) => a.priceInToman - b.priceInToman);
    case 'highest-first':
      return products.toSorted((a, b) => b.priceInToman - a.priceInToman);
    case 'none':
      return products;
  }
}
