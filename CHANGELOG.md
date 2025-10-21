# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-21

### Added
- Initial release of react-llm-rtf
- LLMRichText component for rendering markdown as rich text
- Full markdown support (headings, lists, tables, code blocks, blockquotes, links, images)
- Real-time streaming support for LLM outputs
- useStreamingContent custom hook for easier streaming integration
- Syntax highlighting with highlight.js (180+ languages)
- One-click copy functionality for code blocks
- Built-in HTML sanitization with DOMPurify
- Customizable theme system with light/dark mode support
- TypeScript support with complete type definitions
- CSS styling with automatic dark mode detection
- Animation configuration for streaming mode (fade-in, cursor effects)
- Comprehensive documentation and examples
- Unit tests with Jest and React Testing Library
- ESLint configuration for code quality
- Rollup bundling for CJS and ESM formats

### Features
- **Component Props:**
  - `content` - Markdown content to render
  - `streaming` - Enable real-time streaming mode
  - `className` - Custom CSS classes
  - `style` - Inline styles
  - `theme` - Custom theme configuration
  - `enableCodeHighlight` - Toggle syntax highlighting
  - `codeLanguage` - Default code language
  - `codeTheme` - Code highlighting theme
  - `showCodeCopyButton` - Toggle copy buttons
  - `sanitize` - HTML sanitization control
  - `onRenderComplete` - Render completion callback
  - `animationConfig` - Animation settings

- **Utilities:**
  - `parseMarkdown()` - Convert markdown to HTML
  - `configureMarked()` - Configure markdown parser
  - `getPlainText()` - Extract plain text from markdown
  - `hasIncompleteMarkdown()` - Check for incomplete markdown

- **Styling:**
  - GitHub-style markdown rendering
  - Responsive design
  - Dark mode support
  - Customizable colors, fonts, and spacing
  - Smooth animations for streaming

### Dependencies
- marked: ^11.1.1
- dompurify: ^3.0.7
- highlight.js: ^11.9.0

### Peer Dependencies
- react: ^16.8.0 || ^17.0.0 || ^18.0.0
- react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0

### Documentation
- README.md - Complete documentation
- EXAMPLE.md - Real-world usage examples
- PUBLISHING.md - Publishing guide
- PROJECT_SUMMARY.md - Project overview

### Build & Development
- TypeScript compilation
- Rollup bundling (CJS + ESM)
- Jest testing framework
- ESLint for code quality
- Source maps for debugging

## [1.1.0] - 2025-10-21

### Added
- **Task Lists** - Full support for styled checkboxes (`- [ ]` and `- [x]`)
- **Superscript & Subscript** - Support for mathematical notations and chemical formulas
- **Marked/Highlighted Text** - Yellow highlighting for `<mark>` tags
- **Keyboard Keys** - Styled keyboard key display with `<kbd>` tags
- **Abbreviations** - Dotted underline with tooltips for `<abbr>` tags
- **Definition Lists** - Support for `<dl>`, `<dt>`, `<dd>` tags
- **Collapsible Sections** - Interactive `<details>` and `<summary>` tags
- **Enhanced Table Styling** - Better alignment support (left, center, right)
- **Responsive Tables** - Mobile-optimized table display
- **Additional Text Formatting** - Underline (`<u>`), better strikethrough styling

### Improved
- **DOMPurify Whitelist** - Expanded to support all new HTML elements
- **Table Styling** - Increased padding, better borders, alignment attributes
- **Dark Mode** - Enhanced support for all new features
- **CSS Organization** - Grouped styles by feature type
- **Documentation** - Added comprehensive TEST_FEATURES.md demonstrating all capabilities

### Updated
- **marked** - Updated from v11.1.1 to v16.4.1 for better performance and features
- **README.md** - Expanded features list with all new markdown support

### Fixed
- Task list styling now properly removes bullet points
- Table alignment now works correctly with HTML align attributes
- Improved responsive behavior on mobile devices

## [1.2.0] - 2025-10-21

### Added - Complete Customization System! 🎨
- **Comprehensive Theme Configuration** - 60+ customizable properties via CSS variables
- **Table Customization** - Full control over borders, backgrounds, headers, and hover effects
- **List Customization** - Change bullet styles ('disc', 'circle', 'square', 'none')
- **List Customization** - Change number styles ('decimal', 'lower-alpha', 'upper-roman', etc.)
- **Color Customization** - 35+ color properties for every element
- **Font Customization** - Body, heading, code, and monospace fonts
- **Font Size Control** - Base size and individual heading sizes
- **Font Weight Control** - Normal, medium, semibold, and bold weights
- **Spacing Control** - Paragraph, heading, list, code block, and table cell spacing
- **Border Control** - Radius (small, regular, large), width, and style
- **Animation Control** - Duration, easing, and enable/disable
- **5 Predefined Themes** - Ocean, Sunset, Forest, Minimal, and Modern

### New Exports
- `themeToCSSVariables()` - Utility to convert theme config to CSS variables
- `themePresets` - Object with 5 predefined themes

### Documentation
- **CUSTOMIZATION.md** - Complete 400+ line customization guide with examples
- Updated README with comprehensive customization section
- Added examples for custom table borders, bullet styles, colors
- Included theme preset usage examples

### Technical
- Created CSS variables system with 70+ variables
- Created theme utility functions for type-safe configuration
- Updated TypeScript types with expanded ThemeConfig interface
- Refactored component to use CSS variables for all styling
- Added automatic theme application via inline styles

## [Unreleased]

### Planned for v1.3.0
- LaTeX/Math equation support with KaTeX or MathJax
- Table of contents generation
- Mermaid diagram support
- Export to PDF functionality
- More code highlighting themes
- Enhanced accessibility features (ARIA labels, keyboard navigation)

### Future Ideas
- Plugin system for custom renderers
- Markdown editor component
- Diff highlighting for changes
- Storybook documentation
- Theme builder UI

### Ideas for Future Versions
- Image optimization and lazy loading
- Emoji support
- Mermaid diagram support
- Video embed support
- Interactive code playgrounds
- Multi-language support (i18n)

---

[1.0.0]: https://github.com/rochall/react-llm-rtf/releases/tag/v1.0.0
