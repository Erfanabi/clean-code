// Lesson 00-01 — What is Clean Code? (clean version)
const DISCOUNT_RATE_BY_TIER = Object.freeze({
  regular: 0,
  silver: 0.1,
  gold: 0.2,
});

const FREE_SHIPPING_THRESHOLD = 500_000;
const SHIPPING_COST = 30_000;

function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

function applyTierDiscount(amount, tier) {
  const discountRate = DISCOUNT_RATE_BY_TIER[tier];
  if (discountRate === undefined) {
    throw new Error(`Unknown customer tier: ${tier}`);
  }
  return Math.round(amount * (1 - discountRate));
}

function calculateShippingCost(amountAfterDiscount) {
  return amountAfterDiscount > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

export function calculateOrderTotal(order) {
  const subtotal = calculateSubtotal(order.items);
  const discountedAmount = applyTierDiscount(subtotal, order.customerTier);
  return discountedAmount + calculateShippingCost(discountedAmount);
}
