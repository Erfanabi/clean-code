// ESLint flat config.
// فایل‌های *.bad.* عمداً کد بد هستند؛ قوانین روی آن‌ها به warn تبدیل می‌شوند
// تا اجرای `npm run lint` مشکلاتشان را نشان دهد ولی شکست نخورد.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['node_modules', 'coverage', 'dist'] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  {
    languageOptions: { globals: { ...globals.node } },
    rules: {
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      complexity: ['warn', { max: 10 }],
      'max-depth': ['warn', 3],
      'max-params': ['warn', 4],
    },
  },
  {
    files: ['**/*.bad.ts', '**/*.bad.js'],
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    rules: {
      eqeqeq: 'warn',
      'no-var': 'warn',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      // Only checked on bad examples: in clean code, named constants and data tables
      // legitimately contain numbers, which this rule cannot tell apart.
      'no-magic-numbers': ['warn', { ignore: [0, 1, -1] }],
    },
  },
);
