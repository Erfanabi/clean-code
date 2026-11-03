import { describe, expect, it } from 'vitest';
import { getVisibleProducts, type Product, type ProductListOptions } from './visible-products.clean';

const product = (overrides: Partial<Product> & Pick<Product, 'id'>): Product => ({
  priceInToman: 100_000,
  stockQuantity: 5,
  isDeleted: false,
  isMembersOnly: false,
  ...overrides,
});

const defaultOptions: ProductListOptions = { includeOutOfStock: false, sortByPrice: 'none' };
const ids = (products: readonly Product[]) => products.map((p) => p.id);

describe('getVisibleProducts', () => {
  it('hides deleted products', () => {
    const products = [product({ id: 'a' }), product({ id: 'b', isDeleted: true })];
    expect(ids(getVisibleProducts(products, null, defaultOptions))).toEqual(['a']);
  });

  it('hides out-of-stock products unless asked to include them', () => {
    const products = [product({ id: 'a', stockQuantity: 0 })];
    expect(getVisibleProducts(products, null, defaultOptions)).toEqual([]);
    expect(
      ids(getVisibleProducts(products, null, { ...defaultOptions, includeOutOfStock: true })),
    ).toEqual(['a']);
  });

  it('shows members-only products to members but not to guests', () => {
    const products = [product({ id: 'vip', isMembersOnly: true })];
    expect(getVisibleProducts(products, null, defaultOptions)).toEqual([]);
    expect(ids(getVisibleProducts(products, { isMember: true }, defaultOptions))).toEqual(['vip']);
  });

  it('sorts by price without mutating the input', () => {
    const products = [
      product({ id: 'mid', priceInToman: 200 }),
      product({ id: 'low', priceInToman: 100 }),
      product({ id: 'high', priceInToman: 300 }),
    ];
    const sorted = getVisibleProducts(products, null, {
      ...defaultOptions,
      sortByPrice: 'highest-first',
    });
    expect(ids(sorted)).toEqual(['high', 'mid', 'low']);
    expect(ids(products)).toEqual(['mid', 'low', 'high']);
  });
});
