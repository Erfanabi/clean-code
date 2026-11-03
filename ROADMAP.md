<div dir="rtl">

# نقشه‌ی راه بوت‌کمپ Clean Code

این سند مسیر کامل یادگیری را از مبانی تا پروژه‌های واقعی نشان می‌دهد. بوت‌کمپ از **۱۴ ماژول** و **۱۵۵ درس** تشکیل شده است.

## چطور از این نقشه استفاده کنم؟

- ماژول‌ها به ترتیب طراحی شده‌اند؛ هر ماژول روی ماژول قبلی بنا می‌شود. پیشنهاد می‌شود ترتیب را رعایت کنی.
- هر درس یک فایل مستقل Markdown دارد. درس‌هایی که هنوز نوشته نشده‌اند با «⏳» مشخص شده‌اند و به‌محض رسیدن به آن ماژول ساخته می‌شوند.
- زمان‌ها تخمینی هستند و برای روزی حدود ۱ تا ۱.۵ ساعت مطالعه و تمرین محاسبه شده‌اند.
- پیشرفت واقعی تو در [PROGRESS.md](PROGRESS.md) ثبت می‌شود.

## نمای کلی مسیر

| فاز | ماژول‌ها | هدف |
|---|---|---|
| فاز ۱: پایه | ۰۰ تا ۰۳ | نوشتن کد خوانا در سطح خط، نام و تابع |
| فاز ۲: استحکام | ۰۴ تا ۰۶ | مدیریت خطا، مدل‌سازی داده و استفاده‌ی حرفه‌ای از TypeScript |
| فاز ۳: طراحی | ۰۷ تا ۱۰ | اصول طراحی، معماری و الگوها |
| فاز ۴: مهارت عملی | ۱۱ تا ۱۳ | بازآرایی امن، تست و پروژه‌های کامل |

## ماژول ۰۰: مبانی Clean Code (Clean Code Fundamentals)

**هدف:** ساختن زبان مشترک: Clean Code دقیقاً چیست، کیفیت کد را چطور می‌سنجیم، Technical Debt و Code Smell چه هستند و Clean Code چه نسبتی با معماری و Design Pattern دارد.

**زمان تخمینی:** ۱ هفته — [صفحه‌ی ماژول](docs/00-foundations/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | [Clean Code چیست؟](docs/00-foundations/01-what-is-clean-code.md) | What is Clean Code? | ✅ نوشته شده |
| ۲ | [ویژگی‌های کد تمیز](docs/00-foundations/02-characteristics-of-clean-code.md) | Characteristics of Clean Code | ✅ نوشته شده |
| ۳ | [کیفیت کد](docs/00-foundations/03-code-quality.md) | Code Quality | ✅ نوشته شده |
| ۴ | [خوانایی](docs/00-foundations/04-readability.md) | Readability | ✅ نوشته شده |
| ۵ | [نگهداشت‌پذیری](docs/00-foundations/05-maintainability.md) | Maintainability | ✅ نوشته شده |
| ۶ | [بدهی فنی](docs/00-foundations/06-technical-debt.md) | Technical Debt | ✅ نوشته شده |
| ۷ | [بوی کد](docs/00-foundations/07-code-smells.md) | Code Smells | ✅ نوشته شده |
| ۸ | [Clean Code در برابر Clean Architecture](docs/00-foundations/08-clean-code-vs-clean-architecture.md) | Clean Code vs Clean Architecture | ✅ نوشته شده |
| ۹ | [Clean Code در برابر Design Patterns](docs/00-foundations/09-clean-code-vs-design-patterns.md) | Clean Code vs Design Patterns | ✅ نوشته شده |
| ۱۰ | [قانون پیشاهنگ](docs/00-foundations/10-boy-scout-rule.md) | Boy Scout Rule | ✅ نوشته شده |

## ماژول ۰۱: نام‌گذاری و سازمان‌دهی کد (Naming and Code Organization)

**هدف:** نام‌ها بیشترین بخش «خواندن» کد را تشکیل می‌دهند. این ماژول یاد می‌دهد چطور نام‌هایی بسازیم که نیت را آشکار کنند و فایل‌ها و ماژول‌ها را طوری بچینیم که پیدا کردن و تغییر دادن کد آسان باشد.

**زمان تخمینی:** ۱.۵ هفته — [صفحه‌ی ماژول](docs/01-naming-and-structure/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | نام‌گذاری معنادار | Meaningful Naming | ⏳ در انتظار |
| ۲ | نام‌های آشکارکننده‌ی نیت | Intention-Revealing Names | ⏳ در انتظار |
| ۳ | نام‌گذاری متغیرها | Variable Naming | ⏳ در انتظار |
| ۴ | نام‌گذاری توابع | Function Naming | ⏳ در انتظار |
| ۵ | نام‌گذاری کلاس‌ها | Class Naming | ⏳ در انتظار |
| ۶ | نام‌گذاری Interface و Type | Interface and Type Naming | ⏳ در انتظار |
| ۷ | نام‌گذاری Booleanها | Boolean Naming | ⏳ در انتظار |
| ۸ | ثابت‌ها | Constants | ⏳ در انتظار |
| ۹ | اعداد جادویی | Magic Numbers | ⏳ در انتظار |
| ۱۰ | سازمان‌دهی فایل | File Organization | ⏳ در انتظار |
| ۱۱ | ساختار پوشه‌ها | Folder Structure | ⏳ در انتظار |
| ۱۲ | مرزهای ماژول | Module Boundaries | ⏳ در انتظار |
| ۱۳ | سازمان‌دهی importها | Import Organization | ⏳ در انتظار |

## ماژول ۰۲: توابع و متدها (Functions and Methods)

**هدف:** تابع کوچک‌ترین واحد سازمان‌دهی رفتار است. این ماژول یاد می‌دهد توابع کوچک، تک‌مسئولیتی، قابل‌پیش‌بینی و بدون Side Effect پنهان بنویسیم و کنترل جریان را ساده کنیم.

**زمان تخمینی:** ۲ هفته — [صفحه‌ی ماژول](docs/02-functions-and-methods/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | تک‌مسئولیتی در توابع | Single Responsibility | ⏳ در انتظار |
| ۲ | توابع کوچک | Small Functions | ⏳ در انتظار |
| ۳ | آرگومان‌های تابع | Function Arguments | ⏳ در انتظار |
| ۴ | Parameter Object | Parameter Objects | ⏳ در انتظار |
| ۵ | پارامترهای پیش‌فرض | Default Parameters | ⏳ در انتظار |
| ۶ | توابع خالص | Pure Functions | ⏳ در انتظار |
| ۷ | اثرات جانبی | Side Effects | ⏳ در انتظار |
| ۸ | ترکیب توابع | Function Composition | ⏳ در انتظار |
| ۹ | Guard Clause | Guard Clauses | ⏳ در انتظار |
| ۱۰ | بازگشت زودهنگام | Early Returns | ⏳ در انتظار |
| ۱۱ | شرط‌های تودرتو | Nested Conditions | ⏳ در انتظار |
| ۱۲ | جهنم Callback | Callback Hell | ⏳ در انتظار |
| ۱۳ | جداسازی Command و Query | Command Query Separation | ⏳ در انتظار |
| ۱۴ | پرهیز از Boolean Flag | Avoiding Boolean Flags | ⏳ در انتظار |

## ماژول ۰۳: کامنت و مستندسازی (Comments and Documentation)

**هدف:** یاد می‌گیریم چه زمانی کامنت ارزش اضافه می‌کند و چه زمانی نشانه‌ی شکست در بیان کد است، و چطور با JSDoc و TypeScript مستندات دقیق و همگام با کد بسازیم.

**زمان تخمینی:** ۱ هفته — [صفحه‌ی ماژول](docs/03-comments-and-documentation/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | کامنت‌های خوب | Good Comments | ⏳ در انتظار |
| ۲ | کامنت‌های بد | Bad Comments | ⏳ در انتظار |
| ۳ | کد خودمستند | Self-Documenting Code | ⏳ در انتظار |
| ۴ | JSDoc | JSDoc | ⏳ در انتظار |
| ۵ | مستندسازی در TypeScript | TypeScript Documentation | ⏳ در انتظار |
| ۶ | TODO و FIXME | TODO and FIXME | ⏳ در انتظار |
| ۷ | مستندسازی API | API Documentation | ⏳ در انتظار |

## ماژول ۰۴: مدیریت خطا (Error Handling)

**هدف:** خطا بخشی از منطق برنامه است، نه استثنا از آن. این ماژول یاد می‌دهد خطاها را دسته‌بندی، منتشر و در یک نقطه‌ی مرکزی مدیریت کنیم بدون اینکه منطق اصلی کثیف شود.

**زمان تخمینی:** ۱.۵ هفته — [صفحه‌ی ماژول](docs/04-error-handling/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | اصول مدیریت خطا | Error Handling Principles | ⏳ در انتظار |
| ۲ | try/catch | try/catch | ⏳ در انتظار |
| ۳ | خطاهای سفارشی | Custom Errors | ⏳ در انتظار |
| ۴ | انتشار خطا | Error Propagation | ⏳ در انتظار |
| ۵ | بلعیدن خطا | Error Swallowing | ⏳ در انتظار |
| ۶ | مدیریت خطای ناهمگام | Async Error Handling | ⏳ در انتظار |
| ۷ | الگوی Result | Result Pattern | ⏳ در انتظار |
| ۸ | خطاهای دامنه | Domain Errors | ⏳ در انتظار |
| ۹ | خطاهای فنی | Technical Errors | ⏳ در انتظار |
| ۱۰ | مدیریت خطا در API | API Error Handling | ⏳ در انتظار |
| ۱۱ | مدیریت متمرکز خطا | Centralized Error Handling | ⏳ در انتظار |

## ماژول ۰۵: اشیا و ساختمان داده (Objects and Data Structures)

**هدف:** تفاوت «شیء» و «داده‌ی خام»، کپسوله‌سازی، تغییرناپذیری، Value Object و مدل دامنه؛ و اینکه چطور Cohesion بالا و Coupling پایین را در سطح داده‌ها بسازیم.

**زمان تخمینی:** ۱.۵ هفته — [صفحه‌ی ماژول](docs/05-objects-and-data-structures/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | کپسوله‌سازی | Encapsulation | ⏳ در انتظار |
| ۲ | تغییرناپذیری | Immutability | ⏳ در انتظار |
| ۳ | داده‌ی Mutable در برابر Immutable | Mutable vs Immutable Data | ⏳ در انتظار |
| ۴ | DTO | DTO | ⏳ در انتظار |
| ۵ | مدل‌های دامنه | Domain Models | ⏳ در انتظار |
| ۶ | Value Object | Value Objects | ⏳ در انتظار |
| ۷ | وسواس نوع‌های اولیه | Primitive Obsession | ⏳ در انتظار |
| ۸ | انسجام | Cohesion | ⏳ در انتظار |
| ۹ | وابستگی | Coupling | ⏳ در انتظار |
| ۱۰ | ترکیب به‌جای وراثت | Composition over Inheritance | ⏳ در انتظار |
| ۱۱ | اعتبارسنجی داده | Data Validation | ⏳ در انتظار |

## ماژول ۰۶: TypeScript تمیز (Clean TypeScript)

**هدف:** استفاده از سیستم نوع TypeScript برای اینکه «حالت‌های نامعتبر غیرقابل‌نمایش» شوند: strict mode، unknown، Discriminated Union، Generic، Type Guard و سازمان‌دهی Typeها.

**زمان تخمینی:** ۲.۵ هفته — [صفحه‌ی ماژول](docs/06-clean-typescript/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | TypeScript سخت‌گیر | Strict TypeScript | ⏳ در انتظار |
| ۲ | پرهیز از any | Avoiding any | ⏳ در انتظار |
| ۳ | unknown | Unknown | ⏳ در انتظار |
| ۴ | استنتاج نوع | Type Inference | ⏳ در انتظار |
| ۵ | Union Type | Union Types | ⏳ در انتظار |
| ۶ | Intersection Type | Intersection Types | ⏳ در انتظار |
| ۷ | Discriminated Union | Discriminated Unions | ⏳ در انتظار |
| ۸ | Type Guard | Type Guards | ⏳ در انتظار |
| ۹ | Generic | Generics | ⏳ در انتظار |
| ۱۰ | Utility Type | Utility Types | ⏳ در انتظار |
| ۱۱ | Interface در برابر Type Alias | Interfaces vs Type Aliases | ⏳ در انتظار |
| ۱۲ | readonly | Readonly | ⏳ در انتظار |
| ۱۳ | Type Assertion | Type Assertions | ⏳ در انتظار |
| ۱۴ | Non-null Assertion | Non-null Assertions | ⏳ در انتظار |
| ۱۵ | never | Never | ⏳ در انتظار |
| ۱۶ | تایپ پاسخ API | API Response Types | ⏳ در انتظار |
| ۱۷ | مدیریت خطای Type-safe | Type-safe Error Handling | ⏳ در انتظار |
| ۱۸ | سازمان‌دهی Typeها | Type Organization | ⏳ در انتظار |

## ماژول ۰۷: اصول SOLID (SOLID Principles)

**هدف:** پنج اصل طراحی شیءگرا که مدیریت وابستگی‌ها و تغییرپذیری را هدف گرفته‌اند؛ هر اصل با مثال واقعی JavaScript و TypeScript و نقدِ زیاده‌روی در آن.

**زمان تخمینی:** ۲ هفته — [صفحه‌ی ماژول](docs/07-solid-principles/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | اصل تک‌مسئولیتی | Single Responsibility Principle | ⏳ در انتظار |
| ۲ | اصل باز/بسته | Open/Closed Principle | ⏳ در انتظار |
| ۳ | اصل جایگزینی لیسکوف | Liskov Substitution Principle | ⏳ در انتظار |
| ۴ | اصل تفکیک Interface | Interface Segregation Principle | ⏳ در انتظار |
| ۵ | اصل وارونگی وابستگی | Dependency Inversion Principle | ⏳ در انتظار |

## ماژول ۰۸: اصول طراحی نرم‌افزار (Software Design Principles)

**هدف:** اصول کلی‌تر از SOLID که در هر زبان و پارادایمی کاربرد دارند؛ و مهم‌تر از آن، تنش‌های بین این اصول (مثلاً DRY در برابر Coupling) و نحوه‌ی تصمیم‌گیری.

**زمان تخمینی:** ۱.۵ هفته — [صفحه‌ی ماژول](docs/08-software-design-principles/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | DRY | DRY | ⏳ در انتظار |
| ۲ | KISS | KISS | ⏳ در انتظار |
| ۳ | YAGNI | YAGNI | ⏳ در انتظار |
| ۴ | جداسازی دغدغه‌ها | Separation of Concerns | ⏳ در انتظار |
| ۵ | ترکیب به‌جای وراثت (سطح طراحی) | Composition over Inheritance | ⏳ در انتظار |
| ۶ | قانون دمتر | Law of Demeter | ⏳ در انتظار |
| ۷ | اصل کمترین شگفتی | Principle of Least Surprise | ⏳ در انتظار |
| ۸ | انسجام بالا | High Cohesion | ⏳ در انتظار |
| ۹ | وابستگی پایین | Low Coupling | ⏳ در انتظار |
| ۱۰ | شکست سریع | Fail Fast | ⏳ در انتظار |
| ۱۱ | اصل کمترین دانش | Principle of Least Knowledge | ⏳ در انتظار |

## ماژول ۰۹: معماری تمیز (Clean Architecture)

**هدف:** از کد تمیز به سیستم تمیز: لایه‌ها، قانون وابستگی، Use Case، Repository، Dependency Injection و Hexagonal Architecture در پروژه‌های Node.js و Next.js.

**زمان تخمینی:** ۲.۵ هفته — [صفحه‌ی ماژول](docs/09-clean-architecture/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | مبانی معماری نرم‌افزار | Software Architecture Fundamentals | ⏳ در انتظار |
| ۲ | معماری لایه‌ای | Layered Architecture | ⏳ در انتظار |
| ۳ | قانون وابستگی | Dependency Rule | ⏳ در انتظار |
| ۴ | لایه‌ی دامنه | Domain Layer | ⏳ در انتظار |
| ۵ | لایه‌ی Application | Application Layer | ⏳ در انتظار |
| ۶ | لایه‌ی Infrastructure | Infrastructure Layer | ⏳ در انتظار |
| ۷ | لایه‌ی Presentation | Presentation Layer | ⏳ در انتظار |
| ۸ | الگوی Repository | Repository Pattern | ⏳ در انتظار |
| ۹ | Use Case | Use Cases | ⏳ در انتظار |
| ۱۰ | تزریق وابستگی | Dependency Injection | ⏳ در انتظار |
| ۱۱ | معماری شش‌ضلعی | Hexagonal Architecture | ⏳ در انتظار |
| ۱۲ | Port و Adapter | Ports and Adapters | ⏳ در انتظار |
| ۱۳ | Clean Architecture در برابر معماری لایه‌ای | Clean Architecture vs Layered Architecture | ⏳ در انتظار |

## ماژول ۱۰: الگوهای طراحی (Design Patterns)

**هدف:** هر الگو به‌عنوان «راه‌حل یک مسئله‌ی تکرارشونده»: مسئله، راه‌حل، پیاده‌سازی مدرن در TypeScript و — به همان اندازه مهم — زمانی که نباید از آن استفاده کرد.

**زمان تخمینی:** ۲.۵ هفته — [صفحه‌ی ماژول](docs/10-design-patterns/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | Factory | Factory | ⏳ در انتظار |
| ۲ | Strategy | Strategy | ⏳ در انتظار |
| ۳ | Observer | Observer | ⏳ در انتظار |
| ۴ | Adapter | Adapter | ⏳ در انتظار |
| ۵ | Decorator | Decorator | ⏳ در انتظار |
| ۶ | Builder | Builder | ⏳ در انتظار |
| ۷ | Singleton | Singleton | ⏳ در انتظار |
| ۸ | Repository | Repository | ⏳ در انتظار |
| ۹ | Dependency Injection | Dependency Injection | ⏳ در انتظار |
| ۱۰ | Command | Command | ⏳ در انتظار |
| ۱۱ | Facade | Facade | ⏳ در انتظار |

## ماژول ۱۱: بازآرایی کد (Refactoring)

**هدف:** تغییر ساختار کد بدون تغییر رفتار، در گام‌های کوچک و امن. هر تکنیک از کاتالوگ Martin Fowler با مکانیک گام‌به‌گام و تست‌های پشتیبان.

**زمان تخمینی:** ۲.۵ هفته — [صفحه‌ی ماژول](docs/11-refactoring/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | Extract Function | Extract Function | ⏳ در انتظار |
| ۲ | Extract Variable | Extract Variable | ⏳ در انتظار |
| ۳ | Rename Variable | Rename Variable | ⏳ در انتظار |
| ۴ | Replace Magic Number with Constant | Replace Magic Number with Constant | ⏳ در انتظار |
| ۵ | Replace Conditional with Polymorphism | Replace Conditional with Polymorphism | ⏳ در انتظار |
| ۶ | Decompose Conditional | Decompose Conditional | ⏳ در انتظار |
| ۷ | Introduce Parameter Object | Introduce Parameter Object | ⏳ در انتظار |
| ۸ | Replace Nested Conditional with Guard Clauses | Replace Nested Conditional with Guard Clauses | ⏳ در انتظار |
| ۹ | Remove Dead Code | Remove Dead Code | ⏳ در انتظار |
| ۱۰ | Remove Duplication | Remove Duplication | ⏳ در انتظار |
| ۱۱ | Encapsulate Variable | Encapsulate Variable | ⏳ در انتظار |
| ۱۲ | Move Function | Move Function | ⏳ در انتظار |
| ۱۳ | Extract Class | Extract Class | ⏳ در انتظار |
| ۱۴ | Inline Function | Inline Function | ⏳ در انتظار |
| ۱۵ | بازآرایی امن با تست | Safe Refactoring with Tests | ⏳ در انتظار |

## ماژول ۱۲: تست و Clean Code (Testing and Clean Code)

**هدف:** کد تمیز کدی است که تست‌کردنش آسان باشد، و تست تمیز مستندات زنده‌ی سیستم است. همه‌ی مثال‌ها با Vitest.

**زمان تخمینی:** ۲ هفته — [صفحه‌ی ماژول](docs/12-testing-and-clean-code/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | تست واحد | Unit Testing | ⏳ در انتظار |
| ۲ | تست یکپارچگی | Integration Testing | ⏳ در انتظار |
| ۳ | کد تست‌پذیر | Testable Code | ⏳ در انتظار |
| ۴ | Arrange Act Assert | Arrange Act Assert | ⏳ در انتظار |
| ۵ | اصول FIRST | FIRST Principles | ⏳ در انتظار |
| ۶ | نام‌گذاری تست | Test Naming | ⏳ در انتظار |
| ۷ | تست توابع خالص | Pure Function Testing | ⏳ در انتظار |
| ۸ | Mocking | Mocking | ⏳ در انتظار |
| ۹ | Stubbing | Stubbing | ⏳ در انتظار |
| ۱۰ | تزریق وابستگی برای تست | Dependency Injection for Testing | ⏳ در انتظار |
| ۱۱ | تست خطاها | Error Testing | ⏳ در انتظار |
| ۱۲ | حالت‌های مرزی | Edge Cases | ⏳ در انتظار |
| ۱۳ | سازمان‌دهی تست‌ها | Test Organization | ⏳ در انتظار |

## ماژول ۱۳: پروژه‌های واقعی (Real-World Projects)

**هدف:** به‌کارگیری همه‌ی آموخته‌ها در سه پروژه‌ی کامل با نیازمندی، معماری، تست، تمرین بازآرایی و چک‌لیست Code Review.

**زمان تخمینی:** ۴ هفته — [صفحه‌ی ماژول](docs/13-real-world-projects/README.md)

| # | درس | English | وضعیت |
|---|---|---|---|
| ۱ | سیستم مدیریت سفارش فروشگاهی | E-commerce Order Management | ⏳ در انتظار |
| ۲ | سیستم مدیریت وظایف | Task Management System | ⏳ در انتظار |
| ۳ | سرویس API با Node.js و TypeScript | Node.js + TypeScript API Service | ⏳ در انتظار |

## قواعد پیشروی

1. هر درس با «شروع درس» آغاز می‌شود و با یک «آزمون» یا «تمرین» بسته می‌شود.
2. درس فقط زمانی «تکمیل‌شده» ثبت می‌شود که درک آن با آزمون یا تمرین عملی تأیید شده باشد؛ صرفِ خواندن کافی نیست.
3. رفتن به درس بعد فقط با دستور «برو بعدی» انجام می‌شود.

</div>
