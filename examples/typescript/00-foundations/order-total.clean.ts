// Lesson 00-01 — What is Clean Code? (clean version)
export type CustomerTier = 'regular' | 'silver' | 'gold';

export interface OrderItem {
  readonly unitPrice: number; // in Toman
  readonly quantity: number;
}

export interface Order {
  readonly items: readonly OrderItem[];
  readonly customerTier: CustomerTier;
}

const DISCOUNT_RATE_BY_TIER: Record<CustomerTier, number> = {
  regular: 0,
  silver: 0.1,
  gold: 0.2,
};

const FREE_SHIPPING_THRESHOLD = 500_000;
const SHIPPING_COST = 30_000;

function calculateSubtotal(items: readonly OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

function applyTierDiscount(amount: number, tier: CustomerTier): number {
  return Math.round(amount * (1 - DISCOUNT_RATE_BY_TIER[tier]));
}

function calculateShippingCost(amountAfterDiscount: number): number {
  return amountAfterDiscount > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

export function calculateOrderTotal(order: Order): number {
  const subtotal = calculateSubtotal(order.items);
  const discountedAmount = applyTierDiscount(subtotal, order.customerTier);
  return discountedAmount + calculateShippingCost(discountedAmount);
}
