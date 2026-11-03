// Verifies every Persian Markdown file in the bootcamp:
//   1. it starts with <div dir="rtl">,
//   2. its <div> tags are balanced,
//   3. no fenced code block is opened inside an RTL div,
//   4. every relative link points to an existing file or folder.
// Usage: node scripts/verify-docs.mjs
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKIPPED_DIRS = new Set(['node_modules', '.git', 'coverage', 'dist']);
const ENGLISH_ONLY_FILES = new Set(['CLAUDE.md']);
const RTL_OPEN = '<div dir="rtl">';

function findMarkdownFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return SKIPPED_DIRS.has(name) ? [] : findMarkdownFiles(path);
    return name.endsWith('.md') ? [path] : [];
  });
}

function checkRtlStructure(lines) {
  const problems = [];
  if (lines[0]?.trim() !== RTL_OPEN) problems.push('first line is not <div dir="rtl">');

  let openDivs = 0;
  let insideFence = false;
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      if (!insideFence && openDivs > 0) problems.push(`line ${index + 1}: code block inside RTL div`);
      insideFence = !insideFence;
      return;
    }
    if (insideFence) return;
    if (trimmed === RTL_OPEN) openDivs++;
    if (trimmed === '</div>') openDivs--;
    if (openDivs < 0) problems.push(`line ${index + 1}: </div> without opening div`);
  });
  if (openDivs !== 0) problems.push(`unbalanced divs (${openDivs} left open)`);
  if (insideFence) problems.push('unclosed code block');
  return problems;
}

function checkRelativeLinks(file, content) {
  const withoutCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
  const problems = [];
  for (const [, target] of withoutCode.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const path = decodeURIComponent(target.split('#')[0]);
    if (!existsSync(resolve(dirname(file), path))) problems.push(`broken link: ${target}`);
  }
  return problems;
}

let failures = 0;
const files = findMarkdownFiles(ROOT);
for (const file of files) {
  const name = relative(ROOT, file).replaceAll('\\', '/');
  const content = readFileSync(file, 'utf8');
  const problems = [
    ...(ENGLISH_ONLY_FILES.has(name) ? [] : checkRtlStructure(content.split(/\r?\n/))),
    ...checkRelativeLinks(file, content),
  ];
  if (problems.length > 0) {
    failures++;
    console.error(`✗ ${name}\n  - ${problems.join('\n  - ')}`);
  }
}

console.log(`${files.length} Markdown files checked, ${failures} with problems.`);
process.exitCode = failures > 0 ? 1 : 0;
