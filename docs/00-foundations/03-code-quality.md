<div dir="rtl">

# درس ۳: کیفیت کد (Code Quality)

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [ویژگی‌های کد تمیز](02-characteristics-of-clean-code.md) · درس بعد: [خوانایی](04-readability.md)

## مقدمه

«این کد کیفیت ندارد» جمله‌ای است که زیاد می‌شنوی، ولی معمولاً هیچ‌کس دقیق نمی‌گوید منظورش چیست. کیفیت از دید کاربر، مدیر محصول و توسعه‌دهنده سه معنای متفاوت دارد. در این درس یاد می‌گیریم کیفیت را **تفکیک کنیم، بسنجیم و درباره‌اش با دلیل صحبت کنیم** — و همچنین بفهمیم کدام معیارها گمراه‌کننده‌اند.

## اهداف یادگیری

در پایان این درس باید بتوانم:

- تفاوت کیفیت بیرونی (External Quality) و کیفیت درونی (Internal Quality) را توضیح دهم.
- ویژگی‌های اصلی مدل کیفیت ISO/IEC 25010 را بشناسم، به‌ویژه Maintainability.
- معیارهای Cyclomatic Complexity و Cognitive Complexity را محاسبه و تفسیر کنم.
- محدودیت‌های Code Coverage و سایر معیارها را بدانم.
- ابزارهای خودکار کیفیت (TypeScript، ESLint، Prettier، تست) را در جای درست به کار ببرم.

## ۱. مفهوم اصلی

### کیفیت بیرونی در برابر کیفیت درونی

Martin Fowler در مقاله‌ی Is High Quality Software Worth the Cost تمایز مهمی قائل می‌شود:

- **کیفیت بیرونی:** آنچه کاربر می‌بیند. رابط کاربری خوب، باگ کم، سرعت مناسب. کاربر **می‌تواند** آن را قضاوت کند.
- **کیفیت درونی:** آنچه فقط توسعه‌دهنده می‌بیند. ساختار کد، خوانایی، تست‌ها، طراحی ماژول‌ها. کاربر و حتی مدیر **نمی‌تواند** آن را مستقیماً ببیند.

مشکل اینجاست: چون کیفیت درونی دیده نمی‌شود، معمولاً اولین چیزی است که زیر فشار زمان قربانی می‌شود. استدلال Fowler این است که کیفیت درونی **هزینه نیست، سرمایه است**: کد با کیفیت درونی بالا، تحویل فیچرهای بعدی را **ارزان‌تر** می‌کند. پس بحث «کیفیت در برابر سرعت» یک دوگانه‌ی کاذب است؛ در هر بازه‌ای بیش از چند هفته، کیفیت درونی همان سرعت است.

### مدل استاندارد: ISO/IEC 25010

استاندارد ISO/IEC 25010 کیفیت محصول نرم‌افزاری را به چند ویژگی اصلی تقسیم می‌کند. از جمله: Functional Suitability، Performance Efficiency، Compatibility، Usability (در نسخه‌ی جدید Interaction Capability)، Reliability، Security، Maintainability و Portability.

Clean Code بیشترین تأثیر را روی **Maintainability** دارد که خودش این زیرویژگی‌ها را دارد:

| زیرویژگی | معنی | ارتباط با Clean Code |
|---|---|---|
| Modularity | تغییر یک جزء کمترین اثر را روی بقیه دارد | Coupling پایین، Cohesion بالا |
| Reusability | جزء در جای دیگر قابل استفاده است | توابع Pure و متمرکز |
| Analysability | می‌توان فهمید یک تغییر چه اثری دارد یا علت خطا کجاست | خوانایی و نام‌گذاری |
| Modifiability | می‌توان بدون ایجاد باگ تغییر داد | نبودِ تکرار و Side Effect پنهان |
| Testability | می‌توان معیار تست تعریف و اجرا کرد | وابستگی‌های صریح |

### چرا اندازه‌گیری؟

«چیزی که اندازه‌گیری نشود، بهبود نمی‌یابد» تا حدی درست است. اما در کیفیت کد، معیارها **علامت** هستند، نه **هدف**. قانون Goodhart هشدار می‌دهد: وقتی یک معیار به هدف تبدیل شود، دیگر معیار خوبی نیست. اگر تیم را فقط با Coverage بسنجی، تست‌هایی می‌نویسند که خطوط را اجرا می‌کنند ولی چیزی را بررسی نمی‌کنند.

## ۲. توضیح فنی: معیارهای رایج کیفیت

### Cyclomatic Complexity (پیچیدگی حلقوی)

Thomas McCabe در ۱۹۷۶ این معیار را معرفی کرد: **تعداد مسیرهای مستقل اجرایی** در یک تابع. محاسبه‌ی ساده: از ۱ شروع کن و برای هر `if`، `else if`، `case`، `for`، `while`، `&&`، `||`، `?:` و `catch` یکی اضافه کن.

- ۱ تا ۱۰: معمولاً قابل‌قبول.
- بیش از ۱۰: هشدار؛ تابع احتمالاً بیش از یک کار انجام می‌دهد و تست کاملش سخت است.

اهمیت عملی: **حداقل تعداد تست** لازم برای پوشاندن همه‌ی شاخه‌ها تقریباً برابر Cyclomatic Complexity است. پیچیدگی ۱۵ یعنی حداقل ۱۵ تست.

ESLint یک قانون داخلی برای این دارد:

</div>

```javascript
// eslint.config.js
export default [
  {
    rules: {
      complexity: ['warn', { max: 10 }],
      'max-depth': ['warn', 3],
    },
  },
];
```

<div dir="rtl">

### Cognitive Complexity (پیچیدگی شناختی)

این معیار را شرکت SonarSource ارائه داد چون Cyclomatic Complexity یک ضعف دارد: یک `switch` با ۱۰ حالت ساده و ۱۰ `if` تودرتو امتیاز مشابه می‌گیرند، در حالی که دومی خیلی سخت‌تر فهمیده می‌شود. Cognitive Complexity برای **تودرتو بودن** جریمه‌ی اضافه در نظر می‌گیرد: هر `if` داخل `if` دیگر، امتیاز بیشتری دارد. این معیار به «سختیِ فهم برای انسان» نزدیک‌تر است.

### سایر معیارها و محدودیت‌هایشان

| معیار | چه می‌گوید | چه **نمی‌گوید** |
|---|---|---|
| Lines of Code | اندازه | کیفیت؛ کد کوتاه می‌تواند ناخوانا باشد |
| Code Coverage | چه درصدی از کد توسط تست‌ها **اجرا** شده | اینکه تست‌ها واقعاً چیزی را **بررسی** می‌کنند یا نه |
| Duplication % | درصد کد تکراری | اینکه تکرار «اتفاقی» است یا «دانش تکراری» |
| Coupling (Fan-in / Fan-out) | تعداد وابستگی‌های یک ماژول | اینکه وابستگی‌ها پایدارند یا ناپایدار |
| تعداد هشدارهای Lint | رعایت قواعد سطحی | کیفیت طراحی |

نتیجه: معیارها برای **پیدا کردن نقاط مشکوک** عالی‌اند (کدام فایل را اول Review کنم؟)، اما جای قضاوت انسانی را نمی‌گیرند.

### هرم ابزارهای کیفیت

ابزارها را از ارزان و خودکار به گران و انسانی بچین:

1. **Prettier** — فرمت. بحث‌های «فاصله و ویرگول» را از Review حذف می‌کند.
2. **TypeScript strict** — یک کلاس کامل از باگ‌ها (undefined، نوع اشتباه) را قبل از اجرا می‌گیرد.
3. **ESLint** — الگوهای مشکوک (`==`، متغیر استفاده‌نشده، پیچیدگی بالا).
4. **تست خودکار** — درستی رفتار.
5. **Code Review انسانی** — طراحی، نام‌گذاری، تناسب با دامنه. وقت انسان باید **فقط** صرف چیزهایی شود که ماشین نمی‌تواند بررسی کند.

## ۳. مثال اشتباه (Bad Code)

سناریو: محاسبه‌ی هزینه‌ی ارسال بر اساس منطقه (تهران، سایر شهرها، بین‌المللی)، وزن بسته و نوع ارسال (عادی یا اکسپرس).

</div>

```javascript
// JavaScript — Bad implementation (cyclomatic complexity = 17)
function shipping(region, weight, express) {
  let cost;
  if (region === 'tehran') {
    if (weight <= 1) {
      cost = express ? 60000 : 30000;
    } else if (weight <= 5) {
      cost = express ? 90000 : 50000;
    } else {
      cost = express ? 150000 : 80000;
    }
  } else if (region === 'province') {
    if (weight <= 1) {
      cost = express ? 90000 : 45000;
    } else if (weight <= 5) {
      cost = express ? 130000 : 70000;
    } else {
      cost = express ? 200000 : 110000;
    }
  } else if (region === 'international') {
    if (express) throw new Error('no express');
    cost = weight <= 1 ? 500000 : weight <= 5 ? 900000 : 1500000;
  }
  return cost;
}
```

```typescript
// TypeScript — Bad implementation
function shipping(region: string, weight: number, express: boolean) {
  let cost;
  if (region === 'tehran') {
    if (weight <= 1) {
      cost = express ? 60000 : 30000;
    } else if (weight <= 5) {
      cost = express ? 90000 : 50000;
    } else {
      cost = express ? 150000 : 80000;
    }
  } else if (region === 'province') {
    if (weight <= 1) {
      cost = express ? 90000 : 45000;
    } else if (weight <= 5) {
      cost = express ? 130000 : 70000;
    } else {
      cost = express ? 200000 : 110000;
    }
  } else if (region === 'international') {
    if (express) throw new Error('no express');
    cost = weight <= 1 ? 500000 : weight <= 5 ? 900000 : 1500000;
  }
  return cost;
}
```

<div dir="rtl">

## ۴. تحلیل کد بد

- **Cyclomatic Complexity برابر ۱۷:** از ۱ شروع کن؛ سه شاخه‌ی منطقه (۳)، چهار شرط وزن داخل تهران و شهرستان (۴)، شش ternary اکسپرس (۶)، شرط اکسپرس بین‌المللی (۱) و دو ternary تودرتوی وزن بین‌المللی (۲). جمع: ۱۷. ESLint هم دقیقاً همین عدد را گزارش می‌دهد. یعنی برای پوشش کامل شاخه‌ها حداقل ۱۷ تست لازم داری.
- **Cognitive Complexity بالا:** سه سطح تودرتو (`if` منطقه ← `if` وزن ← ternary اکسپرس). خواننده باید سه شرط را هم‌زمان در ذهن نگه دارد.
- **داده پنهان در منطق:** ۱۵ عدد قیمت در میان شرط‌ها پراکنده‌اند. این‌ها **داده** هستند (یک جدول قیمت)، ولی به شکل **کد** نوشته شده‌اند. تغییر یک قیمت یعنی پیدا کردن مسیر درست در درخت شرط‌ها.
- **ساختار تکراری:** منطق «وزن ≤ ۱، ≤ ۵، بیشتر» سه بار تکرار شده است (Duplicated Code).
- **باگ پنهان:** اگر `region` مقدار ناشناخته‌ای مثل `'Tehran'` (با T بزرگ) باشد، تابع `undefined` برمی‌گرداند و بعداً `NaN` در فاکتور ظاهر می‌شود.
- **نوع‌های ضعیف (TS):** `region: string` هر رشته‌ای را قبول می‌کند؛ نوع بازگشتی ضمنی `number | undefined` است و کسی متوجه نمی‌شود.
- **پیام خطای مبهم:** `'no express'` به کاربر یا توسعه‌دهنده نمی‌گوید چه شده است.

## ۵. پیاده‌سازی صحیح (Clean Code)

ایده‌ی اصلی: **جدول به‌جای درخت شرط** (Table-driven design). داده را از منطق جدا کن.

</div>

```typescript
// TypeScript — Clean implementation (cyclomatic complexity of each function ≤ 3)
export type ShippingRegion = 'tehran' | 'province' | 'international';
export type ShippingSpeed = 'standard' | 'express';
type WeightTier = 'light' | 'medium' | 'heavy';

const LIGHT_PARCEL_MAX_KG = 1;
const MEDIUM_PARCEL_MAX_KG = 5;

// Prices in Toman. `null` means the speed is not offered for that region.
const SHIPPING_PRICE_TABLE: Record<
  ShippingRegion,
  Record<ShippingSpeed, Record<WeightTier, number> | null>
> = {
  tehran: {
    standard: { light: 30_000, medium: 50_000, heavy: 80_000 },
    express: { light: 60_000, medium: 90_000, heavy: 150_000 },
  },
  province: {
    standard: { light: 45_000, medium: 70_000, heavy: 110_000 },
    express: { light: 90_000, medium: 130_000, heavy: 200_000 },
  },
  international: {
    standard: { light: 500_000, medium: 900_000, heavy: 1_500_000 },
    express: null,
  },
};

function toWeightTier(weightKg: number): WeightTier {
  if (weightKg <= LIGHT_PARCEL_MAX_KG) return 'light';
  if (weightKg <= MEDIUM_PARCEL_MAX_KG) return 'medium';
  return 'heavy';
}

export function calculateShippingFee(
  region: ShippingRegion,
  weightKg: number,
  speed: ShippingSpeed,
): number {
  const pricesByWeight = SHIPPING_PRICE_TABLE[region][speed];
  if (pricesByWeight === null) {
    throw new Error(`${speed} shipping is not available for region "${region}".`);
  }
  return pricesByWeight[toWeightTier(weightKg)];
}
```

```javascript
// JavaScript — Clean implementation
const LIGHT_PARCEL_MAX_KG = 1;
const MEDIUM_PARCEL_MAX_KG = 5;

const SHIPPING_PRICE_TABLE = Object.freeze({
  tehran: {
    standard: { light: 30_000, medium: 50_000, heavy: 80_000 },
    express: { light: 60_000, medium: 90_000, heavy: 150_000 },
  },
  province: {
    standard: { light: 45_000, medium: 70_000, heavy: 110_000 },
    express: { light: 90_000, medium: 130_000, heavy: 200_000 },
  },
  international: {
    standard: { light: 500_000, medium: 900_000, heavy: 1_500_000 },
    express: null,
  },
});

function toWeightTier(weightKg) {
  if (weightKg <= LIGHT_PARCEL_MAX_KG) return 'light';
  if (weightKg <= MEDIUM_PARCEL_MAX_KG) return 'medium';
  return 'heavy';
}

export function calculateShippingFee(region, weightKg, speed) {
  const pricesBySpeed = SHIPPING_PRICE_TABLE[region];
  if (pricesBySpeed === undefined) {
    throw new Error(`Unknown shipping region: "${region}".`);
  }
  const pricesByWeight = pricesBySpeed[speed];
  if (pricesByWeight === null || pricesByWeight === undefined) {
    throw new Error(`${speed} shipping is not available for region "${region}".`);
  }
  return pricesByWeight[toWeightTier(weightKg)];
}
```

<div dir="rtl">

### تحلیل پیاده‌سازی صحیح

- **پیچیدگی هر تابع ≤ ۳.** `toWeightTier` دو شرط دارد و `calculateShippingFee` یکی. کل منطق تصمیم‌گیری در یک نگاه دیده می‌شود.
- **جدول قیمت = مستند کسب‌وکار.** مدیر محصول می‌تواند این جدول را بخواند. تغییر قیمت یعنی تغییر یک عدد در یک جای مشخص. در گام بعدی می‌توان این جدول را از دیتابیس یا فایل تنظیمات خواند بدون اینکه منطق تغییر کند.
- **حذف تکرار:** منطق «وزن به رده» فقط یک بار در `toWeightTier` نوشته شده است.
- **نوع‌ها باگ را حذف کردند:** با `ShippingRegion`، مقدار `'Tehran'` در زمان کامپایل رد می‌شود. نوع `Record<ShippingRegion, ...>` تضمین می‌کند که برای هر منطقه و هر سرعت، قیمت تعریف شده باشد (یا صریحاً `null`).
- **`'express'` به‌جای `true`:** پارامتر Boolean `express` با یک Union خوانا جایگزین شد. فراخوانی `calculateShippingFee('tehran', 2, 'express')` بدون نگاه به امضا قابل فهم است؛ برخلاف `shipping('tehran', 2, true)`. (درس Avoiding Boolean Flags در ماژول ۰۲.)
- **پیام خطای دقیق** که هم سرعت و هم منطقه را می‌گوید.

## ۶. مقایسه‌ی دو پیاده‌سازی

| معیار | Bad Code | Clean Code |
|---|---|---|
| Cyclomatic Complexity | ۱۷ در یک تابع | حداکثر ۳ در هر تابع |
| سطح تودرتو | ۳ | ۱ |
| محل قیمت‌ها | پراکنده در شرط‌ها | یک جدول |
| منطقه‌ی ناشناخته | `undefined` بی‌صدا | خطای کامپایل (TS) یا خطای صریح (JS) |
| اضافه کردن منطقه‌ی جدید | یک شاخه‌ی ۹ خطی جدید | یک ردیف در جدول + یک مقدار در Union |
| تعداد تست لازم برای پوشش شاخه‌ها | حداقل ۱۷ | حدود ۵، به‌علاوه‌ی تست‌های مرزی جدول |

## ۷. کاربرد در پروژه‌های واقعی

- **CI Pipeline:** در پروژه‌های حرفه‌ای، `tsc --noEmit`، `eslint` و `vitest run` در هر Pull Request اجرا می‌شوند و PR با شکست آن‌ها Merge نمی‌شود. این بوت‌کمپ هم همین را با `npm run check` دارد.
- **React:** کامپوننت‌هایی با پیچیدگی بالا معمولاً شرط‌های نمایشی زیادی دارند (`isLoading && !error && items.length > 0 ? ... : ...`). جدا کردن «حالت» در یک Discriminated Union و نگاشت آن به UI، پیچیدگی را پایین می‌آورد.
- **Backend:** قیمت‌گذاری، مالیات و قوانین تخفیف تقریباً همیشه کاندیدای Table-driven design هستند، چون تیم کسب‌وکار آن‌ها را مرتب تغییر می‌دهد.

## ۸. اشتباهات رایج

1. **هدف کردن Coverage صددرصد.** Coverage بالا با تست‌های بدون `expect` بی‌ارزش است. معیار بهتر: «اگر این خط را خراب کنم، آیا تستی شکست می‌خورد؟» (ایده‌ی Mutation Testing).
2. **غیرفعال کردن قوانین Lint به‌جای اصلاح کد.** `// eslint-disable-next-line complexity` معمولاً یعنی مشکل را زیر فرش جارو کردی.
3. **تبدیل همه‌ی شرط‌ها به جدول.** وقتی منطق واقعاً «رفتار» متفاوت دارد (نه فقط «عدد» متفاوت)، جدول کمکی نمی‌کند و ممکن است Polymorphism یا Strategy (ماژول ۱۰) مناسب‌تر باشد.
4. **فکر کردن اینکه کیفیت درونی را بعداً اضافه می‌کنیم.** کیفیت درونی تدریجی ساخته می‌شود؛ «فاز کیفیت» در پایان پروژه وجود ندارد.

## ۹. Code Review: دیدگاه Senior Engineer

> **blocking:** این تابع پیچیدگی ۱۷ دارد و قیمت‌ها داخل شرط‌ها پنهان‌اند. با توجه به اینکه تیم مالی ماهی یک بار قیمت‌ها را تغییر می‌دهد، پیشنهاد می‌کنم قیمت‌ها را به یک جدول منتقل کنیم و منطق فقط «وزن به رده» را حساب کند.

> **blocking/bug:** اگر `region` مقدار ناشناخته باشد، `undefined` برمی‌گردد و در فاکتور `NaN` می‌بینیم. لطفاً `region` را Union Type کن یا خطای صریح بده.

> **suggestion:** `express: boolean` در محل فراخوانی خوانا نیست (`shipping('tehran', 2, true)`). پیشنهاد: `speed: 'standard' | 'express'`.

> **tests:** لطفاً تست‌های مرزی برای وزن دقیقاً ۱ و ۵ کیلوگرم و کمی بیشتر از آن‌ها اضافه کن؛ باگ‌های `<` و `<=` همیشه روی مرزها پیدا می‌شوند.

## ۱۰. مثال قابل اجرا

- [examples/typescript/00-foundations/shipping-fee.bad.ts](../../examples/typescript/00-foundations/shipping-fee.bad.ts)
- [examples/typescript/00-foundations/shipping-fee.clean.ts](../../examples/typescript/00-foundations/shipping-fee.clean.ts)
- [examples/typescript/00-foundations/shipping-fee.test.ts](../../examples/typescript/00-foundations/shipping-fee.test.ts)
- [examples/javascript/00-foundations/shipping-fee.clean.js](../../examples/javascript/00-foundations/shipping-fee.clean.js)

دستور `npm run lint` را اجرا کن: ESLint روی فایل `shipping-fee.bad.ts` هشدار `Function 'shipping' has a complexity of 17` و هشدار اعداد جادویی می‌دهد، ولی روی نسخه‌ی تمیز هیچ هشداری نمی‌دهد.

## ۱۱. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/03-code-quality.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/03-code-quality.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/03-code-quality.md)

## ۱۲. جمع‌بندی

- کیفیت **بیرونی** را کاربر می‌بیند؛ کیفیت **درونی** را فقط توسعه‌دهنده. کیفیت درونی سرمایه است، نه هزینه.
- Maintainability در ISO/IEC 25010 شامل Modularity، Reusability، Analysability، Modifiability و Testability است.
- Cyclomatic Complexity تعداد مسیرهاست و حداقل تعداد تست را نشان می‌دهد؛ Cognitive Complexity سختی فهم انسانی را بهتر می‌سنجد.
- معیارها علامت‌اند، نه هدف (قانون Goodhart).
- ماشین را برای فرمت، نوع و الگوهای ساده به کار بگیر تا وقت انسان صرف طراحی شود.
- وقتی شرط‌ها فقط «داده‌ی متفاوت» برمی‌گردانند، جدول جایگزین درخت شرط کن.

### چک‌لیست خودارزیابی

- [ ] می‌توانم Cyclomatic Complexity یک تابع ساده را با دست حساب کنم.
- [ ] می‌دانم چرا Coverage صددرصد تضمین کیفیت نیست.
- [ ] می‌توانم تفاوت کیفیت بیرونی و درونی را برای یک مدیر محصول توضیح دهم.
- [ ] می‌توانم تشخیص دهم یک درخت شرط کاندیدای Table-driven design است یا نه.

## منابع تکمیلی

- Martin Fowler — [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html)
- [ISO/IEC 25010 — Product Quality Model](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010)
- ESLint — [قانون complexity](https://eslint.org/docs/latest/rules/complexity)
- *The Pragmatic Programmer*، بخش Software Entropy — [صفحه‌ی کتاب](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)

</div>
