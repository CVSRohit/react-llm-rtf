import { useState, useCallback, useRef } from 'react';

export interface UseStreamingContentOptions {
  /**
   * Delay between chunks in milliseconds (for simulated streaming)
   * @default 50
   */
  chunkDelay?: number;

  /**
   * Characters per chunk (for simulated streaming)
   * @default 10
   */
  chunkSize?: number;

  /**
   * Callback when streaming completes
   */
  onComplete?: () => void;
}

export interface UseStreamingContentReturn {
  /**
   * Current content being displayed
   */
  content: string;

  /**
   * Whether streaming is currently active
   */
  isStreaming: boolean;

  /**
   * Start streaming content
   */
  startStreaming: (fullContent: string) => void;

  /**
   * Append content to the current stream
   */
  appendContent: (chunk: string) => void;

  /**
   * Stop streaming and show all content
   */
  stopStreaming: () => void;

  /**
   * Reset content to empty
   */
  reset: () => void;

  /**
   * Set content directly without streaming
   */
  setContent: (content: string) => void;
}

/**
 * Custom hook for managing streaming LLM content
 *
 * @example
 * ```tsx
 * const { content, isStreaming, appendContent } = useStreamingContent();
 *
 * // When receiving chunks from LLM
 * useEffect(() => {
 *   llmStream.on('data', (chunk) => {
 *     appendContent(chunk);
 *   });
 * }, []);
 *
 * return <LLMRichText content={content} streaming={isStreaming} />;
 * ```
 */
export const useStreamingContent = (
  options: UseStreamingContentOptions = {}
): UseStreamingContentReturn => {
  const { chunkDelay = 50, chunkSize = 10, onComplete } = options;

  const [content, setContentState] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fullContentRef = useRef('');
  const currentIndexRef = useRef(0);

  const reset = useCallback(() => {
    setContentState('');
    setIsStreaming(false);
    fullContentRef.current = '';
    currentIndexRef.current = 0;
    if (streamingTimeoutRef.current) {
      clearTimeout(streamingTimeoutRef.current);
      streamingTimeoutRef.current = null;
    }
  }, []);

  const setContent = useCallback((newContent: string) => {
    setContentState(newContent);
    setIsStreaming(false);
  }, []);

  const appendContent = useCallback((chunk: string) => {
    setContentState((prev) => prev + chunk);
  }, []);

  const stopStreaming = useCallback(() => {
    if (streamingTimeoutRef.current) {
      clearTimeout(streamingTimeoutRef.current);
      streamingTimeoutRef.current = null;
    }
    setContentState(fullContentRef.current);
    setIsStreaming(false);
    onComplete?.();
  }, [onComplete]);

  const startStreaming = useCallback(
    (fullContent: string) => {
      reset();
      fullContentRef.current = fullContent;
      setIsStreaming(true);

      const streamChunk = () => {
        const currentIndex = currentIndexRef.current;
        const nextIndex = Math.min(currentIndex + chunkSize, fullContent.length);

        if (currentIndex >= fullContent.length) {
          setIsStreaming(false);
          onComplete?.();
          return;
        }

        const chunk = fullContent.substring(currentIndex, nextIndex);
        setContentState((prev) => prev + chunk);
        currentIndexRef.current = nextIndex;

        streamingTimeoutRef.current = setTimeout(streamChunk, chunkDelay);
      };

      streamChunk();
    },
    [chunkDelay, chunkSize, onComplete, reset]
  );

  return {
    content,
    isStreaming,
    startStreaming,
    appendContent,
    stopStreaming,
    reset,
    setContent,
  };
};
