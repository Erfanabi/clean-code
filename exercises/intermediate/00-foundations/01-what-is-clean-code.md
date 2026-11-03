<div dir="rtl">

# تمرین‌های متوسط — درس ۱: Clean Code چیست؟

> درس مرتبط: [Clean Code چیست؟](../../../docs/00-foundations/01-what-is-clean-code.md)

## تمرین ۱: بازآرایی محاسبه‌ی امتیاز وفاداری

یک فروشگاه به ازای هر خرید امتیاز می‌دهد: هر ۱۰ هزار تومان = ۱ امتیاز. اعضای VIP دو برابر امتیاز می‌گیرند. اگر خرید در روز تولد کاربر باشد، ۵۰ امتیاز هدیه هم اضافه می‌شود. کد فعلی:

</div>

```typescript
function pts(u: any, amt: number, d: Date) {
  let p = Math.floor(amt / 10000);
  if (u.t == 'v') p = p * 2;
  if (u.bd && u.bd.getMonth() == d.getMonth() && u.bd.getDate() == d.getDate()) p += 50;
  u.points = u.points + p;
  return p;
}
```

<div dir="rtl">

**خواسته:** نسخه‌ی تمیز را در TypeScript بنویس.

**معیار پذیرش:**

- Interface صریح برای کاربر و Union Type برای نوع عضویت.
- ثابت‌های نام‌دار برای ۱۰۰۰۰، ۲ و ۵۰.
- تابع اصلی **Pure** باشد: کاربر را mutate نکند و فقط امتیاز را برگرداند. (توضیح بده چرا `u.points = ...` مشکل است.)
- حداقل یک Explaining Variable برای شرط «روز تولد».

**محل کد:** `playground/00-foundations/01-what-is-clean-code/intermediate-1.ts`

## تمرین ۲: تست‌های مرزی و تست هم‌رفتاری

برای نسخه‌ی تمیز تمرین ۱، با Vitest تست بنویس.

**معیار پذیرش:**

- تست برای مرز ۹٬۹۹۹ و ۱۰٬۰۰۰ تومان.
- تست VIP و غیر VIP.
- تست روز تولد و روز غیر تولد (و کاربر بدون تاریخ تولد).
- یک تست هم‌رفتاری (Characterization Test) مثل فایل `order-total.test.ts` که نشان دهد نسخه‌ی بد و تمیز برای ورودی‌های یکسان امتیاز یکسان می‌دهند.

**محل کد:** `playground/00-foundations/01-what-is-clean-code/intermediate-2.test.ts`

</div>
