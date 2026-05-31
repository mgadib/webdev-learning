import * as React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import CodeBlock from "@/components/CodeBlock";

// Define allowed HTML elements and attributes for sanitization
const sanitizeOptions = {
  tagNames: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "br",
    "hr",
    "ul",
    "ol",
    "li",
    "strong",
    "em",
    "b",
    "i",
    "code",
    "pre",
    "blockquote",
    "a",
    "img",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
  ],
  attributes: {
    "*": ["className", "class"], // Allow class for styling
    a: ["href", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
    // Note: We don't allow onclick, onload, etc. for security
  },
  // Allow these protocols in href and src
  protocols: {
    href: ["http", "https", "mailto"],
    src: ["http", "https", "data"],
  },
};

// Create a unified processor for markdown -> sanitized HTML
const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm) // Enable GFM features (tables, tasklists, etc.)
  .use(remarkRehype, { allowDangerousHtml: false })
  .use(rehypeSanitize, sanitizeOptions)
  .use(rehypeStringify);

// Function to convert markdown to HTML string
export async function markdownToHtml(
  markdown: string
): Promise<string> {
  const normalizedMarkdown = markdown
    .replace(/\\n/g, "\n")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16))
    );

  // Process markdown to HTML string
  const result = await markdownProcessor.process(normalizedMarkdown);
  return String(result);
}

// Function to convert markdown to React elements with proper styling
export async function markdownToReactElements(
  markdown: string
): Promise<any> {
  // Process markdown to HTML string first
  const htmlString = await markdownToHtml(markdown);
  
  // Create a temporary div to hold the HTML
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  
  // Convert DOM nodes to React elements with proper styling
  return convertDomToReact(template.content);
}

// Helper function to convert DOM nodes to React elements
function convertDomToReact(node: DocumentFragment | Node): any {
  // Handle document fragment
  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    const fragment = node as DocumentFragment;
    const children = Array.from(fragment.childNodes);
    return children.map(convertDomToReact).filter(Boolean);
  }
  
  // Handle text nodes
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent;
    return text ? text : "";
  }
  
  // Handle element nodes
  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as HTMLElement;
    const tagName = element.tagName.toLowerCase();
    
    // Special handling for certain elements with our custom styling
    switch (tagName) {
      case "h1":
        // Chapter titles are h1, so explanation h1 becomes h2
        return React.createElement("h2", {
          className: "font-display text-[22px] sm:text-[26px] font-semibold text-app-heading mt-8 mb-4 leading-snug",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "h2":
        return React.createElement("h3", {
          className: "font-display text-[19px] sm:text-[22px] font-semibold text-app-heading mt-7 mb-3 leading-snug",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "h3":
        return React.createElement("h4", {
          className: "font-display text-[16px] sm:text-[18px] font-semibold text-app-heading mt-5 mb-2 leading-snug",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "h4":
        return React.createElement("h5", {
          className: "font-display text-[14px] sm:text-[16px] font-semibold text-app-heading mt-4 mb-1 leading-snug",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "h5":
        return React.createElement("h6", {
          className: "font-display text-[12px] sm:text-[14px] font-semibold text-app-heading mt-3 mb-1 leading-snug",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "h6":
        return React.createElement("h6", {
          className: "font-body text-[12px] sm:text-[14px] font-semibold text-app-heading mt-3 mb-1",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "p":
        return React.createElement("p", {
          className: "font-body text-[15px] sm:text-[16px] text-app-body leading-[1.85] mb-5 max-w-[72ch]",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "br":
        return React.createElement("br", { key: Math.random() });
      case "hr":
        return React.createElement("hr", {
          className: "my-7 border-t border-dashed border-app-default",
          key: Math.random()
        });
      case "strong":
      case "b":
        return React.createElement("strong", {
          className: "font-semibold text-app-body",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "em":
      case "i":
        return React.createElement("em", {
          className: "italic text-app-body",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "code":
        return React.createElement("code", {
          className: "inline-code font-mono text-[0.88em] font-medium px-[5px] py-[1px] rounded-[5px] bg-app-inset text-app-heading border border-app-default whitespace-pre-wrap break-words align-baseline",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "ul":
        return React.createElement("ul", {
          className: "my-4 space-y-2.5 ml-0.5",
          key: Math.random()
        }, Array.from(element.childNodes)
          .filter(child => child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName.toLowerCase() === "li")
          .map((li, index) => {
            const liElement = li as HTMLElement;
            return React.createElement("li", {
              className: "flex items-start gap-3 text-[15px] sm:text-[16px] text-app-body leading-[1.8]",
              key: index
            }, [
              React.createElement("span", {
                className: "mt-[9px] w-[6px] h-[6px] rounded-full bg-app-accent shrink-0",
                key: `bullet-${index}`
              }),
              React.createElement("span", {
                className: "flex-1",
                key: `content-${index}`
              }, Array.from(liElement.childNodes).map(convertDomToReact))
            ]);
          }));
      case "ol":
        return React.createElement("ol", {
          className: "my-4 space-y-2.5 ml-0.5 list-none",
          key: Math.random()
        }, Array.from(element.childNodes)
          .filter(child => child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName.toLowerCase() === "li")
          .map((li, index) => {
            const liElement = li as HTMLElement;
            return React.createElement("li", {
              className: "flex items-start gap-3 text-[15px] sm:text-[16px] text-app-body leading-[1.8]",
              key: index
            }, [
              React.createElement("span", {
                className: "font-mono font-semibold text-app-accent text-[13px] mt-[7px] shrink-0 min-w-[1.8em]",
                key: `number-${index}`
              }, `${index + 1}.`),
              React.createElement("span", {
                className: "flex-1",
                key: `content-${index}`
              }, Array.from(liElement.childNodes).map(convertDomToReact))
            ]);
          }));
      case "pre":
        // For pre/code blocks, we'll use our existing CodeBlock component
        const codeElement = element.querySelector("code");
        if (codeElement) {
          const codeText = codeElement.textContent || "";
          // Try to detect language from class
          const className = codeElement.className || "";
          const languageMatch = className.match(/language-(\w+)/);
          const language = languageMatch ? languageMatch[1] : "javascript";
          
          return React.createElement(CodeBlock, {
            code: codeText,
            language,
            key: Math.random()
          });
        }
        // Fallback for pre without code
        return React.createElement("pre", {
          className: "font-mono text-[11px] sm:text-[14px] text-app-body leading-relaxed whitespace-pre min-w-max bg-app-inset border border-dashed border-app-subtle rounded-xl p-3 sm:p-5 overflow-x-auto -mx-1",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "blockquote":
        return React.createElement("blockquote", {
          className: "font-body text-[14px] sm:text-[15px] text-app-body italic border-l-4 border-app-accent pl-4 py-1 mb-4 bg-app-elevated rounded-r-lg",
          key: Math.random()
        }, [
          React.createElement("span", { key: "quote-open" }, "&ldquo;"),
          Array.from(element.childNodes).map(convertDomToReact),
          React.createElement("span", { key: "quote-close" }, "&rdquo;")
        ]);
      case "a":
        const href = element.getAttribute("href") || "#";
        const target = element.getAttribute("target") || "_blank";
        const rel = element.getAttribute("rel") || "noopener noreferrer";
        return React.createElement("a", {
          href: href,
          target: target,
          rel: rel,
          className: "text-app-accent hover:underline underline-offset-2",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "img":
        const src = element.getAttribute("src") || "";
        const alt = element.getAttribute("alt") || "";
        const width = element.getAttribute("width");
        const height = element.getAttribute("height");
        return React.createElement("img", {
          src: src,
          alt: alt,
          width: width ? parseInt(width, 10) : undefined,
          height: height ? parseInt(height, 10) : undefined,
          className: "rounded-lg border border-app-default",
          key: Math.random()
        });
      case "table":
        return React.createElement("div", {
          className: "overflow-x-auto",
          key: Math.random()
        }, React.createElement("table", {
          className: "min-w-full divide-y divide-app-default",
          key: "table"
        }, Array.from(element.childNodes)
          .filter(child => child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName.toLowerCase() === "thead")
          .map(convertDomToReact),
          Array.from(element.childNodes)
          .filter(child => child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName.toLowerCase() === "tbody")
          .map(convertDomToReact)
        ));
      case "thead":
        return React.createElement("thead", { key: Math.random() }, Array.from(element.childNodes).map(convertDomToReact));
      case "tbody":
        return React.createElement("tbody", {
          className: "divide-y divide-app-default",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "tr":
        return React.createElement("tr", { key: Math.random() }, Array.from(element.childNodes).map(convertDomToReact));
      case "th":
        return React.createElement("th", {
          className: "text-left px-4 py-3 text-[14px] font-medium text-app-heading",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      case "td":
        return React.createElement("td", {
          className: "text-left px-4 py-3 text-[14px] text-app-body",
          key: Math.random()
        }, Array.from(element.childNodes).map(convertDomToReact));
      default:
        // For other elements, create the element with its children
        return React.createElement(tagName, { key: Math.random() }, Array.from(element.childNodes).map(convertDomToReact));
    }
  }
  
  // Return empty for other node types
  return "";
}
