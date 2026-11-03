<div dir="rtl">

# بوت‌کمپ Clean Code با JavaScript و TypeScript

به بوت‌کمپ Clean Code خوش آمدی. این مخزن یک دوره‌ی کامل و فارسی است که تو را از «کدی که کار می‌کند» به «کدی که دیگران می‌توانند بفهمند، تغییر دهند و به آن اعتماد کنند» می‌رساند.

## این بوت‌کمپ برای چه کسی است؟

برای توسعه‌دهنده‌ای که JavaScript و TypeScript را می‌شناسد (مثلاً یک Frontend Developer) و می‌خواهد به یک **Software Engineer حرفه‌ای** تبدیل شود: کسی که فقط «فیچر تحویل نمی‌دهد»، بلکه سیستمی می‌سازد که سال‌ها قابل نگهداری بماند.

## چطور با این بوت‌کمپ کار کنم؟

1. [نقشه‌ی راه (ROADMAP.md)](ROADMAP.md) را بخوان تا تصویر کلی را ببینی.
2. هر درس را از پوشه‌ی `docs` بخوان؛ هر درس یک فایل مستقل و کامل است.
3. در جلسه‌ی آموزشی با مدرس (Claude) از دستورهای زیر استفاده کن.
4. تمرین‌ها را در پوشه‌ی `exercises` حل کن و برای بررسی بفرست.
5. پیشرفتت در [PROGRESS.md](PROGRESS.md) ثبت می‌شود.

## دستورهای جلسه‌ی آموزشی

| دستور | کاربرد |
|---|---|
| `شروع درس` | آموزش تعاملی درس فعلی |
| `تمرین` | دریافت تمرین‌های درس فعلی |
| `راهنمایی` | یک سرنخ برای تمرین، بدون لو دادن جواب |
| `بررسی کد` | بررسی کدی که نوشته‌ای، مثل یک Senior Engineer |
| `راه حل` | دیدن راه‌حل مرجع (بعد از تلاش خودت) |
| `مرور` | مرور درس‌ها با تمرکز روی نقاط ضعف |
| `آزمون` | آزمون کوتاه و ثبت نمره |
| `برو بعدی` | رفتن به درس بعد |
| `وضعیت` | نمایش وضعیت پیشرفت |
| `چرا؟` | توضیح عمیق‌تر دلیل یک نکته |

## ماژول‌ها

| # | ماژول | پوشه |
|---|---|---|
| ۰۰ | مبانی Clean Code | [docs/00-foundations](docs/00-foundations/README.md) |
| ۰۱ | نام‌گذاری و سازمان‌دهی کد | [docs/01-naming-and-structure](docs/01-naming-and-structure/README.md) |
| ۰۲ | توابع و متدها | [docs/02-functions-and-methods](docs/02-functions-and-methods/README.md) |
| ۰۳ | کامنت و مستندسازی | [docs/03-comments-and-documentation](docs/03-comments-and-documentation/README.md) |
| ۰۴ | مدیریت خطا | [docs/04-error-handling](docs/04-error-handling/README.md) |
| ۰۵ | اشیا و ساختمان داده | [docs/05-objects-and-data-structures](docs/05-objects-and-data-structures/README.md) |
| ۰۶ | TypeScript تمیز | [docs/06-clean-typescript](docs/06-clean-typescript/README.md) |
| ۰۷ | اصول SOLID | [docs/07-solid-principles](docs/07-solid-principles/README.md) |
| ۰۸ | اصول طراحی نرم‌افزار | [docs/08-software-design-principles](docs/08-software-design-principles/README.md) |
| ۰۹ | معماری تمیز | [docs/09-clean-architecture](docs/09-clean-architecture/README.md) |
| ۱۰ | الگوهای طراحی | [docs/10-design-patterns](docs/10-design-patterns/README.md) |
| ۱۱ | بازآرایی کد | [docs/11-refactoring](docs/11-refactoring/README.md) |
| ۱۲ | تست و Clean Code | [docs/12-testing-and-clean-code](docs/12-testing-and-clean-code/README.md) |
| ۱۳ | پروژه‌های واقعی | [docs/13-real-world-projects](docs/13-real-world-projects/README.md) |

## اجرای مثال‌ها

پیش‌نیاز: Node.js نسخه‌ی ۲۰ یا بالاتر.

</div>

```bash
npm install        # نصب ابزارها
npm test           # اجرای تست‌ها با Vitest
npm run typecheck  # بررسی نوع‌ها با TypeScript strict
npm run lint       # ESLint؛ فایل‌های *.bad.* عمداً هشدار می‌دهند
npm run check      # هر سه با هم
```

<div dir="rtl">

## ساختار مخزن

| مسیر | محتوا |
|---|---|
| `docs/` | درس‌ها؛ هر ماژول یک پوشه، هر درس یک فایل |
| `examples/` | مثال‌های قابل اجرا (کد بد و کد تمیز) در JavaScript و TypeScript |
| `exercises/` | صورت تمرین‌ها به تفکیک سطح: مبتدی، متوسط، پیشرفته |
| `solutions/` | راه‌حل‌های مرجع (بعد از تلاش تو نوشته می‌شوند) |
| `projects/` | سه پروژه‌ی واقعی ماژول ۱۳ |
| `resources/` | معرفی کتاب‌ها، مقاله‌ها، مستندات رسمی و دوره‌ها |

## منابع

- [کتاب‌ها و ترتیب پیشنهادی مطالعه](resources/books.md)
- [مقاله‌ها](resources/articles.md)
- [مستندات رسمی](resources/official-documentation.md)
- [دوره‌ها و تمرین‌گاه‌ها](resources/recommended-courses.md)

</div>
