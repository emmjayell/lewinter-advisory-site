import { marked } from 'marked';
import GithubSlugger from 'github-slugger';

// Render markdown to HTML with GitHub-style heading ids, matching the slugs
// Astro's content renderer produces. Used for service/pillar detail bodies so
// the cross-page anchor links in src/lib/pillars.ts keep resolving, while
// still letting the page inject inline figures and display quotes at precise
// positions in the prose (which a sealed <Content /> component does not allow).
export function renderMarkdown(md: string): string {
  const slugger = new GithubSlugger();
  const renderer = new marked.Renderer();
  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const raw = tokens.map((t) => ('raw' in t ? t.raw : '')).join('');
    const id = slugger.slug(raw.trim());
    return `<h${depth} id="${id}">${text}</h${depth}>\n`;
  };
  return marked.parse(md, { async: false, gfm: true, breaks: false, renderer }) as string;
}
