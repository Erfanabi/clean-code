<div dir="rtl">

# تمرین‌های متوسط — درس ۴: خوانایی

> درس مرتبط: [خوانایی](../../../docs/00-foundations/04-readability.md)

## تمرین ۱: Step-down Rule

فایل زیر کار می‌کند ولی ترتیب و ساختارش خواننده را اذیت می‌کند:

</div>

```typescript
function pad(n: number) { return n < 10 ? '0' + n : String(n); }
function fmtTime(d: Date) { return pad(d.getHours()) + ':' + pad(d.getMinutes()); }
function isWeekend(d: Date) { return d.getDay() === 5; } // Friday in Iran
export function slotLabel(d: Date, booked: boolean, vip: boolean) {
  let l = fmtTime(d);
  if (booked) { l += ' (رزرو شده)'; } else { if (isWeekend(d)) { if (vip) { l += ' (ویژه‌ی آخر هفته)'; } else { l += ' (تعطیل)'; } } else { l += ' (آزاد)'; } }
  return l;
}
```

<div dir="rtl">

**خواسته:**

1. تابع عمومی را به بالای فایل ببر و توابع کمکی را به ترتیب استفاده زیر آن بچین.
2. `if`های تودرتو را با Guard Clause و `return` زودهنگام صاف کن.
3. نام‌ها را کامل کن. (`padStart` را هم در نظر بگیر.)
4. دو پارامتر Boolean را بررسی کن: آیا یک Union مثل `'booked' | 'free'` خواناتر است؟ تصمیمت را توضیح بده.
5. تست برای همه‌ی ۴ برچسب ممکن.

**محل کد:** `playground/00-foundations/04-readability/intermediate-1.ts`

## تمرین ۲: JSX خوانا

</div>

```tsx
export function OrderStatus({ o, u }: { o: any; u: any }) {
  return (
    <div>
      {o.st === 'p' ? (u?.r === 'admin' ? <ApproveButton id={o.id} /> : <span>در انتظار تأیید</span>) : o.st === 's' ? <span>ارسال شد{o.tr ? ` - کد رهگیری: ${o.tr}` : ''}</span> : o.st === 'c' ? <span>لغو شد</span> : null}
    </div>
  );
}
```

<div dir="rtl">

**خواسته:** این کامپوننت را بازنویسی کن:

- Typeهای صریح برای سفارش و کاربر، با Union برای وضعیت.
- ternaryهای تودرتو را با یک تابع یا Early Return جایگزین کن.
- حداقل یک Explaining Variable (مثلاً `const canApprove = ...`).

اگر React در این پروژه نصب نیست، کد را در یک فایل `.tsx` بنویس؛ هدف خوانایی است و لازم نیست اجرا شود. (برای `tsc` آن را خارج از `playground` یا با پسوند `.tsx.txt` نگه دار.)

</div>
