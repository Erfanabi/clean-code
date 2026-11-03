<div dir="rtl">

# تمرین‌های مبتدی — درس ۷: بوی کد

> درس مرتبط: [بوی کد](../../../docs/00-foundations/07-code-smells.md)

## تمرین ۱: نام Smell را بگو

برای هر قطعه، نام دقیق Smell (از جدول درس) را بنویس. بعضی‌ها بیش از یک Smell دارند.

</div>

```typescript
// 1
createUser('Ali', 'Rezaei', 'ali@x.com', '0912...', 'Tehran', 'Valiasr St', '1234567890', true, false);

// 2
const city = order.getCustomer().getAddress().getCity().getName();

// 3
function calculateShipping(order: Order) {
  return order.customer.address.zone === 'A'
    ? order.customer.membership.discountRate * order.customer.address.baseRate
    : order.customer.address.baseRate;
}

// 4
// function legacyTax(x) { return x * 0.09; }

// 5
let currentUser: User | null = null; // set from anywhere

// 6
function render(isAdmin: boolean, isMobile: boolean, showFooter: boolean) { /* ... */ }

// 7
function sendEmail(to: string, subject: string, body: string, cc?: string, bcc?: string, replyTo?: string, priority?: number, trackOpens?: boolean) { /* ... */ }

// 8
interface PluginFactoryOptions<TContext = unknown, TResult = unknown, TMiddleware = never> {
  // created two years ago; only one plugin exists today
}
```

<div dir="rtl">

## تمرین ۲: Smell → Refactoring

جدول را پر کن:

| Smell | تکنیک Refactoring پیشنهادی | چرا این تکنیک؟ |
|---|---|---|
| Long Parameter List | | |
| Feature Envy | | |
| Data Clumps | | |
| Repeated Switches | | |
| Dead Code | | |
| Global Data | | |
| Mysterious Name | | |
| Primitive Obsession | | |

</div>
