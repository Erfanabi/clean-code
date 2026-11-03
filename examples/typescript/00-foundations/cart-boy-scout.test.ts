import { describe, expect, it } from 'vitest';
import { calc } from './cart-boy-scout.bad';
import { calculateCartTotal } from './cart-boy-scout.clean';

describe('calculateCartTotal', () => {
  it('charges shipping when the discounted total falls below the free-shipping threshold', () => {
    const cart = [{ price: 520_000, quantity: 1 }];
    // 520,000 - 10% = 468,000 → below 500,000 → shipping applies
    expect(calculateCartTotal(cart, 'OFF10')).toBe(468_000 + 35_000);
  });

  it('keeps free shipping when the discounted total is still above the threshold', () => {
    const cart = [{ price: 300_000, quantity: 2 }];
    expect(calculateCartTotal(cart, 'OFF10')).toBe(540_000);
  });

  it('ignores unknown coupon codes', () => {
    const cart = [{ price: 100_000, quantity: 1 }];
    expect(calculateCartTotal(cart, 'NOPE')).toBe(135_000);
  });
});

// Documents the original bug: this is the test that failed before the `fix:` commit.
describe('the original code', () => {
  it('wrongly gives free shipping based on the total BEFORE the discount', () => {
    expect(calc([{ price: 520_000, qty: 1 }], 'OFF10')).toBe(468_000);
  });
});
