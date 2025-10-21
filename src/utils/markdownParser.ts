import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

/**
 * Configure marked with custom renderer
 */
export const configureMarked = (enableCodeHighlight: boolean = true, codeLanguage?: string) => {
  const renderer = new marked.Renderer();

  // Custom code block renderer with syntax highlighting
  renderer.code = function(code: string, language: string | undefined) {
    const lang = language || codeLanguage || 'plaintext';

    if (enableCodeHighlight) {
      try {
        const highlighted = hljs.highlight(code, {
          language: lang === 'plaintext' ? 'text' : lang,
          ignoreIllegals: true
        }).value;

        return `<pre><code class="hljs language-${lang}" data-language="${lang}">${highlighted}</code></pre>`;
      } catch (e) {
        // Fall back to non-highlighted code if highlighting fails
        return `<pre><code class="language-${lang}" data-language="${lang}">${escapeHtml(code)}</code></pre>`;
      }
    }

    return `<pre><code class="language-${lang}" data-language="${lang}">${escapeHtml(code)}</code></pre>`;
  };

  // Custom inline code renderer
  renderer.codespan = function(code: string) {
    return `<code class="inline-code">${escapeHtml(code)}</code>`;
  };

  // Custom link renderer with security
  renderer.link = function(href: string, title: string | null | undefined, text: string) {
    const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
    // Add rel="noopener noreferrer" for security
    return `<a href="${escapeHtml(href)}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
  };

  // Custom heading renderer with IDs for anchor links
  renderer.heading = function(text: string, level: number) {
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} id="${id}">${text}</h${level}>`;
  };

  // Custom blockquote renderer
  renderer.blockquote = function(quote: string) {
    return `<blockquote class="llm-blockquote">${quote}</blockquote>`;
  };

  // Custom list renderer
  renderer.list = function(body: string, ordered: boolean) {
    const type = ordered ? 'ol' : 'ul';
    return `<${type} class="llm-list">${body}</${type}>`;
  };

  // Custom table renderer
  renderer.table = function(header: string, body: string) {
    return `<table class="llm-table"><thead>${header}</thead><tbody>${body}</tbody></table>`;
  };

  marked.use({ renderer });

  // Configure marked options
  marked.setOptions({
    breaks: true, // Convert \n to <br>
    gfm: true, // GitHub Flavored Markdown
  });

  return marked;
};

/**
 * Parse markdown to HTML
 */
export const parseMarkdown = (
  markdown: string,
  enableCodeHighlight: boolean = true,
  codeLanguage?: string,
  sanitize: boolean = true
): string => {
  const markedInstance = configureMarked(enableCodeHighlight, codeLanguage);
  const html = markedInstance.parse(markdown) as string;

  if (sanitize) {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        // Headings
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        // Block elements
        'p', 'br', 'hr', 'div', 'span', 'section',
        // Text formatting
        'strong', 'em', 'u', 's', 'del', 'mark', 'b', 'i',
        'sup', 'sub', 'small', 'abbr', 'kbd',
        // Links and media
        'a', 'img',
        // Code
        'code', 'pre', 'samp', 'var',
        // Lists
        'ul', 'ol', 'li', 'dl', 'dt', 'dd',
        // Quotes
        'blockquote', 'q', 'cite',
        // Tables
        'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'colgroup', 'col',
        // Interactive
        'details', 'summary',
        // Forms (for checkboxes in task lists)
        'input', 'label',
      ],
      ALLOWED_ATTR: [
        // Links
        'href', 'title', 'target', 'rel',
        // Structure
        'class', 'id', 'data-language', 'data-footnote-ref',
        // Media
        'src', 'alt', 'width', 'height',
        // Tables
        'align', 'valign', 'colspan', 'rowspan',
        // Forms/Interactive
        'type', 'checked', 'disabled',
        // Accessibility
        'aria-label', 'aria-describedby', 'role',
      ]
    });
  }

  return html;
};

/**
 * Escape HTML special characters
 */
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

/**
 * Extract plain text from markdown (useful for streaming)
 */
export const getPlainText = (markdown: string): string => {
  return markdown
    .replace(/#{1,6}\s/g, '') // Remove heading markers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/`(.+?)`/g, '$1') // Remove inline code
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .replace(/!\[.+?\]\(.+?\)/g, '') // Remove images
    .trim();
};

/**
 * Check if content contains incomplete markdown (useful for streaming)
 */
export const hasIncompleteMarkdown = (content: string): boolean => {
  // Check for unclosed code blocks
  const codeBlocks = (content.match(/```/g) || []).length;
  if (codeBlocks % 2 !== 0) return true;

  // Check for unclosed inline code
  const inlineCode = (content.match(/`/g) || []).length;
  if (inlineCode % 2 !== 0) return true;

  // Check for unclosed bold
  const bold = (content.match(/\*\*/g) || []).length;
  if (bold % 2 !== 0) return true;

  // Check for unclosed italic
  const italic = (content.match(/(?<!\*)\*(?!\*)/g) || []).length;
  if (italic % 2 !== 0) return true;

  return false;
};
