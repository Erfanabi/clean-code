// Lesson 00-10 — Boy Scout Rule: the code as we found it (BAD, and it has a bug).
// Bug report: free shipping must be decided AFTER the discount, not before.
// eslint warnings in this file are intentional.
export function calc(cart: any[], code: string) {
  var t = 0;
  for (var i = 0; i < cart.length; i++) t += cart[i].price * cart[i].qty;
  var ship = t > 500000 ? 0 : 35000;
  if (code == 'OFF10') t = t * 0.9;
  // if (code == 'OFF20') t = t * 0.8;  // removed by Ali
  return t + ship;
}
