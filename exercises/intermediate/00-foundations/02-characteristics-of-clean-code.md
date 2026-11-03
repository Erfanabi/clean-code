<div dir="rtl">

# تمرین‌های متوسط — درس ۲: ویژگی‌های کد تمیز

> درس مرتبط: [ویژگی‌های کد تمیز](../../../docs/00-foundations/02-characteristics-of-clean-code.md)

## تمرین ۱: جدا کردن Query از Command

</div>

```typescript
async function saveProfile(p: any) {
  if (!p.name || p.name.length < 2) return 'name';
  if (p.bio && p.bio.length > 300) return 'bio';
  p.name = p.name.trim();
  await db.profiles.save(p);
  await analytics.track('profile_saved', p.id);
  return 'ok';
}
```

<div dir="rtl">

**خواسته:**

1. یک تابع Pure به نام `validateProfile` بنویس که یک Discriminated Union برمی‌گرداند (مثل `ValidationResult` درس).
2. یک تابع `updateProfile` بنویس که `ProfileRepository` و `AnalyticsTracker` را به‌صورت پارامتر (Interface) می‌گیرد.
3. ورودی را mutate نکن.
4. برای `updateProfile` تستی بنویس که با نسخه‌های **جعلی** (Fake) ساده از Repository و Tracker کار کند، بدون هیچ کتابخانه‌ی Mock.

**محل کد:** `playground/00-foundations/02-characteristics-of-clean-code/intermediate-1.ts`

## تمرین ۲: DRY یا نه؟

</div>

```typescript
function formatInvoiceDate(date: Date): string {
  return date.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatShipmentDate(date: Date): string {
  return date.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
}
```

<div dir="rtl">

تیم حقوقی اعلام کرده تاریخ فاکتور **باید** همیشه شمسی کامل باشد (به دلیل قانونی). تیم لجستیک گفته احتمالاً به‌زودی تاریخ ارسال را به شکل «۳ روز دیگر» نمایش می‌دهند.

**خواسته:** آیا این دو تابع را ادغام می‌کنی؟ تصمیمت را در یک پاراگراف با استناد به «دلیل تغییر» توضیح بده و کد نهایی را بنویس.

</div>
