<div dir="rtl">

# تمرین پیشرفته — درس ۴: خوانایی

> درس مرتبط: [خوانایی](../../../docs/00-foundations/04-readability.md)

## تمرین: اندازه‌گیری و بازنویسی خوانایی

</div>

```typescript
export function proc(rows: any[], cfg: any) {
  const res: any = {};
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!r.del) {
      const k = cfg.grp === 'm' ? r.dt.slice(0, 7) : cfg.grp === 'y' ? r.dt.slice(0, 4) : r.dt.slice(0, 10);
      if (!res[k]) res[k] = { c: 0, s: 0, mx: -Infinity };
      res[k].c++;
      res[k].s += r.amt;
      if (r.amt > res[k].mx) res[k].mx = r.amt;
    }
  }
  const out = [];
  for (const k in res) {
    out.push({ k, c: res[k].c, s: res[k].s, a: res[k].s / res[k].c, mx: res[k].mx });
  }
  return cfg.desc ? out.sort((a, b) => (a.k < b.k ? 1 : -1)) : out.sort((a, b) => (a.k > b.k ? 1 : -1));
}
```

<div dir="rtl">

`rows` تراکنش‌هایی با تاریخ ISO (`dt`)، مبلغ (`amt`) و پرچم حذف (`del`) هستند.

**خواسته:**

1. **اندازه‌گیری «قبل»:** فهرست همه‌ی «ترجمه»های ذهنی که خواننده باید انجام دهد را بنویس (مثل تحلیل درس). تعدادشان را بشمار.
2. **فهم:** در یک پاراگراف فارسی بگو این تابع دقیقاً چه می‌کند. (اگر نمی‌توانی بدون اجرای کد بگویی، همین یک یافته است!)
3. **تست هم‌رفتاری قبل از بازنویسی:** چند تست بنویس که رفتار فعلی را ثبت کند. شامل گروه‌بندی روزانه، ماهانه، سالانه و مرتب‌سازی نزولی.
4. **بازنویسی** با همه‌ی تکنیک‌های درس.
5. **اندازه‌گیری «بعد»:** دوباره ترجمه‌ها را بشمار.
6. **یک تصمیم:** آیا از `Map` به‌جای Object استفاده کردی؟ چرا؟

**معیار پذیرش:** تست‌های مرحله‌ی ۳ بدون تغییر روی نسخه‌ی جدید پاس می‌شوند.

**محل کد:** `playground/00-foundations/04-readability/advanced/`

</div>
