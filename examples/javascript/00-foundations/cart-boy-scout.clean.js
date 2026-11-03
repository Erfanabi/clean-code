// Lesson 00-10 — Boy Scout Rule: after the `refactor:` commit and the `fix:` commit.
const FREE_SHIPPING_THRESHOLD = 500_000;
const SHIPPING_COST = 35_000;
// TODO(CART-87): Coupons are hard-coded. Move them to a coupon service.
const OFF10_MULTIPLIER = 0.9;

export function calculateCartTotal(cart, couponCode) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = couponCode === 'OFF10' ? subtotal * OFF10_MULTIPLIER : subtotal;
  const shippingCost = discountedTotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  return discountedTotal + shippingCost;
}
