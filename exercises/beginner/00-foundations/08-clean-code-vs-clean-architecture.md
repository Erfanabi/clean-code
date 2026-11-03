<div dir="rtl">

# تمرین‌های مبتدی — درس ۸: Clean Code در برابر Clean Architecture

> درس مرتبط: [Clean Code در برابر Clean Architecture](../../../docs/00-foundations/08-clean-code-vs-clean-architecture.md)

## تمرین ۱: سطح مشکل

هر مشکل را «سطح کد»، «سطح معماری» یا «هر دو» دسته‌بندی کن و یک جمله دلیل بنویس:

1. تابع `calculateTax` ۸۰ خط است و سه `if` تودرتو دارد.
2. برای تست تابع محاسبه‌ی امتیاز، باید یک دیتابیس PostgreSQL در Docker بالا بیاوری.
3. نام متغیرها در فایل `checkout.ts` مخفف‌اند.
4. کامپوننت React `ProductPage` مستقیماً `fetch` می‌کند، قیمت نهایی را حساب می‌کند و UI را رندر می‌کند.
5. منطق «لغو سفارش» در Controller وب و در Telegram Bot جداگانه نوشته شده و کمی با هم فرق دارند.
6. ماژول `orders` ماژول `users` را import می‌کند و `users` هم `orders` را.
7. یک تابع هم مقدار برمی‌گرداند و هم State سراسری را تغییر می‌دهد.
8. تغییر از Express به Fastify نیاز به تغییر فایل‌های منطق تخفیف دارد.

## تمرین ۲: جهت فلش‌ها

این import ها در یک پروژه وجود دارند:

</div>

```text
domain/order.ts              imports  nothing
domain/pricing.ts            imports  domain/order.ts
application/place-order.ts   imports  domain/order.ts, domain/pricing.ts
application/place-order.ts   imports  infrastructure/prisma-client.ts
infrastructure/order-repo.ts imports  application/place-order.ts (for the OrderRepository type)
presentation/api/orders.ts   imports  application/place-order.ts
domain/pricing.ts            imports  presentation/api/currency-format.ts
```

<div dir="rtl">

**خواسته:**

1. نمودار وابستگی‌ها را (با متن یا با کشیدن) رسم کن.
2. کدام importها **Dependency Rule** را نقض می‌کنند؟ برای هر کدام توضیح بده.
3. برای هر نقض، یک راه رفع پیشنهاد بده.

</div>
