# Usage Examples

## Basic Usage

```tsx
import { LLMRichText } from 'react-llm-rtf';

function BasicExample() {
  const markdown = `
# Welcome to react-llm-rtf

This component converts **markdown** to *rich text*.

## Features

- Easy to use
- Supports code blocks
- Real-time streaming
- And much more!

\`\`\`javascript
const example = "Hello World";
console.log(example);
\`\`\`
  `;

  return <LLMRichText content={markdown} />;
}
```

## Streaming with OpenAI

```tsx
import { useState } from 'react';
import { LLMRichText, useStreamingContent } from 'react-llm-rtf';
import OpenAI from 'openai';

function OpenAIChat() {
  const [prompt, setPrompt] = useState('');
  const { content, appendContent, isStreaming, reset } = useStreamingContent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();

    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true // Only for demo - use backend in production
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
        />
        <button type="submit">Send</button>
      </form>

      <LLMRichText
        content={content}
        streaming={isStreaming}
        enableCodeHighlight={true}
        showCodeCopyButton={true}
      />
    </div>
  );
}
```

## Custom Theme

```tsx
import { LLMRichText } from 'react-llm-rtf';

function ThemedExample() {
  const customTheme = {
    colors: {
      text: '#1a1a1a',
      heading: '#0066cc',
      link: '#0066cc',
      linkHover: '#0052a3',
      code: '#d73a49',
      codeBg: '#f6f8fa',
    },
    fonts: {
      body: 'Inter, system-ui, sans-serif',
      code: 'Fira Code, monospace',
    },
    borderRadius: '8px',
  };

  return (
    <LLMRichText
      content="# Custom Theme\n\nThis uses a custom theme!"
      theme={customTheme}
    />
  );
}
```

## Full-featured Chat Application

```tsx
import { useState } from 'react';
import { LLMRichText, useStreamingContent } from 'react-llm-rtf';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { content, appendContent, isStreaming, reset } = useStreamingContent();

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    reset();

    // Simulate LLM response (replace with actual API call)
    const response = `You asked: "${input}"\n\n## Response\n\nThis is a **sample** response with:\n\n- Bullet points\n- Code examples\n\n\`\`\`typescript\nconst answer = "streaming response";\n\`\`\``;

    // Simulate streaming
    for (let i = 0; i < response.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      appendContent(response[i]);
    }

    // Add assistant message when complete
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      reset();
    }, 500);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>LLM Chat</h1>

      <div style={{ marginBottom: '20px' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: '16px',
              padding: '12px',
              background: msg.role === 'user' ? '#f0f0f0' : '#fff',
              borderRadius: '8px',
            }}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong>
            {msg.role === 'assistant' ? (
              <LLMRichText content={msg.content} />
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        ))}

        {isStreaming && (
          <div style={{ padding: '12px', background: '#fff', borderRadius: '8px' }}>
            <strong>Assistant:</strong>
            <LLMRichText content={content} streaming={true} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ddd',
          }}
          disabled={isStreaming}
        />
        <button
          onClick={sendMessage}
          disabled={isStreaming || !input.trim()}
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            background: '#0066cc',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatApp;
```

## With Animation Controls

```tsx
import { LLMRichText } from 'react-llm-rtf';

function AnimatedExample() {
  return (
    <LLMRichText
      content="# Animated Content\n\nThis fades in smoothly with a cursor!"
      streaming={true}
      animationConfig={{
        fadeIn: true,
        fadeInDuration: 400,
        showCursor: true,
        cursorBlinkSpeed: 530,
      }}
    />
  );
}
```

## Server-Sent Events (SSE)

```tsx
import { useEffect } from 'react';
import { LLMRichText, useStreamingContent } from 'react-llm-rtf';

function SSEExample() {
  const { content, appendContent, reset } = useStreamingContent();

  useEffect(() => {
    reset();
    const eventSource = new EventSource('/api/stream');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      appendContent(data.text);
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return <LLMRichText content={content} streaming />;
}
```

## With Error Handling

```tsx
import { useState } from 'react';
import { LLMRichText, useStreamingContent } from 'react-llm-rtf';

function ErrorHandlingExample() {
  const [error, setError] = useState<string | null>(null);
  const { content, appendContent, isStreaming } = useStreamingContent({
    onComplete: () => console.log('Stream completed successfully'),
  });

  const streamWithErrorHandling = async () => {
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Hello' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);
        appendContent(chunk);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      <LLMRichText content={content} streaming={isStreaming} />
    </div>
  );
}
```
