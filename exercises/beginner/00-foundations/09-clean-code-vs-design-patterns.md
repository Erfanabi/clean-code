<div dir="rtl">

# تمرین‌های مبتدی — درس ۹: Clean Code در برابر Design Patterns

> درس مرتبط: [Clean Code در برابر Design Patterns](../../../docs/00-foundations/09-clean-code-vs-design-patterns.md)

## تمرین ۱: تشخیص زیاده‌روی

</div>

```typescript
interface IGreetingProvider { getGreeting(name: string): string; }

class PersianGreetingProvider implements IGreetingProvider {
  getGreeting(name: string) { return `سلام ${name}`; }
}

class GreetingProviderFactory {
  static create(): IGreetingProvider { return new PersianGreetingProvider(); }
}

class GreetingService {
  private provider = GreetingProviderFactory.create();
  greet(name: string) { return this.provider.getGreeting(name); }
}

console.log(new GreetingService().greet('مریم'));
```

<div dir="rtl">

**خواسته:**

1. چند الگو یا لایه در این کد هست؟ نام ببر.
2. کدام نشانه‌های Pattern Overuse درس در آن دیده می‌شود؟
3. ساده‌ترین نسخه‌ای را بنویس که همان کار را انجام دهد.
4. یک موقعیت **واقعی** توصیف کن که در آن یک Interface برای «تولید پیام خوش‌آمد» واقعاً ارزش داشته باشد.

## تمرین ۲: Strategy با توابع

</div>

```typescript
abstract class SortStrategy { abstract sort(items: number[]): number[]; }
class AscendingSort extends SortStrategy { sort(items: number[]) { return [...items].sort((a, b) => a - b); } }
class DescendingSort extends SortStrategy { sort(items: number[]) { return [...items].sort((a, b) => b - a); } }
class Sorter {
  constructor(private strategy: SortStrategy) {}
  setStrategy(s: SortStrategy) { this.strategy = s; }
  run(items: number[]) { return this.strategy.sort(items); }
}
```

<div dir="rtl">

**خواسته:** همین قابلیت (انتخاب الگوریتم مرتب‌سازی در زمان اجرا) را با یک نوع تابع و یک Object از توابع بنویس. **ایده‌ی** Strategy باید حفظ شود.

**محل کد:** `playground/00-foundations/09-clean-code-vs-design-patterns/beginner-2.ts`

</div>
