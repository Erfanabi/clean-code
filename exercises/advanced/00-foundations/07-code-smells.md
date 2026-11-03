<div dir="rtl">

# تمرین پیشرفته — درس ۷: بوی کد

> درس مرتبط: [بوی کد](../../../docs/00-foundations/07-code-smells.md)

## تمرین: شکار کامل و بازآرایی گام‌به‌گام

</div>

```typescript
let lastError = '';
const LOG: string[] = [];

export async function handle(req: any, mode: number, notify: boolean, retry: boolean, dry: boolean) {
  // validate
  if (!req.body || !req.body.items || req.body.items.length == 0) { lastError = 'empty'; return null; }
  if (req.body.items.length > 50) { lastError = 'too many'; return null; }
  // compute
  let total = 0;
  for (const it of req.body.items) {
    let price = it.price;
    switch (it.kind) {
      case 1: price = price * 0.9; break;
      case 2: price = price * 0.8; break;
      case 3: break;
    }
    total += price * it.qty;
  }
  if (req.user.profile.membership.level == 'gold') total = total * 0.95;
  // tax
  if (mode == 1) total = total * 1.09; else if (mode == 2) total = total * 1.1;
  // save
  if (!dry) {
    try {
      await db.save({ user: req.user.id, total, items: req.body.items, at: Date.now() });
    } catch (e) {
      if (retry) { await db.save({ user: req.user.id, total, items: req.body.items, at: Date.now() }); }
    }
  }
  // notify
  if (notify && !dry) {
    await sms.send(req.user.profile.phone, 'سفارش ثبت شد: ' + total);
    LOG.push('sms ' + req.user.id);
  }
  // const oldTotal = total * 1.08;
  return total;
}
```

<div dir="rtl">

**خواسته:**

1. **جدول Smellها:** حداقل ۱۵ Smell با نام، محل (خط) و تکنیک رفع.
2. **باگ‌ها:** Smellهایی که باگ واقعی پنهان کرده‌اند را جدا فهرست کن. (حداقل دو باگ وجود دارد؛ یکی در `catch` و یکی در `switch`.)
3. **تست هم‌رفتاری:** قبل از هر تغییر، با یک `db` و `sms` جعلی تست‌هایی بنویس که رفتار فعلی را ثبت کنند (حتی رفتارهای باگ‌دار — بعداً تصمیم می‌گیری کدام را عمداً تغییر دهی).
4. **بازآرایی در گام‌های کوچک:** حداقل ۶ گام. بعد از هر گام تست‌ها را اجرا کن. اگر Git داری، هر گام یک Commit با پیشوند `refactor:` باشد.
5. **رفع باگ‌ها:** در گام‌های جدا با پیشوند `fix:`.
6. **گزارش:** کدام Smell را **عمداً** اصلاح نکردی و چرا؟

**معیار پذیرش:** نسخه‌ی نهایی بدون `any`، بدون State سراسری، با وابستگی‌های تزریقی و تست‌های سبز.

**محل کد:** `playground/00-foundations/07-code-smells/advanced/`

</div>
