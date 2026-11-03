<div dir="rtl">

# درس ۱۰: قانون پیشاهنگ (Boy Scout Rule)

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [Clean Code در برابر Design Patterns](09-clean-code-vs-design-patterns.md) · ماژول بعد: [۰۱ — نام‌گذاری و سازمان‌دهی کد](../01-naming-and-structure/README.md)

## مقدمه

در درس‌های قبل دیدیم کد کثیف چطور ایجاد می‌شود و چه هزینه‌ای دارد. اما در دنیای واقعی، تقریباً هیچ تیمی «یک ماه وقت برای تمیز کردن کد» نمی‌گیرد. پس چطور یک کدبیس بزرگ و قدیمی بهتر می‌شود؟ جواب در یک عادت کوچک روزانه است: **هر بار که به کدی دست می‌زنی، آن را کمی تمیزتر از قبل رها کن.** این درس آخرین درس ماژول مبانی است، چون همه‌ی آنچه یاد گرفتی را به یک **رفتار روزمره** تبدیل می‌کند.

## اهداف یادگیری

در پایان این درس باید بتوانم:

- قانون پیشاهنگ و ریشه‌ی آن را توضیح دهم.
- ارتباط آن با نظریه‌ی پنجره‌های شکسته (Broken Windows) و Opportunistic Refactoring را بگویم.
- مرز بین «بهبود کوچک و امن» و «بازنویسی بی‌ربط و پرریسک» را تشخیص دهم.
- تغییرات Boy Scout را در Commitهای جدا از تغییرات رفتاری انجام دهم.
- بدانم چه زمانی **نباید** این قانون را اجرا کنم.

## ۱. مفهوم اصلی

### ریشه

جنبش پیشاهنگی (Scouting) قاعده‌ای ساده دارد: محل کمپ را تمیزتر از زمانی که آن را پیدا کردی ترک کن. اگر زباله‌ای دیدی که مال تو نیست، باز هم آن را جمع کن.

Robert C. Martin این قاعده را به برنامه‌نویسی آورد؛ از جمله در فصلی کوتاه از کتاب 97 Things Every Programmer Should Know و در کتاب Clean Code:

> **کد را کمی تمیزتر از زمانی که آن را تحویل گرفتی، Check-in کن.**

نکته‌ی کلیدی کلمه‌ی **«کمی»** است. قرار نیست هر بار کل ماژول را بازنویسی کنی. یک نام بهتر، یک تابع استخراج‌شده، یک عدد جادویی که ثابت شد، یک کد مرده که حذف شد.

### چرا کار می‌کند؟ اثر مرکب

اگر هر توسعه‌دهنده در هر تغییر فقط یک بهبود کوچک انجام دهد، در تیمی ۵ نفره با هر نفر روزی ۳ تغییر، در یک سال **هزاران** بهبود کوچک انجام می‌شود — دقیقاً در بخش‌هایی که **بیشتر تغییر می‌کنند**. یادت هست در درس بدهی فنی گفتیم بهره فقط در کد پرتغییر پرداخت می‌شود؟ Boy Scout Rule به‌طور خودکار بدهی را **دقیقاً همان‌جایی** بازپرداخت می‌کند که بیشترین بهره را دارد.

### نظریه‌ی پنجره‌های شکسته

کتاب The Pragmatic Programmer از نظریه‌ای در جرم‌شناسی نقل می‌کند: ساختمانی با یک پنجره‌ی شکسته که تعمیر نشود، به‌زودی پنجره‌های شکسته‌ی بیشتری پیدا می‌کند. چون پیام می‌دهد «اینجا کسی اهمیت نمی‌دهد». در کد هم همین‌طور: فایلی که پر از `any` و کد کامنت‌شده است، توسعه‌دهنده‌ی بعدی را تشویق می‌کند یک `any` دیگر اضافه کند. Boy Scout Rule روی دیگر این سکه است: **هر پنجره‌ای که تعمیر کنی، هنجار را تغییر می‌دهد.**

### Opportunistic Refactoring

Martin Fowler همین ایده را Opportunistic Refactoring می‌نامد: Refactoring یک فاز جدا در برنامه‌ی پروژه نیست؛ بخشی از کار روزانه است. وقتی برای اضافه کردن یک فیچر به کدی نگاه می‌کنی و فهمیدنش سخت است، **اول آن را قابل فهم کن، بعد فیچر را اضافه کن**. Kent Beck این را این‌طور خلاصه کرده: اول تغییر را آسان کن (ممکن است سخت باشد)، بعد تغییر آسان را انجام بده.

## ۲. توضیح فنی: قواعد اجرای امن

Boy Scout Rule اگر بد اجرا شود، خودش مشکل‌ساز می‌شود. این قواعد آن را امن نگه می‌دارند:

### ۱. کوچک باشد

بهبود Boy Scout باید در چند دقیقه انجام شود و در یک نگاه قابل Review باشد. نمونه‌ها:

- تغییر نام یک متغیر یا تابع مبهم
- تبدیل عدد جادویی به ثابت نام‌دار
- استخراج یک Explaining Variable
- حذف کد مرده یا کامنت‌شده
- جایگزینی `==` با `===` یا `var` با `const`
- اضافه کردن Type به‌جای `any` در محدوده‌ی تغییر
- تبدیل `if` تودرتو به Guard Clause
- اضافه کردن یک تست برای رفتاری که الان می‌فهمی

### ۲. مرتبط باشد

فقط کدی را بهبود بده که **برای کار فعلی‌ات** خوانده‌ای یا لمس کرده‌ای. اگر برای رفع باگ فرم پرداخت آمده‌ای، ماژول گزارش‌گیری را Refactor نکن.

### ۳. امن باشد

- اگر تست وجود دارد، قبل و بعد از بهبود اجرا کن.
- اگر تست وجود ندارد و بهبود چیزی بیش از تغییر نام است، اول یک تست اضافه کن (این خودش بهترین Boy Scout است!).
- از ابزارهای خودکار IDE برای Rename و Extract استفاده کن؛ امن‌تر از ویرایش دستی‌اند.

### ۴. جدا باشد: Commit تمیزکاری ≠ Commit رفتاری

این مهم‌ترین قاعده است. تغییرات **ساختاری** (Refactoring) و تغییرات **رفتاری** (فیچر یا رفع باگ) را در Commitهای جدا بگذار:

</div>

```bash
git commit -m "refactor: rename calc to calculateCartTotal and extract constants"
git commit -m "fix: apply free-shipping threshold after discount"
```

<div dir="rtl">

چرا؟

- **Review آسان‌تر:** بازبین می‌داند در Commit اول نباید رفتار تغییر کرده باشد و در Commit دوم فقط رفتار تغییر کرده است.
- **Revert امن:** اگر رفع باگ مشکل ایجاد کرد، فقط آن Commit را برمی‌گردانی و تمیزکاری می‌ماند.
- **`git blame` معنادار:** کسی که بعداً تاریخچه را می‌خواند، می‌بیند کدام تغییر واقعاً رفتار را عوض کرد.

اگر تیمت از Conventional Commits استفاده می‌کند، پیشوند `refactor:` دقیقاً برای همین است.

### چه زمانی اجرا نکنیم؟

- **Hotfix اضطراری Production:** حداقل تغییر ممکن. تمیزکاری بعداً، در یک PR جدا.
- **کد بدون تست با منطق پیچیده:** «بهبود» بدون شبکه‌ی ایمنی ممکن است رفتار را بشکند. اول تست.
- **کدی که قرار است حذف شود.**
- **وقتی تغییر بزرگ می‌شود:** اگر «بهبود کوچک» تبدیل به بازنویسی ۲۰ فایل شد، متوقف شو، یک تیکت بساز و آن را جداگانه برنامه‌ریزی کن.
- **وقتی با استاندارد تیم مخالف است:** سلیقه‌ی شخصی‌ات را به‌عنوان Boy Scout تحمیل نکن. Boy Scout یعنی نزدیک‌تر کردن کد به استاندارد **تیم**.

## ۳. مثال اشتباه (Bad Code)

سناریو: گزارش باگ آمده: «ارسال رایگان برای خریدهای بالای ۵۰۰ هزار تومان باید **بعد از** تخفیف محاسبه شود، ولی الان قبل از تخفیف حساب می‌شود.» این کد موجود است:

</div>

```javascript
// JavaScript — Existing code (before the task)
function calc(cart, code) {
  var t = 0;
  for (var i = 0; i < cart.length; i++) t += cart[i].price * cart[i].qty;
  var ship = t > 500000 ? 0 : 35000;
  if (code == 'OFF10') t = t * 0.9;
  // if (code == 'OFF20') t = t * 0.8;  // removed by Ali
  return t + ship;
}
```

```typescript
// TypeScript — Existing code (before the task)
function calc(cart: any[], code: string) {
  var t = 0;
  for (var i = 0; i < cart.length; i++) t += cart[i].price * cart[i].qty;
  var ship = t > 500000 ? 0 : 35000;
  if (code == 'OFF10') t = t * 0.9;
  // if (code == 'OFF20') t = t * 0.8;  // removed by Ali
  return t + ship;
}
```

<div dir="rtl">

### دو رویکرد اشتباه

**اشتباه ۱: «فقط باگ را رفع کن و برو»** — دو خط را جابه‌جا می‌کنی. باگ رفع شد، اما نفر بعدی دوباره با `calc`، `t`، `ship` و کد مرده روبه‌رو می‌شود. پنجره‌ی شکسته باقی ماند.

**اشتباه ۲: «حالا که اینجام، همه چیز رو بازنویسی کنم»** — کل ماژول سبد خرید را بازطراحی می‌کنی، یک سیستم کوپن کامل با Strategy می‌سازی، نام فایل‌ها را عوض می‌کنی و همه را در یک Commit با پیام `fix shipping` می‌فرستی. Review غیرممکن است، ریسک بالاست و اگر چیزی بشکند، نمی‌توانی فقط رفع باگ را برگردانی.

## ۴. تحلیل کد موجود

| مشکل | جزو Boy Scout این تسک؟ | دلیل |
|---|---|---|
| ترتیب اشتباه ارسال و تخفیف (باگ) | — | این **خودِ تسک** است |
| نام‌های `calc`، `t`، `ship` | ✅ بله | برای رفع باگ باید این کد را بفهمی؛ نام خوب فهم را ثبت می‌کند |
| `var` و `==` | ✅ بله | تغییر کوچک، امن و در همین تابع |
| اعداد جادویی `500000`، `35000`، `0.9` | ✅ بله | دقیقاً همان مقادیری که باگ به آن‌ها مربوط است |
| کد کامنت‌شده‌ی `OFF20` | ✅ بله | کد مرده؛ Git تاریخچه را دارد |
| `any[]` | ✅ بله | تعریف یک Interface کوچک برای آیتم سبد |
| سیستم کوپن هاردکد (`'OFF10'`) | ❌ نه | این یک تغییر طراحی بزرگ‌تر است. یک تیکت جدا بساز |
| تست | ✅ بله | قبل از تغییر، یک تست که باگ را نشان دهد |

## ۵. پیاده‌سازی صحیح: سه Commit

### Commit ۱: تست که باگ را نشان می‌دهد

</div>

```typescript
// cart-total.test.ts
import { describe, expect, it } from 'vitest';
import { calculateCartTotal } from './cart-total';

describe('calculateCartTotal', () => {
  it('charges shipping when the discounted total falls below the free-shipping threshold', () => {
    const cart = [{ price: 520_000, quantity: 1 }];
    // 520,000 - 10% = 468,000 → below 500,000 → shipping applies
    expect(calculateCartTotal(cart, 'OFF10')).toBe(468_000 + 35_000);
  });
});
```

<div dir="rtl">

### Commit ۲: `refactor:` بدون تغییر رفتار

</div>

```typescript
// TypeScript — after the refactor commit (behaviour unchanged, bug still present)
export interface CartItem {
  readonly price: number;
  readonly quantity: number;
}

const FREE_SHIPPING_THRESHOLD = 500_000;
const SHIPPING_COST = 35_000;
// TODO(CART-87): Coupons are hard-coded. Move them to a coupon service.
const OFF10_MULTIPLIER = 0.9;

export function calculateCartTotal(cart: readonly CartItem[], couponCode: string): number {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = total > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  if (couponCode === 'OFF10') total = total * OFF10_MULTIPLIER;
  return total + shippingCost;
}
```

<div dir="rtl">

### Commit ۳: `fix:` تغییر رفتار، کوچک و آشکار

</div>

```typescript
// TypeScript — after the fix commit
export function calculateCartTotal(cart: readonly CartItem[], couponCode: string): number {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = couponCode === 'OFF10' ? subtotal * OFF10_MULTIPLIER : subtotal;
  const shippingCost = discountedTotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  return discountedTotal + shippingCost;
}
```

```javascript
// JavaScript — after the fix commit
const FREE_SHIPPING_THRESHOLD = 500_000;
const SHIPPING_COST = 35_000;
// TODO(CART-87): Coupons are hard-coded. Move them to a coupon service.
const OFF10_MULTIPLIER = 0.9;

export function calculateCartTotal(cart, couponCode) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = couponCode === 'OFF10' ? subtotal * OFF10_MULTIPLIER : subtotal;
  const shippingCost = discountedTotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  return discountedTotal + shippingCost;
}
```

<div dir="rtl">

### تحلیل

- **Commit ۱** تست را اضافه کرد. این تست الان **شکست می‌خورد** (چون باگ هنوز هست) — و این دقیقاً مطلوب است: ثابت می‌کند تست باگ را می‌بیند.
- **Commit ۲** فقط ساختار را تغییر داد. فیلد `qty` به `quantity` تغییر نام داده شد (در کد واقعی، این یعنی به‌روزرسانی فراخواننده‌ها هم — اگر این تغییر به فایل‌های زیادی سرایت می‌کرد، آن را برای یک تسک جدا نگه می‌داشتیم). بازبین می‌تواند خط‌به‌خط بررسی کند که رفتار عوض نشده است.
- **Commit ۳** فقط **سه خط** تغییر رفتاری دارد. چون کد قبلاً تمیز شده، باگ کاملاً واضح است: `discountedTotal` به‌جای `subtotal` در محاسبه‌ی ارسال. با تغییر نام‌ها، **خود رفع باگ مستند شده است**.
- **سیستم کوپن** دست نخورد؛ فقط با یک TODO با شناسه‌ی تیکت ثبت شد. این مرز Boy Scout است.

## ۶. مقایسه‌ی سه رویکرد

| معیار | فقط رفع باگ | Boy Scout | بازنویسی کامل |
|---|---|---|---|
| زمان | ۵ دقیقه | ۳۰ دقیقه | ۲ روز |
| ریسک | کم | کم | بالا |
| قابلیت Review | آسان | آسان (Commitهای جدا) | بسیار سخت |
| وضعیت کد برای نفر بعدی | همان قبلی | بهتر | نامعلوم |
| تست | ندارد | دارد | شاید |
| اثر در یک سال | کد بدتر می‌شود | کد تدریجاً بهتر می‌شود | ریسک‌های بزرگ مکرر |

## ۷. کاربرد در پروژه‌های واقعی

- **React:** وقتی به کامپوننتی برای یک تغییر کوچک سر می‌زنی: `props: any` را با یک Type کوچک جایگزین کن، یک `useEffect` بی‌مورد که مقدار مشتق‌شده محاسبه می‌کند را با محاسبه‌ی مستقیم جایگزین کن، یا یک شرط پیچیده‌ی JSX را به Explaining Variable تبدیل کن.
- **Next.js:** هنگام کار روی یک صفحه، رشته‌های مسیر هاردکد شده را به ثابت مسیرهای مرکزی ببر (فقط در همان صفحه).
- **Node.js:** هنگام رفع باگ در یک Handler، `catch (e) {}` خالی کنار آن را حداقل با لاگ مناسب جایگزین کن.
- **Code Review:** بسیاری از تیم‌ها تمیزکاری‌های کوچک را در PR تشویق می‌کنند، به شرط اینکه در Commit جدا و با پیشوند `refactor:` باشند.

## ۸. اشتباهات رایج

1. **مخلوط کردن Refactor و تغییر رفتار در یک Commit.** Review و Revert را سخت می‌کند.
2. **Boy Scout به‌عنوان بهانه برای بازنویسی.** «کمی» بهتر، نه «کاملاً» متفاوت.
3. **تمیزکاری در کد غیرمرتبط.** PR تو باید درباره‌ی تسک تو باشد.
4. **بدون تست.** حتی یک Rename دستی ممکن است چیزی را بشکند (مثلاً یک کلید Object که از API می‌آید).
5. **تحمیل سلیقه‌ی شخصی.** تغییر سبک کد خلاف استاندارد تیم، Boy Scout نیست.
6. **رها کردن به خاطر «کد من نیست».** روح قانون پیشاهنگ همین است: زباله را حتی اگر مال تو نیست جمع کن.

## ۹. Code Review: دیدگاه Senior Engineer

یک Senior این PR سه‌Commitی را با رضایت Review می‌کند:

> **praise:** ممنون که تمیزکاری و رفع باگ را در Commitهای جدا گذاشتی. Commit دوم را با خیال راحت تأیید کردم چون فقط ساختار است؛ و رفع باگ در Commit سوم حالا خودش مستند است.

> **praise:** تست Commit اول که قبل از رفع باگ شکست می‌خورد، عالی است.

> **suggestion:** تغییر `qty` به `quantity` را دیدم. چک کن فراخواننده‌های دیگر (مثلاً `checkout-summary.tsx`) هم به‌روز شده باشند. اگر تعدادشان زیاد است، شاید بهتر باشد آن تغییر نام را برای یک PR جدا نگه داریم.

دقت کن که بازخورد مثبت (praise) هم بخشی از Review است. تقویت رفتار خوب به اندازه‌ی اصلاح رفتار بد اهمیت دارد.

## ۱۰. مثال قابل اجرا

- [examples/typescript/00-foundations/cart-boy-scout.bad.ts](../../examples/typescript/00-foundations/cart-boy-scout.bad.ts)
- [examples/typescript/00-foundations/cart-boy-scout.clean.ts](../../examples/typescript/00-foundations/cart-boy-scout.clean.ts)
- [examples/typescript/00-foundations/cart-boy-scout.test.ts](../../examples/typescript/00-foundations/cart-boy-scout.test.ts)
- [examples/javascript/00-foundations/cart-boy-scout.clean.js](../../examples/javascript/00-foundations/cart-boy-scout.clean.js)

## ۱۱. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/10-boy-scout-rule.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/10-boy-scout-rule.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/10-boy-scout-rule.md)

## ۱۲. جمع‌بندی

- قانون پیشاهنگ: کد را **کمی** تمیزتر از آنچه تحویل گرفتی، تحویل بده.
- اثر مرکب: بهبودهای کوچک دقیقاً در کد پرتغییر انباشته می‌شوند — همان‌جا که بدهی فنی بیشترین بهره را دارد.
- پنجره‌های شکسته: کد کثیف کثیفی بیشتر جذب می‌کند؛ هر تعمیر هنجار را تغییر می‌دهد.
- قواعد: کوچک، مرتبط، امن (با تست)، و در Commit جدا از تغییر رفتاری.
- در Hotfix اضطراری، کد بدون تست پیچیده، و تغییرات بزرگ اجرا نکن؛ تیکت بساز.

### چک‌لیست خودارزیابی

- [ ] می‌توانم پنج نمونه بهبود Boy Scout مناسب نام ببرم.
- [ ] می‌دانم چرا Refactor و Fix باید در Commitهای جدا باشند.
- [ ] می‌توانم تشخیص دهم یک بهبود از مرز Boy Scout عبور کرده و تیکت جدا لازم دارد.
- [ ] در آخرین PR ای که زدم، حداقل یک بهبود Boy Scout انجام دادم (یا در PR بعدی انجام خواهم داد).

## منابع تکمیلی

- Robert C. Martin — [The Boy Scout Rule، در 97 Things Every Programmer Should Know](https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html)
- Martin Fowler — [Opportunistic Refactoring](https://martinfowler.com/bliki/OpportunisticRefactoring.html)
- *The Pragmatic Programmer*، بخش Software Entropy — [صفحه‌ی کتاب](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

</div>
