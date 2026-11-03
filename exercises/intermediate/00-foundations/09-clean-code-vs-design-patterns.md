<div dir="rtl">

# تمرین‌های متوسط — درس ۹: Clean Code در برابر Design Patterns

> درس مرتبط: [Clean Code در برابر Design Patterns](../../../docs/00-foundations/09-clean-code-vs-design-patterns.md)

## تمرین ۱: خداحافظی با Singleton

</div>

```typescript
class Logger {
  private static instance: Logger;
  private lines: string[] = [];
  private constructor() {}
  static getInstance() {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }
  log(msg: string) { this.lines.push(`${new Date().toISOString()} ${msg}`); }
  getLines() { return this.lines; }
}

export function placeOrder(id: string) {
  Logger.getInstance().log(`order ${id} placed`);
}
```

<div dir="rtl">

**خواسته:**

1. دو تست برای `placeOrder` بنویس که هر کدام بررسی کنند «دقیقاً یک خط لاگ ثبت شد». چه اتفاقی می‌افتد وقتی هر دو را با هم اجرا کنی؟ چرا؟
2. کد را طوری بازطراحی کن که Logger به‌صورت پارامتر (Dependency Injection) پاس داده شود و ساعت هم قابل کنترل باشد.
3. در یک پاراگراف توضیح بده ES Module چطور می‌تواند جایگزین Singleton شود و محدودیتش برای تست چیست.

**محل کد:** `playground/00-foundations/09-clean-code-vs-design-patterns/intermediate-1.ts`

## تمرین ۲: الگو یا نه؟

برای هر سناریو تصمیم بگیر: «ساده بنویس» یا «از الگوی X استفاده کن». دلیلت را با معیارهای درس (مسئله‌ی واقعی، Rule of Three، هزینه‌ی ساختار) بنویس.

1. اپلیکیشن با یک سرویس ارسال پیامک کار می‌کند. قرارداد با این سرویس سالانه تمدید می‌شود و پارسال سرویس عوض شد.
2. فرم ثبت‌نام دو فیلد اختیاری دارد و می‌خواهی یک «Builder» برای ساختن Object کاربر بنویسی.
3. یک ویرایشگر متن در React داری که باید Undo/Redo داشته باشد.
4. یک فایل `config.ts` داری که تنظیمات را یک بار از Environment می‌خواند.
5. سیستم گزارش‌گیری باید خروجی PDF، Excel و CSV بدهد و تیم گفته JSON هم به‌زودی اضافه می‌شود.

</div>
