import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

const projectRoot = process.cwd();

export interface LoadedPage<TFrontmatter = Record<string, unknown>> {
  frontmatter: TFrontmatter;
  html: string;
  body: string;
}

export function loadPage<TFrontmatter = Record<string, unknown>>(
  relPath: string,
): LoadedPage<TFrontmatter> {
  const absPath = path.resolve(projectRoot, relPath);
  const raw = fs.readFileSync(absPath, 'utf-8');
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return {
    frontmatter: data as TFrontmatter,
    body: content,
    html,
  };
}
