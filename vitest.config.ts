import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['examples/**/*.test.{ts,js}', 'playground/**/*.test.{ts,js}', 'solutions/**/*.test.{ts,js}', 'projects/**/*.test.{ts,js}'],
  },
});
