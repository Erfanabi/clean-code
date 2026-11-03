<div dir="rtl">

# تمرین‌های متوسط — درس ۷: بوی کد

> درس مرتبط: [بوی کد](../../../docs/00-foundations/07-code-smells.md)

## تمرین ۱: Feature Envy و Data Clumps

</div>

```typescript
interface Customer {
  name: string;
  street: string;
  city: string;
  postalCode: string;
  orders: { total: number; createdAt: Date }[];
}

class InvoicePrinter {
  print(customer: Customer, street: string, city: string, postalCode: string) {
    let yearTotal = 0;
    for (const o of customer.orders) {
      if (o.createdAt.getFullYear() === new Date().getFullYear()) yearTotal += o.total;
    }
    const isLoyal = customer.orders.length > 10 && yearTotal > 10_000_000;
    return `${customer.name}\n${street}, ${city} ${postalCode}\n${isLoyal ? 'مشتری وفادار' : ''}`;
  }
}

function shippingLabel(street: string, city: string, postalCode: string) {
  return `${street}, ${city} ${postalCode}`;
}
```

<div dir="rtl">

**خواسته:**

1. Data Clump را پیدا کن و با یک نوع `Address` جایگزین کن.
2. منطق «مشتری وفادار» به چه چیزی حسادت می‌کند؟ آن را به جای درستش منتقل کن.
3. `new Date()` را از داخل منطق بیرون بیاور.
4. تکرار فرمت آدرس را حذف کن.
5. تست بنویس، از جمله برای مرز «دقیقاً ۱۰ سفارش».

**محل کد:** `playground/00-foundations/07-code-smells/intermediate-1.ts`

## تمرین ۲: Repeated Switches

</div>

```typescript
type Plan = 'free' | 'pro' | 'business';

function maxProjects(plan: Plan) {
  switch (plan) { case 'free': return 3; case 'pro': return 50; case 'business': return Infinity; }
}
function monthlyPrice(plan: Plan) {
  switch (plan) { case 'free': return 0; case 'pro': return 290_000; case 'business': return 990_000; }
}
function planLabel(plan: Plan) {
  switch (plan) { case 'free': return 'رایگان'; case 'pro': return 'حرفه‌ای'; case 'business': return 'سازمانی'; }
}
function hasPrioritySupport(plan: Plan) {
  switch (plan) { case 'free': return false; case 'pro': return false; case 'business': return true; }
}
```

<div dir="rtl">

**خواسته:**

1. این چهار `switch` را با یک جدول `PLANS: Record<Plan, PlanDefinition>` جایگزین کن.
2. پلن `'enterprise'` را اضافه کن و بشمار در نسخه‌ی قبلی و جدید چند جا باید تغییر می‌کرد.
3. یک دلیل بنویس که **چه زمانی** چهار `switch` جدا از جدول بهتر است. (راهنمایی: اگر هر `switch` در ماژول متفاوتی با تیم متفاوتی باشد؟)

**محل کد:** `playground/00-foundations/07-code-smells/intermediate-2.ts`

</div>
