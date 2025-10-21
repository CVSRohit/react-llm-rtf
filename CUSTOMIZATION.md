# Complete Customization Guide

`react-llm-rtf` provides extensive customization options through a comprehensive theme system. You can customize **every visual aspect** including colors, fonts, spacing, borders, and more!

## Table of Contents

- [Quick Start](#quick-start)
- [Theme Configuration](#theme-configuration)
- [Predefined Themes](#predefined-themes)
- [Complete Examples](#complete-examples)
- [CSS Variables Reference](#css-variables-reference)

---

## Quick Start

### Basic Theme Example

```tsx
import { LLMRichText } from 'react-llm-rtf';

<LLMRichText
  content={markdown}
  theme={{
    colors: {
      tableBorder: '#ff0000',        // Red table borders
      link: '#0000ff',                // Blue links
    },
    lists: {
      bulletStyle: 'square',          // Square bullets
    },
  }}
/>
```

That's it! The component automatically applies your custom theme.

---

## Theme Configuration

### Colors

Control colors for every element:

```tsx
theme={{
  colors: {
    // Text colors
    text: '#1a1a1a',
    textSecondary: '#6a737d',
    heading: '#0066cc',

    // Link colors
    link: '#0066cc',
    linkHover: '#0052a3',
    linkVisited: '#6f42c1',

    // Code colors
    code: '#e01e5a',                  // Inline code text
    codeBg: '#f6f8fa',                // Inline code background
    codeBlockBg: '#f6f8fa',          // Code block background
    codeBlockBorder: '#d1d5da',      // Code block border

    // Blockquote colors
    blockquoteBorder: '#dfe2e5',
    blockquoteBg: '#f6f8fa',
    blockquoteText: '#6a737d',

    // TABLE COLORS - Full control!
    tableBorder: '#dfe2e5',          // Table border color
    tableHeaderBg: '#f6f8fa',        // Header background
    tableHeaderText: '#24292e',      // Header text color
    tableRowBg: '#fff',              // Row background
    tableRowAltBg: '#f6f8fa',        // Alternate row background
    tableRowHoverBg: '#f0f0f0',      // Hover background

    // LIST COLORS - Customize bullets!
    listBulletColor: '#0066cc',      // Bullet point color
    listNumberColor: '#0066cc',      // Number color
    taskCheckboxBg: '#fff',          // Checkbox background
    taskCheckboxBorder: '#d1d5da',   // Checkbox border
    taskCheckboxChecked: '#0366d6',  // Checked color

    // Other elements
    hrColor: '#e1e4e8',              // Horizontal rule
    markBg: '#fff3cd',               // Highlighted text
    markText: 'inherit',
    kbdBg: '#f6f8fa',                // Keyboard key
    kbdBorder: '#d1d5da',
    kbdText: '#24292e',

    // Interactive elements
    detailsBg: '#f6f8fa',
    detailsBorder: '#d1d5da',
    summaryHoverColor: '#0366d6',

    // Copy button
    copyButtonBg: '#f6f8fa',
    copyButtonBorder: '#d1d5da',
    copyButtonText: '#24292e',
    copyButtonHoverBg: '#e1e4e8',

    // Background
    background: 'transparent',
  }
}}
```

### Fonts

Customize all fonts:

```tsx
theme={{
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Playfair Display, serif',
    code: 'Fira Code, monospace',
    monospace: 'Consolas, monospace',
  },
  fontSizes: {
    base: '18px',
    h1: '2.5em',
    h2: '2em',
    h3: '1.5em',
    h4: '1.25em',
    h5: '1em',
    h6: '0.875em',
    code: '90%',
    small: '0.875em',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
}}
```

### Spacing

Control all spacing:

```tsx
theme={{
  spacing: {
    paragraphMargin: '20px',
    headingMargin: '32px',
    listMargin: '20px',
    listItemMargin: '0.5em',
    codeBlockPadding: '20px',
    blockquotePadding: '0 1.5em',
    tableCellPadding: '12px 16px',
  },
}}
```

### Borders

Customize all borders:

```tsx
theme={{
  borders: {
    radius: '8px',
    radiusSmall: '4px',
    radiusLarge: '12px',
    width: '2px',
    style: 'solid',
  },
}}
```

### Lists

Change bullet and number styles:

```tsx
theme={{
  lists: {
    bulletStyle: 'square',           // 'disc' | 'circle' | 'square' | 'none'
    numberStyle: 'upper-roman',      // 'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman'
    indentation: '2.5em',
  },
}}
```

### Tables

Control table behavior:

```tsx
theme={{
  tables: {
    borderCollapse: 'separate',      // 'collapse' | 'separate'
    borderSpacing: '2px',
    stripedRows: true,               // Alternating row colors
    hoverEffect: true,               // Hover highlighting
  },
}}
```

### Animations

Configure animations:

```tsx
theme={{
  animations: {
    enabled: true,
    duration: '0.3s',
    easing: 'ease-in-out',
  },
}}
```

---

## Predefined Themes

Import and use pre-built themes:

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

---

## Complete Examples

### Example 1: Red Tables with Blue Links

```tsx
<LLMRichText
  content={markdown}
  theme={{
    colors: {
      tableBorder: '#ff0000',
      tableHeaderBg: '#ffeeee',
      link: '#0000ff',
      linkHover: '#0000cc',
    },
  }}
/>
```

### Example 2: Square Bullets with Custom Colors

```tsx
<LLMRichText
  content={markdown}
  theme={{
    lists: {
      bulletStyle: 'square',
    },
    colors: {
      listBulletColor: '#00ff00',
      text: '#333333',
    },
  }}
/>
```

### Example 3: Dark Theme

```tsx
<LLMRichText
  content={markdown}
  theme={{
    colors: {
      background: '#1a1a1a',
      text: '#e6e6e6',
      heading: '#ffffff',
      link: '#58a6ff',
      linkHover: '#79c0ff',
      codeBlockBg: '#2d2d2d',
      tableBorder: '#404040',
      tableHeaderBg: '#2d2d2d',
      tableRowBg: '#1a1a1a',
      tableRowAltBg: '#242424',
      blockquoteBorder: '#404040',
      blockquoteBg: '#2d2d2d',
    },
  }}
/>
```

### Example 4: Professional Blog Style

```tsx
<LLMRichText
  content={markdown}
  theme={{
    fonts: {
      body: 'Georgia, serif',
      heading: 'Helvetica Neue, sans-serif',
      code: 'Monaco, monospace',
    },
    fontSizes: {
      base: '19px',
      h1: '2.5em',
    },
    colors: {
      text: '#2c3e50',
      heading: '#1a252f',
      link: '#3498db',
      tableBorder: '#bdc3c7',
      tableHeaderBg: '#ecf0f1',
    },
    spacing: {
      paragraphMargin: '24px',
      headingMargin: '36px',
    },
    borders: {
      radius: '4px',
    },
  }}
/>
```

### Example 5: Colorful Tech Blog

```tsx
<LLMRichText
  content={markdown}
  theme={{
    colors: {
      heading: '#ff6b6b',
      link: '#4ecdc4',
      linkHover: '#45b7af',
      codeBlockBg: '#ffe66d',
      codeBg: '#ffe66d',
      code: '#2d3748',
      tableBorder: '#4ecdc4',
      tableHeaderBg: '#95e1d3',
      blockquoteBorder: '#ff6b6b',
    },
    borders: {
      radius: '12px',
    },
    lists: {
      bulletStyle: 'circle',
    },
  }}
/>
```

### Example 6: Minimal Black & White

```tsx
<LLMRichText
  content={markdown}
  theme={{
    colors: {
      text: '#000000',
      heading: '#000000',
      link: '#000000',
      linkHover: '#666666',
      tableBorder: '#000000',
      tableHeaderBg: '#f5f5f5',
      codeBlockBg: '#f5f5f5',
      blockquoteBorder: '#000000',
    },
    lists: {
      bulletStyle: 'square',
    },
    borders: {
      radius: '0px',
    },
  }}
/>
```

### Example 7: Combine with Custom CSS

```tsx
<LLMRichText
  content={markdown}
  className="my-custom-markdown"
  theme={{
    colors: {
      tableBorder: '#3498db',
    },
  }}
  style={{
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
  }}
/>
```

### Example 8: Extend a Preset

```tsx
import { themePresets } from 'react-llm-rtf';

const myTheme = {
  ...themePresets.ocean,
  colors: {
    ...themePresets.ocean.colors,
    tableBorder: '#ff0000',  // Override just the table border
  },
};

<LLMRichText content={markdown} theme={myTheme} />
```

---

## CSS Variables Reference

All customization is powered by CSS variables. You can also override these directly in your CSS:

```css
.llm-rich-text-container {
  /* Text */
  --llm-text-color: #333;
  --llm-heading-color: #1a1a1a;

  /* Links */
  --llm-link-color: #0366d6;
  --llm-link-hover: #0056b3;

  /* Tables */
  --llm-table-border: #dfe2e5;
  --llm-table-header-bg: #f6f8fa;
  --llm-table-row-bg: #fff;
  --llm-table-row-alt-bg: #f6f8fa;

  /* Lists */
  --llm-list-bullet-style: disc;
  --llm-list-bullet-color: currentColor;

  /* Code */
  --llm-code-block-bg: #f6f8fa;
  --llm-code-color: #e01e5a;

  /* Spacing */
  --llm-spacing-paragraph: 16px;
  --llm-spacing-table-cell: 8px 13px;

  /* Borders */
  --llm-border-radius: 6px;
  --llm-border-width: 1px;

  /* ... and 50+ more variables! */
}
```

---

## Tips & Best Practices

### 1. Start Small
Don't try to customize everything at once. Start with colors or fonts, then add more.

### 2. Use Presets as Templates
Copy a preset and modify it:
```tsx
const myTheme = { ...themePresets.ocean };
myTheme.colors.tableBorder = '#ff0000';
```

### 3. Test in Dark Mode
Many users prefer dark mode. Test your custom theme with:
```css
@media (prefers-color-scheme: dark) { ... }
```

### 4. Maintain Contrast
Ensure sufficient contrast between text and background for accessibility.

### 5. Be Consistent
Use a consistent color palette and spacing scale throughout your theme.

---

## Advanced: Dynamic Themes

### Theme Switcher

```tsx
function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  const themes = {
    default: {},
    ocean: themePresets.ocean,
    sunset: themePresets.sunset,
    dark: {
      colors: {
        background: '#1a1a1a',
        text: '#e6e6e6',
        // ... dark colors
      },
    },
  };

  return (
    <div>
      <select onChange={(e) => setCurrentTheme(e.target.value)}>
        <option value="default">Default</option>
        <option value="ocean">Ocean</option>
        <option value="sunset">Sunset</option>
        <option value="dark">Dark</option>
      </select>

      <LLMRichText
        content={markdown}
        theme={themes[currentTheme]}
      />
    </div>
  );
}
```

### User Preference Persistence

```tsx
function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('markdown-theme');
    return saved ? JSON.parse(saved) : {};
  });

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('markdown-theme', JSON.stringify(newTheme));
  };

  return [theme, updateTheme];
}
```

---

## Summary

With `react-llm-rtf`, you have **complete control** over styling:

✅ **60+ customizable properties**
✅ **CSS variables for easy overriding**
✅ **5 built-in theme presets**
✅ **Type-safe TypeScript configuration**
✅ **Automatic dark mode support**
✅ **Combine with custom CSS**

Change **anything**: table borders, bullet styles, colors, fonts, spacing, and more!
