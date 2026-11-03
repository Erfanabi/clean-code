// Lesson 00-04 — Readability (clean version)
export function getVisibleProducts(products, viewer, options) {
  const visibleProducts = products.filter((product) => isVisibleTo(product, viewer, options));
  return sortByPrice(visibleProducts, options.sortByPrice);
}

function isVisibleTo(product, viewer, options) {
  if (product.isDeleted) return false;

  const isInStock = product.stockQuantity > 0;
  if (!isInStock && !options.includeOutOfStock) return false;

  const viewerIsMember = viewer?.isMember ?? false;
  if (product.isMembersOnly && !viewerIsMember) return false;

  return true;
}

function sortByPrice(products, order) {
  switch (order) {
    case 'lowest-first':
      return products.toSorted((a, b) => a.priceInToman - b.priceInToman);
    case 'highest-first':
      return products.toSorted((a, b) => b.priceInToman - a.priceInToman);
    case 'none':
      return products;
    default:
      throw new Error(`Unknown price sort order: ${order}`);
  }
}
