// Lesson 00-03 — Code Quality (clean version: table-driven)
const LIGHT_PARCEL_MAX_KG = 1;
const MEDIUM_PARCEL_MAX_KG = 5;

const SHIPPING_PRICE_TABLE = Object.freeze({
  tehran: {
    standard: { light: 30_000, medium: 50_000, heavy: 80_000 },
    express: { light: 60_000, medium: 90_000, heavy: 150_000 },
  },
  province: {
    standard: { light: 45_000, medium: 70_000, heavy: 110_000 },
    express: { light: 90_000, medium: 130_000, heavy: 200_000 },
  },
  international: {
    standard: { light: 500_000, medium: 900_000, heavy: 1_500_000 },
    express: null,
  },
});

function toWeightTier(weightKg) {
  if (weightKg <= LIGHT_PARCEL_MAX_KG) return 'light';
  if (weightKg <= MEDIUM_PARCEL_MAX_KG) return 'medium';
  return 'heavy';
}

export function calculateShippingFee(region, weightKg, speed) {
  const pricesBySpeed = SHIPPING_PRICE_TABLE[region];
  if (pricesBySpeed === undefined) {
    throw new Error(`Unknown shipping region: "${region}".`);
  }
  const pricesByWeight = pricesBySpeed[speed];
  if (pricesByWeight === null || pricesByWeight === undefined) {
    throw new Error(`${speed} shipping is not available for region "${region}".`);
  }
  return pricesByWeight[toWeightTier(weightKg)];
}
