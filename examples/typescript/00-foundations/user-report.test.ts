import { describe, expect, it } from 'vitest';
import { buildCustomerReport, isActive, type Customer } from './user-report.clean';

const NOW = new Date('2026-11-03T12:00:00Z');
const daysAgo = (days: number) => new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);

const sara: Customer = {
  firstName: 'Sara',
  lastName: 'Ahmadi',
  email: 'sara@example.com',
  membershipLevel: 'gold',
  lastLoginAt: daysAgo(2),
  orderAmounts: [1_200_000, 300_000],
};

const reza: Customer = {
  firstName: 'Reza',
  lastName: 'Karimi',
  email: 'reza@example.com',
  membershipLevel: 'bronze',
  lastLoginAt: daysAgo(90),
  orderAmounts: [],
};

describe('isActive', () => {
  it('treats a login 29 days ago as active and 31 days ago as inactive', () => {
    expect(isActive({ ...sara, lastLoginAt: daysAgo(29) }, NOW)).toBe(true);
    expect(isActive({ ...sara, lastLoginAt: daysAgo(31) }, NOW)).toBe(false);
  });
});

describe('buildCustomerReport', () => {
  it('lists only active customers in summary mode', () => {
    const report = buildCustomerReport([sara, reza], {
      title: 'گزارش مشتریان',
      detail: 'summary',
      includeInactive: false,
      now: NOW,
    });
    expect(report).toBe('گزارش مشتریان\nSara Ahmadi | طلایی');
  });

  it('includes spending and email in full mode, and inactive customers when asked', () => {
    const report = buildCustomerReport([sara, reza], {
      title: 'Report',
      detail: 'full',
      includeInactive: true,
      now: NOW,
    });
    expect(report.split('\n')).toEqual([
      'Report',
      'Sara Ahmadi | طلایی | 1,500,000 تومان | sara@example.com',
      'Reza Karimi | برنزی | 0 تومان | reza@example.com',
    ]);
  });
});
