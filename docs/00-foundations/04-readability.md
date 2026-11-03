<div dir="rtl">

# درس ۴: خوانایی (Readability)

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [کیفیت کد](03-code-quality.md) · درس بعد: [نگهداشت‌پذیری](05-maintainability.md)

## مقدمه

وقتی یک تسک جدید می‌گیری، بیشتر وقتت صرف چه می‌شود؟ تایپ کردن؟ نه. بیشتر وقت صرف **خواندن** کد موجود می‌شود: پیدا کردن جایی که باید تغییر کند، فهمیدن اینکه الان چه کار می‌کند و اطمینان از اینکه تغییرت چیزی را نمی‌شکند. خوانایی یعنی کم کردن هزینه‌ی همین بخش. در این درس می‌فهمیم خوانایی از کجا می‌آید (و چرا به **مغز انسان** مربوط است، نه به سلیقه) و چه تکنیک‌های مشخصی آن را بالا می‌برند.

## اهداف یادگیری

در پایان این درس باید بتوانم:

- توضیح دهم چرا خوانایی به محدودیت‌های حافظه‌ی کاری انسان مربوط است.
- پنج عامل اصلی کاهش خوانایی را در کد تشخیص دهم.
- تکنیک‌های Step-down Rule، یک سطح انتزاع در هر تابع، و Explaining Variable را به کار ببرم.
- بین «خوانا» و «آشنا» تمایز قائل شوم.

## ۱. مفهوم اصلی

### تعریف

**خوانایی یعنی میزان تلاش ذهنی لازم برای اینکه خواننده بفهمد کد چه کاری انجام می‌دهد و چرا.** کد خوانا کدی است که خواننده را مجبور نکند اطلاعات زیادی را هم‌زمان در ذهن نگه دارد.

### پایه‌ی علمی: حافظه‌ی کاری

روان‌شناسی شناختی نشان می‌دهد **حافظه‌ی کاری** (Working Memory) انسان ظرفیت بسیار محدودی دارد؛ تحقیقات جدیدتر آن را حدود ۴ «تکه» (Chunk) اطلاعات تخمین می‌زنند. وقتی کدی می‌خوانی که:

- سه سطح `if` تودرتو دارد (۳ شرط در ذهن)،
- متغیری به نام `d` دارد که باید یادت بماند یعنی «تخفیف» (۱ ترجمه در ذهن)،
- و یک متغیر در طول تابع دو بار معنایش عوض می‌شود (۱ ردیابی حالت در ذهن)،

ظرفیت ذهنت پر شده و دیگر جایی برای فهمیدن **منطق اصلی** نمانده است. این همان «بار شناختی» (Cognitive Load) است. هر تکنیک خوانایی در این درس، در اصل روشی برای **آزاد کردن حافظه‌ی کاری** خواننده است.

### خوانا در برابر آشنا

یک دام مهم: کدی که **برای تو آشناست** الزاماً **خوانا** نیست. وقتی خودت کدی نوشته‌ای، همه‌ی زمینه را در ذهن داری. محک واقعی این است: یک هم‌تیمی که این بخش از سیستم را ندیده، چقدر طول می‌کشد آن را بفهمد؟ به همین دلیل Code Review بهترین آزمون خوانایی است.

## ۲. توضیح فنی: عوامل کاهش و افزایش خوانایی

### پنج دشمن خوانایی

| عامل | مثال | بار ذهنی |
|---|---|---|
| نام‌های مبهم یا مخفف | `d`, `tmp`, `data2`, `usrLst` | خواننده باید معنا را حدس بزند و به خاطر بسپارد |
| تودرتویی عمیق | `if` داخل `for` داخل `if` | باید همه‌ی شرط‌های بیرونی را هم‌زمان در نظر گرفت |
| اختلاط سطوح انتزاع | منطق کسب‌وکار کنار دستکاری رشته | ذهن مدام بین «چه» و «چطور» جابه‌جا می‌شود |
| متغیرهای چندمنظوره | `result` که سه بار معنایش عوض می‌شود | باید تاریخچه‌ی متغیر را ردیابی کرد |
| ترفندهای «هوشمندانه» | `!!~arr.indexOf(x)` یا ternary تودرتو | باید رمزگشایی کرد |

### تکنیک‌های افزایش خوانایی

**۱. نام‌هایی که نیت را می‌گویند.** (کل ماژول ۰۱ درباره‌ی این است.)

**۲. Explaining Variable (متغیر توضیحی).** یک عبارت پیچیده را در یک متغیر با نام گویا بگذار:

</div>

```typescript
// Before
if (user.age >= 18 && user.country === 'IR' && !user.isBanned) { /* ... */ }

// After
const isEligibleToVote = user.age >= 18 && user.country === 'IR' && !user.isBanned;
if (isEligibleToVote) { /* ... */ }
```

<div dir="rtl">

**۳. یک سطح انتزاع در هر تابع.** تابع سطح بالا نباید هم «سفارش را ثبت کن» بگوید و هم «رشته را trim کن». جزئیات سطح پایین را در توابع جدا بگذار.

**۴. Step-down Rule (قاعده‌ی پله‌ای).** کد را مثل یک روزنامه بنویس: تابع اصلی و سطح بالا بالای فایل، و توابع کمکی زیر آن به ترتیبی که صدا زده می‌شوند. خواننده از بالا شروع می‌کند و فقط تا عمقی که لازم دارد پایین می‌رود.

**۵. Guard Clause به‌جای تودرتویی.** حالت‌های استثنایی را در ابتدای تابع با `return` زودهنگام کنار بگذار تا مسیر اصلی بدون تورفتگی خوانده شود.

**۶. فاصله‌ی عمودی.** خطوط خالی بین «پاراگراف»های منطقی کد، مثل پاراگراف‌بندی در متن، به ذهن کمک می‌کند بخش‌ها را جدا ببیند.

**۷. سازگاری.** اگر در کل پروژه داده‌ها را با `fetchX` دریافت می‌کنی، یک جا `getX` و جای دیگر `loadX` ننویس. ذهن خواننده الگو یاد می‌گیرد؛ ناسازگاری این الگو را می‌شکند.

## ۳. مثال اشتباه (Bad Code)

سناریو: صفحه‌ی لیست محصولات در یک فروشگاه. باید محصولات قابل نمایش را برگردانیم: محصولات حذف‌شده نمایش داده نمی‌شوند، محصولات ناموجود فقط اگر کاربر گزینه‌ی «نمایش ناموجودها» را فعال کرده باشد، محصولات ویژه‌ی اعضا فقط به اعضا، و نتیجه بر اساس قیمت مرتب شود.

</div>

```javascript
// JavaScript — Bad implementation
function getP(ps, u, f) {
  return ps
    .filter((p) => !p.del && (p.stk > 0 || f.s) && (!p.vip || (u && u.vip)))
    .sort((a, b) => (f.o == 'asc' ? a.pr - b.pr : f.o == 'desc' ? b.pr - a.pr : 0));
}
```

```typescript
// TypeScript — Bad implementation
function getP(ps: any[], u: any, f: any) {
  return ps
    .filter((p) => !p.del && (p.stk > 0 || f.s) && (!p.vip || (u && u.vip)))
    .sort((a, b) => (f.o == 'asc' ? a.pr - b.pr : f.o == 'desc' ? b.pr - a.pr : 0));
}
```

<div dir="rtl">

## ۴. تحلیل کد بد

این کد فقط ۵ خط است. چرا ناخواناست؟ بیا بار ذهنی را بشماریم:

1. `getP` — باید حدس بزنی P یعنی Product. (۱ ترجمه)
2. `ps`، `u`، `f` — سه ترجمه‌ی دیگر. `f` یعنی filter؟ flags؟ (۳ ترجمه)
3. `p.del`، `p.stk`، `p.vip`، `p.pr` — چهار ترجمه. `pr` یعنی price یا priority؟ (۴ ترجمه)
4. `f.s` — «s» چیست؟ show؟ sort؟ فقط با دیدن محل استفاده حدس می‌زنی «show out of stock». `f.o` — order. (۲ ترجمه)
5. فیلتر: سه شرط با `&&` و `||` و پرانتز تودرتو که باید هم‌زمان ارزیابی شوند.
6. Sort: یک ternary تودرتو با `==`.

تا اینجا بیش از ۱۰ تکه اطلاعات در حافظه‌ی کاری لازم است — بسیار بیشتر از ظرفیت آن. نتیجه: خواننده یا باید چند بار کد را بخواند، یا کاغذ بردارد.

مشکلات دیگر:

- **`.sort()` آرایه را درجا تغییر می‌دهد.** چون `filter` قبلش یک آرایه‌ی جدید ساخته، اینجا خطری ندارد؛ ولی خواننده باید این را بداند تا مطمئن شود. نیاز به این استدلال خودش بار ذهنی است.
- **`(u && u.vip)`** — `u` ممکن است `null` باشد (کاربر مهمان). این نکته‌ی مهم دامنه کاملاً پنهان است.

## ۵. پیاده‌سازی صحیح (Clean Code)

</div>

```typescript
// TypeScript — Clean implementation
export interface Product {
  readonly id: string;
  readonly priceInToman: number;
  readonly stockQuantity: number;
  readonly isDeleted: boolean;
  readonly isMembersOnly: boolean;
}

export interface Viewer {
  readonly isMember: boolean;
}

export type PriceSortOrder = 'none' | 'lowest-first' | 'highest-first';

export interface ProductListOptions {
  readonly includeOutOfStock: boolean;
  readonly sortByPrice: PriceSortOrder;
}

export function getVisibleProducts(
  products: readonly Product[],
  viewer: Viewer | null,
  options: ProductListOptions,
): Product[] {
  const visibleProducts = products.filter((product) => isVisibleTo(product, viewer, options));
  return sortByPrice(visibleProducts, options.sortByPrice);
}

function isVisibleTo(product: Product, viewer: Viewer | null, options: ProductListOptions): boolean {
  if (product.isDeleted) return false;

  const isInStock = product.stockQuantity > 0;
  if (!isInStock && !options.includeOutOfStock) return false;

  const viewerIsMember = viewer?.isMember ?? false;
  if (product.isMembersOnly && !viewerIsMember) return false;

  return true;
}

function sortByPrice(products: Product[], order: PriceSortOrder): Product[] {
  switch (order) {
    case 'lowest-first':
      return products.toSorted((a, b) => a.priceInToman - b.priceInToman);
    case 'highest-first':
      return products.toSorted((a, b) => b.priceInToman - a.priceInToman);
    case 'none':
      return products;
  }
}
```

```javascript
// JavaScript — Clean implementation
export function getVisibleProducts(products, viewer, options) {
  const visibleProducts = products.filter((product) => isVisibleTo(product, viewer, options));
  return sortByPrice(visibleProducts, options.sortByPrice);
}

function isVisibleTo(product, viewer, options) {
  if (product.isDeleted) return false;

  const isInStock = product.stockQuantity > 0;
  if (!isInStock && !options.includeOutOfStock) return false;

  const viewerIsMember = viewer?.isMember ?? false;
  if (product.isMembersOnly && !viewerIsMember) return false;

  return true;
}

function sortByPrice(products, order) {
  switch (order) {
    case 'lowest-first':
      return products.toSorted((a, b) => a.priceInToman - b.priceInToman);
    case 'highest-first':
      return products.toSorted((a, b) => b.priceInToman - a.priceInToman);
    case 'none':
      return products;
    default:
      throw new Error(`Unknown price sort order: ${order}`);
  }
}
```

<div dir="rtl">

### تحلیل پیاده‌سازی صحیح

- **Step-down Rule:** `getVisibleProducts` اول آمده و مثل یک خلاصه خوانده می‌شود: «محصولاتی که برای این بیننده قابل مشاهده‌اند را فیلتر کن، بعد بر اساس قیمت مرتب کن». جزئیات پایین‌تر هستند.
- **هر قاعده‌ی کسب‌وکار یک خط با Guard Clause:** در `isVisibleTo` هر شرط جداگانه خوانده می‌شود. خواننده در هر لحظه فقط **یک** شرط را در ذهن دارد. اضافه کردن قاعده‌ی جدید (مثلاً «محصولات منطقه‌ای») یعنی یک Guard Clause جدید.
- **Explaining Variable:** `isInStock` و `viewerIsMember` شرط‌ها را به زبان انسان ترجمه می‌کنند.
- **مهمان صریح شد:** `viewer: Viewer | null` به خواننده می‌گوید کاربر می‌تواند مهمان باشد. `viewer?.isMember ?? false` این حالت را صریح مدیریت می‌کند.
- **`toSorted`** (از ES2023) آرایه‌ی جدید برمی‌گرداند. خواننده لازم نیست درباره‌ی Mutation استدلال کند.
- **`'lowest-first'` به‌جای `'asc'`:** نام مقدارها با زبان کاربر هماهنگ‌اند.
- **`switch` روی Union در TypeScript:** اگر مقدار جدیدی به `PriceSortOrder` اضافه شود و در `switch` پوشش داده نشود، TypeScript به خاطر نوع بازگشتی خطا می‌دهد (Exhaustiveness Check). در JavaScript همین را با `default` و `throw` پوشش دادیم.

**نکته‌ی محیط اجرا:** `toSorted` در Node.js 20+ و مرورگرهای مدرن موجود است. اگر باید از محیط قدیمی‌تر پشتیبانی کنی، `[...products].sort(...)` معادل آن است.

## ۶. مقایسه‌ی دو پیاده‌سازی

| معیار | Bad Code | Clean Code |
|---|---|---|
| تعداد خطوط | ۵ | حدود ۳۵ |
| «ترجمه»های ذهنی لازم | بیش از ۱۰ | تقریباً صفر |
| تعداد شرط‌هایی که هم‌زمان باید در ذهن باشد | ۳ تا ۵ | ۱ |
| اضافه کردن قاعده‌ی نمایش جدید | دست بردن در یک عبارت بولی پیچیده | یک Guard Clause جدید |
| حالت مهمان | پنهان در `u &&` | صریح در Type و کد |

دوباره: نسخه‌ی خوانا **هفت برابر طولانی‌تر** است و این اشکالی ندارد. هدف، کمینه کردن زمان فهم است.

## ۷. کاربرد در پروژه‌های واقعی

- **React:** در کامپوننت‌ها، شرط‌های JSX مثل `{a && !b && (c || d) ? <X/> : e ? <Y/> : null}` بسیار رایج‌اند. Explaining Variable قبل از `return` (مثل `const shouldShowEmptyState = ...`) خوانایی JSX را چند برابر می‌کند.
- **Next.js:** منطقی مثل `getVisibleProducts` را در یک ماژول جدا نگه دار تا هم در Server Component برای رندر اولیه و هم در API Route برای فیلتر سمت سرور استفاده شود.
- **Node.js:** در Middlewareها و Handlerها، Guard Clause برای احراز هویت و اعتبارسنجی (`if (!user) return res.status(401)...`) مسیر اصلی را تمیز نگه می‌دارد.

## ۸. اشتباهات رایج

1. **فشرده‌نویسی به اسم حرفه‌ای بودن.** One-linerهای پیچیده نشانه‌ی مهارت نیستند؛ نشانه‌ی بی‌توجهی به خواننده‌اند.
2. **مخفف‌های «واضح».** `usr`، `btn`، `idx` شاید برای تو واضح باشند، ولی وقتی ده مخفف کنار هم قرار می‌گیرند، بار ذهنی جمع می‌شود. مخفف‌های خیلی رایج و جاافتاده مثل `id` یا `url` اشکالی ندارند.
3. **کامنت به‌جای بازنویسی.** اگر برای فهم یک خط کامنت لازم است، اول سعی کن خط را با Explaining Variable یا Extract Function خوانا کنی.
4. **افراط در شکستن.** جدا کردن هر خط به یک تابع، خواننده را مجبور به پرش می‌کند. تابع کمکی وقتی ارزش دارد که **نام آن از بدنه‌اش چیزی بیشتر بگوید**.
5. **قضاوت خوانایی با کد خودت.** کد خودت همیشه برایت خواناست. از دیگران بپرس.

## ۹. Code Review: دیدگاه Senior Engineer

> **blocking/readability:** فهم این ۵ خط برای من چند دقیقه طول کشید. نام‌های `ps`، `u`، `f`، `f.s` و `p.pr` را باید حدس زد. لطفاً از نام‌های کامل استفاده کن و شرط‌های فیلتر را به یک تابع `isVisibleTo` با Guard Clause تبدیل کن.

> **question/domain:** `u && u.vip` یعنی کاربر می‌تواند `null` باشد؟ اگر بله، لطفاً در نوع پارامتر صریحش کن (`Viewer | null`) تا بقیه‌ی تیم هم بدانند.

> **nit:** `f.o == 'asc'` — لطفاً از `===` استفاده کن و مقدار را به یک Union با نام‌های دامنه (`'lowest-first'`) تبدیل کن.

نکته‌ی Review: یک بازبین خوب «حس خودش» را صادقانه گزارش می‌کند («فهمش چند دقیقه طول کشید»). این یک داده‌ی واقعی درباره‌ی خوانایی است، نه یک توهین.

## ۱۰. مثال قابل اجرا

- [examples/typescript/00-foundations/visible-products.bad.ts](../../examples/typescript/00-foundations/visible-products.bad.ts)
- [examples/typescript/00-foundations/visible-products.clean.ts](../../examples/typescript/00-foundations/visible-products.clean.ts)
- [examples/typescript/00-foundations/visible-products.test.ts](../../examples/typescript/00-foundations/visible-products.test.ts)

## ۱۱. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/04-readability.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/04-readability.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/04-readability.md)

## ۱۲. جمع‌بندی

- خوانایی = تلاش ذهنی لازم برای فهم کد. ریشه‌ی آن محدودیت حافظه‌ی کاری انسان است.
- دشمنان خوانایی: نام مبهم، تودرتویی، اختلاط سطوح انتزاع، متغیر چندمنظوره، ترفند هوشمندانه.
- ابزارها: نام گویا، Explaining Variable، Guard Clause، Step-down Rule، یک سطح انتزاع در هر تابع، فاصله‌ی عمودی، سازگاری.
- «آشنا» با «خوانا» فرق دارد؛ آزمون واقعی، خواننده‌ی تازه‌وارد است.
- کد خوانا اغلب طولانی‌تر است.

### چک‌لیست خودارزیابی

- [ ] می‌توانم توضیح دهم چرا `getP(ps, u, f)` بار ذهنی بالایی دارد.
- [ ] می‌دانم Explaining Variable چیست و یک مثال از کد خودم برایش دارم.
- [ ] می‌توانم Step-down Rule را روی یک فایل اعمال کنم.
- [ ] می‌دانم چه زمانی شکستن تابع خوانایی را **کم** می‌کند.

## منابع تکمیلی

- Robert C. Martin — *Clean Code*، فصل ۳ (Functions) و فصل ۵ (Formatting) — [O'Reilly](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- Martin Fowler — *Refactoring*، تکنیک [Extract Variable](https://refactoring.com/catalog/extractVariable.html)
- Google — [TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- MDN — [Array.prototype.toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

</div>
