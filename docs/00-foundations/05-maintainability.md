<div dir="rtl">

# درس ۵: نگهداشت‌پذیری (Maintainability)

> ماژول ۰۰ — مبانی Clean Code · [فهرست ماژول](README.md) · درس قبل: [خوانایی](04-readability.md) · درس بعد: [بدهی فنی](06-technical-debt.md)

## مقدمه

خوانایی درباره‌ی **فهمیدن** کد بود. نگهداشت‌پذیری یک قدم جلوتر است: درباره‌ی **تغییر دادن** کد است. ممکن است کدی کاملاً خوانا باشد ولی برای اضافه کردن یک فیچر کوچک، مجبور شوی هفت فایل را تغییر دهی و هر بار نگران باشی چیزی جای دیگر بشکند. این درس می‌پرسد: **چه چیزی تغییر را سخت می‌کند، و چطور کد را طوری بسازیم که تغییرات محتمل، ارزان باشند؟**

## اهداف یادگیری

در پایان این درس باید بتوانم:

- نگهداشت‌پذیری را تعریف و با خوانایی مقایسه کنم.
- سه نشانه‌ی پیچیدگی از دید Ousterhout را (Change Amplification، Cognitive Load، Unknown Unknowns) توضیح دهم.
- چهار نوع نگهداری نرم‌افزار را بشناسم.
- با پرسیدن «تغییر محتمل بعدی چیست؟» طراحی را ارزیابی کنم.
- کدی را که برای اضافه کردن یک قابلیت به چند جا دست می‌زند، بازطراحی کنم.

## ۱. مفهوم اصلی

### تعریف

**نگهداشت‌پذیری یعنی سهولت و ایمنیِ تغییر دادن نرم‌افزار** — برای رفع باگ، اضافه کردن قابلیت، تطبیق با محیط جدید یا بهبود ساختار — بدون اینکه تغییر، باگ جدید ایجاد کند.

### چهار نوع نگهداری

ادبیات مهندسی نرم‌افزار (از جمله استاندارد ISO/IEC 14764) نگهداری را به چهار نوع تقسیم می‌کند:

| نوع | معنی | مثال |
|---|---|---|
| Corrective | رفع باگ | محاسبه‌ی اشتباه مالیات |
| Adaptive | تطبیق با محیط تغییرکرده | مهاجرت از Node 18 به Node 22؛ تغییر API درگاه پرداخت |
| Perfective | اضافه کردن یا بهبود قابلیت | اضافه کردن اعلان پیامکی |
| Preventive | بهبود ساختار برای جلوگیری از مشکلات آینده | Refactoring، اضافه کردن تست |

بیشترین سهم کار نگهداری معمولاً از نوع Perfective است: **کاربران و کسب‌وکار مدام چیز جدید می‌خواهند**. پس نگهداشت‌پذیری در عمل یعنی «چقدر راحت می‌توانم فیچر جدید اضافه کنم؟»

### سه نشانه‌ی پیچیدگی (John Ousterhout)

Ousterhout در A Philosophy of Software Design سه نشانه برای پیچیدگی‌ای که نگهداری را سخت می‌کند معرفی می‌کند:

1. **Change Amplification (تشدید تغییر):** یک تغییر ساده‌ی مفهومی نیاز به تغییر در جاهای زیادی دارد. مثال: تغییر رنگ اصلی سایت که در ۴۰ فایل CSS به‌صورت `#3366ff` تکرار شده است.

2. **Cognitive Load (بار شناختی):** توسعه‌دهنده برای انجام تغییر باید چقدر بداند. مثال: برای اضافه کردن یک فیلد به فرم، باید بدانی که فلان Hook به ترتیب خاصی از فیلدها وابسته است.

3. **Unknown Unknowns (ناشناخته‌های ناشناخته):** بدترین نشانه. معلوم نیست برای انجام تغییر **کدام** بخش‌ها باید تغییر کنند، یا چه اطلاعاتی لازم است. تغییر را انجام می‌دهی، همه چیز به نظر درست است، و دو هفته بعد یک باگ در بخشی که فکرش را نمی‌کردی پیدا می‌شود.

Ousterhout دو علت اصلی برای این نشانه‌ها می‌شناسد: **وابستگی (Dependency)** و **ابهام (Obscurity)**.

### رابطه با خوانایی

| | خوانایی | نگهداشت‌پذیری |
|---|---|---|
| سؤال اصلی | «این کد چه می‌کند؟» | «این را چطور تغییر دهم بدون اینکه چیزی بشکند؟» |
| واحد بررسی | تابع، چند خط | ماژول، مرز بین بخش‌ها، کل سیستم |
| ابزارها | نام، ساختار تابع | Cohesion، Coupling، تست، مرزهای روشن |

خوانایی **شرط لازم** نگهداشت‌پذیری است، ولی **کافی** نیست.

## ۲. توضیح فنی: چه چیزی کد را قابل نگهداری می‌کند؟

- **Locality (محلی بودن تغییر):** دانش مربوط به یک مفهوم در یک جا جمع شده باشد. وقتی «اعلان پیامکی» را تغییر می‌دهی، باید فقط به یک جا سر بزنی.
- **High Cohesion:** چیزهایی که با هم تغییر می‌کنند، کنار هم باشند.
- **Low Coupling:** چیزهایی که مستقل تغییر می‌کنند، به هم وابسته نباشند.
- **Explicit Dependencies:** وابستگی‌ها از امضای تابع یا ماژول قابل مشاهده باشند، نه پنهان در یک متغیر سراسری.
- **تست‌ها:** شبکه‌ی ایمنی که Unknown Unknownها را به Known تبدیل می‌کند: اگر چیزی شکست، تست خبر می‌دهد.
- **کامپایلر به‌عنوان همکار:** در TypeScript، با Union Type و `Record`، کامپایلر جاهایی که باید تغییر کنند را **به تو نشان می‌دهد**. این مستقیماً Unknown Unknownها را کم می‌کند.

### سؤال طلایی: تغییر محتمل بعدی چیست؟

نمی‌توانی کد را برای **هر** تغییری آماده کنی (این خودش پیچیدگی می‌سازد — YAGNI). اما می‌توانی از کسب‌وکار بپرسی **کدام تغییرات محتمل‌اند**. در یک سیستم اعلان، اضافه شدن کانال جدید (تلگرام، Push) بسیار محتمل است. پس طراحی باید اضافه کردن کانال را ارزان کند. اما تغییر از HTTP به یک پروتکل کاملاً جدید محتمل نیست و نیازی به آمادگی برایش نیست.

## ۳. مثال اشتباه (Bad Code)

سناریو: سرویس اعلان یک فروشگاه. کاربر می‌تواند از طریق ایمیل یا پیامک اعلان بگیرد. هر کانال محدودیت طول متن دارد و هزینه‌ای برای گزارش‌گیری.

</div>

```javascript
// JavaScript — Bad implementation
// notification-service.js
export function send(user, msg) {
  if (user.channel === 'email') {
    emailClient.send(user.email, msg.slice(0, 5000));
  } else if (user.channel === 'sms') {
    smsClient.send(user.phone, msg.slice(0, 160));
  }
}

// settings-page.js
export const channelLabels = (c) => (c === 'email' ? 'ایمیل' : c === 'sms' ? 'پیامک' : '');

// billing-report.js
export function costOf(channel, count) {
  if (channel === 'email') return count * 10;
  if (channel === 'sms') return count * 150;
  return 0;
}

// validation.js
export function canReceive(user) {
  if (user.channel === 'email') return Boolean(user.email);
  if (user.channel === 'sms') return Boolean(user.phone);
  return false;
}
```

```typescript
// TypeScript — Bad implementation
// notification-service.ts
export function send(user: any, msg: string) {
  if (user.channel === 'email') {
    emailClient.send(user.email, msg.slice(0, 5000));
  } else if (user.channel === 'sms') {
    smsClient.send(user.phone, msg.slice(0, 160));
  }
}

// settings-page.ts
export const channelLabels = (c: string) => (c === 'email' ? 'ایمیل' : c === 'sms' ? 'پیامک' : '');

// billing-report.ts
export function costOf(channel: string, count: number) {
  if (channel === 'email') return count * 10;
  if (channel === 'sms') return count * 150;
  return 0;
}

// validation.ts
export function canReceive(user: any) {
  if (user.channel === 'email') return Boolean(user.email);
  if (user.channel === 'sms') return Boolean(user.phone);
  return false;
}
```

<div dir="rtl">

## ۴. تحلیل کد بد

هر کدام از این توابع به‌تنهایی **خوانا** هستند. مشکل در سطح **ساختار** است. حالا تسک «کانال تلگرام اضافه کن» را تصور کن:

- **Change Amplification:** باید چهار فایل را تغییر دهی. در سیستم واقعی احتمالاً ده‌ها جا.
- **Unknown Unknowns:** از کجا بفهمی این چهار فایل هستند؟ هیچ چیزی تو را به آن‌ها هدایت نمی‌کند. باید رشته‌ی `'sms'` را در کل پروژه جست‌وجو کنی و امیدوار باشی کسی آن را به شکل دیگری (مثلاً `'SMS'`) ننوشته باشد.
- **شکست بی‌صدا:** اگر `billing-report` را فراموش کنی، کد کامپایل می‌شود، تست‌ها (اگر وجود داشته باشند) احتمالاً پاس می‌شوند و هزینه‌ی تلگرام **صفر** گزارش می‌شود. اگر `canReceive` را فراموش کنی، هیچ کاربری اعلان تلگرام نمی‌گیرد و هیچ خطایی دیده نمی‌شود.
- **دانش پراکنده:** «کانال پیامک» یک مفهوم است، اما دانش آن (نحوه‌ی ارسال، حداکثر طول، برچسب فارسی، هزینه، شرط دریافت) در چهار فایل پخش شده است. این دقیقاً Code Smell معروف **Shotgun Surgery** است که در درس ۷ می‌بینی.
- **اعداد جادویی:** `5000`، `160`، `10`، `150` بی‌نام‌اند.

## ۵. پیاده‌سازی صحیح (Clean Code)

ایده: همه‌ی دانش یک کانال را **در یک جا** جمع کن، و با TypeScript کاری کن که فراموش کردن یک بخش **غیرممکن** باشد.

</div>

```typescript
// TypeScript — Clean implementation
export type NotificationChannel = 'email' | 'sms';

export interface Recipient {
  readonly channel: NotificationChannel;
  readonly email?: string;
  readonly phone?: string;
}

interface MessageSender {
  send(address: string, text: string): Promise<void>;
}

interface ChannelDefinition {
  readonly label: string;
  readonly maxMessageLength: number;
  readonly costPerMessageInToman: number;
  readonly getAddress: (recipient: Recipient) => string | undefined;
}

// Adding a channel to NotificationChannel makes this object fail to compile
// until the new channel is fully described here.
export const CHANNELS: Record<NotificationChannel, ChannelDefinition> = {
  email: {
    label: 'ایمیل',
    maxMessageLength: 5_000,
    costPerMessageInToman: 10,
    getAddress: (recipient) => recipient.email,
  },
  sms: {
    label: 'پیامک',
    maxMessageLength: 160,
    costPerMessageInToman: 150,
    getAddress: (recipient) => recipient.phone,
  },
};

export function canReceiveNotifications(recipient: Recipient): boolean {
  return Boolean(CHANNELS[recipient.channel].getAddress(recipient));
}

export function calculateNotificationCost(channel: NotificationChannel, messageCount: number): number {
  return messageCount * CHANNELS[channel].costPerMessageInToman;
}

export async function sendNotification(
  recipient: Recipient,
  message: string,
  senders: Record<NotificationChannel, MessageSender>,
): Promise<void> {
  const channel = CHANNELS[recipient.channel];
  const address = channel.getAddress(recipient);
  if (!address) {
    throw new Error(`Recipient has no address for channel "${recipient.channel}".`);
  }
  await senders[recipient.channel].send(address, message.slice(0, channel.maxMessageLength));
}
```

```javascript
// JavaScript — Clean implementation
export const CHANNELS = Object.freeze({
  email: {
    label: 'ایمیل',
    maxMessageLength: 5_000,
    costPerMessageInToman: 10,
    getAddress: (recipient) => recipient.email,
  },
  sms: {
    label: 'پیامک',
    maxMessageLength: 160,
    costPerMessageInToman: 150,
    getAddress: (recipient) => recipient.phone,
  },
});

function getChannel(channelName) {
  const channel = CHANNELS[channelName];
  if (!channel) {
    throw new Error(`Unknown notification channel: "${channelName}".`);
  }
  return channel;
}

export function canReceiveNotifications(recipient) {
  return Boolean(getChannel(recipient.channel).getAddress(recipient));
}

export function calculateNotificationCost(channelName, messageCount) {
  return messageCount * getChannel(channelName).costPerMessageInToman;
}

export async function sendNotification(recipient, message, senders) {
  const channel = getChannel(recipient.channel);
  const address = channel.getAddress(recipient);
  if (!address) {
    throw new Error(`Recipient has no address for channel "${recipient.channel}".`);
  }
  await senders[recipient.channel].send(address, message.slice(0, channel.maxMessageLength));
}
```

<div dir="rtl">

### تحلیل پیاده‌سازی صحیح

- **Locality:** همه‌ی دانش «پیامک» (برچسب، طول، هزینه، آدرس) در یک Object است. کسی که می‌خواهد درباره‌ی پیامک بداند، به یک جا نگاه می‌کند.
- **کامپایلر Unknown Unknownها را حذف می‌کند:** حالا تسک «تلگرام اضافه کن» را دوباره انجام بده: `'telegram'` را به `NotificationChannel` اضافه می‌کنی. فوراً TypeScript روی `CHANNELS` خطا می‌دهد: «Property 'telegram' is missing». و روی پارامتر `senders` هر جا که صدا زده شده. **کامپایلر لیست کارهای باقی‌مانده را به تو می‌دهد.**
- **وابستگی صریح:** `sendNotification` فرستنده‌ها را به‌عنوان پارامتر می‌گیرد، نه از یک متغیر سراسری. تست آن بدون ارسال پیامک واقعی ممکن است.
- **بدون اعداد جادویی:** هر عدد یک نام دارد (`maxMessageLength`، `costPerMessageInToman`).
- **شکست با صدا:** گیرنده‌ی بدون آدرس، به‌جای نادیده گرفته شدن بی‌صدا، خطای صریح می‌دهد.
- **در JavaScript** کامپایلری نداریم، پس `getChannel` حداقل در زمان اجرا کانال ناشناخته را با پیام روشن رد می‌کند و همه‌ی مسیرها از همین یک دروازه عبور می‌کنند.

**نکته‌ی Trade-off:** آیا این طراحی برای دو کانال زیاده‌روی نیست؟ اگر کسب‌وکار هرگز کانال جدید اضافه نکند، شاید. اما این طراحی **پیچیده‌تر نیست** — فقط سازمان‌دهی متفاوتی از همان اطلاعات است. هیچ کلاس انتزاعی یا Factory اضافه نشده. این تفاوت بین «طراحی برای تغییر محتمل» و «Over-engineering» است.

## ۶. مقایسه‌ی دو پیاده‌سازی

| معیار | Bad Code | Clean Code |
|---|---|---|
| تعداد جاهایی که برای کانال جدید باید تغییر کند | ۴ (یا بیشتر، ناشناخته) | ۲ (Union و جدول) + جاهایی که کامپایلر نشان می‌دهد |
| کشف جاهای لازم | جست‌وجوی دستی رشته | خطای کامپایلر |
| فراموش کردن یک بخش | شکست بی‌صدا در Production | خطای کامپایل |
| تست‌پذیری ارسال | وابسته به کلاینت سراسری | فرستنده‌ها تزریق می‌شوند |
| محل دانش یک کانال | ۴ فایل | ۱ Object |

## ۷. کاربرد در پروژه‌های واقعی

- **React و Design System:** ثابت‌های رنگ، فاصله و تایپوگرافی را در Design Token جمع کن. تغییر رنگ برند باید یک تغییر باشد، نه ۴۰.
- **Next.js:** مسیرهای (Routes) سایت را در یک ثابت مرکزی تعریف کن (`ROUTES.productDetails(id)`) به‌جای رشته‌های `'/products/' + id` در ۳۰ کامپوننت.
- **Node.js API:** کدهای خطا و پیام‌هایشان را در یک جدول مرکزی تعریف کن تا Middleware خطا و مستندات API از یک منبع تغذیه شوند.
- **Feature Flags، نقش‌ها و مجوزها:** دانش «کدام نقش چه کاری می‌تواند بکند» باید یک جا باشد، نه در `if`های پراکنده در کامپوننت‌ها.

## ۸. اشتباهات رایج

1. **آماده شدن برای هر تغییر ممکن.** لایه‌ها و Interfaceهای اضافه برای تغییراتی که هرگز نمی‌آیند، نگهداری را **سخت‌تر** می‌کنند.
2. **یکی دانستن نگهداشت‌پذیری با خوانایی.** کد بد این درس کاملاً خوانا بود.
3. **اعتماد به جست‌وجوی متنی.** «هر جا `'sms'` هست را پیدا می‌کنم» در پروژه‌ی بزرگ شکست می‌خورد. بگذار کامپایلر کار کند.
4. **نادیده گرفتن تست.** بدون تست، هر تغییر یک قمار است و توسعه‌دهندگان از تغییر می‌ترسند. ترس از تغییر = نگهداشت‌پذیری پایین.
5. **وابستگی‌های پنهان.** متغیرهای سراسری و Singletonهایی که از همه جا در دسترس‌اند، جاهای تأثیر یک تغییر را پنهان می‌کنند.

## ۹. Code Review: دیدگاه Senior Engineer

یک Senior در Review این کد سؤالی می‌پرسد که یک Junior معمولاً نمی‌پرسد:

> **design question:** اگر هفته‌ی بعد تیم محصول بگوید «کانال تلگرام اضافه کنیم»، چند فایل باید تغییر کند و از کجا بفهمیم کدام‌ها؟ الان دانش هر کانال بین ارسال، تنظیمات، گزارش هزینه و اعتبارسنجی پخش شده است. پیشنهاد می‌کنم یک جدول `CHANNELS` با نوع `Record<NotificationChannel, ChannelDefinition>` بسازیم تا کامپایلر جاهای لازم را نشان دهد.

این سؤال («تغییر محتمل بعدی چه هزینه‌ای دارد؟») مهم‌ترین ابزار ارزیابی نگهداشت‌پذیری در Review است.

## ۱۰. تمرین عملی

- [تمرین‌های مبتدی](../../exercises/beginner/00-foundations/05-maintainability.md)
- [تمرین‌های متوسط](../../exercises/intermediate/00-foundations/05-maintainability.md)
- [تمرین پیشرفته](../../exercises/advanced/00-foundations/05-maintainability.md)

## ۱۱. جمع‌بندی

- نگهداشت‌پذیری = سهولت و ایمنیِ تغییر. خوانایی لازم است ولی کافی نیست.
- سه نشانه‌ی پیچیدگی: Change Amplification، Cognitive Load، Unknown Unknowns. علت‌ها: وابستگی و ابهام.
- Locality: دانش یک مفهوم در یک جا.
- برای تغییرات **محتمل** طراحی کن، نه همه‌ی تغییرات **ممکن**.
- در TypeScript با Union Type و `Record`، کامپایلر را به فهرست کارهای باقی‌مانده تبدیل کن.

### چک‌لیست خودارزیابی

- [ ] می‌توانم سه نشانه‌ی پیچیدگی Ousterhout را با یک مثال از پروژه‌ی خودم توضیح دهم.
- [ ] می‌دانم چرا `Record<Union, ...>` نگهداشت‌پذیری را بالا می‌برد.
- [ ] می‌توانم تفاوت «طراحی برای تغییر محتمل» و Over-engineering را توضیح دهم.
- [ ] می‌توانم در یک پروژه‌ی واقعی، یک مفهوم با دانش پراکنده (Shotgun Surgery) پیدا کنم.

## منابع تکمیلی

- John Ousterhout — *A Philosophy of Software Design*، فصل ۲: The Nature of Complexity — [صفحه‌ی کتاب](https://web.stanford.edu/~ouster/cgi-bin/book.php)
- Martin Fowler — [Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html)
- [ISO/IEC 25010 — Maintainability](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010)
- Refactoring Guru — [Shotgun Surgery](https://refactoring.guru/smells/shotgun-surgery)

</div>
