import { afterEach, describe, expect, it, vi } from 'vitest';
import { calc } from './order-total.bad';
import { calculateOrderTotal, type CustomerTier, type Order } from './order-total.clean';

describe('calculateOrderTotal', () => {
  const itemsWorth = (amount: number) => [{ unitPrice: amount, quantity: 1 }];

  it('adds shipping for a regular customer below the free-shipping threshold', () => {
    const order: Order = { items: itemsWorth(100_000), customerTier: 'regular' };
    expect(calculateOrderTotal(order)).toBe(130_000);
  });

  it('applies the silver discount', () => {
    const order: Order = { items: itemsWorth(200_000), customerTier: 'silver' };
    expect(calculateOrderTotal(order)).toBe(180_000 + 30_000);
  });

  it('gives free shipping when the discounted amount is above the threshold', () => {
    const order: Order = { items: itemsWorth(1_000_000), customerTier: 'gold' };
    expect(calculateOrderTotal(order)).toBe(800_000);
  });

  it('charges shipping when the amount is exactly on the threshold', () => {
    const order: Order = { items: itemsWorth(500_000), customerTier: 'regular' };
    expect(calculateOrderTotal(order)).toBe(530_000);
  });

  it('multiplies unit price by quantity', () => {
    const order: Order = {
      items: [
        { unitPrice: 100_000, quantity: 3 },
        { unitPrice: 50_000, quantity: 2 },
      ],
      customerTier: 'regular',
    };
    expect(calculateOrderTotal(order)).toBe(430_000);
  });
});

// A characterization test: the refactoring must not change behaviour.
describe('bad and clean versions agree', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const tierCodes: Record<CustomerTier, number> = { regular: 0, silver: 1, gold: 2 };
  const cases: Array<[number, CustomerTier]> = [
    [100_000, 'regular'],
    [450_000, 'silver'],
    [700_000, 'gold'],
    [500_000, 'regular'],
  ];

  it.each(cases)('subtotal %i for a %s customer', (amount, tier) => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const badResult = calc({ items: [{ p: amount, q: 1 }] }, tierCodes[tier]);
    const cleanResult = calculateOrderTotal({
      items: [{ unitPrice: amount, quantity: 1 }],
      customerTier: tier,
    });
    expect(cleanResult).toBe(badResult);
  });
});
