import React from 'react';
import { render, screen } from '@testing-library/react';
import { LLMRichText } from './LLMRichText';

describe('LLMRichText', () => {
  it('renders basic markdown content', () => {
    const content = '# Hello World';
    const { container } = render(<LLMRichText content={content} />);

    const heading = container.querySelector('h1');
    expect(heading).toBeInTheDocument();
    expect(heading?.textContent).toBe('Hello World');
  });

  it('renders bold text correctly', () => {
    const content = 'This is **bold** text';
    const { container } = render(<LLMRichText content={content} />);

    const strong = container.querySelector('strong');
    expect(strong).toBeInTheDocument();
    expect(strong?.textContent).toBe('bold');
  });

  it('renders italic text correctly', () => {
    const content = 'This is *italic* text';
    const { container } = render(<LLMRichText content={content} />);

    const em = container.querySelector('em');
    expect(em).toBeInTheDocument();
    expect(em?.textContent).toBe('italic');
  });

  it('renders code blocks', () => {
    const content = '```javascript\nconst x = 1;\n```';
    const { container } = render(<LLMRichText content={content} />);

    const code = container.querySelector('code');
    expect(code).toBeInTheDocument();
  });

  it('renders inline code', () => {
    const content = 'This is `inline code`';
    const { container } = render(<LLMRichText content={content} />);

    const code = container.querySelector('code');
    expect(code).toBeInTheDocument();
    expect(code).toHaveClass('inline-code');
  });

  it('renders links', () => {
    const content = '[Google](https://google.com)';
    const { container } = render(<LLMRichText content={content} />);

    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute('href')).toBe('https://google.com');
    expect(link?.textContent).toBe('Google');
  });

  it('renders lists', () => {
    const content = '- Item 1\n- Item 2\n- Item 3';
    const { container } = render(<LLMRichText content={content} />);

    const list = container.querySelector('ul');
    const items = container.querySelectorAll('li');
    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(3);
  });

  it('applies custom className', () => {
    const content = 'Test content';
    const { container } = render(
      <LLMRichText content={content} className="custom-class" />
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const content = 'Test content';
    const customStyle = { color: 'red', fontSize: '20px' };
    const { container } = render(
      <LLMRichText content={content} style={customStyle} />
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveStyle({ color: 'red', fontSize: '20px' });
  });

  it('renders with streaming mode', () => {
    const content = '# Streaming Test';
    const { container } = render(
      <LLMRichText content={content} streaming={true} />
    );

    const div = container.firstChild as HTMLElement;
    expect(div).toHaveAttribute('data-streaming', 'true');
  });

  it('sanitizes HTML by default', () => {
    const content = '<script>alert("xss")</script>Safe content';
    const { container } = render(<LLMRichText content={content} />);

    const script = container.querySelector('script');
    expect(script).not.toBeInTheDocument();
  });

  it('renders blockquotes', () => {
    const content = '> This is a quote';
    const { container } = render(<LLMRichText content={content} />);

    const blockquote = container.querySelector('blockquote');
    expect(blockquote).toBeInTheDocument();
  });

  it('handles empty content', () => {
    const { container } = render(<LLMRichText content="" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders multiple headings', () => {
    const content = '# H1\n## H2\n### H3';
    const { container } = render(<LLMRichText content={content} />);

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('h3')).toBeInTheDocument();
  });
});
