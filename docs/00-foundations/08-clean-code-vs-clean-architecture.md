<div dir="rtl">

# درس ۸: Clean Code در برابر Clean Architecture

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [بوی کد](07-code-smells.md) · درس بعد: [Clean Code در برابر Design Patterns](09-clean-code-vs-design-patterns.md)

## مقدمه

هر دو اصطلاح را Robert C. Martin رایج کرده و هر دو کلمه‌ی «Clean» دارند، پس طبیعی است که با هم اشتباه گرفته شوند. اما این دو در **مقیاس‌های کاملاً متفاوتی** کار می‌کنند. یک تشبیه: Clean Code مثل نوشتن جمله‌ها و پاراگراف‌های روشن در یک کتاب است؛ Clean Architecture مثل طراحی فصل‌ها و فهرست مطالب. کتابی با جمله‌های عالی ولی فصل‌بندی آشفته خواندنی نیست؛ کتابی با فهرست عالی ولی جمله‌های نامفهوم هم همین‌طور. در این درس می‌فهمیم هر کدام چه مسئله‌ای را حل می‌کند و چه زمانی به کدام نیاز داریم.

## اهداف یادگیری

در پایان این درس باید بتوانم:

- تفاوت مقیاس، هدف و ابزارهای Clean Code و Clean Architecture را توضیح دهم.
- قانون وابستگی (Dependency Rule) را در یک جمله بیان کنم.
- تشخیص دهم یک مشکل در سطح کد است یا در سطح معماری.
- بدانم چه زمانی Clean Architecture زیاده‌روی است.
- یک Handler درهم‌تنیده را در سه مرحله بهبود دهم: کد تمیز، سپس جداسازی لایه‌ها.

## ۱. مفهوم اصلی

### دو مقیاس متفاوت

| | Clean Code | Clean Architecture |
|---|---|---|
| **مقیاس** | خط، تابع، کلاس | ماژول، لایه، کل سیستم |
| **سؤال اصلی** | «این کد را چطور خوانا و قابل تغییر بنویسم؟» | «اجزای سیستم چطور به هم وابسته باشند تا تغییر یک جزء بقیه را درگیر نکند؟» |
| **واحد تصمیم** | نام، تابع، شرط | مرز، لایه، جهت وابستگی |
| **هزینه‌ی اشتباه** | کم و محلی؛ با Refactoring در چند دقیقه یا ساعت رفع می‌شود | زیاد و سراسری؛ تغییر آن ممکن است هفته‌ها یا ماه‌ها طول بکشد |
| **منبع اصلی** | Clean Code (2008) | Clean Architecture (2017) |
| **ماژول این بوت‌کمپ** | ۰۱ تا ۰۶ | ۰۹ |

### Clean Architecture در یک پاراگراف

Robert C. Martin در مقاله‌ی The Clean Architecture (۲۰۱۲) و سپس کتابی با همین نام، چند معماری قبلی (Hexagonal از Alistair Cockburn، Onion از Jeffrey Palermo و غیره) را در یک ایده‌ی مشترک خلاصه کرد: سیستم را به لایه‌های هم‌مرکز تقسیم کن. در مرکز، **قواعد کسب‌وکار** (Entities و Use Cases) قرار دارند؛ در لایه‌های بیرونی، **جزئیات** (فریم‌ورک وب، دیتابیس، UI). و یک قانون:

> **Dependency Rule:** وابستگی‌های کد منبع فقط می‌توانند به سمت **داخل** باشند.

یعنی قواعد کسب‌وکار هیچ چیزی درباره‌ی Express، Next.js، PostgreSQL یا React نمی‌دانند. نتیجه: می‌توانی دیتابیس یا فریم‌ورک را تغییر دهی بدون اینکه قواعد کسب‌وکار تغییر کنند، و قواعد کسب‌وکار را بدون دیتابیس تست کنی.

### رابطه‌ی دو مفهوم

- **Clean Code شرط لازم Clean Architecture است.** معماری با لایه‌های زیبا ولی توابع ۳۰۰ خطی داخل هر لایه، همچنان غیرقابل نگهداری است.
- **Clean Code به‌تنهایی کافی نیست.** می‌توانی توابع کوچک و نام‌های عالی داشته باشی، ولی اگر منطق قیمت‌گذاری مستقیماً `prisma.order.findMany()` را صدا بزند، تغییر دیتابیس یا تست بدون دیتابیس همچنان دردناک است.
- **اصول مشترک در مقیاس‌های مختلف:** Single Responsibility در سطح تابع (ماژول ۰۲)، در سطح کلاس (ماژول ۰۷) و در سطح معماری (Separation of Concerns در ماژول ۰۹) همان ایده است با مقیاس متفاوت.

## ۲. توضیح فنی: تشخیص سطح مشکل

وقتی با کد مشکل‌دار روبه‌رو می‌شوی، اول بپرس **مشکل در کدام سطح است**:

| علامت | سطح | راه‌حل |
|---|---|---|
| فهمیدن یک تابع سخت است | کد | نام‌گذاری، Extract Function |
| یک تابع چند کار انجام می‌دهد | کد | Single Responsibility |
| نمی‌توانم منطق کسب‌وکار را بدون دیتابیس تست کنم | معماری | جداسازی لایه‌ها، Dependency Inversion |
| تغییر کتابخانه‌ی HTTP نیاز به تغییر منطق قیمت‌گذاری دارد | معماری | Dependency Rule |
| همان منطق در Controller و Cron Job کپی شده | هر دو | استخراج Use Case |
| ماژول A ماژول B را import می‌کند و B هم A را | معماری | شکستن چرخه‌ی وابستگی |

### چه زمانی Clean Architecture زیاده‌روی است؟

Clean Architecture **هزینه** دارد: فایل‌ها، Interfaceها و لایه‌های بیشتر. برای این موارد معمولاً لازم نیست:

- اپلیکیشن CRUD ساده که منطق کسب‌وکار قابل‌توجهی ندارد.
- Prototype یا MVP که هدفش آزمودن یک ایده است.
- اسکریپت‌ها و ابزارهای داخلی کوچک.
- کامپوننت‌های UI خالص.

اما **Clean Code همیشه لازم است**، در هر مقیاسی. نکته‌ی مهم: اگر کد تمیز بنویسی، حرکت به سمت معماری لایه‌ای در آینده آسان است. اما اگر کد کثیف باشد، هر دو کار سخت است.

## ۳. مثال اشتباه (Bad Code)

سناریو: یک API Endpoint برای اعمال کد تخفیف روی سفارش. این مثال در سه مرحله پیش می‌رود تا تفاوت دو سطح را ببینی.

### مرحله‌ی ۰: نه کد تمیز، نه معماری تمیز

</div>

```javascript
// JavaScript — Bad: Express handler that does everything
app.post('/orders/:id/coupon', async (req, res) => {
  const o = await db.query('SELECT * FROM orders WHERE id = $1', [req.params.id]);
  if (!o.rows[0]) return res.status(404).send('not found');
  const c = await db.query('SELECT * FROM coupons WHERE code = $1', [req.body.code]);
  if (!c.rows[0] || c.rows[0].exp < new Date()) return res.status(400).send('bad coupon');
  let t = o.rows[0].total;
  if (c.rows[0].type == 'p') t = t - (t * c.rows[0].val) / 100;
  else t = t - c.rows[0].val;
  if (t < 0) t = 0;
  await db.query('UPDATE orders SET total = $1 WHERE id = $2', [t, req.params.id]);
  res.json({ total: t });
});
```

```typescript
// TypeScript — Bad: Express handler that does everything
app.post('/orders/:id/coupon', async (req: any, res: any) => {
  const o = await db.query('SELECT * FROM orders WHERE id = $1', [req.params.id]);
  if (!o.rows[0]) return res.status(404).send('not found');
  const c = await db.query('SELECT * FROM coupons WHERE code = $1', [req.body.code]);
  if (!c.rows[0] || c.rows[0].exp < new Date()) return res.status(400).send('bad coupon');
  let t = o.rows[0].total;
  if (c.rows[0].type == 'p') t = t - (t * c.rows[0].val) / 100;
  else t = t - c.rows[0].val;
  if (t < 0) t = 0;
  await db.query('UPDATE orders SET total = $1 WHERE id = $2', [t, req.params.id]);
  res.json({ total: t });
});
```

<div dir="rtl">

## ۴. تحلیل کد بد

**مشکلات سطح کد (Clean Code):**

- نام‌های مبهم: `o`، `c`، `t`، `exp`، `val`، `type == 'p'` (p یعنی percent؟).
- `==` به‌جای `===`، `any` در TypeScript.
- منطق محاسبه‌ی تخفیف با دسترسی به `rows[0]` قاطی شده است.

**مشکلات سطح معماری (Clean Architecture):**

- **قاعده‌ی کسب‌وکار** («تخفیف درصدی یا مبلغی، و مبلغ نهایی منفی نمی‌شود») به **SQL** و **HTTP** گره خورده است.
- برای تست قاعده‌ی تخفیف، باید یک سرور Express و یک دیتابیس واقعی راه‌اندازی کنی.
- اگر فردا بخواهی همین تخفیف را از یک Telegram Bot یا یک Cron Job اعمال کنی، باید کد را کپی کنی.
- اگر از PostgreSQL به MongoDB مهاجرت کنی، این Handler و منطق تخفیف هر دو باید بازنویسی شوند.

## ۵. پیاده‌سازی صحیح در دو مرحله

### مرحله‌ی ۱: فقط Clean Code

ابتدا فقط کد را تمیز می‌کنیم، **بدون** تغییر معماری:

</div>

```typescript
// TypeScript — Step 1: clean code, same architecture
type CouponKind = 'percentage' | 'fixed-amount';

interface CouponRow {
  code: string;
  kind: CouponKind;
  value: number;
  expires_at: Date;
}

function applyCouponToTotal(total: number, coupon: CouponRow): number {
  const discount = coupon.kind === 'percentage' ? (total * coupon.value) / 100 : coupon.value;
  return Math.max(total - discount, 0);
}

function isExpired(coupon: CouponRow, now: Date): boolean {
  return coupon.expires_at < now;
}

app.post('/orders/:orderId/coupon', async (req: Request, res: Response) => {
  const orderResult = await db.query('SELECT * FROM orders WHERE id = $1', [req.params.orderId]);
  const order = orderResult.rows[0];
  if (!order) return res.status(404).json({ error: 'Order not found.' });

  const couponResult = await db.query('SELECT * FROM coupons WHERE code = $1', [req.body.code]);
  const coupon: CouponRow | undefined = couponResult.rows[0];
  if (!coupon || isExpired(coupon, new Date())) {
    return res.status(400).json({ error: 'Coupon is invalid or expired.' });
  }

  const newTotal = applyCouponToTotal(order.total, coupon);
  await db.query('UPDATE orders SET total = $1 WHERE id = $2', [newTotal, req.params.orderId]);
  return res.json({ total: newTotal });
});
```

<div dir="rtl">

**پیشرفت:** کد خوانا شد. قاعده‌ی تخفیف (`applyCouponToTotal`) حالا یک تابع Pure است و جداگانه قابل تست است.

**آنچه هنوز مشکل است:** Handler همچنان مستقیماً SQL می‌نویسد. ترتیب عملیات («سفارش را پیدا کن، کوپن را بررسی کن، اعمال کن، ذخیره کن») که خودش یک **قاعده‌ی کسب‌وکار** است، به HTTP و SQL گره خورده است. نمی‌توانی این جریان را از جای دیگری صدا بزنی.

### مرحله‌ی ۲: Clean Code + جداسازی لایه‌ها

</div>

```typescript
// TypeScript — Step 2: clean code + clean architecture

// ---- domain/coupon.ts (no imports from frameworks or databases) ----
export type CouponKind = 'percentage' | 'fixed-amount';

export interface Coupon {
  readonly code: string;
  readonly kind: CouponKind;
  readonly value: number;
  readonly expiresAt: Date;
}

export function isExpired(coupon: Coupon, now: Date): boolean {
  return coupon.expiresAt < now;
}

export function applyCoupon(total: number, coupon: Coupon): number {
  const discount = coupon.kind === 'percentage' ? (total * coupon.value) / 100 : coupon.value;
  return Math.max(total - discount, 0);
}

// ---- application/apply-coupon.ts (use case; depends only on the domain and on ports) ----
export interface OrderRepository {
  findTotal(orderId: string): Promise<number | null>;
  updateTotal(orderId: string, total: number): Promise<void>;
}

export interface CouponRepository {
  findByCode(code: string): Promise<Coupon | null>;
}

export type ApplyCouponResult =
  | { readonly ok: true; readonly newTotal: number }
  | { readonly ok: false; readonly reason: 'order-not-found' | 'coupon-invalid' };

export async function applyCouponToOrder(
  input: { orderId: string; couponCode: string; now: Date },
  orders: OrderRepository,
  coupons: CouponRepository,
): Promise<ApplyCouponResult> {
  const total = await orders.findTotal(input.orderId);
  if (total === null) return { ok: false, reason: 'order-not-found' };

  const coupon = await coupons.findByCode(input.couponCode);
  if (!coupon || isExpired(coupon, input.now)) return { ok: false, reason: 'coupon-invalid' };

  const newTotal = applyCoupon(total, coupon);
  await orders.updateTotal(input.orderId, newTotal);
  return { ok: true, newTotal };
}

// ---- presentation/http/coupon-routes.ts (translates HTTP <-> use case) ----
const HTTP_STATUS_BY_REASON = { 'order-not-found': 404, 'coupon-invalid': 400 } as const;

app.post('/orders/:orderId/coupon', async (req: Request, res: Response) => {
  const result = await applyCouponToOrder(
    { orderId: req.params.orderId, couponCode: req.body.code, now: new Date() },
    postgresOrderRepository,
    postgresCouponRepository,
  );
  if (!result.ok) return res.status(HTTP_STATUS_BY_REASON[result.reason]).json({ error: result.reason });
  return res.json({ total: result.newTotal });
});

// ---- infrastructure/postgres-order-repository.ts implements OrderRepository with SQL ----
```

```javascript
// JavaScript — Step 2: the use case is identical without types
export async function applyCouponToOrder({ orderId, couponCode, now }, orders, coupons) {
  const total = await orders.findTotal(orderId);
  if (total === null) return { ok: false, reason: 'order-not-found' };

  const coupon = await coupons.findByCode(couponCode);
  if (!coupon || isExpired(coupon, now)) return { ok: false, reason: 'coupon-invalid' };

  const newTotal = applyCoupon(total, coupon);
  await orders.updateTotal(orderId, newTotal);
  return { ok: true, newTotal };
}
```

<div dir="rtl">

### تحلیل مرحله‌ی ۲

- **جهت وابستگی‌ها:** `presentation` → `application` → `domain`. و `infrastructure` (پیاده‌سازی SQL) هم به Interfaceهای تعریف‌شده در `application` وابسته است. هیچ فلشی به سمت بیرون نیست؛ این همان Dependency Rule است.
- **`domain` هیچ import خارجی ندارد.** قواعد تخفیف را بدون هیچ ابزاری تست می‌کنی.
- **Use Case مستقل از تحویل‌دهنده است.** همان `applyCouponToOrder` را از Express، از یک Next.js Server Action، از Telegram Bot یا از یک تست صدا می‌زنی.
- **Repositoryها Port هستند:** `OrderRepository` یک Interface است. در تست، یک پیاده‌سازی درون‌حافظه‌ای (In-memory) پاس می‌دهی. در Production، نسخه‌ی PostgreSQL.
- **HTTP فقط ترجمه می‌کند:** Handler دلیل خطا را به کد HTTP تبدیل می‌کند. Use Case هیچ چیزی درباره‌ی ۴۰۴ نمی‌داند.

## ۶. مقایسه‌ی سه مرحله

| معیار | مرحله‌ی ۰ | مرحله‌ی ۱: Clean Code | مرحله‌ی ۲: + Clean Architecture |
|---|---|---|---|
| خوانایی | ضعیف | خوب | خوب |
| تست قاعده‌ی تخفیف | فقط با سرور و DB | بله (تابع Pure) | بله |
| تست کل جریان بدون DB | خیر | خیر | بله (Repository جعلی) |
| استفاده از Bot یا Cron | کپی کد | کپی Handler | صدا زدن Use Case |
| تغییر دیتابیس | بازنویسی همه چیز | بازنویسی Handler | فقط یک Repository جدید |
| تعداد فایل‌ها | ۱ | ۱ | ۴ |
| مناسب برای | هیچ‌جا | پروژه‌های کوچک و ساده | دامنه‌ی پیچیده یا چند کانال ورودی |

مرحله‌ی ۱ برای بسیاری از پروژه‌ها **کافی** است. مرحله‌ی ۲ وقتی ارزش دارد که منطق کسب‌وکار پیچیده است، از چند کانال صدا زده می‌شود یا تست مستقل از زیرساخت حیاتی است.

## ۷. کاربرد در پروژه‌های واقعی

- **React:** معادل Frontend این ایده: منطق کسب‌وکار (محاسبه‌ی قیمت، اعتبارسنجی) در توابع Pure، دسترسی به API در یک لایه‌ی جدا (مثلاً `api/orders.ts`)، و کامپوننت‌ها فقط برای نمایش. کامپوننتی که مستقیماً `fetch` می‌کند و منطق تخفیف هم دارد، معادل مرحله‌ی ۰ است.
- **Next.js:** Server Actionها و Route Handlerها «لایه‌ی Presentation» هستند. منطق را در آن‌ها ننویس؛ Use Case را صدا بزن.
- **Node.js:** در NestJS این لایه‌بندی تا حدی با Module، Controller و Service اجباری است، اما Service‌ای که مستقیماً ORM را صدا می‌زند هنوز Dependency Rule را نقض می‌کند.

## ۸. اشتباهات رایج

1. **فکر کردن اینکه «پوشه‌بندی = معماری».** داشتن پوشه‌های `domain` و `infrastructure` وقتی `domain` مستقیماً Prisma را import می‌کند، معماری تمیز نیست.
2. **شروع هر پروژه با Clean Architecture کامل.** برای یک CRUD ساده، ۱۵ فایل برای یک Endpoint هزینه‌ی خالص است.
3. **نادیده گرفتن Clean Code به‌خاطر معماری.** لایه‌های تمیز با توابع کثیف داخلشان، همچنان کثیف است.
4. **یکی دانستن مرحله‌ی ۱ و ۲.** استخراج تابع کمکی، معماری را تغییر نمی‌دهد. معماری درباره‌ی **جهت وابستگی‌ها** است.
5. **پرش مستقیم به مرحله‌ی ۲ در کد بدون تست.** تغییر معماری تغییر بزرگی است؛ اول تست‌های رفتاری بنویس.

## ۹. Code Review: دیدگاه Senior Engineer

برای مرحله‌ی ۰:

> **suggestion (step 1):** پیشنهاد می‌کنم اول نام‌ها را واضح کنیم و محاسبه‌ی تخفیف را به یک تابع Pure منتقل کنیم. این تغییر کوچک است و همین الان قابل تست است.

> **design discussion (step 2):** تیم محصول گفته بود اعمال کوپن از اپ موبایل و پنل ادمین هم لازم است. اگر این درست است، ارزش دارد جریان را به یک Use Case با Repository جدا کنیم تا سه نسخه از این منطق نداشته باشیم. اگر نه، مرحله‌ی ۱ فعلاً کافی است. نظرت چیست؟

دقت کن که Senior تصمیم معماری را **به نیاز واقعی کسب‌وکار** گره می‌زند، نه به سلیقه. و آن را به‌عنوان «بحث» مطرح می‌کند، نه دستور.

## ۱۰. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/08-clean-code-vs-clean-architecture.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/08-clean-code-vs-clean-architecture.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/08-clean-code-vs-clean-architecture.md)

## ۱۱. جمع‌بندی

- Clean Code: مقیاس خط و تابع. Clean Architecture: مقیاس ماژول و سیستم.
- Dependency Rule: وابستگی‌ها فقط به سمت داخل (قواعد کسب‌وکار).
- Clean Code شرط لازم Clean Architecture است، ولی کافی نیست.
- اول سطح مشکل را تشخیص بده: آیا مشکل خوانایی است یا جهت وابستگی؟
- Clean Architecture هزینه دارد؛ بر اساس نیاز واقعی (پیچیدگی دامنه، چند کانال ورودی، نیاز به تست مستقل) تصمیم بگیر.
- این درس فقط مقدمه بود؛ ماژول ۰۹ کل معماری را عمیق پوشش می‌دهد.

### چک‌لیست خودارزیابی

- [ ] می‌توانم Dependency Rule را در یک جمله بگویم.
- [ ] می‌دانم چرا مرحله‌ی ۱ هنوز Clean Architecture نیست.
- [ ] می‌توانم دو موقعیت نام ببرم که Clean Architecture در آن زیاده‌روی است.
- [ ] می‌توانم برای یک مشکل مشخص بگویم سطح کد است یا سطح معماری.

## منابع تکمیلی

- Robert C. Martin — [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- Robert C. Martin — *Clean Architecture* — [O'Reilly](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)
- John Ousterhout — *A Philosophy of Software Design* — [صفحه‌ی کتاب](https://web.stanford.edu/~ouster/cgi-bin/book.php)

</div>
