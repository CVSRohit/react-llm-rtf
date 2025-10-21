// Main component
export { LLMRichText, default } from './components/LLMRichText';

// Types
export type {
  LLMRichTextProps,
  ThemeConfig,
  CustomRenderers,
  AnimationConfig,
  StreamingState,
} from './types';

// Hooks
export { useStreamingContent } from './hooks/useStreamingContent';
export type { UseStreamingContentOptions, UseStreamingContentReturn } from './hooks/useStreamingContent';

// Utilities
export { parseMarkdown, configureMarked, getPlainText, hasIncompleteMarkdown } from './utils/markdownParser';
export { themeToCSSVariables, themePresets } from './utils/themeUtils';
