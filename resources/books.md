<div dir="rtl">

# کتاب‌های مرجع و ترتیب پیشنهادی مطالعه

این بوت‌کمپ بر پایه‌ی چند کتاب کلاسیک مهندسی نرم‌افزار ساخته شده است. لازم نیست همه را قبل از شروع بخوانی؛ درس‌ها مفاهیم کلیدی را به فارسی توضیح می‌دهند. اما هر کتاب زاویه‌ی دید متفاوتی دارد و خواندن آن‌ها، به ترتیب درست، دانش تو را عمیق می‌کند.

## چرا ترتیب مهم است؟

بعضی کتاب‌ها «قاعده» می‌دهند (مثل Clean Code) و بعضی «فلسفه و Trade-off» (مثل A Philosophy of Software Design). اگر فقط قاعده بخوانی، ممکن است قاعده‌ها را کورکورانه اجرا کنی. اگر فقط فلسفه بخوانی، ابزار عملی کم داری. ترتیب زیر از عملی به مفهومی و از سطح خط کد به سطح سیستم حرکت می‌کند.

## ترتیب پیشنهادی

| ترتیب | کتاب | هم‌زمان با ماژول |
|---|---|---|
| ۱ | The Pragmatic Programmer | ۰۰ |
| ۲ | Clean Code | ۰۰ تا ۰۵ |
| ۳ | Effective TypeScript | ۰۶ |
| ۴ | Refactoring (ویرایش دوم) | ۱۱ (ولی از ماژول ۰۲ ورق بزن) |
| ۵ | A Philosophy of Software Design | ۰۷ تا ۰۹ |
| ۶ | Clean Architecture | ۰۹ |

---

## ۱. The Pragmatic Programmer — David Thomas و Andrew Hunt

- **ویرایش پیشنهادی:** نسخه‌ی بیستمین سالگرد (2019)
- **لینک:** https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/

**چرا بخوانم؟** این کتاب درباره‌ی «نگرش» یک مهندس حرفه‌ای است: مسئولیت‌پذیری، DRY، Orthogonality، Tracer Bullets، اجتناب از Broken Windows. خیلی از اصولی که در ماژول ۰۰ و ۰۸ می‌بینی اینجا متولد شده‌اند. کتاب از بخش‌های کوتاه و مستقل تشکیل شده و برای شروع ایده‌آل است.

**چطور بخوانم؟** هر روز یک یا دو Topic. بعد از هر Topic از خودت بپرس: «این را در پروژه‌ی فعلی‌ام کجا رعایت نمی‌کنم؟»

## ۲. Clean Code — Robert C. Martin

- **سال:** 2008
- **لینک:** https://www.oreilly.com/library/view/clean-code-a/9780136083238/

**چرا بخوانم؟** کتابی که اصطلاح Clean Code را عمومی کرد. فصل‌های نام‌گذاری، توابع، کامنت‌ها، مدیریت خطا و فصل پایانی Smells and Heuristics مستقیماً ماژول‌های ۰۰ تا ۰۵ این بوت‌کمپ را پوشش می‌دهند.

**هشدار مهم:** مثال‌ها به زبان Java و سبک دهه‌ی ۲۰۰۰ هستند. بعضی توصیه‌ها (مثلاً توابع بسیار کوچک ۲ تا ۴ خطی، یا تقسیم افراطی کلاس‌ها) امروز مورد نقد جدی‌اند — مخصوصاً از طرف John Ousterhout در کتاب شماره‌ی ۵. در درس‌ها هر جا این اختلاف نظر مهم باشد، هر دو دیدگاه را می‌بینی. کتاب را «جعبه‌ابزار» ببین، نه «قانون مقدس».

## ۳. Effective TypeScript — Dan Vanderkam

- **ویرایش پیشنهادی:** ویرایش دوم (2024)
- **لینک:** https://effectivetypescript.com/

**چرا بخوانم؟** مجموعه‌ای از «آیتم»های مشخص برای استفاده‌ی درست از سیستم نوع TypeScript: پرهیز از any، مدل‌سازی حالت‌های معتبر، استنتاج نوع، Type Narrowing. منبع اصلی ماژول ۰۶.

**چطور بخوانم؟** آیتم‌به‌آیتم، و هر آیتم را در TypeScript Playground امتحان کن.

## ۴. Refactoring — Martin Fowler

- **ویرایش پیشنهادی:** ویرایش دوم (2018) — مثال‌ها به JavaScript هستند
- **لینک کتاب:** https://martinfowler.com/books/refactoring.html
- **کاتالوگ آنلاین تکنیک‌ها:** https://refactoring.com/catalog/

**چرا بخوانم؟** Refactoring یعنی تغییر ساختار بدون تغییر رفتار. فصل ۳ (Bad Smells in Code) مرجع درس «Code Smells» در ماژول ۰۰ است و کاتالوگ تکنیک‌ها پایه‌ی کامل ماژول ۱۱. چون ویرایش دوم به JavaScript نوشته شده، برای تو کاملاً قابل‌استفاده است.

## ۵. A Philosophy of Software Design — John Ousterhout

- **ویرایش پیشنهادی:** ویرایش دوم (2021)
- **لینک:** https://web.stanford.edu/~ouster/cgi-bin/book.php

**چرا بخوانم؟** کتابی کوتاه و عمیق درباره‌ی «پیچیدگی» به‌عنوان دشمن اصلی طراحی. مفاهیم Deep Module، Information Hiding و «Define errors out of existence» از اینجا می‌آیند. این کتاب نقطه‌ی مقابل سالمی برای بعضی توصیه‌های Clean Code است و به تو کمک می‌کند Trade-off را بفهمی، نه فقط قاعده را.

## ۶. Clean Architecture — Robert C. Martin

- **سال:** 2017
- **لینک:** https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/

**چرا بخوانم؟** پایه‌ی ماژول ۰۹: قانون وابستگی (Dependency Rule)، اصول SOLID در سطح معماری و جداسازی سیاست (Policy) از جزئیات (Details).

---

## کتاب‌های مکمل (اختیاری)

| کتاب | چرا |
|---|---|
| Design Patterns — Gamma, Helm, Johnson, Vlissides (GoF) | مرجع اصلی الگوهای طراحی؛ برای ماژول ۱۰ از Refactoring Guru شروع کن و این را مرجع عمیق‌تر بدان |
| Working Effectively with Legacy Code — Michael Feathers | وقتی با کد قدیمی بدون تست روبه‌رو هستی؛ مکمل ماژول ۱۱ و ۱۲ |
| Domain-Driven Design — Eric Evans | پس از ماژول ۰۹، برای مدل‌سازی دامنه‌های پیچیده |

</div>
