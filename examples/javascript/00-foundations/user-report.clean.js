// Lesson 00-07 — Code Smells (clean version)
const ACTIVE_WITHIN_DAYS = 30;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const COLUMN_SEPARATOR = ' | ';

const MEMBERSHIP_LABELS = Object.freeze({
  bronze: 'برنزی',
  silver: 'نقره‌ای',
  gold: 'طلایی',
});

export function fullName(customer) {
  return `${customer.firstName} ${customer.lastName}`;
}

export function totalSpent(customer) {
  return customer.orderAmounts.reduce((sum, amount) => sum + amount, 0);
}

export function isActive(customer, now) {
  const activeSince = now.getTime() - ACTIVE_WITHIN_DAYS * MS_PER_DAY;
  return customer.lastLoginAt.getTime() > activeSince;
}

function membershipLabel(level) {
  const label = MEMBERSHIP_LABELS[level];
  if (label === undefined) {
    throw new Error(`Unknown membership level: "${level}".`);
  }
  return label;
}

function formatCustomerRow(customer, detail) {
  const summaryColumns = [fullName(customer), membershipLabel(customer.membershipLevel)];
  const columns =
    detail === 'summary'
      ? summaryColumns
      : [...summaryColumns, `${totalSpent(customer).toLocaleString('en-US')} تومان`, customer.email];
  return columns.join(COLUMN_SEPARATOR);
}

export function buildCustomerReport(customers, options) {
  const reportedCustomers = options.includeInactive
    ? customers
    : customers.filter((customer) => isActive(customer, options.now));

  const rows = reportedCustomers.map((customer) => formatCustomerRow(customer, options.detail));
  return [options.title, ...rows].join('\n');
}
