// Lesson 00-01 — What is Clean Code? (BAD on purpose)
// eslint warnings in this file are intentional.
export function calc(o, t) {
  var r = 0;
  for (var i = 0; i < o.items.length; i++) {
    r += o.items[i].p * o.items[i].q;
  }
  if (t == 1) r = r - r * 0.1;
  if (t == 2) r = r - r * 0.2;
  if (r > 500000) {
    // free
  } else r += 30000;
  console.log('total: ' + r);
  return r;
}
