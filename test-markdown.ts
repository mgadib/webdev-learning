import { markdownToHtml } from './src/lib/markdownProcessor.ts';

const testMarkdown = `
# Test Heading

This is a paragraph with **bold** text and *italic* text.

## Another Heading

- List item 1
- List item 2
- List item 3

\`\`\`javascript
console.log("Hello World");
\`\`\`

[Link to Google](https://google.com)

> This is a blockquote
`;

markdownToHtml(testMarkdown).then(html => {
  console.log("HTML output:");
  console.log(html);
});