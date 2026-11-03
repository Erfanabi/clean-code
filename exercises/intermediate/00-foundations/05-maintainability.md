<div dir="rtl">

# تمرین‌های متوسط — درس ۵: نگهداشت‌پذیری

> درس مرتبط: [نگهداشت‌پذیری](../../../docs/00-foundations/05-maintainability.md)

## تمرین ۱: نقش‌ها و مجوزها در یک جا

</div>

```typescript
// sidebar.ts
export const showAdminMenu = (role: string) => role === 'admin' || role === 'owner';
// orders-page.ts
export const canRefund = (role: string) => role === 'owner' || role === 'support';
// products-page.ts
export const canEditPrice = (role: string) => role === 'admin' || role === 'owner';
export const canDeleteProduct = (role: string) => role === 'owner';
// api/middleware.ts
export const canAccessReports = (role: string) => role !== 'support';
```

<div dir="rtl">

**خواسته:**

1. یک Union `Role` و یک Union `Permission` تعریف کن.
2. یک جدول `PERMISSIONS_BY_ROLE: Record<Role, readonly Permission[]>` بساز.
3. یک تابع `hasPermission(role, permission)` بنویس و پنج تابع بالا را با آن جایگزین کن.
4. به `canAccessReports` دقت کن: `role !== 'support'` یعنی اگر نقش جدیدی اضافه شود، **خودبه‌خود** به گزارش‌ها دسترسی دارد. این چه خطری دارد و طراحی جدید چطور جلویش را می‌گیرد؟
5. تست بنویس.

**محل کد:** `playground/00-foundations/05-maintainability/intermediate-1.ts`

## تمرین ۲: کامپایلر به‌عنوان فهرست کار

1. کد تمیز درس ۵ (`CHANNELS`) را در یک فایل `playground` کپی کن.
2. `'telegram'` را به `NotificationChannel` اضافه کن.
3. `npx tsc --noEmit` را اجرا کن و **همه‌ی** خطاها را کپی کن.
4. توضیح بده هر خطا تو را به کدام بخش از کار باقی‌مانده هدایت می‌کند.
5. کار را کامل کن تا خطایی نماند.
6. همین تمرین را روی نسخه‌ی بد درس انجام بده: چند خطا می‌گیری؟ نتیجه‌گیری‌ات چیست؟

**محل کد:** `playground/00-foundations/05-maintainability/intermediate-2.ts`

</div>
