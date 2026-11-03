<div dir="rtl">

# ماژول ۰۰: مبانی Clean Code (Clean Code Fundamentals)

## هدف این ماژول

قبل از اینکه یاد بگیریم «چطور» نام خوب انتخاب کنیم یا تابع تمیز بنویسیم، باید روی «چه» و «چرا» توافق کنیم. این ماژول زبان مشترک کل بوت‌کمپ را می‌سازد:

- Clean Code دقیقاً یعنی چه، و چه چیزی **نیست**؟
- کیفیت کد را با چه معیارهایی می‌سنجیم؟
- خوانایی و نگهداشت‌پذیری چرا مهم‌ترین ویژگی‌های کد در طول عمر یک محصول‌اند؟
- Technical Debt چطور ایجاد می‌شود و چطور مدیریتش کنیم؟
- Code Smellها چه هستند و چطور آن‌ها را در کد خودمان ببینیم؟
- Clean Code چه نسبتی با Clean Architecture و Design Patterns دارد؟
- چطور هر روز، کمی کد را بهتر از قبل تحویل دهیم (Boy Scout Rule)؟

## پیش‌نیاز

آشنایی با JavaScript و TypeScript در سطح نوشتن تابع، Object، Array و Type ساده.

## زمان تخمینی

حدود ۱ هفته (روزانه ۱ تا ۱.۵ ساعت)

## فهرست درس‌ها

| # | درس | English | تمرین‌ها |
|---|---|---|---|
| ۱ | [Clean Code چیست؟](01-what-is-clean-code.md) | What is Clean Code? | [مبتدی](../../exercises/beginner/00-foundations/01-what-is-clean-code.md) · [متوسط](../../exercises/intermediate/00-foundations/01-what-is-clean-code.md) · [پیشرفته](../../exercises/advanced/00-foundations/01-what-is-clean-code.md) |
| ۲ | [ویژگی‌های کد تمیز](02-characteristics-of-clean-code.md) | Characteristics of Clean Code | [مبتدی](../../exercises/beginner/00-foundations/02-characteristics-of-clean-code.md) · [متوسط](../../exercises/intermediate/00-foundations/02-characteristics-of-clean-code.md) · [پیشرفته](../../exercises/advanced/00-foundations/02-characteristics-of-clean-code.md) |
| ۳ | [کیفیت کد](03-code-quality.md) | Code Quality | [مبتدی](../../exercises/beginner/00-foundations/03-code-quality.md) · [متوسط](../../exercises/intermediate/00-foundations/03-code-quality.md) · [پیشرفته](../../exercises/advanced/00-foundations/03-code-quality.md) |
| ۴ | [خوانایی](04-readability.md) | Readability | [مبتدی](../../exercises/beginner/00-foundations/04-readability.md) · [متوسط](../../exercises/intermediate/00-foundations/04-readability.md) · [پیشرفته](../../exercises/advanced/00-foundations/04-readability.md) |
| ۵ | [نگهداشت‌پذیری](05-maintainability.md) | Maintainability | [مبتدی](../../exercises/beginner/00-foundations/05-maintainability.md) · [متوسط](../../exercises/intermediate/00-foundations/05-maintainability.md) · [پیشرفته](../../exercises/advanced/00-foundations/05-maintainability.md) |
| ۶ | [بدهی فنی](06-technical-debt.md) | Technical Debt | [مبتدی](../../exercises/beginner/00-foundations/06-technical-debt.md) · [متوسط](../../exercises/intermediate/00-foundations/06-technical-debt.md) · [پیشرفته](../../exercises/advanced/00-foundations/06-technical-debt.md) |
| ۷ | [بوی کد](07-code-smells.md) | Code Smells | [مبتدی](../../exercises/beginner/00-foundations/07-code-smells.md) · [متوسط](../../exercises/intermediate/00-foundations/07-code-smells.md) · [پیشرفته](../../exercises/advanced/00-foundations/07-code-smells.md) |
| ۸ | [Clean Code در برابر Clean Architecture](08-clean-code-vs-clean-architecture.md) | Clean Code vs Clean Architecture | [مبتدی](../../exercises/beginner/00-foundations/08-clean-code-vs-clean-architecture.md) · [متوسط](../../exercises/intermediate/00-foundations/08-clean-code-vs-clean-architecture.md) · [پیشرفته](../../exercises/advanced/00-foundations/08-clean-code-vs-clean-architecture.md) |
| ۹ | [Clean Code در برابر Design Patterns](09-clean-code-vs-design-patterns.md) | Clean Code vs Design Patterns | [مبتدی](../../exercises/beginner/00-foundations/09-clean-code-vs-design-patterns.md) · [متوسط](../../exercises/intermediate/00-foundations/09-clean-code-vs-design-patterns.md) · [پیشرفته](../../exercises/advanced/00-foundations/09-clean-code-vs-design-patterns.md) |
| ۱۰ | [قانون پیشاهنگ](10-boy-scout-rule.md) | Boy Scout Rule | [مبتدی](../../exercises/beginner/00-foundations/10-boy-scout-rule.md) · [متوسط](../../exercises/intermediate/00-foundations/10-boy-scout-rule.md) · [پیشرفته](../../exercises/advanced/00-foundations/10-boy-scout-rule.md) |

## مثال‌های قابل اجرا

مثال‌های اصلی این ماژول به‌صورت کد بد و کد تمیز، در هر دو زبان، در این مسیرها هستند:

- TypeScript: [examples/typescript/00-foundations](../../examples/typescript/00-foundations/)
- JavaScript: [examples/javascript/00-foundations](../../examples/javascript/00-foundations/)

| فایل | درس مرتبط |
|---|---|
| `order-total.*` | ۱ — Clean Code چیست؟ |
| `shipping-fee.*` | ۳ — کیفیت کد |
| `visible-products.*` | ۴ — خوانایی |
| `user-report.*` | ۷ — بوی کد |
| `cart-boy-scout.*` | ۱۰ — قانون پیشاهنگ |

اجرای تست‌ها: `npm test` در ریشه‌ی پروژه.

## بعد از این ماژول باید بتوانم...

- با زبان خودم توضیح دهم Clean Code چیست و چرا از نظر اقتصادی اهمیت دارد.
- کدی را بخوانم و حداقل ۵ Code Smell آن را با نام دقیق شناسایی کنم.
- تفاوت بدهی فنی «آگاهانه و محتاطانه» با «بی‌پروا» را تشخیص دهم.
- مرز بین مسائل سطح کد، سطح الگو و سطح معماری را تشخیص دهم.
- در هر Pull Request یک بهبود کوچک و امن (Boy Scout) انجام دهم.

## ناوبری

- [نقشه‌ی راه کامل](../../ROADMAP.md)
- [پیشرفت من](../../PROGRESS.md)
- ماژول بعد: [۰۱ — نام‌گذاری و سازمان‌دهی کد](../01-naming-and-structure/README.md)

</div>
