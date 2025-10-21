import React, { useEffect, useRef, useState, useMemo } from 'react';
import { LLMRichTextProps } from '../types';
import { parseMarkdown } from '../utils/markdownParser';
import { themeToCSSVariables } from '../utils/themeUtils';
import '../styles/LLMRichText.css';

/**
 * LLMRichText Component
 *
 * A React component that converts LLM markdown output into beautifully formatted rich text.
 * Supports real-time streaming, syntax highlighting, and extensive customization.
 *
 * @example
 * ```tsx
 * <LLMRichText
 *   content="# Hello World\n\nThis is **bold** and this is *italic*"
 *   streaming={true}
 *   enableCodeHighlight={true}
 * />
 * ```
 */
export const LLMRichText: React.FC<LLMRichTextProps> = ({
  content,
  streaming = false,
  className = '',
  style = {},
  theme,
  enableCodeHighlight = true,
  codeLanguage,
  codeTheme = 'github-dark',
  showCodeCopyButton = true,
  sanitize = true,
  onRenderComplete,
  animationConfig = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedContent, setDisplayedContent] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const previousContentRef = useRef('');

  // Default animation config
  const {
    fadeIn = true,
    fadeInDuration = 200,
    showCursor = true,
    cursorBlinkSpeed = 530,
  } = animationConfig;

  // Parse markdown to HTML
  const htmlContent = useMemo(() => {
    return parseMarkdown(displayedContent, enableCodeHighlight, codeLanguage, sanitize);
  }, [displayedContent, enableCodeHighlight, codeLanguage, sanitize]);

  // Handle streaming content
  useEffect(() => {
    if (streaming && content !== previousContentRef.current) {
      previousContentRef.current = content;
      setDisplayedContent(content);
      setIsComplete(false);
    } else if (!streaming) {
      setDisplayedContent(content);
      setIsComplete(true);
    }
  }, [content, streaming]);

  // Mark streaming as complete when content stops changing
  useEffect(() => {
    if (streaming && content === displayedContent) {
      const timeout = setTimeout(() => {
        setIsComplete(true);
        onRenderComplete?.();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [content, displayedContent, streaming, onRenderComplete]);

  // Add copy buttons to code blocks
  useEffect(() => {
    if (!showCodeCopyButton || !containerRef.current) return;

    const codeBlocks = containerRef.current.querySelectorAll('pre code');

    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement;
      if (!pre) return;

      // Check if button already exists
      if (pre.querySelector('.code-copy-button')) return;

      const button = document.createElement('button');
      button.className = 'code-copy-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code to clipboard');

      button.addEventListener('click', async () => {
        const code = codeBlock.textContent || '';
        try {
          await navigator.clipboard.writeText(code);
          button.textContent = 'Copied!';
          button.classList.add('copied');
          setTimeout(() => {
            button.textContent = 'Copy';
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
          button.textContent = 'Failed';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        }
      });

      pre.style.position = 'relative';
      pre.appendChild(button);
    });
  }, [htmlContent, showCodeCopyButton]);

  // Apply custom theme using CSS variables
  const containerStyle = useMemo(() => {
    const baseStyle = { ...style };

    if (theme) {
      // Convert theme to CSS variables
      const cssVars = themeToCSSVariables(theme);
      Object.assign(baseStyle, cssVars);
    }

    return baseStyle;
  }, [style, theme]);

  // Note: CSS variables are now applied via inline styles in containerStyle

  // Call onRenderComplete when not streaming
  useEffect(() => {
    if (!streaming && onRenderComplete) {
      onRenderComplete();
    }
  }, [streaming, onRenderComplete]);

  return (
    <div
      ref={containerRef}
      className={`llm-rich-text-container ${className} ${fadeIn ? 'fade-in' : ''}`}
      style={containerStyle}
      data-streaming={streaming}
    >
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      {streaming && !isComplete && showCursor && (
        <span
          className="streaming-cursor"
          style={{ animationDuration: `${cursorBlinkSpeed}ms` }}
        />
      )}
    </div>
  );
};

export default LLMRichText;
