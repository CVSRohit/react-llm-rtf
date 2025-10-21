import { CSSProperties, ReactNode } from 'react';

export interface LLMRichTextProps {
  /**
   * The markdown content to render
   */
  content: string;

  /**
   * Enable streaming mode for real-time rendering
   * @default false
   */
  streaming?: boolean;

  /**
   * Custom class name for the root container
   */
  className?: string;

  /**
   * Custom styles for the root container
   */
  style?: CSSProperties;

  /**
   * Custom theme configuration
   */
  theme?: ThemeConfig;

  /**
   * Enable syntax highlighting for code blocks
   * @default true
   */
  enableCodeHighlight?: boolean;

  /**
   * Language for syntax highlighting (auto-detect if not specified)
   */
  codeLanguage?: string;

  /**
   * Code highlighting theme
   * @default 'github-dark'
   */
  codeTheme?: string;

  /**
   * Show copy button on code blocks
   * @default true
   */
  showCodeCopyButton?: boolean;

  /**
   * Enable sanitization of HTML content
   * @default true
   */
  sanitize?: boolean;

  /**
   * Callback when content is fully rendered
   */
  onRenderComplete?: () => void;

  /**
   * Custom renderer for specific markdown elements
   */
  customRenderers?: CustomRenderers;

  /**
   * Animation settings for streaming mode
   */
  animationConfig?: AnimationConfig;
}

export interface ThemeConfig {
  /**
   * Colors for different text elements
   */
  colors?: {
    // Text colors
    text?: string;
    textSecondary?: string;
    heading?: string;

    // Link colors
    link?: string;
    linkHover?: string;
    linkVisited?: string;

    // Code colors
    code?: string;
    codeBg?: string;
    codeBlockBg?: string;
    codeBlockBorder?: string;

    // Blockquote colors
    blockquoteBorder?: string;
    blockquoteBg?: string;
    blockquoteText?: string;

    // Table colors
    tableBorder?: string;
    tableHeaderBg?: string;
    tableHeaderText?: string;
    tableRowBg?: string;
    tableRowAltBg?: string;
    tableRowHoverBg?: string;

    // List colors
    listBulletColor?: string;
    listNumberColor?: string;
    taskCheckboxBg?: string;
    taskCheckboxBorder?: string;
    taskCheckboxChecked?: string;

    // Other elements
    hrColor?: string;
    markBg?: string;
    markText?: string;
    kbdBg?: string;
    kbdBorder?: string;
    kbdText?: string;

    // Interactive elements
    detailsBg?: string;
    detailsBorder?: string;
    summaryHoverColor?: string;

    // Copy button
    copyButtonBg?: string;
    copyButtonBorder?: string;
    copyButtonText?: string;
    copyButtonHoverBg?: string;

    // Background
    background?: string;
  };

  /**
   * Font settings
   */
  fonts?: {
    body?: string;
    heading?: string;
    code?: string;
    monospace?: string;
  };

  /**
   * Font sizes
   */
  fontSizes?: {
    base?: string;
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    code?: string;
    small?: string;
  };

  /**
   * Font weights
   */
  fontWeights?: {
    normal?: number;
    medium?: number;
    semibold?: number;
    bold?: number;
  };

  /**
   * Spacing settings
   */
  spacing?: {
    paragraphMargin?: string;
    headingMargin?: string;
    listMargin?: string;
    listItemMargin?: string;
    codeBlockPadding?: string;
    blockquotePadding?: string;
    tableCellPadding?: string;
  };

  /**
   * Border settings
   */
  borders?: {
    radius?: string;
    radiusSmall?: string;
    radiusLarge?: string;
    width?: string;
    style?: string;
  };

  /**
   * List style settings
   */
  lists?: {
    bulletStyle?: 'disc' | 'circle' | 'square' | 'none';
    numberStyle?: 'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman';
    indentation?: string;
  };

  /**
   * Table settings
   */
  tables?: {
    borderCollapse?: 'collapse' | 'separate';
    borderSpacing?: string;
    stripedRows?: boolean;
    hoverEffect?: boolean;
  };

  /**
   * Animation settings
   */
  animations?: {
    enabled?: boolean;
    duration?: string;
    easing?: string;
  };
}

export interface CustomRenderers {
  heading?: (level: number, content: ReactNode) => ReactNode;
  paragraph?: (content: ReactNode) => ReactNode;
  link?: (href: string, content: ReactNode) => ReactNode;
  code?: (code: string, language?: string) => ReactNode;
  list?: (ordered: boolean, items: ReactNode[]) => ReactNode;
  blockquote?: (content: ReactNode) => ReactNode;
  table?: (rows: ReactNode[][]) => ReactNode;
  image?: (src: string, alt?: string) => ReactNode;
}

export interface AnimationConfig {
  /**
   * Enable fade-in animation for new content
   * @default true
   */
  fadeIn?: boolean;

  /**
   * Duration of fade-in animation in ms
   * @default 200
   */
  fadeInDuration?: number;

  /**
   * Enable typing cursor effect in streaming mode
   * @default true
   */
  showCursor?: boolean;

  /**
   * Cursor blink speed in ms
   * @default 530
   */
  cursorBlinkSpeed?: number;
}

export interface StreamingState {
  isStreaming: boolean;
  currentContent: string;
  renderedContent: string;
}
