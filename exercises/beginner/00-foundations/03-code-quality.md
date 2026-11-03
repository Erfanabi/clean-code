<div dir="rtl">

# تمرین‌های مبتدی — درس ۳: کیفیت کد

> درس مرتبط: [کیفیت کد](../../../docs/00-foundations/03-code-quality.md)

## تمرین ۱: محاسبه‌ی دستی Cyclomatic Complexity

برای هر تابع، Cyclomatic Complexity را با دست حساب کن و روش شمارش را نشان بده.

</div>

```typescript
function a(x: number) {
  return x * 2;
}

function b(user: { age: number; isAdmin: boolean }) {
  if (user.isAdmin) return 'admin';
  if (user.age >= 18 && user.age < 65) return 'adult';
  return 'other';
}

function c(items: number[]) {
  let sum = 0;
  for (const item of items) {
    if (item > 0 || item === -1) sum += item;
  }
  return sum > 100 ? 'big' : 'small';
}
```

<div dir="rtl">

**بررسی جواب:** بعد از حساب کردن، این توابع را در یک فایل `playground` بگذار و با `npx eslint --rule "complexity: [warn, 0]" <file>` جوابت را با ESLint مقایسه کن.

## تمرین ۲: خواندن خروجی ابزار

دستور `npm run lint` را اجرا کن.

**خواسته:**

1. چند هشدار مربوط به فایل `shipping-fee.bad.ts` است و از چند نوع قانون؟
2. چرا روی `shipping-fee.clean.ts` هیچ هشداری نیست، با اینکه هنوز عدد دارد؟ (راهنمایی: `eslint.config.js` را بخوان.)
3. یک هشدار از ESLint پیدا کن که فکر می‌کنی در یک موقعیت واقعی **نادیده گرفتنش** معقول است، و دلیلت را بنویس.

</div>
