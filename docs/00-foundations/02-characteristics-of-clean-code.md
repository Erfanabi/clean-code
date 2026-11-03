<div dir="rtl">

# درس ۲: ویژگی‌های کد تمیز (Characteristics of Clean Code)

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [Clean Code چیست؟](01-what-is-clean-code.md) · درس بعد: [کیفیت کد](03-code-quality.md)

## مقدمه

در درس قبل Clean Code را تعریف کردیم: کدی که سریع خوانده، درست فهمیده و با اطمینان تغییر داده شود. اما وقتی در یک Code Review هستی، «سریع خوانده می‌شود» معیار کافی نیست؛ باید بتوانی دقیق بگویی **کدام ویژگی** کم است. این درس آن تعریف کلی را به **ویژگی‌های مشخص و قابل بررسی** می‌شکند تا یک «چک‌لیست ذهنی» داشته باشی.

## اهداف یادگیری

در پایان این درس باید بتوانم:

- ده ویژگی اصلی کد تمیز را نام ببرم و برای هر کدام مثال بزنم.
- چهار قاعده‌ی طراحی ساده‌ی Kent Beck را به ترتیب اولویت توضیح دهم.
- تنش‌های بین ویژگی‌ها (مثلاً «بدون تکرار» در برابر «ساده») را تشخیص دهم.
- یک قطعه کد را بر اساس این ویژگی‌ها ارزیابی و نقد کنم.

## ۱. مفهوم اصلی

### دیدگاه‌های بنیان‌گذاران

Robert C. Martin در فصل اول Clean Code از چند مهندس برجسته پرسیده است کد تمیز از نظر آن‌ها چیست. خلاصه‌ی دیدگاه‌هایشان (به نقل غیرمستقیم):

| شخص | تأکید اصلی |
|---|---|
| Bjarne Stroustrup (خالق ++C) | کد تمیز **ظریف و کارآمد** است، منطقش سرراست است تا باگ جای پنهان شدن نداشته باشد، و **یک کار را خوب** انجام می‌دهد. |
| Grady Booch | کد تمیز مثل **نثر خوب** خوانده می‌شود و نیت طراح را پنهان نمی‌کند. |
| Dave Thomas | کد تمیز را **کسی غیر از نویسنده** هم می‌تواند بخواند و بهبود دهد؛ تست دارد و وابستگی‌هایش حداقلی و صریح‌اند. |
| Michael Feathers | کد تمیز به نظر می‌رسد **کسی که آن را نوشته به آن اهمیت داده** است. |
| Ward Cunningham | وقتی کد تمیز را می‌خوانی، هر بخش **تقریباً همان چیزی است که انتظار داشتی**. |

نقطه‌ی اشتراک: هیچ‌کدام از «کوتاه بودن» یا «هوشمندانه بودن» حرف نزده‌اند. همه درباره‌ی **خواننده** صحبت می‌کنند.

### چهار قاعده‌ی طراحی ساده (Kent Beck)

Kent Beck در Extreme Programming چهار قاعده برای «طراحی ساده» تعریف کرد که **به ترتیب اولویت** هستند:

1. **همه‌ی تست‌ها پاس می‌شوند** (Passes the tests) — کد باید درست کار کند. کدی که کار نمی‌کند، تمیز بودنش بی‌معناست.
2. **نیت را آشکار می‌کند** (Reveals intention) — خواننده می‌فهمد چه کاری و چرا انجام می‌شود.
3. **تکرار ندارد** (No duplication) — هر دانش در یک جا تعریف شده است.
4. **کمترین تعداد عناصر را دارد** (Fewest elements) — کلاس، تابع یا لایه‌ی اضافه‌ای که چیزی به ۱ تا ۳ اضافه نکند، حذف می‌شود.

ترتیب مهم است: اگر حذف تکرار باعث شود نیت کد پنهان شود، **قاعده‌ی ۲ برنده است**.

### ده ویژگی قابل بررسی

بر اساس منابع بالا، این ده ویژگی را به‌عنوان چک‌لیست این بوت‌کمپ استفاده می‌کنیم:

| # | ویژگی | سؤالی که در Code Review می‌پرسیم |
|---|---|---|
| ۱ | **خوانا (Readable)** | آیا بدون اجرای ذهنی کد، نیت آن را می‌فهمم؟ |
| ۲ | **ساده (Simple)** | آیا ساده‌ترین راه‌حلی است که مسئله‌ی **فعلی** را حل می‌کند؟ |
| ۳ | **متمرکز (Focused)** | آیا هر تابع/کلاس/ماژول یک مسئولیت روشن دارد؟ |
| ۴ | **بدون تکرار (DRY)** | آیا یک قاعده‌ی کسب‌وکار در چند جا تکرار شده است؟ |
| ۵ | **گویا (Expressive)** | آیا نام‌ها و نوع‌ها زبان دامنه‌ی کسب‌وکار را منعکس می‌کنند؟ |
| ۶ | **قابل پیش‌بینی (Predictable)** | آیا تابع کاری بیش از آنچه نامش می‌گوید انجام می‌دهد (Side Effect پنهان)؟ |
| ۷ | **سازگار (Consistent)** | آیا مشکلات مشابه به روش مشابه حل شده‌اند؟ |
| ۸ | **تست‌شده (Tested)** | آیا تستی هست که اگر رفتار بشکند، خبر دهد؟ |
| ۹ | **مدیریت صریح خطا** | آیا مسیرهای خطا آشکار و جدا از مسیر اصلی‌اند؟ |
| ۱۰ | **قابل تغییر (Changeable)** | تغییر محتمل بعدی چند فایل را درگیر می‌کند؟ |

## ۲. توضیح فنی: ویژگی‌ها با هم تنش دارند

مهندسی یعنی مدیریت Trade-off. این ویژگی‌ها گاهی با هم در تضادند:

- **DRY در برابر سادگی:** دو تابع با سه خط مشابه را می‌توان در یک تابع عمومی با چند پارامتر ادغام کرد. اما اگر آن دو تابع به دلایل **متفاوت** تغییر می‌کنند، ادغام‌شان یک «انتزاع اشتباه» می‌سازد. Sandi Metz این را خلاصه کرده است: تکرار بسیار ارزان‌تر از انتزاع اشتباه است.
- **متمرکز در برابر خوانا:** شکستن افراطی کد به توابع خیلی کوچک، خواننده را مجبور به پرش‌های مکرر می‌کند. Ousterhout در A Philosophy of Software Design به این «Shallow Module» می‌گوید: ماژولی که رابطش تقریباً به اندازه‌ی پیاده‌سازی‌اش پیچیده است.
- **قابل تغییر در برابر ساده:** آماده کردن کد برای «هر تغییر ممکن» (Speculative Generality) آن را پیچیده می‌کند. فقط برای تغییرات **محتمل** آماده شو (YAGNI، ماژول ۰۸).

قاعده‌ی تصمیم‌گیری: وقتی شک داری، **ویژگی ۱ (خوانایی) و ویژگی ۲ (سادگی)** را بالاتر بگذار.

## ۳. مثال اشتباه (Bad Code)

سناریو: اعتبارسنجی فرم ثبت‌نام کاربر در یک API. ایمیل باید معتبر باشد، رمز حداقل ۸ کاراکتر و شامل عدد، و سن حداقل ۱۸ سال.

</div>

```javascript
// JavaScript — Bad implementation
function check(u) {
  let errs = [];
  if (!u.email || u.email.indexOf('@') == -1) errs.push('email bad');
  if (!u.pass || u.pass.length < 8 || !/[0-9]/.test(u.pass)) errs.push('Password is invalid');
  if (u.age < 18) errs.push('too young');
  if (errs.length == 0) {
    u.email = u.email.toLowerCase();
    db.users.insert(u);
    sendMail(u.email, 'welcome');
    return true;
  }
  return errs;
}
```

```typescript
// TypeScript — Bad implementation
function check(u: any): any {
  let errs: string[] = [];
  if (!u.email || u.email.indexOf('@') == -1) errs.push('email bad');
  if (!u.pass || u.pass.length < 8 || !/[0-9]/.test(u.pass)) errs.push('Password is invalid');
  if (u.age < 18) errs.push('too young');
  if (errs.length == 0) {
    u.email = u.email.toLowerCase();
    db.users.insert(u);
    sendMail(u.email, 'welcome');
    return true;
  }
  return errs;
}
```

<div dir="rtl">

## ۴. تحلیل کد بد بر اساس ده ویژگی

| ویژگی | وضعیت | توضیح |
|---|---|---|
| خوانا | ❌ | `check`، `u`، `errs`، `pass` مبهم‌اند. «چه چیزی» check می‌شود؟ |
| ساده | ⚠️ | منطق خودش پیچیده نیست، اما در هم تنیده است. |
| متمرکز | ❌ | پنج مسئولیت: اعتبارسنجی، نرمال‌سازی ایمیل، ذخیره، ارسال ایمیل، تصمیم‌گیری درباره‌ی خروجی. |
| بدون تکرار | ⚠️ | فعلاً تکراری نیست، اما قاعده‌ی «حداقل ۸ کاراکتر» احتمالاً در فرم Frontend هم تکرار شده است. |
| گویا | ❌ | `'email bad'` و `'too young'` پیام‌های غیرحرفه‌ای و ناهماهنگ‌اند. |
| قابل پیش‌بینی | ❌ | تابعی به نام `check` **دیتابیس را تغییر می‌دهد و ایمیل می‌فرستد!** و ورودی `u` را هم mutate می‌کند. |
| سازگار | ❌ | پیام‌ها گاهی جمله‌ی کامل، گاهی دو کلمه‌اند. خروجی گاهی `true`، گاهی آرایه است. |
| تست‌شده | ❌ | بدون Mock کردن دیتابیس و ایمیل، حتی اعتبارسنجی را نمی‌توان تست کرد. |
| مدیریت خطا | ❌ | اگر `db.users.insert` خطا بدهد، ایمیل ارسال نمی‌شود ولی هیچ‌کس نمی‌فهمد چه شد. `u.age` اگر `undefined` باشد، `undefined < 18` برابر `false` است و کاربر بدون سن ثبت می‌شود! |
| قابل تغییر | ❌ | تغییر قاعده‌ی رمز عبور ریسک شکستن ارسال ایمیل را دارد، چون همه در یک تابع‌اند. |

به نکته‌ی مدیریت خطا دقت کن: `undefined < 18` در JavaScript مقدار `false` دارد. پس کاربری که اصلاً سن نفرستاده، از این اعتبارسنجی **عبور می‌کند**. این یک باگ واقعی است که کد کثیف پنهانش کرده.

## ۵. پیاده‌سازی صحیح (Clean Code)

</div>

```typescript
// TypeScript — Clean implementation
export interface RegistrationInput {
  readonly email: string;
  readonly password: string;
  readonly age: number;
}

export type ValidationResult =
  | { readonly isValid: true }
  | { readonly isValid: false; readonly errors: readonly string[] };

const MIN_PASSWORD_LENGTH = 8;
const MIN_AGE = 18;
const CONTAINS_DIGIT = /\d/;
const SIMPLE_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: string): string | null {
  return SIMPLE_EMAIL_PATTERN.test(email) ? null : 'Email address is not valid.';
}

function validatePassword(password: string): string | null {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  if (!CONTAINS_DIGIT.test(password)) {
    return 'Password must contain at least one digit.';
  }
  return null;
}

function validateAge(age: number): string | null {
  return Number.isInteger(age) && age >= MIN_AGE ? null : `You must be at least ${MIN_AGE} years old.`;
}

export function validateRegistration(input: RegistrationInput): ValidationResult {
  const errors = [
    validateEmail(input.email),
    validatePassword(input.password),
    validateAge(input.age),
  ].filter((error): error is string => error !== null);

  return errors.length === 0 ? { isValid: true } : { isValid: false, errors };
}

// Registration is a separate step with explicit dependencies.
export interface UserRepository {
  create(user: { email: string; password: string; age: number }): Promise<void>;
}
export interface Mailer {
  sendWelcomeEmail(email: string): Promise<void>;
}

export async function registerUser(
  input: RegistrationInput,
  users: UserRepository,
  mailer: Mailer,
): Promise<ValidationResult> {
  const validation = validateRegistration(input);
  if (!validation.isValid) {
    return validation;
  }

  const normalizedEmail = input.email.trim().toLowerCase();
  await users.create({ ...input, email: normalizedEmail });
  await mailer.sendWelcomeEmail(normalizedEmail);
  return validation;
}
```

```javascript
// JavaScript — Clean implementation (validation part)
const MIN_PASSWORD_LENGTH = 8;
const MIN_AGE = 18;
const CONTAINS_DIGIT = /\d/;
const SIMPLE_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return SIMPLE_EMAIL_PATTERN.test(email ?? '') ? null : 'Email address is not valid.';
}

function validatePassword(password = '') {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  if (!CONTAINS_DIGIT.test(password)) {
    return 'Password must contain at least one digit.';
  }
  return null;
}

function validateAge(age) {
  return Number.isInteger(age) && age >= MIN_AGE ? null : `You must be at least ${MIN_AGE} years old.`;
}

export function validateRegistration(input) {
  const errors = [
    validateEmail(input.email),
    validatePassword(input.password),
    validateAge(input.age),
  ].filter((error) => error !== null);

  return errors.length === 0 ? { isValid: true } : { isValid: false, errors };
}
```

<div dir="rtl">

### تحلیل پیاده‌سازی صحیح

- **جداسازی Query از Command:** `validateRegistration` فقط می‌پرسد «معتبر است؟» و هیچ چیزی را تغییر نمی‌دهد. `registerUser` کار را انجام می‌دهد. این دو مسئولیت جدا هستند و جدا تست می‌شوند (Command Query Separation، ماژول ۰۲).
- **خروجی سازگار:** `ValidationResult` یک Discriminated Union است. دیگر «گاهی `true`، گاهی آرایه» نداریم. فراخواننده با `if (!result.isValid)` به `errors` دسترسی پیدا می‌کند و TypeScript این را بررسی می‌کند.
- **وابستگی‌های صریح:** `registerUser` دیتابیس و سرویس ایمیل را به‌صورت پارامتر می‌گیرد. در تست می‌توانیم نسخه‌ی جعلی (Fake) پاس دهیم (ماژول ۱۲). با خواندن امضای تابع می‌فهمی این تابع با چه چیزهایی کار دارد.
- **بدون Mutation:** ورودی تغییر نمی‌کند؛ ایمیل نرمال‌شده در یک Object جدید ساخته می‌شود.
- **باگ پنهان کشف شد:** `Number.isInteger(age)` باعث می‌شود `undefined` یا `NaN` رد شوند.
- **پیام‌های سازگار:** همه‌ی پیام‌ها جمله‌ی کامل با نقطه‌اند و ثابت‌ها داخل پیام استفاده شده‌اند تا اگر حداقل طول تغییر کرد، پیام خودبه‌خود درست بماند.
- **چرا JavaScript هم `?? ''` و پیش‌فرض دارد؟** چون بدون Type، ورودی ممکن است فیلدی نداشته باشد. کد JavaScript باید دفاعی‌تر باشد.

## ۶. مقایسه‌ی دو پیاده‌سازی

| معیار | Bad Code | Clean Code |
|---|---|---|
| تعداد مسئولیت‌ها در یک تابع | ۵ | ۱ در هر تابع |
| نوع خروجی | `true` یا آرایه | Discriminated Union صریح |
| قابل تست بدون Mock | خیر | اعتبارسنجی: بله |
| Mutation ورودی | بله | خیر |
| باگ سن نامشخص | وجود دارد | رفع شده |
| تغییر قاعده‌ی رمز | ریسک شکستن ثبت‌نام | فقط `validatePassword` |

## ۷. کاربرد در پروژه‌های واقعی

- **React:** همان `validateRegistration` می‌تواند در فرم سمت کلاینت برای نمایش فوری خطاها استفاده شود. اگر از کتابخانه‌هایی مثل Zod استفاده کنی، این ایده را با یک Schema مشترک بین Client و Server پیاده می‌کنی.
- **Next.js:** در Server Action ثبت‌نام، اول اعتبارسنجی، بعد `registerUser`. چون اعتبارسنجی Pure است، سمت سرور و کلاینت **یک قاعده** دارند و ناهماهنگی پیش نمی‌آید.
- **Node.js API:** کنترلر Express یا Fastify فقط درخواست را به `RegistrationInput` تبدیل می‌کند، `registerUser` را صدا می‌زند و نتیجه را به HTTP 400 یا 201 ترجمه می‌کند.

## ۸. اشتباهات رایج

1. **چک‌لیست را قانون مطلق دیدن.** ده ویژگی ابزار فکر کردن‌اند، نه فرم امتیازدهی.
2. **فدا کردن خوانایی برای DRY.** ادغام کدهای «شبیه» ولی با دلیل تغییر متفاوت.
3. **نادیده گرفتن «قابل پیش‌بینی بودن».** تابعی که نامش `get` یا `check` یا `is` است هرگز نباید State را تغییر دهد.
4. **ناسازگاری در یک پروژه.** حتی اگر هر دو سبک خوب باشند، استفاده‌ی هم‌زمان از دو سبک (مثلاً گاهی throw، گاهی return null برای یک نوع خطا) بار ذهنی ایجاد می‌کند.
5. **فکر کردن اینکه تست بخشی از Clean Code نیست.** بدون تست، قابلیت تغییر با اطمینان وجود ندارد.

## ۹. Code Review: دیدگاه Senior Engineer

یک بازبین با تجربه برای کد بد، احتمالاً **یک** کامنت سطح بالا قبل از کامنت‌های جزئی می‌گذارد:

> این تابع اعتبارسنجی، ذخیره‌سازی و ارسال ایمیل را با هم انجام می‌دهد. پیشنهاد می‌کنم اول اعتبارسنجی را به یک تابع Pure جدا ببریم تا هم در فرم Frontend قابل استفاده باشد و هم بدون Mock تست شود. بعد ثبت‌نام با وابستگی‌های صریح. کامنت‌های جزئی نام‌گذاری را بعد از این تغییر بررسی می‌کنم، چون احتمالاً خودشان حل می‌شوند.

این یک مهارت مهم Review است: **اول مسائل ساختاری، بعد جزئیات**. ده کامنت درباره‌ی نام متغیرها روی کدی که قرار است بازنویسی شود، وقت هر دو طرف را تلف می‌کند.

## ۱۰. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/02-characteristics-of-clean-code.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/02-characteristics-of-clean-code.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/02-characteristics-of-clean-code.md)

## ۱۱. جمع‌بندی

- همه‌ی تعریف‌های کد تمیز حول **خواننده** می‌چرخند، نه نویسنده.
- چهار قاعده‌ی Kent Beck به ترتیب اولویت: تست پاس شود، نیت آشکار باشد، تکرار نباشد، عنصر اضافه نباشد.
- ده ویژگی قابل بررسی: خوانا، ساده، متمرکز، بدون تکرار، گویا، قابل پیش‌بینی، سازگار، تست‌شده، مدیریت صریح خطا، قابل تغییر.
- ویژگی‌ها با هم تنش دارند؛ در شک، خوانایی و سادگی برنده‌اند.
- در Review، اول مسائل ساختاری، بعد جزئیات.

### چک‌لیست خودارزیابی

- [ ] می‌توانم چهار قاعده‌ی Kent Beck را به ترتیب بگویم و دلیل ترتیب را توضیح دهم.
- [ ] می‌توانم یک مثال بزنم که DRY با خوانایی در تضاد است.
- [ ] می‌دانم چرا تابعی به نام `check` نباید دیتابیس را تغییر دهد.
- [ ] باگ `undefined < 18` را می‌فهمم و می‌دانم چطور جلویش را بگیرم.

## منابع تکمیلی

- Robert C. Martin — *Clean Code*، فصل ۱ — [O'Reilly](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- John Ousterhout — *A Philosophy of Software Design*، فصل ۴: Modules Should Be Deep — [صفحه‌ی کتاب](https://web.stanford.edu/~ouster/cgi-bin/book.php)
- Martin Fowler — [Command Query Separation](https://martinfowler.com/bliki/CommandQuerySeparation.html)

</div>
