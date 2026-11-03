<div dir="rtl">

# تمرین‌های متوسط — درس ۸: Clean Code در برابر Clean Architecture

> درس مرتبط: [Clean Code در برابر Clean Architecture](../../../docs/00-foundations/08-clean-code-vs-clean-architecture.md)

## تمرین ۱: مرحله‌ی ۱ — فقط Clean Code

این یک Route Handler در Next.js (App Router) است:

</div>

```typescript
// app/api/reviews/route.ts
export async function POST(req: Request) {
  const b: any = await req.json();
  if (!b.pid || !b.txt || b.txt.length < 10 || b.r < 1 || b.r > 5) return Response.json({ e: 'bad' }, { status: 400 });
  const p = await prisma.product.findUnique({ where: { id: b.pid } });
  if (!p) return Response.json({ e: 'np' }, { status: 404 });
  const ex = await prisma.review.findFirst({ where: { productId: b.pid, userId: b.uid } });
  if (ex) return Response.json({ e: 'dup' }, { status: 409 });
  const rv = await prisma.review.create({ data: { productId: b.pid, userId: b.uid, text: b.txt, rating: b.r } });
  const all = await prisma.review.findMany({ where: { productId: b.pid } });
  const avg = all.reduce((s: number, x: any) => s + x.rating, 0) / all.length;
  await prisma.product.update({ where: { id: b.pid }, data: { avgRating: Math.round(avg * 10) / 10 } });
  return Response.json(rv, { status: 201 });
}
```

<div dir="rtl">

**خواسته:** فقط **مرحله‌ی ۱** درس را انجام بده: نام‌ها، Typeها، ثابت‌ها، استخراج توابع Pure (اعتبارسنجی نظر و محاسبه‌ی میانگین)، پیام‌های خطای واضح. هنوز Prisma را از Handler بیرون **نبر**.

سپس بنویس: بعد از مرحله‌ی ۱، کدام مشکلات **هنوز** باقی مانده‌اند؟ (یک مشکل امنیتی هم در کد هست: `uid` از کجا می‌آید؟)

**محل کد:** `playground/00-foundations/08-clean-code-vs-clean-architecture/intermediate-1.ts` (Prisma و Request را با Typeهای ساده‌ی خودت شبیه‌سازی کن.)

## تمرین ۲: مرحله‌ی ۲ — Use Case و Repository

همان کد را به مرحله‌ی ۲ ببر:

1. `domain/review.ts`: قواعد اعتبارسنجی و محاسبه‌ی میانگین، بدون هیچ import خارجی.
2. `application/submit-review.ts`: Use Case با Interfaceهای `ProductRepository` و `ReviewRepository`؛ خروجی یک Discriminated Union از نتیجه‌ها.
3. `infrastructure/in-memory-repositories.ts`: پیاده‌سازی درون‌حافظه‌ای برای تست.
4. `presentation/route.ts`: فقط ترجمه‌ی HTTP ↔ Use Case.
5. تست‌های Use Case با Repositoryهای درون‌حافظه‌ای، شامل نظر تکراری و محصول ناموجود.

**محل کد:** `playground/00-foundations/08-clean-code-vs-clean-architecture/intermediate-2/`

</div>
