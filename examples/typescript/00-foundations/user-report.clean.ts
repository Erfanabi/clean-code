// Lesson 00-07 — Code Smells (clean version)
export type MembershipLevel = 'bronze' | 'silver' | 'gold';

export interface Customer {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly membershipLevel: MembershipLevel;
  readonly lastLoginAt: Date;
  readonly orderAmounts: readonly number[];
}

export type ReportDetail = 'summary' | 'full';

export interface CustomerReportOptions {
  readonly title: string;
  readonly detail: ReportDetail;
  readonly includeInactive: boolean;
  readonly now: Date;
}

const ACTIVE_WITHIN_DAYS = 30;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const COLUMN_SEPARATOR = ' | ';

const MEMBERSHIP_LABELS: Record<MembershipLevel, string> = {
  bronze: 'برنزی',
  silver: 'نقره‌ای',
  gold: 'طلایی',
};

export function fullName(customer: Customer): string {
  return `${customer.firstName} ${customer.lastName}`;
}

export function totalSpent(customer: Customer): number {
  return customer.orderAmounts.reduce((sum, amount) => sum + amount, 0);
}

export function isActive(customer: Customer, now: Date): boolean {
  const activeSince = now.getTime() - ACTIVE_WITHIN_DAYS * MS_PER_DAY;
  return customer.lastLoginAt.getTime() > activeSince;
}

function formatCustomerRow(customer: Customer, detail: ReportDetail): string {
  const summaryColumns = [fullName(customer), MEMBERSHIP_LABELS[customer.membershipLevel]];
  const columns =
    detail === 'summary'
      ? summaryColumns
      : [...summaryColumns, `${totalSpent(customer).toLocaleString('en-US')} تومان`, customer.email];
  return columns.join(COLUMN_SEPARATOR);
}

export function buildCustomerReport(
  customers: readonly Customer[],
  options: CustomerReportOptions,
): string {
  const reportedCustomers = options.includeInactive
    ? customers
    : customers.filter((customer) => isActive(customer, options.now));

  const rows = reportedCustomers.map((customer) => formatCustomerRow(customer, options.detail));
  return [options.title, ...rows].join('\n');
}
