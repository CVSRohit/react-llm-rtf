# React LLM RTF - Comprehensive Feature Test

This file demonstrates ALL supported markdown features that LLMs commonly output.

## Basic Text Formatting

**Bold text** using double asterisks

*Italic text* using single asterisks

***Bold and italic*** combined

~~Strikethrough text~~ using double tildes

==Highlighted text== (if your LLM supports it)

<u>Underlined text</u> using HTML

`Inline code` using backticks

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy

<abbr title="HyperText Markup Language">HTML</abbr> with abbreviations

## Headings Hierarchy

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item 1
  - Nested item 2
    - Double nested
- Third item

### Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task Lists (Checkboxes)

- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Another pending task
  - [x] Nested completed
  - [ ] Nested pending

---

## Code Blocks

### JavaScript Example

```javascript
// Function to calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Python Example

```python
def greet(name):
    """Greet someone by name"""
    return f"Hello, {name}!"

# Usage
print(greet("World"))  # Hello, World!
```

### SQL Example

```sql
SELECT
  users.name,
  COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.active = true
GROUP BY users.id
ORDER BY order_count DESC
LIMIT 10;
```

### JSON Example

```json
{
  "name": "react-llm-rtf",
  "version": "1.1.0",
  "features": [
    "syntax-highlighting",
    "streaming-support",
    "task-lists"
  ],
  "metadata": {
    "author": "rochall",
    "license": "MIT"
  }
}
```

---

## Tables

### Simple Table

| Feature | Supported | Notes |
|---------|-----------|-------|
| Markdown | ✅ | Full GFM support |
| Streaming | ✅ | Real-time rendering |
| Themes | ✅ | Customizable |
| TypeScript | ✅ | Complete types |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Text | Text | Text |
| More text | Centered | $1,234 |
| Even more | Data | $5,678 |

### Complex Table

| Language | Extension | Highlighting | Use Case |
|----------|-----------|--------------|----------|
| JavaScript | `.js`, `.jsx` | ✅ Yes | Web development |
| Python | `.py` | ✅ Yes | Data science, AI |
| TypeScript | `.ts`, `.tsx` | ✅ Yes | Type-safe web apps |
| SQL | `.sql` | ✅ Yes | Database queries |
| Rust | `.rs` | ✅ Yes | Systems programming |

---

## Blockquotes

> This is a simple blockquote

> **Multi-line blockquote**
>
> This blockquote spans multiple lines and can contain **formatted text**, `code`, and more.
>
> It's perfect for highlighting important information.

> **Nested blockquotes:**
>
> > This is a nested quote
> >
> > > And this is double-nested!

---

## Links and Images

[Visit Google](https://google.com)

[React Documentation](https://reactjs.org) for more info

![Placeholder Image](https://via.placeholder.com/400x200)

---

## Horizontal Rules

You can create horizontal rules with three dashes:

---

Or three asterisks:

***

Or three underscores:

___

---

## Advanced Features

### Superscript and Subscript

Einstein's famous equation: E = mc<sup>2</sup>

Chemical formula for water: H<sub>2</sub>O

X<sup>2</sup> + Y<sup>2</sup> = Z<sup>2</sup>

### Collapsible Sections

<details>
<summary>Click to expand: How to use react-llm-rtf</summary>

Install the package:

```bash
npm install react-llm-rtf
```

Import and use:

```jsx
import { LLMRichText } from 'react-llm-rtf';

function App() {
  return <LLMRichText content="# Hello World" />;
}
```

That's it! 🎉
</details>

<details>
<summary>Click to expand: Advanced configuration</summary>

You can customize themes, enable streaming, and more:

```jsx
<LLMRichText
  content={content}
  streaming={true}
  theme={{
    colors: {
      text: '#1a1a1a',
      heading: '#0066cc',
    }
  }}
/>
```
</details>

### Definition Lists

<dl>
  <dt>Markdown</dt>
  <dd>A lightweight markup language with plain text formatting syntax</dd>

  <dt>React</dt>
  <dd>A JavaScript library for building user interfaces</dd>

  <dt>TypeScript</dt>
  <dd>A superset of JavaScript that adds static typing</dd>
</dl>

---

## Mixed Content Example

Here's a realistic example of what an LLM might output:

### How to Build a REST API

Building a REST API involves several key steps:

1. **Design your data model**
   - Identify entities and relationships
   - Define schemas

2. **Choose your tech stack**
   - [ ] Backend framework (Express, FastAPI, etc.)
   - [ ] Database (PostgreSQL, MongoDB, etc.)
   - [ ] Authentication (JWT, OAuth, etc.)

3. **Implement endpoints**

```javascript
app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
```

> **Important:** Always validate input and handle errors properly!

**API Best Practices:**

| Practice | Description | Priority |
|----------|-------------|----------|
| Versioning | Use `/v1/`, `/v2/` in URLs | High |
| Rate Limiting | Prevent abuse | High |
| Documentation | Use OpenAPI/Swagger | Medium |
| Caching | Improve performance | Medium |

For more information, visit [REST API Tutorial](https://restfulapi.net).

---

## Mathematical Notation (HTML)

While LaTeX isn't directly supported, you can use HTML for basic math:

- Fractions: <sup>1</sup>⁄<sub>2</sub>
- Powers: 2<sup>8</sup> = 256
- Formulas: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

---

## Emojis and Special Characters

You can use Unicode emojis directly:

✅ Checkmark
❌ Cross
⚠️ Warning
💡 Idea
🚀 Rocket
⭐ Star
📦 Package
🎨 Art
🔒 Lock
🌟 Sparkles

Math symbols:
- ∑ Sum
- ∫ Integral
- √ Square root
- ≈ Approximately
- ≠ Not equal
- ≤ Less than or equal
- ≥ Greater than or equal
- × Multiplication
- ÷ Division

---

## Real-World LLM Output Example

Here's what a typical ChatGPT/Claude response might look like:

### Question: Explain React Hooks

**React Hooks** are functions that let you "hook into" React state and lifecycle features from function components. Here are the main hooks:

1. **useState** - Manages component state

```jsx
const [count, setCount] = useState(0);
```

2. **useEffect** - Handles side effects

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

3. **useContext** - Accesses context values

**Key Benefits:**

- ✅ Cleaner, more readable code
- ✅ Better code reuse
- ✅ No class components needed
- ✅ Easier to test

> **Note:** Hooks must be called at the top level of your component!

<details>
<summary>See complete example</summary>

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```
</details>

---

## Conclusion

This test file demonstrates that **react-llm-rtf** supports virtually all markdown features that LLMs commonly output, including:

✅ Basic formatting (bold, italic, strikethrough)
✅ Headings (H1-H6)
✅ Code blocks with syntax highlighting (180+ languages)
✅ Inline code
✅ Tables with alignment
✅ Lists (ordered, unordered, nested, task lists)
✅ Blockquotes (including nested)
✅ Links and images
✅ Horizontal rules
✅ Superscript and subscript
✅ Collapsible sections (details/summary)
✅ Definition lists
✅ Keyboard tags
✅ Abbreviations
✅ Emojis and special characters
✅ Mixed, complex content

Perfect for rendering ChatGPT, Claude, or any LLM output! 🚀
