import { describe, expect, it } from 'vitest';
import { shipping } from './shipping-fee.bad';
import { calculateShippingFee, type ShippingRegion, type ShippingSpeed } from './shipping-fee.clean';

describe('calculateShippingFee', () => {
  it('uses the light tier up to and including 1 kg', () => {
    expect(calculateShippingFee('tehran', 1, 'standard')).toBe(30_000);
  });

  it('switches to the medium tier just above 1 kg', () => {
    expect(calculateShippingFee('tehran', 1.01, 'standard')).toBe(50_000);
  });

  it('uses the heavy tier above 5 kg', () => {
    expect(calculateShippingFee('province', 5.5, 'express')).toBe(200_000);
  });

  it('rejects express shipping for international parcels', () => {
    expect(() => calculateShippingFee('international', 2, 'express')).toThrow(
      'express shipping is not available for region "international".',
    );
  });
});

// A characterization test: the refactoring must not change behaviour.
describe('bad and clean versions agree', () => {
  const regions: ShippingRegion[] = ['tehran', 'province', 'international'];
  const speeds: ShippingSpeed[] = ['standard', 'express'];
  const weights = [0.5, 1, 3, 5, 12];

  const cases = regions
    .flatMap((region) => speeds.map((speed) => [region, speed] as const))
    .filter(([region, speed]) => !(region === 'international' && speed === 'express'))
    .flatMap(([region, speed]) => weights.map((weight) => [region, speed, weight] as const));

  it.each(cases)('%s / %s / %f kg', (region, speed, weight) => {
    expect(calculateShippingFee(region, weight, speed)).toBe(
      shipping(region, weight, speed === 'express'),
    );
  });
});
