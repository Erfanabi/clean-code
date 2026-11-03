<div dir="rtl">

# تمرین‌های متوسط — درس ۳: کیفیت کد

> درس مرتبط: [کیفیت کد](../../../docs/00-foundations/03-code-quality.md)

## تمرین ۱: از درخت شرط به جدول

یک باشگاه ورزشی شهریه را بر اساس نوع عضویت و مدت محاسبه می‌کند:

</div>

```typescript
function fee(type: string, months: number) {
  if (type === 'gym') {
    if (months === 1) return 800000;
    if (months === 3) return 2100000;
    if (months === 12) return 7200000;
  } else if (type === 'pool') {
    if (months === 1) return 600000;
    if (months === 3) return 1600000;
    if (months === 12) return 5400000;
  } else if (type === 'both') {
    if (months === 1) return 1200000;
    if (months === 3) return 3300000;
    if (months === 12) return 11000000;
  }
  return -1;
}
```

<div dir="rtl">

**خواسته:**

1. Cyclomatic Complexity نسخه‌ی فعلی را حساب کن.
2. با Union Type برای `type` و `months` و یک جدول، بازنویسی‌اش کن.
3. `return -1` چه مشکلی دارد؟ آن را با یک رفتار بهتر جایگزین کن.
4. تست هم‌رفتاری برای همه‌ی ۹ ترکیب معتبر بنویس.

**محل کد:** `playground/00-foundations/03-code-quality/intermediate-1.ts`

## تمرین ۲: تله‌ی Coverage

برای تابع `calculateShippingFee` در `examples/typescript/00-foundations/shipping-fee.clean.ts`:

1. یک فایل تست بنویس که **۱۰۰٪ خطوط** را اجرا کند ولی **هیچ** `expect` معناداری نداشته باشد. Coverage را با `npx vitest run --coverage` ببین (اگر Vitest نصب پکیج Coverage را پیشنهاد داد، اسمش را برای من بفرست تا با هم تصمیم بگیریم).
2. حالا عمداً یک باگ در تابع وارد کن (مثلاً `<=` را به `<` تغییر بده). آیا تست اول آن را می‌گیرد؟
3. تستی بنویس که این باگ را بگیرد.
4. در یک پاراگراف توضیح بده چرا Coverage «معیار» است و نه «هدف».

**محل کد:** `playground/00-foundations/03-code-quality/intermediate-2.test.ts`

</div>
