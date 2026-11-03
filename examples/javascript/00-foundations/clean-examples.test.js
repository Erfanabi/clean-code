// The JavaScript clean versions must behave exactly like their TypeScript twins.
import { describe, expect, it } from 'vitest';
import { calculateOrderTotal } from './order-total.clean.js';
import { calculateShippingFee } from './shipping-fee.clean.js';
import { getVisibleProducts } from './visible-products.clean.js';
import { buildCustomerReport } from './user-report.clean.js';
import { calculateCartTotal } from './cart-boy-scout.clean.js';

describe('JavaScript clean examples', () => {
  it('calculateOrderTotal applies the tier discount and shipping', () => {
    const order = { items: [{ unitPrice: 200_000, quantity: 1 }], customerTier: 'silver' };
    expect(calculateOrderTotal(order)).toBe(210_000);
  });

  it('calculateOrderTotal fails fast on an unknown tier', () => {
    const order = { items: [], customerTier: 'diamond' };
    expect(() => calculateOrderTotal(order)).toThrow('Unknown customer tier: diamond');
  });

  it('calculateShippingFee rejects an unknown region', () => {
    expect(calculateShippingFee('tehran', 3, 'express')).toBe(90_000);
    expect(() => calculateShippingFee('Tehran', 3, 'express')).toThrow('Unknown shipping region');
  });

  it('getVisibleProducts filters and sorts', () => {
    const products = [
      { id: 'a', priceInToman: 2, stockQuantity: 1, isDeleted: false, isMembersOnly: false },
      { id: 'b', priceInToman: 1, stockQuantity: 1, isDeleted: false, isMembersOnly: false },
      { id: 'c', priceInToman: 3, stockQuantity: 0, isDeleted: false, isMembersOnly: false },
    ];
    const visible = getVisibleProducts(products, null, {
      includeOutOfStock: false,
      sortByPrice: 'lowest-first',
    });
    expect(visible.map((p) => p.id)).toEqual(['b', 'a']);
  });

  it('buildCustomerReport fails fast on an unknown membership level', () => {
    const customer = {
      firstName: 'A',
      lastName: 'B',
      email: 'a@b.c',
      membershipLevel: 'platinum',
      lastLoginAt: new Date(),
      orderAmounts: [],
    };
    const options = { title: 'T', detail: 'summary', includeInactive: true, now: new Date() };
    expect(() => buildCustomerReport([customer], options)).toThrow('Unknown membership level');
  });

  it('calculateCartTotal decides shipping after the discount', () => {
    expect(calculateCartTotal([{ price: 520_000, quantity: 1 }], 'OFF10')).toBe(503_000);
  });
});
