<div dir="rtl">

# تمرین‌های مبتدی — درس ۴: خوانایی

> درس مرتبط: [خوانایی](../../../docs/00-foundations/04-readability.md)

## تمرین ۱: Explaining Variable

</div>

```typescript
if (
  order.status !== 'cancelled' &&
  order.paidAt !== null &&
  Date.now() - order.paidAt.getTime() < 14 * 24 * 60 * 60 * 1000 &&
  !order.items.some((item) => item.category === 'digital')
) {
  showRefundButton();
}
```

<div dir="rtl">

**خواسته:** این شرط را با Explaining Variableها و ثابت‌های نام‌دار طوری بازنویسی کن که شرط نهایی `if` مثل یک جمله‌ی انگلیسی خوانده شود. سپس با یک جمله‌ی فارسی بگو این شرط از نظر کسب‌وکار چه قاعده‌ای را پیاده می‌کند.

## تمرین ۲: فرهنگ مخفف‌ها

نام‌های زیر را بازنویسی کن و برای هر کدام بگو آیا مخفف «قابل‌قبول» است یا نه:

| نام فعلی | نام پیشنهادی | قابل‌قبول؟ |
|---|---|---|
| `usrLst` | | |
| `id` | | |
| `calcTtlAmt` | | |
| `btnClkHndlr` | | |
| `url` | | |
| `tmp` | | |
| `e` (در `catch (e)`) | | |
| `i` (در حلقه‌ی `for` سه‌خطی) | | |

**نکته:** جواب‌های آخر جدول بحث‌برانگیزند. مهم استدلال توست: محدوده‌ی (Scope) متغیر چقدر بزرگ است؟

</div>
