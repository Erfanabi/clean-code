<div dir="rtl">

# درس ۹: Clean Code در برابر Design Patterns

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [Clean Code در برابر Clean Architecture](08-clean-code-vs-clean-architecture.md) · درس بعد: [قانون پیشاهنگ](10-boy-scout-rule.md)

## مقدمه

بیشتر توسعه‌دهنده‌ها مرحله‌ای را تجربه می‌کنند که بعد از خواندن درباره‌ی Design Patternها، **همه جا** الگو می‌بینند: یک Factory برای ساختن دو نوع شیء، یک Strategy برای دو `if`، یک Singleton برای هر سرویس. نتیجه کدی است که «حرفه‌ای» به نظر می‌رسد ولی فهمیدنش سه برابر سخت‌تر از نسخه‌ی ساده است. این درس می‌پرسد: **Design Pattern چه نسبتی با Clean Code دارد؟ کمک است یا مانع؟** جواب: هر دو — بستگی دارد که الگو مسئله‌ی **واقعی** را حل کند یا مسئله‌ای **خیالی** را.

## اهداف یادگیری

در پایان این درس باید بتوانم:

- تعریف Design Pattern و تاریخچه‌ی آن (GoF) را توضیح دهم.
- تفاوت هدف Clean Code و Design Patterns را بگویم.
- نشانه‌های استفاده‌ی بی‌مورد از الگو (Pattern Overuse) را تشخیص دهم.
- با «اول ساده، بعد الگو وقتی درد واقعی ظاهر شد» تصمیم بگیرم.
- تشخیص دهم که JavaScript/TypeScript مدرن بسیاری از الگوها را با امکانات خود زبان ساده‌تر کرده است.

## ۱. مفهوم اصلی

### Design Pattern چیست؟

**Design Pattern یک راه‌حل عمومی و قابل استفاده‌ی مجدد برای یک مسئله‌ی تکرارشونده در طراحی نرم‌افزار، در یک زمینه‌ی مشخص است.** الگو کد آماده نیست؛ یک **ایده** و **واژه** است.

### تاریخچه

- ۱۹۷۷: معمار ساختمان، Christopher Alexander، کتاب A Pattern Language را نوشت؛ الگوهایی برای طراحی شهر و ساختمان.
- ۱۹۸۷: Kent Beck و Ward Cunningham ایده‌ی الگو را به برنامه‌نویسی آوردند.
- ۱۹۹۴: کتاب Design Patterns: Elements of Reusable Object-Oriented Software نوشته‌ی چهار نفر (Gamma، Helm، Johnson، Vlissides؛ معروف به **Gang of Four** یا GoF)، ۲۳ الگو را در سه دسته‌ی Creational، Structural و Behavioral معرفی کرد. مثال‌ها به ++C و Smalltalk بودند.

### ارزش اصلی الگوها: واژگان مشترک

مهم‌ترین فایده‌ی الگوها اغلب نادیده گرفته می‌شود: **زبان مشترک**. وقتی در Code Review می‌گویی «اینجا Adapter بگذاریم»، هم‌تیمی‌ات در یک کلمه کل ساختار را می‌فهمد. بدون این واژه، باید چند پاراگراف توضیح بدهی.

### نسبت Clean Code و Design Patterns

| | Clean Code | Design Patterns |
|---|---|---|
| **هدف** | کاهش بار ذهنی خواننده | حل یک مسئله‌ی طراحی تکرارشونده |
| **پیش‌فرض** | همیشه لازم است | فقط وقتی مسئله‌ی آن الگو وجود دارد |
| **خطر زیاده‌روی** | کم (مثل شکستن افراطی توابع) | زیاد (لایه‌های غیرضروری) |
| **ترتیب** | اول | بعد، و فقط در صورت نیاز |

ارتباط کلیدی: **الگو ابزاری در خدمت Clean Code است، نه جایگزین آن.** اگر الگو کد را خواناتر و قابل تغییرتر کند، Clean Code است. اگر فقط پیچیدگی اضافه کند، Speculative Generality است (Smell درس ۷).

## ۲. توضیح فنی

### نشانه‌های Pattern Overuse

- **الگو قبل از مسئله:** «بیایید برای این Factory بسازیم» قبل از اینکه حتی دو نوع داشته باشیم.
- **یک پیاده‌سازی برای یک Interface:** Interface ای که فقط یک پیاده‌سازی دارد و هیچ دلیل مشخصی (مثل تست یا مرز معماری) برایش نیست.
- **نام الگو در نام کلاس، بدون نیاز:** `UserServiceFactoryProviderImpl`.
- **کد اضافه بیشتر از کد اصلی:** ۵۰ خط ساختار برای ۵ خط منطق.
- **سختی ردیابی جریان:** برای فهمیدن اینکه کدام کد اجرا می‌شود، باید از ۴ فایل عبور کنی.

### JavaScript مدرن بسیاری از الگوها را ساده کرده است

بسیاری از الگوهای GoF برای زبان‌هایی طراحی شدند که توابع شهروند درجه‌یک (First-class) نبودند. در JavaScript و TypeScript:

| الگو در GoF | معادل ساده در JS/TS |
|---|---|
| Strategy | یک تابع که به‌عنوان پارامتر پاس داده می‌شود، یا یک Object از توابع |
| Command | یک Closure |
| Iterator | `for...of` و Generatorها (`function*`) |
| Singleton | یک ES Module (ماژول‌ها فقط یک بار ارزیابی می‌شوند) |
| Observer | `EventTarget`، `EventEmitter` در Node.js |
| Decorator (رفتاری) | توابع مرتبه‌بالا (Higher-order Functions) |
| Factory ساده | یک تابع که Object برمی‌گرداند |

این به معنی بی‌ارزش بودن الگوها نیست: **ایده** همان است، فقط **پیاده‌سازی** ساده‌تر شده است.

### قاعده‌ی سه (Rule of Three)

یک قاعده‌ی سرانگشتی که Fowler در Refactoring از Don Roberts نقل می‌کند: بار اول کاری را انجام بده؛ بار دوم که کار مشابهی کردی، با اکراه تکرار کن؛ **بار سوم** Refactor کن. همین منطق برای الگوها صدق می‌کند: وقتی سومین نوع پرداخت اضافه شد، الگو را معرفی کن، نه وقتی فقط یکی داری.

## ۳. مثال اشتباه (Bad Code): Over-engineering

سناریو: فروشگاه دو نوع تخفیف دارد: درصدی و مبلغ ثابت. یک توسعه‌دهنده‌ی مشتاق الگوها این را نوشته است:

</div>

```typescript
// TypeScript — Bad: pattern overuse for two simple discount kinds
interface IDiscountStrategy {
  apply(amount: number): number;
}

abstract class AbstractDiscountStrategy implements IDiscountStrategy {
  protected constructor(protected readonly value: number) {}
  abstract apply(amount: number): number;
}

class PercentageDiscountStrategy extends AbstractDiscountStrategy {
  constructor(value: number) { super(value); }
  apply(amount: number): number { return amount - (amount * this.value) / 100; }
}

class FixedDiscountStrategy extends AbstractDiscountStrategy {
  constructor(value: number) { super(value); }
  apply(amount: number): number { return amount - this.value; }
}

class DiscountStrategyFactory {
  private static instance: DiscountStrategyFactory;
  private constructor() {}
  static getInstance(): DiscountStrategyFactory {
    if (!this.instance) this.instance = new DiscountStrategyFactory();
    return this.instance;
  }
  create(type: string, value: number): IDiscountStrategy {
    if (type === 'percentage') return new PercentageDiscountStrategy(value);
    if (type === 'fixed') return new FixedDiscountStrategy(value);
    throw new Error('Unknown');
  }
}

class DiscountContext {
  constructor(private strategy: IDiscountStrategy) {}
  execute(amount: number): number { return this.strategy.apply(amount); }
}

// Usage
const strategy = DiscountStrategyFactory.getInstance().create('percentage', 10);
const finalAmount = new DiscountContext(strategy).execute(200_000);
```

```javascript
// JavaScript — Bad: the same over-engineering without types
class AbstractDiscountStrategy {
  constructor(value) { this.value = value; }
  apply() { throw new Error('Not implemented'); }
}
class PercentageDiscountStrategy extends AbstractDiscountStrategy {
  apply(amount) { return amount - (amount * this.value) / 100; }
}
class FixedDiscountStrategy extends AbstractDiscountStrategy {
  apply(amount) { return amount - this.value; }
}
class DiscountStrategyFactory {
  static instance;
  static getInstance() {
    if (!this.instance) this.instance = new DiscountStrategyFactory();
    return this.instance;
  }
  create(type, value) {
    if (type === 'percentage') return new PercentageDiscountStrategy(value);
    if (type === 'fixed') return new FixedDiscountStrategy(value);
    throw new Error('Unknown');
  }
}
class DiscountContext {
  constructor(strategy) { this.strategy = strategy; }
  execute(amount) { return this.strategy.apply(amount); }
}
```

<div dir="rtl">

## ۴. تحلیل کد بد

- **چهار الگو برای دو فرمول:** Strategy، Template (کلاس انتزاعی)، Factory و Singleton. منطق واقعی **دو خط** است: `amount - amount * value / 100` و `amount - value`.
- **۶ نوع/کلاس، حدود ۴۰ خط ساختار.** نسبت «ساختار به منطق» حدود ۲۰ به ۱.
- **Singleton بی‌دلیل:** `DiscountStrategyFactory` هیچ State ای ندارد. چرا باید فقط یک نمونه داشته باشد؟ Singleton علاوه بر این، تست را سخت می‌کند (State سراسری).
- **`DiscountContext` هیچ کاری نمی‌کند** جز پاس دادن فراخوانی (Smell: **Middle Man**).
- **ایمنی نوع کمتر از نسخه‌ی ساده:** `create(type: string, ...)` هر رشته‌ای را می‌گیرد. نسخه‌ای با ۶ کلاس، `'percentge'` (اشتباه تایپی) را فقط در زمان اجرا می‌گیرد!
- **باگ پنهان:** مبلغ نهایی می‌تواند منفی شود (تخفیف ثابت ۵۰۰ هزار روی خرید ۲۰۰ هزار). در میان این همه ساختار، کسی متوجه نشده است — پیچیدگی ساختاری توجه را از منطق دور می‌کند.
- **فهمیدن جریان:** برای دانستن اینکه `execute` دقیقاً چه می‌کند، باید از `DiscountContext` به `IDiscountStrategy` به `Factory` به کلاس‌های مشخص بروی.

## ۵. پیاده‌سازی صحیح (Clean Code)

### نسخه‌ی ساده: برای مسئله‌ی فعلی

</div>

```typescript
// TypeScript — Clean: simplest thing that solves today's problem
export type Discount =
  | { readonly kind: 'percentage'; readonly percent: number }
  | { readonly kind: 'fixed-amount'; readonly amountInToman: number };

export function applyDiscount(amount: number, discount: Discount): number {
  const discountedAmount =
    discount.kind === 'percentage'
      ? amount - (amount * discount.percent) / 100
      : amount - discount.amountInToman;
  return Math.max(discountedAmount, 0);
}

// Usage
const finalAmount = applyDiscount(200_000, { kind: 'percentage', percent: 10 });
```

```javascript
// JavaScript — Clean
export function applyDiscount(amount, discount) {
  let discountedAmount;
  if (discount.kind === 'percentage') {
    discountedAmount = amount - (amount * discount.percent) / 100;
  } else if (discount.kind === 'fixed-amount') {
    discountedAmount = amount - discount.amountInToman;
  } else {
    throw new Error(`Unknown discount kind: "${discount.kind}".`);
  }
  return Math.max(discountedAmount, 0);
}
```

<div dir="rtl">

### تحلیل نسخه‌ی ساده

- **۱ نوع، ۱ تابع، حدود ۱۰ خط.** کل منطق در یک نگاه دیده می‌شود.
- **Discriminated Union** (`kind`) ایمنی نوع بیشتری از نسخه‌ی کلاس‌محور می‌دهد: `{ kind: 'percentge' }` خطای کامپایل است، و TypeScript می‌داند در شاخه‌ی `'percentage'` فیلد `percent` وجود دارد.
- **باگ مبلغ منفی پیدا و رفع شد** (`Math.max`)، چون حالا منطق دیده می‌شود.
- **نام‌های دقیق‌تر:** `percent` و `amountInToman` به‌جای `value` مبهم.

### چه زمانی الگو ارزش پیدا می‌کند؟

فرض کن شش ماه بعد شرایط تغییر کرده است: ۷ نوع تخفیف داریم (درصدی، ثابت، «۲ بخر ۱ هدیه»، پلکانی، اولین خرید، تخفیف دسته‌بندی، تخفیف باشگاه مشتریان)، هر کدام **منطق متفاوت و پیچیده** دارد، تیم مارکتینگ مرتب نوع جدید می‌خواهد و هر نوع تست‌های خودش را دارد. حالا ternary به یک `switch` با ۷ شاخه‌ی ۲۰ خطی تبدیل شده است. **اینجا** Strategy مسئله‌ی واقعی را حل می‌کند — اما حتی در این حالت، نسخه‌ی TypeScript مدرن آن ساده است:

</div>

```typescript
// TypeScript — Strategy when it pays off: a map of functions, not a class hierarchy
type DiscountRule = (amount: number, cart: Cart) => number;

const DISCOUNT_RULES: Record<DiscountKind, DiscountRule> = {
  percentage: (amount, cart) => /* ... */ amount,
  'fixed-amount': (amount, cart) => /* ... */ amount,
  'buy-two-get-one': (amount, cart) => /* ... */ amount,
  // each rule can live in its own file with its own tests
};
```

<div dir="rtl">

بدون کلاس انتزاعی، بدون Singleton، بدون Context. **ایده‌ی** Strategy (جایگزین‌پذیری الگوریتم) حفظ شده؛ **تشریفات** حذف شده است.

## ۶. مقایسه

| معیار | Over-engineered | ساده | Strategy در زمان درست |
|---|---|---|---|
| تعداد نوع/کلاس | ۶ | ۱ | ۲ (نوع + جدول) |
| خطوط ساختاری | حدود ۴۰ | حدود ۲ | حدود ۵ |
| ایمنی در برابر نوع اشتباه | زمان اجرا | زمان کامپایل | زمان کامپایل |
| باگ مبلغ منفی | پنهان | رفع شده | — |
| مناسب برای | هیچ‌وقت | ۲ تا ۳ نوع ساده | تعداد زیاد نوع با منطق پیچیده |

## ۷. کاربرد در پروژه‌های واقعی

- **React:** بسیاری از الگوهای کلاسیک در React شکل خاص خود را دارند: Composition به‌جای وراثت، Custom Hook به‌جای Mixin، Context به‌جای Singleton سراسری. استفاده از الگوهای GoF به شکل کلاس‌محور در React معمولاً غیرطبیعی است.
- **Next.js / Node.js:** الگوهایی که تقریباً همیشه ارزش دارند: **Adapter** برای کتابخانه‌ها و APIهای خارجی (تا تغییر درگاه پرداخت فقط Adapter را تغییر دهد) و **Repository** برای دسترسی به داده (ماژول ۰۹).
- **کتابخانه‌ها:** وقتی کتابخانه‌ای می‌نویسی که دیگران گسترش می‌دهند (مثلاً سیستم Plugin)، الگوها اهمیت بیشتری دارند، چون نمی‌دانی مصرف‌کننده چه نیازی خواهد داشت.

## ۸. اشتباهات رایج

1. **یاد گرفتن الگو قبل از مسئله.** الگو را وقتی واقعاً می‌فهمی که درد مسئله‌اش را تجربه کرده باشی.
2. **ترجمه‌ی مستقیم الگوهای Java به TypeScript.** کلاس انتزاعی + Interface + Factory + Singleton، وقتی یک تابع کافی است.
3. **Singleton برای همه چیز.** Singleton تقریباً همیشه State سراسری است و تست را سخت می‌کند. ES Module یا تزریق وابستگی معمولاً بهتر است.
4. **فکر کردن اینکه کد با الگو «حرفه‌ای‌تر» است.** کد حرفه‌ای کدی است که مسئله را با کمترین پیچیدگی حل کند.
5. **رد کامل الگوها.** آن طرف افراط هم مشکل است: وقتی ۷ نوع تخفیف با `switch` های پراکنده در ۵ فایل داری، نیاز به ساختار داری.

## ۹. Code Review: دیدگاه Senior Engineer

> **design/simplicity:** برای دو نوع تخفیف که هر کدام یک فرمول یک‌خطی دارند، Strategy + Factory + Singleton + Context پیچیدگی زیادی اضافه می‌کند. پیشنهاد می‌کنم یک Discriminated Union و یک تابع `applyDiscount` بنویسیم. اگر تعداد و پیچیدگی انواع تخفیف رشد کرد، تبدیل آن به یک جدول از توابع (Strategy سبک) کار چند دقیقه است.

> **blocking/bug:** تخفیف ثابت می‌تواند مبلغ را منفی کند. لطفاً `Math.max(..., 0)` یا قاعده‌ی مشخص کسب‌وکار اضافه کن و برایش تست بنویس.

> **question:** چرا `DiscountStrategyFactory` باید Singleton باشد؟ State ای ندارد و Singleton تست‌ها را به هم وابسته می‌کند.

## ۱۰. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/09-clean-code-vs-design-patterns.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/09-clean-code-vs-design-patterns.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/09-clean-code-vs-design-patterns.md)

## ۱۱. جمع‌بندی

- Design Pattern راه‌حل عمومی یک مسئله‌ی **تکرارشونده** در یک **زمینه‌ی مشخص** است؛ مهم‌ترین ارزشش واژگان مشترک است.
- الگو در خدمت Clean Code است؛ وقتی فقط پیچیدگی اضافه کند، Smell است (Speculative Generality).
- اول ساده‌ترین راه‌حل؛ وقتی درد واقعی ظاهر شد (Rule of Three)، الگو.
- JavaScript/TypeScript مدرن بسیاری از الگوها را با توابع، Closure، ES Module و Union Type ساده کرده است.
- ماژول ۱۰ هر الگو را با «چه زمانی استفاده نکنیم» عمیق پوشش می‌دهد.

### چک‌لیست خودارزیابی

- [ ] می‌توانم سه نشانه‌ی Pattern Overuse را نام ببرم.
- [ ] می‌دانم چرا Discriminated Union در این مثال ایمن‌تر از سلسله‌مراتب کلاس است.
- [ ] می‌توانم Strategy را با یک Object از توابع پیاده کنم.
- [ ] می‌دانم چرا Singleton تست را سخت می‌کند.

## منابع تکمیلی

- Refactoring Guru — [Design Patterns](https://refactoring.guru/design-patterns)
- Martin Fowler — [Yagni](https://martinfowler.com/bliki/Yagni.html)
- Refactoring Guru — [Speculative Generality](https://refactoring.guru/smells/speculative-generality)
- Gamma, Helm, Johnson, Vlissides — *Design Patterns: Elements of Reusable Object-Oriented Software* (1994)

</div>
