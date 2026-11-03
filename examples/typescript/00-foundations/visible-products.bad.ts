// Lesson 00-04 — Readability (BAD on purpose)
// eslint warnings in this file are intentional.
export function getP(ps: any[], u: any, f: any) {
  return ps
    .filter((p) => !p.del && (p.stk > 0 || f.s) && (!p.vip || (u && u.vip)))
    .sort((a, b) => (f.o == 'asc' ? a.pr - b.pr : f.o == 'desc' ? b.pr - a.pr : 0));
}
