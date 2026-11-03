<div dir="rtl">

# درس ۷: بوی کد (Code Smells)

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [بدهی فنی](06-technical-debt.md) · درس بعد: [Clean Code در برابر Clean Architecture](08-clean-code-vs-clean-architecture.md)

## مقدمه

پزشک با دیدن تب نمی‌گوید «بیماری‌ات این است»، می‌گوید «باید بررسی کنیم». تب یک **علامت** است. Code Smell هم دقیقاً همین است: **علامتی سطحی در کد که معمولاً نشان‌دهنده‌ی یک مشکل عمیق‌تر در طراحی است**. این درس به تو یک «واژگان تشخیصی» می‌دهد تا وقتی کدی را می‌خوانی، به‌جای «یه جوریه»، دقیق بگویی: «این Feature Envy است و احتمالاً Move Function لازم دارد.»

## اهداف یادگیری

در پایان این درس باید بتوانم:

- Code Smell را تعریف کنم و تفاوتش با Bug را بگویم.
- پنج دسته‌ی اصلی Smellها را بشناسم.
- حداقل ۱۵ Smell رایج را با نام دقیق در کد JavaScript/TypeScript تشخیص دهم.
- برای هر Smell، تکنیک Refactoring مناسب را پیشنهاد دهم.
- بدانم چه زمانی یک Smell را **نباید** اصلاح کرد.

## ۱. مفهوم اصلی

### تعریف و تاریخچه

اصطلاح Code Smell را Kent Beck در اواخر دهه‌ی ۹۰ ابداع کرد و Martin Fowler در کتاب Refactoring (۱۹۹۹) آن را رایج کرد. فصل سوم آن کتاب، که Beck و Fowler مشترکاً نوشته‌اند، کاتالوگی از Smellها و تکنیک‌های رفع هر کدام ارائه می‌دهد.

تعریف Fowler: **Code Smell نشانه‌ای سطحی است که معمولاً با یک مشکل عمیق‌تر در سیستم مطابقت دارد.** دو ویژگی کلیدی:

1. **سریع دیده می‌شود** (Quick to spot): تابع ۲۰۰ خطی را بدون فکر کردن می‌بینی.
2. **همیشه مشکل نیست** (Doesn't always indicate a problem): Smell یعنی «اینجا را بررسی کن»، نه «اینجا حتماً خراب است».

### Smell در برابر Bug

| | Bug | Code Smell |
|---|---|---|
| رفتار برنامه | اشتباه است | درست است |
| تأثیر | امروز | فردا (هنگام تغییر) |
| ابزار کشف | تست، کاربر | Code Review، Lint، تجربه |
| ارتباط | — | Smellها باگ‌ها را **پنهان** و **تولید** می‌کنند |

### پنج دسته‌ی اصلی

Refactoring Guru Smellها را در پنج دسته طبقه‌بندی می‌کند (این دسته‌بندی در کتاب Fowler نیست ولی برای یادگیری بسیار مفید است):

| دسته | ایده | نمونه‌ها |
|---|---|---|
| **Bloaters** (متورم‌کننده‌ها) | کد، تابع یا کلاسی که آن‌قدر بزرگ شده که کار با آن سخت است | Long Function، Large Class، Long Parameter List، Primitive Obsession، Data Clumps |
| **Object-Orientation Abusers** | استفاده‌ی ناقص یا اشتباه از اصول شیءگرایی | Repeated Switches، Refused Bequest، Temporary Field |
| **Change Preventers** (مانع تغییر) | تغییر در یک جا نیاز به تغییرات زیاد در جاهای دیگر دارد | Divergent Change، Shotgun Surgery |
| **Dispensables** (زائدها) | چیزی که نبودنش کد را تمیزتر می‌کند | Duplicated Code، Dead Code، Speculative Generality، Comments (به‌عنوان خوش‌بوکننده)، Lazy Element |
| **Couplers** (جفت‌کننده‌ها) | وابستگی بیش از حد بین بخش‌ها | Feature Envy، Message Chains، Middle Man، Insider Trading |

## ۲. توضیح فنی: کاتالوگ Smellهای مهم

جدول زیر مهم‌ترین Smellها برای یک توسعه‌دهنده‌ی JavaScript/TypeScript است. ستون آخر، تکنیک رفع از کاتالوگ Fowler است که در ماژول ۱۱ هر کدام را عمیق یاد می‌گیری.

| Smell | چطور تشخیص بدهم؟ | چرا بد است؟ | رفع رایج |
|---|---|---|---|
| **Mysterious Name** | `data`، `handle`، `process`، `x2` | نیت پنهان است | Rename |
| **Duplicated Code** | یک منطق در چند جا | تغییر ناقص | Extract Function |
| **Long Function** | تابعی که برای فهمیدنش باید اسکرول کنی؛ کامنت‌هایی که «بخش‌ها» را جدا می‌کنند | چند مسئولیت در هم | Extract Function، Decompose Conditional |
| **Long Parameter List** | بیش از ۳ یا ۴ پارامتر، به‌خصوص هم‌نوع | ترتیب اشتباه پارامترها | Introduce Parameter Object |
| **Global Data** | متغیر سراسری قابل تغییر | هر جایی می‌تواند تغییرش دهد | Encapsulate Variable |
| **Mutable Data** | تغییر Objectها و آرایه‌های مشترک | اثرات غیرمنتظره | Immutability، Encapsulate |
| **Divergent Change** | یک فایل به **دلایل مختلف** تغییر می‌کند | چند مسئولیت در یک ماژول | Split Phase، Extract Class |
| **Shotgun Surgery** | یک تغییر **مفهومی** نیاز به تغییر **چند فایل** دارد | دانش پراکنده | Move Function، Combine |
| **Feature Envy** | تابعی که بیشتر از داده‌های **یک Object دیگر** استفاده می‌کند تا داده‌های خودش | رفتار در جای اشتباه | Move Function |
| **Data Clumps** | چند داده که همیشه با هم می‌آیند (`street, city, zip`) | یک مفهوم بی‌نام | Introduce Parameter Object، Extract Class |
| **Primitive Obsession** | استفاده از `string` و `number` برای مفاهیم دامنه (ایمیل، پول، شماره‌تلفن) | اعتبارسنجی پراکنده، اشتباه در نوع | Replace Primitive with Object |
| **Repeated Switches** | `switch` یا `if` روی همان نوع در چند جا | Shotgun Surgery در آینده | Replace Conditional with Polymorphism، جدول |
| **Message Chains** | `order.customer.address.city.name` | وابستگی به ساختار داخلی چند Object | Hide Delegate |
| **Speculative Generality** | پارامتر، کلاس انتزاعی یا Hook «برای روزی که لازم شود» | پیچیدگی بدون فایده | Remove، Inline |
| **Dead Code** | کد کامنت‌شده، توابع استفاده‌نشده | نویز و سردرگمی | Remove Dead Code |
| **Comments (deodorant)** | کامنتی که کد بد را توضیح می‌دهد | پوشاندن بو به‌جای رفع آن | Extract Function، Rename |
| **Flag Argument** | `render(true, false)` | نامفهوم در محل فراخوانی، تابع دو کار می‌کند | Split function |

### چه زمانی Smell را اصلاح نکنیم؟

- **کد پایدار:** اگر کد کار می‌کند و تغییر نمی‌کند، بهره‌ای ندارد (درس ۶).
- **قبل از حذف:** اگر قرار است کد هفته‌ی بعد حذف شود، اصلاحش بی‌معناست.
- **بدون تست:** Refactoring بدون شبکه‌ی ایمنی ریسک دارد. اول تست، بعد اصلاح.
- **Smell عمدی:** گاهی یک `switch` طولانی واقعاً ساده‌ترین راه‌حل است (مثلاً Reducer در Redux). Smell را با زمینه قضاوت کن.

## ۳. مثال اشتباه (Bad Code)

سناریو: ساختن گزارش متنی برای پنل ادمین که کاربران فعال را با سطح عضویت و مبلغ خریدشان نشان می‌دهد. این کد عمداً **چندین Smell** را با هم دارد. قبل از خواندن تحلیل، سعی کن خودت حداقل ۸ Smell را با نام پیدا کنی.

</div>

```javascript
// JavaScript — Bad implementation
let reportCount = 0; // used by the dashboard

function generate(users, includeInactive, format, currency, sep, title) {
  reportCount++;
  let out = title + '\n';
  // filter users
  let list = [];
  for (let i = 0; i < users.length; i++) {
    if (includeInactive || users[i].lastLogin > Date.now() - 30 * 24 * 60 * 60 * 1000) {
      list.push(users[i]);
    }
  }
  // build lines
  for (const u of list) {
    let level;
    switch (u.type) {
      case 1: level = 'Bronze'; break;
      case 2: level = 'Silver'; break;
      case 3: level = 'Gold'; break;
    }
    let total = 0;
    for (const o of u.orders) total += o.amount;
    const name = u.profile.name.first + ' ' + u.profile.name.last;
    if (format === 'short') out += name + sep + level + '\n';
    else out += name + sep + level + sep + total + ' ' + currency + sep + u.email + '\n';
  }
  // function oldFormat(u) { return u.name; }
  return out;
}
```

```typescript
// TypeScript — Bad implementation
let reportCount = 0; // used by the dashboard

function generate(
  users: any[],
  includeInactive: boolean,
  format: string,
  currency: string,
  sep: string,
  title: string,
) {
  reportCount++;
  let out = title + '\n';
  // filter users
  let list = [];
  for (let i = 0; i < users.length; i++) {
    if (includeInactive || users[i].lastLogin > Date.now() - 30 * 24 * 60 * 60 * 1000) {
      list.push(users[i]);
    }
  }
  // build lines
  for (const u of list) {
    let level;
    switch (u.type) {
      case 1: level = 'Bronze'; break;
      case 2: level = 'Silver'; break;
      case 3: level = 'Gold'; break;
    }
    let total = 0;
    for (const o of u.orders) total += o.amount;
    const name = u.profile.name.first + ' ' + u.profile.name.last;
    if (format === 'short') out += name + sep + level + '\n';
    else out += name + sep + level + sep + total + ' ' + currency + sep + u.email + '\n';
  }
  // function oldFormat(u) { return u.name; }
  return out;
}
```

<div dir="rtl">

## ۴. تحلیل کد بد: شکار Smellها

| # | Smell | کجا | توضیح |
|---|---|---|---|
| ۱ | **Mysterious Name** | `generate`، `out`، `list`، `u`، `o` | «چه چیزی» generate می‌شود؟ |
| ۲ | **Long Parameter List** | ۶ پارامتر | `generate(users, true, 'short', 'تومان', ', ', 'گزارش')` — کدام `true`؟ |
| ۳ | **Flag Argument** | `includeInactive`، `format` | تابع بسته به پرچم‌ها چند کار مختلف انجام می‌دهد |
| ۴ | **Global Data / Mutable Data** | `reportCount++` | Side Effect پنهان روی متغیر سراسری؛ هر تست آن را تغییر می‌دهد |
| ۵ | **Long Function** | کل تابع | فیلتر، نگاشت سطح، جمع سفارش‌ها، فرمت‌دهی و شمارش، همه در یک تابع |
| ۶ | **Comments (deodorant)** | `// filter users`، `// build lines` | کامنت‌ها «بخش‌ها» را جدا کرده‌اند؛ یعنی این بخش‌ها باید تابع باشند |
| ۷ | **Magic Number** | `30 * 24 * 60 * 60 * 1000`، `1`، `2`، `3` | «۳۰ روز» و «سطح ۲ یعنی نقره‌ای» پنهان‌اند |
| ۸ | **Repeated Switches (بالقوه)** | `switch (u.type)` | تقریباً مطمئن باش همین `switch` جای دیگری هم هست |
| ۹ | **Primitive Obsession** | `u.type` عدد، `currency` رشته | سطح عضویت یک مفهوم دامنه است، نه یک عدد |
| ۱۰ | **Message Chains** | `u.profile.name.first` | وابستگی به ساختار داخلی سه Object تودرتو |
| ۱۱ | **Feature Envy** | ساختن نام کامل و جمع سفارش‌ها | این منطق متعلق به «کاربر» است، نه «گزارش» |
| ۱۲ | **Dead Code** | `// function oldFormat...` | کد کامنت‌شده؛ Git تاریخچه را نگه می‌دارد |
| ۱۳ | **Duplicated Code (درون‌تابعی)** | دو شاخه‌ی `if format` | `name + sep + level` دو بار |
| ۱۴ | **باگ پنهان** | `switch` بدون `default` | کاربر با `type = 4` سطح `undefined` می‌گیرد و در گزارش `"undefined"` چاپ می‌شود |

دیدی؟ ۲۵ خط کد، بیش از ده Smell. و یکی از آن‌ها (شماره‌ی ۱۴) یک باگ واقعی را پنهان کرده بود.

## ۵. پیاده‌سازی صحیح (Clean Code)

</div>

```typescript
// TypeScript — Clean implementation
export type MembershipLevel = 'bronze' | 'silver' | 'gold';

export interface Customer {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly membershipLevel: MembershipLevel;
  readonly lastLoginAt: Date;
  readonly orderAmounts: readonly number[];
}

export type ReportDetail = 'summary' | 'full';

export interface CustomerReportOptions {
  readonly title: string;
  readonly detail: ReportDetail;
  readonly includeInactive: boolean;
  readonly now: Date;
}

const ACTIVE_WITHIN_DAYS = 30;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const COLUMN_SEPARATOR = ' | ';

const MEMBERSHIP_LABELS: Record<MembershipLevel, string> = {
  bronze: 'برنزی',
  silver: 'نقره‌ای',
  gold: 'طلایی',
};

export function fullName(customer: Customer): string {
  return `${customer.firstName} ${customer.lastName}`;
}

export function totalSpent(customer: Customer): number {
  return customer.orderAmounts.reduce((sum, amount) => sum + amount, 0);
}

export function isActive(customer: Customer, now: Date): boolean {
  const activeSince = now.getTime() - ACTIVE_WITHIN_DAYS * MS_PER_DAY;
  return customer.lastLoginAt.getTime() > activeSince;
}

function formatCustomerRow(customer: Customer, detail: ReportDetail): string {
  const summaryColumns = [fullName(customer), MEMBERSHIP_LABELS[customer.membershipLevel]];
  const columns =
    detail === 'summary'
      ? summaryColumns
      : [...summaryColumns, `${totalSpent(customer).toLocaleString('en-US')} تومان`, customer.email];
  return columns.join(COLUMN_SEPARATOR);
}

export function buildCustomerReport(
  customers: readonly Customer[],
  options: CustomerReportOptions,
): string {
  const reportedCustomers = options.includeInactive
    ? customers
    : customers.filter((customer) => isActive(customer, options.now));

  const rows = reportedCustomers.map((customer) => formatCustomerRow(customer, options.detail));
  return [options.title, ...rows].join('\n');
}
```

```javascript
// JavaScript — Clean implementation
const ACTIVE_WITHIN_DAYS = 30;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const COLUMN_SEPARATOR = ' | ';

const MEMBERSHIP_LABELS = Object.freeze({
  bronze: 'برنزی',
  silver: 'نقره‌ای',
  gold: 'طلایی',
});

export function fullName(customer) {
  return `${customer.firstName} ${customer.lastName}`;
}

export function totalSpent(customer) {
  return customer.orderAmounts.reduce((sum, amount) => sum + amount, 0);
}

export function isActive(customer, now) {
  const activeSince = now.getTime() - ACTIVE_WITHIN_DAYS * MS_PER_DAY;
  return customer.lastLoginAt.getTime() > activeSince;
}

function membershipLabel(level) {
  const label = MEMBERSHIP_LABELS[level];
  if (label === undefined) {
    throw new Error(`Unknown membership level: "${level}".`);
  }
  return label;
}

function formatCustomerRow(customer, detail) {
  const summaryColumns = [fullName(customer), membershipLabel(customer.membershipLevel)];
  const columns =
    detail === 'summary'
      ? summaryColumns
      : [...summaryColumns, `${totalSpent(customer).toLocaleString('en-US')} تومان`, customer.email];
  return columns.join(COLUMN_SEPARATOR);
}

export function buildCustomerReport(customers, options) {
  const reportedCustomers = options.includeInactive
    ? customers
    : customers.filter((customer) => isActive(customer, options.now));

  const rows = reportedCustomers.map((customer) => formatCustomerRow(customer, options.detail));
  return [options.title, ...rows].join('\n');
}
```

<div dir="rtl">

### تحلیل پیاده‌سازی صحیح: هر Smell چطور رفع شد؟

| Smell | رفع | تکنیک Refactoring |
|---|---|---|
| Mysterious Name | `buildCustomerReport`، `reportedCustomers`، `formatCustomerRow` | Rename |
| Long Parameter List + Flag Argument | یک `options` با نام‌های گویا: `detail: 'summary'` | Introduce Parameter Object |
| Global Data | `reportCount` حذف شد؛ شمارش (اگر لازم باشد) مسئولیت فراخواننده است | Remove Side Effect |
| Long Function | چهار تابع کوچک با یک کار | Extract Function |
| Comments | کامنت‌ها با نام توابع جایگزین شدند | Extract Function |
| Magic Number | `ACTIVE_WITHIN_DAYS`، `MS_PER_DAY` | Replace Magic Number with Constant |
| Primitive Obsession / Switch | `MembershipLevel` Union + جدول برچسب‌ها | Replace Type Code with Union |
| Message Chains | داده‌ی `Customer` تخت شده (`firstName`). در عمل این تبدیل در لایه‌ی دریافت داده (Mapper) انجام می‌شود | Hide Delegate |
| Feature Envy | `fullName` و `totalSpent` توابع مستقل روی `Customer` هستند و جای دیگر هم قابل استفاده‌اند | Move Function |
| Dead Code | حذف شد | Remove Dead Code |
| Duplication | `summaryColumns` یک بار ساخته و در هر دو حالت استفاده می‌شود | Extract Variable |
| باگ سطح ناشناخته | TS: خطای کامپایل. JS: خطای صریح در `membershipLabel` | — |

**یک نکته‌ی ظریف: `now` به‌عنوان پارامتر.** نسخه‌ی بد از `Date.now()` مستقیماً استفاده می‌کرد. این یعنی تست تابع به **ساعت سیستم** وابسته است و ممکن است فردا شکست بخورد. با گرفتن `now` به‌عنوان ورودی، تابع Pure شد و تست قطعی (Deterministic) است.

## ۶. مقایسه‌ی دو پیاده‌سازی

| معیار | Bad Code | Clean Code |
|---|---|---|
| تعداد Smellهای قابل‌نام‌گذاری | بیش از ۱۰ | تقریباً صفر |
| قابل تست بودن | وابسته به ساعت سیستم و متغیر سراسری | Pure؛ تست قطعی |
| افزودن سطح «پلاتینیوم» | پیدا کردن همه‌ی `switch`ها | یک خط در Union، یک خط در جدول؛ کامپایلر بقیه را نشان می‌دهد |
| خوانایی فراخوانی | `generate(users, true, 'short', ...)` | `buildCustomerReport(customers, { detail: 'summary', ... })` |
| استفاده‌ی مجدد | صفر | `fullName`، `totalSpent`، `isActive` در جاهای دیگر |

## ۷. کاربرد در پروژه‌های واقعی

- **React:** رایج‌ترین Smellها: **Long Function** (کامپوننت ۵۰۰ خطی)، **Prop Drilling** که نوعی Message Chain است، **Duplicated Code** در کامپوننت‌های مشابه، و **Flag Argument** به شکل `<Button primary secondary small large>`.
- **Next.js:** **Divergent Change** در فایل‌های `page.tsx` که هم Data Fetching، هم منطق و هم UI را دارند.
- **Node.js:** **Shotgun Surgery** وقتی اضافه کردن یک فیلد به موجودیت، نیاز به تغییر Model، DTO، Validator، Controller و Migration در پنج فایل بدون ارتباط صریح دارد. **Global Data** به شکل `config` قابل تغییر سراسری.
- **ابزار:** بسیاری از Smellهای ساده را ESLint می‌گیرد (`no-magic-numbers`، `max-params`، `max-lines-per-function`، `complexity`). Smellهای طراحی (Feature Envy، Shotgun Surgery) فقط با Review انسانی دیده می‌شوند.

## ۸. اشتباهات رایج

1. **برخورد با Smell مثل قانون.** Smell یعنی «بررسی کن». یک `switch` در Reducer اشکالی ندارد.
2. **اصلاح همه‌ی Smellها در یک PR.** PR غول‌پیکر Review نمی‌شود. Smellها را در گام‌های کوچک رفع کن.
3. **جایگزینی Smell با Smell دیگر.** حذف Duplicated Code با یک تابع عمومی پر از Flag، یعنی Flag Argument جایگزین تکرار شده.
4. **دانستن نام بدون فهم علت.** هدف فقط برچسب زدن نیست؛ باید بدانی آن Smell در **تغییر بعدی** چه هزینه‌ای ایجاد می‌کند.
5. **Refactoring بدون تست.** در این درس، تست مثال قابل اجرا نشان می‌دهد که نسخه‌ی تمیز همان خروجی را تولید می‌کند.

## ۹. Code Review: دیدگاه Senior Engineer

یک Senior برای این کد ده کامنت جدا نمی‌گذارد. اولویت‌بندی می‌کند:

> **blocking/bug:** `switch (u.type)` حالت `default` ندارد. کاربر با نوع ناشناخته در گزارش `undefined` نشان داده می‌شود.

> **blocking/testability:** `reportCount++` و `Date.now()` تابع را غیرقطعی و وابسته به State سراسری می‌کنند. لطفاً `now` را پارامتر کن و شمارش را به فراخواننده ببر.

> **suggestion/design:** شش پارامتر با دو Flag خوانایی فراخوانی را از بین برده است. یک `options` Object با `detail: 'summary' | 'full'` پیشنهاد می‌کنم. کامنت‌های `// filter users` و `// build lines` هم نشان می‌دهند این دو بخش می‌توانند تابع جدا باشند.

> **nit:** کد کامنت‌شده‌ی `oldFormat` را حذف کن؛ در تاریخچه‌ی Git هست.

ترتیب: **باگ ← تست‌پذیری ← طراحی ← جزئیات.**

## ۱۰. مثال قابل اجرا

- [examples/typescript/00-foundations/user-report.bad.ts](../../examples/typescript/00-foundations/user-report.bad.ts)
- [examples/typescript/00-foundations/user-report.clean.ts](../../examples/typescript/00-foundations/user-report.clean.ts)
- [examples/typescript/00-foundations/user-report.test.ts](../../examples/typescript/00-foundations/user-report.test.ts)
- [examples/javascript/00-foundations/user-report.clean.js](../../examples/javascript/00-foundations/user-report.clean.js)

## ۱۱. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/07-code-smells.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/07-code-smells.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/07-code-smells.md)

## ۱۲. جمع‌بندی

- Code Smell علامت سطحی یک مشکل عمیق‌تر است؛ سریع دیده می‌شود و همیشه مشکل نیست.
- پنج دسته: Bloaters، OO Abusers، Change Preventers، Dispensables، Couplers.
- هر Smell یک یا چند تکنیک Refactoring متناظر دارد (ماژول ۱۱).
- Smellها اغلب باگ‌ها را پنهان می‌کنند.
- اولویت در Review: باگ، تست‌پذیری، طراحی، جزئیات.
- Smell را در کد پایدار، کدی که قرار است حذف شود یا کد بدون تست، با احتیاط یا اصلاً اصلاح نکن.

### چک‌لیست خودارزیابی

- [ ] می‌توانم تفاوت Divergent Change و Shotgun Surgery را توضیح دهم.
- [ ] می‌توانم Feature Envy را در کد تشخیص دهم.
- [ ] برای حداقل ۱۰ Smell، تکنیک رفع را می‌دانم.
- [ ] می‌دانم چرا `Date.now()` داخل تابع، تست‌پذیری را کم می‌کند.

## منابع تکمیلی

- Martin Fowler — [Code Smell](https://martinfowler.com/bliki/CodeSmell.html)
- Martin Fowler — *Refactoring* (ویرایش دوم)، فصل ۳: Bad Smells in Code — [صفحه‌ی کتاب](https://martinfowler.com/books/refactoring.html)
- Refactoring Guru — [Code Smells](https://refactoring.guru/refactoring/smells)
- Robert C. Martin — *Clean Code*، فصل ۱۷: Smells and Heuristics — [O'Reilly](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)

</div>
