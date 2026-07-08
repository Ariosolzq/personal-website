// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/**
 * Minimal, dependency-free remark plugin.
 *
 * A fenced ```mermaid block parses to an mdast `code` node. We replace it with a
 * raw-HTML `<pre class="mermaid">` node *before* syntax highlighting runs, so
 * Shiki leaves it alone and Mermaid's browser runtime can pick it up and draw
 * it. This keeps diagram source authored as a normal fenced code block while the
 * site stays fully static — the diagram is drawn client-side, no build-time
 * browser required.
 */
function remarkMermaid() {
  /** @param {string} s */
  const escape = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /** @param {any} node */
  const walk = (node) => {
    if (!node || !Array.isArray(node.children)) return;
    node.children.forEach((/** @type {any} */ child, /** @type {number} */ i) => {
      if (child.type === 'code' && child.lang === 'mermaid') {
        node.children[i] = {
          type: 'html',
          value: `<pre class="mermaid">${escape(child.value)}</pre>`,
        };
      } else {
        walk(child);
      }
    });
  };
  /** @param {any} tree */
  return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://ziqi-lin.vercel.app',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMermaid],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
