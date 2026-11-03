// Lesson 00-03 — Code Quality (BAD on purpose: cyclomatic complexity = 17)
// eslint warnings in this file are intentional.
export function shipping(region: string, weight: number, express: boolean) {
  let cost;
  if (region === 'tehran') {
    if (weight <= 1) {
      cost = express ? 60000 : 30000;
    } else if (weight <= 5) {
      cost = express ? 90000 : 50000;
    } else {
      cost = express ? 150000 : 80000;
    }
  } else if (region === 'province') {
    if (weight <= 1) {
      cost = express ? 90000 : 45000;
    } else if (weight <= 5) {
      cost = express ? 130000 : 70000;
    } else {
      cost = express ? 200000 : 110000;
    }
  } else if (region === 'international') {
    if (express) throw new Error('no express');
    cost = weight <= 1 ? 500000 : weight <= 5 ? 900000 : 1500000;
  }
  return cost;
}
