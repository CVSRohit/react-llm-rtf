import { ThemeConfig } from '../types';

/**
 * Convert theme configuration to CSS custom properties
 */
export const themeToCSSVariables = (theme: ThemeConfig): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Colors
  if (theme.colors) {
    if (theme.colors.text) cssVars['--llm-text-color'] = theme.colors.text;
    if (theme.colors.textSecondary) cssVars['--llm-text-secondary'] = theme.colors.textSecondary;
    if (theme.colors.heading) cssVars['--llm-heading-color'] = theme.colors.heading;

    if (theme.colors.link) cssVars['--llm-link-color'] = theme.colors.link;
    if (theme.colors.linkHover) cssVars['--llm-link-hover'] = theme.colors.linkHover;
    if (theme.colors.linkVisited) cssVars['--llm-link-visited'] = theme.colors.linkVisited;

    if (theme.colors.code) cssVars['--llm-code-color'] = theme.colors.code;
    if (theme.colors.codeBg) cssVars['--llm-code-bg'] = theme.colors.codeBg;
    if (theme.colors.codeBlockBg) cssVars['--llm-code-block-bg'] = theme.colors.codeBlockBg;
    if (theme.colors.codeBlockBorder) cssVars['--llm-code-block-border'] = theme.colors.codeBlockBorder;

    if (theme.colors.blockquoteBorder) cssVars['--llm-blockquote-border'] = theme.colors.blockquoteBorder;
    if (theme.colors.blockquoteBg) cssVars['--llm-blockquote-bg'] = theme.colors.blockquoteBg;
    if (theme.colors.blockquoteText) cssVars['--llm-blockquote-text'] = theme.colors.blockquoteText;

    if (theme.colors.tableBorder) cssVars['--llm-table-border'] = theme.colors.tableBorder;
    if (theme.colors.tableHeaderBg) cssVars['--llm-table-header-bg'] = theme.colors.tableHeaderBg;
    if (theme.colors.tableHeaderText) cssVars['--llm-table-header-text'] = theme.colors.tableHeaderText;
    if (theme.colors.tableRowBg) cssVars['--llm-table-row-bg'] = theme.colors.tableRowBg;
    if (theme.colors.tableRowAltBg) cssVars['--llm-table-row-alt-bg'] = theme.colors.tableRowAltBg;
    if (theme.colors.tableRowHoverBg) cssVars['--llm-table-row-hover-bg'] = theme.colors.tableRowHoverBg;

    if (theme.colors.listBulletColor) cssVars['--llm-list-bullet-color'] = theme.colors.listBulletColor;
    if (theme.colors.listNumberColor) cssVars['--llm-list-number-color'] = theme.colors.listNumberColor;
    if (theme.colors.taskCheckboxBg) cssVars['--llm-task-checkbox-bg'] = theme.colors.taskCheckboxBg;
    if (theme.colors.taskCheckboxBorder) cssVars['--llm-task-checkbox-border'] = theme.colors.taskCheckboxBorder;
    if (theme.colors.taskCheckboxChecked) cssVars['--llm-task-checkbox-checked'] = theme.colors.taskCheckboxChecked;

    if (theme.colors.hrColor) cssVars['--llm-hr-color'] = theme.colors.hrColor;
    if (theme.colors.markBg) cssVars['--llm-mark-bg'] = theme.colors.markBg;
    if (theme.colors.markText) cssVars['--llm-mark-text'] = theme.colors.markText;
    if (theme.colors.kbdBg) cssVars['--llm-kbd-bg'] = theme.colors.kbdBg;
    if (theme.colors.kbdBorder) cssVars['--llm-kbd-border'] = theme.colors.kbdBorder;
    if (theme.colors.kbdText) cssVars['--llm-kbd-text'] = theme.colors.kbdText;

    if (theme.colors.detailsBg) cssVars['--llm-details-bg'] = theme.colors.detailsBg;
    if (theme.colors.detailsBorder) cssVars['--llm-details-border'] = theme.colors.detailsBorder;
    if (theme.colors.summaryHoverColor) cssVars['--llm-summary-hover-color'] = theme.colors.summaryHoverColor;

    if (theme.colors.copyButtonBg) cssVars['--llm-copy-button-bg'] = theme.colors.copyButtonBg;
    if (theme.colors.copyButtonBorder) cssVars['--llm-copy-button-border'] = theme.colors.copyButtonBorder;
    if (theme.colors.copyButtonText) cssVars['--llm-copy-button-text'] = theme.colors.copyButtonText;
    if (theme.colors.copyButtonHoverBg) cssVars['--llm-copy-button-hover-bg'] = theme.colors.copyButtonHoverBg;

    if (theme.colors.background) cssVars['--llm-background'] = theme.colors.background;
  }

  // Fonts
  if (theme.fonts) {
    if (theme.fonts.body) cssVars['--llm-font-body'] = theme.fonts.body;
    if (theme.fonts.heading) cssVars['--llm-font-heading'] = theme.fonts.heading;
    if (theme.fonts.code) cssVars['--llm-font-code'] = theme.fonts.code;
    if (theme.fonts.monospace) cssVars['--llm-font-monospace'] = theme.fonts.monospace;
  }

  // Font Sizes
  if (theme.fontSizes) {
    if (theme.fontSizes.base) cssVars['--llm-font-size-base'] = theme.fontSizes.base;
    if (theme.fontSizes.h1) cssVars['--llm-font-size-h1'] = theme.fontSizes.h1;
    if (theme.fontSizes.h2) cssVars['--llm-font-size-h2'] = theme.fontSizes.h2;
    if (theme.fontSizes.h3) cssVars['--llm-font-size-h3'] = theme.fontSizes.h3;
    if (theme.fontSizes.h4) cssVars['--llm-font-size-h4'] = theme.fontSizes.h4;
    if (theme.fontSizes.h5) cssVars['--llm-font-size-h5'] = theme.fontSizes.h5;
    if (theme.fontSizes.h6) cssVars['--llm-font-size-h6'] = theme.fontSizes.h6;
    if (theme.fontSizes.code) cssVars['--llm-font-size-code'] = theme.fontSizes.code;
    if (theme.fontSizes.small) cssVars['--llm-font-size-small'] = theme.fontSizes.small;
  }

  // Font Weights
  if (theme.fontWeights) {
    if (theme.fontWeights.normal) cssVars['--llm-font-weight-normal'] = theme.fontWeights.normal.toString();
    if (theme.fontWeights.medium) cssVars['--llm-font-weight-medium'] = theme.fontWeights.medium.toString();
    if (theme.fontWeights.semibold) cssVars['--llm-font-weight-semibold'] = theme.fontWeights.semibold.toString();
    if (theme.fontWeights.bold) cssVars['--llm-font-weight-bold'] = theme.fontWeights.bold.toString();
  }

  // Spacing
  if (theme.spacing) {
    if (theme.spacing.paragraphMargin) cssVars['--llm-spacing-paragraph'] = theme.spacing.paragraphMargin;
    if (theme.spacing.headingMargin) cssVars['--llm-spacing-heading'] = theme.spacing.headingMargin;
    if (theme.spacing.listMargin) cssVars['--llm-spacing-list'] = theme.spacing.listMargin;
    if (theme.spacing.listItemMargin) cssVars['--llm-spacing-list-item'] = theme.spacing.listItemMargin;
    if (theme.spacing.codeBlockPadding) cssVars['--llm-spacing-code-block'] = theme.spacing.codeBlockPadding;
    if (theme.spacing.blockquotePadding) cssVars['--llm-spacing-blockquote'] = theme.spacing.blockquotePadding;
    if (theme.spacing.tableCellPadding) cssVars['--llm-spacing-table-cell'] = theme.spacing.tableCellPadding;
  }

  // Borders
  if (theme.borders) {
    if (theme.borders.radius) cssVars['--llm-border-radius'] = theme.borders.radius;
    if (theme.borders.radiusSmall) cssVars['--llm-border-radius-small'] = theme.borders.radiusSmall;
    if (theme.borders.radiusLarge) cssVars['--llm-border-radius-large'] = theme.borders.radiusLarge;
    if (theme.borders.width) cssVars['--llm-border-width'] = theme.borders.width;
    if (theme.borders.style) cssVars['--llm-border-style'] = theme.borders.style;
  }

  // List Styles
  if (theme.lists) {
    if (theme.lists.bulletStyle) cssVars['--llm-list-bullet-style'] = theme.lists.bulletStyle;
    if (theme.lists.numberStyle) cssVars['--llm-list-number-style'] = theme.lists.numberStyle;
    if (theme.lists.indentation) cssVars['--llm-list-indentation'] = theme.lists.indentation;
  }

  // Table Settings
  if (theme.tables) {
    if (theme.tables.borderCollapse) cssVars['--llm-table-border-collapse'] = theme.tables.borderCollapse;
    if (theme.tables.borderSpacing) cssVars['--llm-table-border-spacing'] = theme.tables.borderSpacing;
  }

  // Animations
  if (theme.animations) {
    if (theme.animations.duration) cssVars['--llm-animation-duration'] = theme.animations.duration;
    if (theme.animations.easing) cssVars['--llm-animation-easing'] = theme.animations.easing;
  }

  return cssVars;
};

/**
 * Predefined theme presets
 */
export const themePresets = {
  default: {},

  ocean: {
    colors: {
      text: '#2c3e50',
      heading: '#16a085',
      link: '#3498db',
      linkHover: '#2980b9',
      tableBorder: '#3498db',
      tableHeaderBg: '#ecf0f1',
      codeBlockBg: '#ecf0f1',
      blockquoteBorder: '#3498db',
    },
    borders: {
      radius: '8px',
    },
  },

  sunset: {
    colors: {
      text: '#2d3436',
      heading: '#d63031',
      link: '#fd79a8',
      linkHover: '#e84393',
      tableBorder: '#fd79a8',
      tableHeaderBg: '#ffeaa7',
      codeBlockBg: '#fff5e6',
      blockquoteBorder: '#fd79a8',
      markBg: '#ffeaa7',
    },
    borders: {
      radius: '12px',
    },
  },

  forest: {
    colors: {
      text: '#27ae60',
      heading: '#1e8449',
      link: '#27ae60',
      linkHover: '#229954',
      tableBorder: '#52be80',
      tableHeaderBg: '#d4edda',
      codeBlockBg: '#d4edda',
      blockquoteBorder: '#27ae60',
    },
    borders: {
      radius: '4px',
    },
  },

  minimal: {
    colors: {
      text: '#000',
      heading: '#000',
      link: '#000',
      linkHover: '#666',
      tableBorder: '#000',
      tableHeaderBg: '#f5f5f5',
      codeBlockBg: '#f5f5f5',
      blockquoteBorder: '#000',
    },
    lists: {
      bulletStyle: 'square' as const,
    },
    borders: {
      radius: '0px',
    },
  },

  modern: {
    colors: {
      text: '#1a202c',
      heading: '#2d3748',
      link: '#4299e1',
      linkHover: '#3182ce',
      tableBorder: '#cbd5e0',
      tableHeaderBg: '#edf2f7',
      tableRowAltBg: '#f7fafc',
      codeBlockBg: '#f7fafc',
      codeBg: '#edf2f7',
      blockquoteBorder: '#4299e1',
      blockquoteBg: '#ebf8ff',
    },
    borders: {
      radius: '6px',
    },
    fontSizes: {
      base: '18px',
    },
  },
} as const;
