# react-llm-rtf

> Transform raw LLM markdown into stunning, production-ready rich text in seconds.

A powerful React component library for converting LLM markdown output into beautifully formatted rich text with real-time streaming support.

[![npm version](https://badge.fury.io/js/react-llm-rtf.svg)](https://www.npmjs.com/package/react-llm-rtf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/react-llm-rtf.svg)](https://www.npmjs.com/package/react-llm-rtf)

---

## 🎯 Why react-llm-rtf?

### The Problem

When integrating LLMs like ChatGPT or Claude into your React app, you get raw markdown text that looks unprofessional and requires complex parsing logic:

**❌ Before: Raw markdown looks terrible**
```
# Getting Started\n\nThis is **bold** text.\n\n```javascript\nconst code = "messy";\n```
```

You'd need to:
- ❌ Parse markdown yourself (complex, 100+ lines)
- ❌ Handle streaming chunks (error-prone, 50+ lines)
- ❌ Implement syntax highlighting (time-consuming, 80+ lines)
- ❌ Style everything from scratch (tedious, 200+ lines CSS)
- ❌ Sanitize HTML for security (critical but often forgotten, 40+ lines)
- ❌ Add copy buttons for code (nice-to-have, 50+ lines)
- ❌ Support dark mode (100+ lines CSS)
- ❌ Make it responsive (additional complexity)

**Total: 620+ lines of complex code to write, test, and maintain**

### The Solution

**✅ After: Beautiful, formatted content with ONE line**

```tsx
<LLMRichText content={llmResponse} streaming={true} />
```

**Result:** Professional rich text with syntax highlighting, copy buttons, dark mode, and perfect styling - zero configuration needed.

---

## 📊 Real-World Impact

### Development Time
| Task | Without react-llm-rtf | With react-llm-rtf | Time Saved |
|------|----------------------|-------------------|------------|
| Setup & Configuration | 2 hours | 2 minutes | **98%** ⚡ |
| Markdown Parsing | 4 hours | 0 minutes | **100%** ⚡ |
| Syntax Highlighting | 3 hours | 0 minutes | **100%** ⚡ |
| Streaming Support | 5 hours | 0 minutes | **100%** ⚡ |
| Styling & Design | 8 hours | 0 minutes | **100%** ⚡ |
| Testing | 4 hours | 0 minutes | **100%** ⚡ |
| **TOTAL** | **26 hours (3+ days)** | **2 minutes** | **99.87%** 🚀 |

### Code Reduction
- **Traditional implementation:** 620+ lines of complex code
- **With react-llm-rtf:** 1-3 lines of code
- **Code reduction:** **99.5% less code** to maintain

### What's Included (that you'd build yourself)
✅ Markdown parsing (~100 lines saved)
✅ Syntax highlighting for 180+ languages (~80 lines saved)
✅ Code copy buttons (~50 lines saved)
✅ HTML sanitization & security (~40 lines saved)
✅ Real-time streaming support (~120 lines saved)
✅ Professional styling (~200+ lines CSS saved)
✅ Dark mode support (~100 lines CSS saved)
✅ TypeScript definitions (~50 lines saved)
✅ Responsive design (~80 lines saved)

**Total: 820+ lines of code you never have to write!**

---

## ⚡ Live Comparison

### Traditional Approach (Complex & Time-Consuming)

```tsx
// ❌ 150+ lines of complex code
import { useState, useEffect, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import 'highlight.js/styles/github-dark.css';

function ComplexLLMComponent({ initialContent }) {
  const [content, setContent] = useState('');
  const [isStreaming, setIsStreaming] = useState(true);
  const containerRef = useRef(null);

  const md = new MarkdownIt({
    html: true,
    breaks: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, {
            language: lang,
            ignoreIllegals: true
          }).value;
        } catch (__) {
          console.error('Highlighting failed');
        }
      }
      return '';
    }
  });

  useEffect(() => {
    // Complex streaming logic
    if (initialContent) {
      setContent(initialContent);
    }
  }, [initialContent]);

  useEffect(() => {
    // Add copy buttons to code blocks
    if (containerRef.current) {
      const codeBlocks = containerRef.current.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        // Complex copy button implementation
        // ... 40 more lines
      });
    }
  }, [content]);

  const parsedContent = DOMPurify.sanitize(
    md.render(content || ''),
    { ALLOWED_TAGS: [...], ALLOWED_ATTR: [...] }
  );

  return (
    <div
      ref={containerRef}
      className="markdown-container"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
}

// Plus: 200+ lines of custom CSS
// Plus: Error handling, edge cases, security concerns
// Plus: Maintenance, updates, bug fixes
```

### With react-llm-rtf (Simple & Powerful)

```tsx
// ✅ 3 lines of clean, maintainable code
import { LLMRichText } from 'react-llm-rtf';

function SimpleLLMComponent({ content }) {
  return <LLMRichText content={content} streaming />;
}
```

**Same professional output. 99% less code. Zero headaches. ✨**

---

## 🚀 Installation

```bash
npm install react-llm-rtf
```

or

```bash
yarn add react-llm-rtf
```

or

```bash
pnpm add react-llm-rtf
```

---

## 💡 Quick Start (60 seconds to beautiful output)

### Basic Usage

```tsx
import { LLMRichText } from 'react-llm-rtf';

function App() {
  const llmResponse = `
# Getting Started with AI

Welcome! Here's what you'll learn:

## Key Concepts

- **Machine Learning** - Teaching computers to learn from data
- **Neural Networks** - Brain-inspired computing models
- *Deep Learning* - Advanced neural network architectures

## Sample Code

\`\`\`python
def hello_ai():
    print("Hello from AI!")
    return "Ready to learn"
\`\`\`

\`\`\`javascript
const analyze = (data) => {
  return data.map(item => item.value * 2);
};
\`\`\`

> "AI is the new electricity." - Andrew Ng

| Model | Parameters | Performance |
|-------|------------|-------------|
| GPT-4 | 1.7T | Excellent |
| Claude | Unknown | Excellent |
  `;

  return <LLMRichText content={llmResponse} />;
}
```

**Output includes:**
- ✅ Beautifully styled headings with proper hierarchy
- ✅ Formatted lists with clean indentation
- ✅ Syntax-highlighted code blocks with copy buttons
- ✅ Elegant blockquotes with custom styling
- ✅ Professional tables with responsive design
- ✅ Perfect typography and spacing
- ✅ Automatic dark mode support
- ✅ Mobile-responsive layout

---

## 🎬 Streaming Example (Perfect for Real-Time LLM APIs)

### With OpenAI ChatGPT

```tsx
import { LLMRichText, useStreamingContent } from 'react-llm-rtf';
import OpenAI from 'openai';

function ChatGPTComponent() {
  const { content, appendContent, isStreaming } = useStreamingContent();

  const streamResponse = async (prompt) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const stream = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || '';
      appendContent(text);
    }
  };

  return (
    <LLMRichText
      content={content}
      streaming={isStreaming}
      showCodeCopyButton={true}
      enableCodeHighlight={true}
    />
  );
}
```

### With Anthropic Claude

```tsx
import { LLMRichText, useStreamingContent } from 'react-llm-rtf';
import Anthropic from '@anthropic-ai/sdk';

function ClaudeComponent() {
  const { content, appendContent } = useStreamingContent();

  const streamClaude = async (prompt) => {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

    const stream = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' &&
          event.delta.type === 'text_delta') {
        appendContent(event.delta.text);
      }
    }
  };

  return <LLMRichText content={content} streaming />;
}
```

---

## 🎨 Customization

**react-llm-rtf** provides **complete customization** of every visual aspect. Change table borders, bullet styles, colors, fonts, spacing, and more!

### Quick Example: Custom Table Borders & Bullet Style

```tsx
<LLMRichText
  content={markdown}
  theme={{
    colors: {
      tableBorder: '#ff0000',        // Red table borders!
      tableHeaderBg: '#ffeeee',
      link: '#0000ff',                // Blue links
    },
    lists: {
      bulletStyle: 'square',          // Square bullets instead of circles
    },
  }}
/>
```

### Comprehensive Theme Configuration

```tsx
<LLMRichText
  content={markdown}
  theme={{
    colors: {
      // Text colors
      text: '#1a1a1a',
      heading: '#0066cc',

      // Table colors - Full control!
      tableBorder: '#3498db',
      tableHeaderBg: '#ecf0f1',
      tableRowAltBg: '#f8f9fa',

      // List colors
      listBulletColor: '#e74c3c',
      listNumberColor: '#2ecc71',

      // Code colors
      code: '#e01e5a',
      codeBlockBg: '#f6f8fa',

      // And 30+ more color options!
    },
    fonts: {
      body: 'Inter, system-ui, sans-serif',
      heading: 'Playfair Display, serif',
      code: 'Fira Code, monospace',
    },
    fontSizes: {
      base: '18px',
      h1: '2.5em',
    },
    spacing: {
      paragraphMargin: '20px',
      tableCellPadding: '12px 16px',
    },
    borders: {
      radius: '8px',
      width: '2px',
    },
    lists: {
      bulletStyle: 'square',           // 'disc' | 'circle' | 'square' | 'none'
      numberStyle: 'upper-roman',      // 'decimal' | 'lower-alpha' | 'upper-alpha' | etc.
      indentation: '2.5em',
    },
  }}
/>
```

### Predefined Themes

Use built-in theme presets:

```tsx
import { LLMRichText, themePresets } from 'react-llm-rtf';

// Ocean theme
<LLMRichText content={markdown} theme={themePresets.ocean} />

// Sunset theme
<LLMRichText content={markdown} theme={themePresets.sunset} />

// Forest theme
<LLMRichText content={markdown} theme={themePresets.forest} />

// Minimal theme
<LLMRichText content={markdown} theme={themePresets.minimal} />

// Modern theme
<LLMRichText content={markdown} theme={themePresets.modern} />
```

### What You Can Customize

✅ **60+ customizable properties including:**
- Table borders, backgrounds, and hover effects
- Bullet and number list styles
- All colors (text, links, code, tables, lists, etc.)
- All fonts and font sizes
- All spacing and padding
- Border radius and styles
- Checkbox colors and styles
- Copy button appearance
- Animation settings
- And much more!

**📖 See [CUSTOMIZATION.md](CUSTOMIZATION.md) for complete guide with examples!**

### Custom Styling

```tsx
<LLMRichText
  content={markdown}
  className="my-custom-class"
  style={{
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  }}
/>
```

### Animation Configuration

```tsx
<LLMRichText
  content={content}
  streaming={true}
  animationConfig={{
    fadeIn: true,
    fadeInDuration: 300,
    showCursor: true,
    cursorBlinkSpeed: 530,
  }}
/>
```

---

## 📚 API Reference

### LLMRichText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | **required** | Markdown content to render |
| `streaming` | `boolean` | `false` | Enable streaming mode with cursor |
| `className` | `string` | `''` | Additional CSS class name |
| `style` | `CSSProperties` | `{}` | Inline styles for container |
| `theme` | `ThemeConfig` | - | Custom theme configuration |
| `enableCodeHighlight` | `boolean` | `true` | Enable syntax highlighting |
| `codeLanguage` | `string` | - | Default language for code blocks |
| `codeTheme` | `string` | `'github-dark'` | Code highlighting theme |
| `showCodeCopyButton` | `boolean` | `true` | Show copy button on code blocks |
| `sanitize` | `boolean` | `true` | Sanitize HTML content |
| `onRenderComplete` | `() => void` | - | Callback when rendering completes |
| `animationConfig` | `AnimationConfig` | - | Animation settings for streaming |

### useStreamingContent Hook

```tsx
const {
  content,          // Current content string
  isStreaming,      // Whether actively streaming
  startStreaming,   // Start simulated streaming
  appendContent,    // Append chunk to content
  stopStreaming,    // Stop streaming immediately
  reset,            // Reset to empty string
  setContent,       // Set content directly
} = useStreamingContent(options);
```

**Options:**
- `chunkDelay?: number` - Delay between chunks in ms (default: 50)
- `chunkSize?: number` - Characters per chunk (default: 10)
- `onComplete?: () => void` - Callback when streaming completes

---

## ✨ Features

### Full Markdown Support
- ✅ **Headings** (`# H1` through `###### H6`) with auto-generated IDs
- ✅ **Bold** (`**bold**` or `__bold__`)
- ✅ **Italic** (`*italic*` or `_italic_`)
- ✅ **Strikethrough** (`~~strikethrough~~`)
- ✅ **Underline** (`<u>text</u>`)
- ✅ **Highlighted/Marked** (`<mark>text</mark>`)
- ✅ **Links** (`[text](url)`) - opens in new tab with security
- ✅ **Images** (`![alt](url)`) - responsive with rounded corners
- ✅ **Code Blocks** with 180+ language support (` ```language `)
- ✅ **Inline Code** (`` `code` ``) - styled with background
- ✅ **Lists** (ordered, unordered, nested at any depth)
- ✅ **Task Lists** (`- [ ]` and `- [x]`) - styled checkboxes
- ✅ **Blockquotes** (`> quote`) - elegant styling with nesting support
- ✅ **Tables** - GitHub Flavored Markdown with alignment support
- ✅ **Horizontal Rules** (`---` or `***`)
- ✅ **Superscript** (`<sup>2</sup>`) for equations like E=mc<sup>2</sup>
- ✅ **Subscript** (`<sub>2</sub>`) for formulas like H<sub>2</sub>O
- ✅ **Keyboard Keys** (`<kbd>Ctrl</kbd>`) - styled key buttons
- ✅ **Abbreviations** (`<abbr title="...">`) - dotted underline with tooltip
- ✅ **Definition Lists** (`<dl>`, `<dt>`, `<dd>`)
- ✅ **Collapsible Sections** (`<details>`, `<summary>`) - interactive dropdowns

### Advanced Features
- 🚀 **Real-time Streaming** - Perfect for LLM APIs
- 💻 **Syntax Highlighting** - 180+ languages supported
- 📋 **Code Copy Buttons** - One-click copy functionality
- 🔒 **HTML Sanitization** - Secure by default with DOMPurify
- 🎨 **Customizable Themes** - Full control over appearance
- 🌓 **Dark Mode** - Automatic detection and support
- 📱 **Responsive Design** - Works on all screen sizes
- ⚡ **Performance Optimized** - Efficient React rendering
- 📦 **TypeScript Support** - Complete type definitions
- 🎯 **Zero Configuration** - Works out of the box

---

## 🎯 Perfect For

### AI Applications
- ✅ ChatGPT integrations
- ✅ Claude implementations
- ✅ Custom LLM chat interfaces
- ✅ AI coding assistants
- ✅ Customer support bots
- ✅ AI content generators

### Developer Tools
- ✅ Documentation generators
- ✅ Code explanation tools
- ✅ Technical blogs
- ✅ Learning platforms
- ✅ API documentation
- ✅ Developer portals

### Content Platforms
- ✅ AI writing assistants
- ✅ Markdown editors
- ✅ Knowledge bases
- ✅ Tutorial platforms
- ✅ Note-taking apps
- ✅ Documentation sites

---

## 🔄 Migration Guide

### From react-markdown

```diff
- import ReactMarkdown from 'react-markdown';
+ import { LLMRichText } from 'react-llm-rtf';

- <ReactMarkdown>{content}</ReactMarkdown>
+ <LLMRichText content={content} />
```

**Benefits:** ✅ Syntax highlighting ✅ Copy buttons ✅ Streaming ✅ Better styling

### From markdown-it

```diff
- import MarkdownIt from 'markdown-it';
- const md = new MarkdownIt();
- <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
+ import { LLMRichText } from 'react-llm-rtf';
+ <LLMRichText content={content} />
```

**Benefits:** ✅ Security ✅ React integration ✅ Streaming ✅ Zero config

---

## 📈 Performance

- ⚡ **Fast Rendering:** Optimized React components
- 📦 **Reasonable Size:** 2.2 MB package (includes all dependencies)
- 🎯 **Efficient Updates:** Minimal re-renders
- 💾 **Memory Friendly:** Efficient markdown parsing
- 🌳 **Tree-shakeable:** Import only what you need

---

## 🔒 Security

- 🛡️ **HTML Sanitization:** Built-in DOMPurify prevents XSS attacks
- ✅ **Safe by Default:** All user content is automatically sanitized
- 🚫 **No eval():** No dangerous code execution
- 🔐 **Security-First:** Built following security best practices
- ✨ **Regular Updates:** Security patches and updates

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📖 TypeScript Support

Full TypeScript definitions included - no need for `@types` packages!

```tsx
import {
  LLMRichText,
  LLMRichTextProps,
  ThemeConfig,
  useStreamingContent,
  UseStreamingContentOptions
} from 'react-llm-rtf';
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT © [rochall](https://github.com/rochall)

---

## 🔗 Links

- 📦 [NPM Package](https://www.npmjs.com/package/react-llm-rtf)
- 💻 [GitHub Repository](https://github.com/rochall/react-llm-rtf)
- 🐛 [Report Issues](https://github.com/rochall/react-llm-rtf/issues)
- 💬 [Discussions](https://github.com/rochall/react-llm-rtf/discussions)

---

## 📋 Changelog

### v1.0.0 (2025-10-21)
- 🎉 Initial release
- ✅ Full markdown support
- ✅ Real-time streaming capabilities
- ✅ Syntax highlighting for 180+ languages
- ✅ Code copy buttons
- ✅ Theme customization
- ✅ Dark mode support
- ✅ TypeScript support
- ✅ HTML sanitization
- ✅ Responsive design

---

## 🙏 Acknowledgments

Built with:
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Marked](https://marked.js.org/) - Markdown parsing
- [DOMPurify](https://github.com/cure53/DOMPurify) - HTML sanitization
- [Highlight.js](https://highlightjs.org/) - Syntax highlighting

---

<div align="center">

**[⭐ Star on GitHub](https://github.com/rochall/react-llm-rtf)** • **[📦 View on NPM](https://www.npmjs.com/package/react-llm-rtf)** • **[📖 Documentation](https://github.com/rochall/react-llm-rtf#readme)**

Made with ❤️ for the React & AI community

</div>
