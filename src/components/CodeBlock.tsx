import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import html from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import rust from "react-syntax-highlighter/dist/esm/languages/prism/rust";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import docker from "react-syntax-highlighter/dist/esm/languages/prism/docker";
import { useDarkMode } from "@/hooks/useDarkMode";

const codeFontFamily =
  "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', Monaco, 'Courier New', monospace";

// Register languages
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("docker", docker);
SyntaxHighlighter.registerLanguage("dockerfile", docker);

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

// Custom light theme - warm paper-like background
const customLightTheme = {
  'code[class*="language-"]': {
    color: "var(--app-code-text)",
    background: "none",
    fontFamily: codeFontFamily,
    fontSize: "clamp(11px, 3vw, 12.5px)",
    lineHeight: "1.7",
    textAlign: "left" as const,
    whiteSpace: "pre" as const,
    wordSpacing: "normal" as const,
    wordBreak: "normal" as const,
    wordWrap: "normal" as const,
    tabSize: 2,
    hyphens: "none" as const,
  },
  'pre[class*="language-"]': {
    color: "var(--app-code-text)",
    background: "var(--app-code-bg)",
    fontFamily: codeFontFamily,
    fontSize: "clamp(11px, 3vw, 12.5px)",
    lineHeight: "1.7",
    textAlign: "left" as const,
    whiteSpace: "pre" as const,
    wordSpacing: "normal" as const,
    wordBreak: "normal" as const,
    wordWrap: "normal" as const,
    tabSize: 2,
    hyphens: "none" as const,
    padding: "0.875rem",
    margin: 0,
    overflow: "auto",
    borderRadius: "0 0 12px 12px",
  },
  comment: { color: "#8e908c", fontStyle: "italic" },
  prolog: { color: "#8e908c" },
  doctype: { color: "#8e908c" },
  cdata: { color: "#8e908c" },
  punctuation: { color: "#4a4a4a" },
  property: { color: "#905" },
  tag: { color: "#c82829" },
  boolean: { color: "#f5871f" },
  number: { color: "#f5871f" },
  constant: { color: "#f5871f" },
  symbol: { color: "#f5871f" },
  deleted: { color: "#c82829" },
  selector: { color: "#718c00" },
  "attr-name": { color: "#eab700" },
  string: { color: "#718c00" },
  char: { color: "#718c00" },
  builtin: { color: "#4271ae" },
  inserted: { color: "#718c00" },
  operator: { color: "#3e999f" },
  entity: { color: "#3e999f", cursor: "help" },
  url: { color: "#3e999f" },
  ".language-css .token.string": { color: "#3e999f" },
  ".style .token.string": { color: "#3e999f" },
  variable: { color: "#c82829" },
  atrule: { color: "#4271ae" },
  "attr-value": { color: "#718c00" },
  keyword: { color: "#8959a8", fontWeight: "600" },
  function: { color: "#4271ae" },
  "class-name": { color: "#eab700", fontWeight: "600" },
  regex: { color: "#f5871f" },
  important: { color: "#f5871f", fontWeight: "bold" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
};

// Custom dark theme
const customDarkTheme = {
  'code[class*="language-"]': {
    color: "var(--app-code-text)",
    background: "none",
    fontFamily: codeFontFamily,
    fontSize: "clamp(11px, 3vw, 12.5px)",
    lineHeight: "1.7",
    textAlign: "left" as const,
    whiteSpace: "pre" as const,
    wordSpacing: "normal" as const,
    wordBreak: "normal" as const,
    wordWrap: "normal" as const,
    tabSize: 2,
    hyphens: "none" as const,
  },
  'pre[class*="language-"]': {
    color: "var(--app-code-text)",
    background: "var(--app-code-bg)",
    fontFamily: codeFontFamily,
    fontSize: "clamp(11px, 3vw, 12.5px)",
    lineHeight: "1.7",
    textAlign: "left" as const,
    whiteSpace: "pre" as const,
    wordSpacing: "normal" as const,
    wordBreak: "normal" as const,
    wordWrap: "normal" as const,
    tabSize: 2,
    hyphens: "none" as const,
    padding: "0.875rem",
    margin: 0,
    overflow: "auto",
    borderRadius: "0 0 12px 12px",
  },
  comment: { color: "#6272a4", fontStyle: "italic" },
  prolog: { color: "#6272a4" },
  doctype: { color: "#6272a4" },
  cdata: { color: "#6272a4" },
  punctuation: { color: "#bfbfbf" },
  property: { color: "#ff79c6" },
  tag: { color: "#ff79c6" },
  boolean: { color: "#bd93f9" },
  number: { color: "#bd93f9" },
  constant: { color: "#bd93f9" },
  symbol: { color: "#bd93f9" },
  deleted: { color: "#ff5555" },
  selector: { color: "#50fa7b" },
  "attr-name": { color: "#f1fa8c" },
  string: { color: "#f1fa8c" },
  char: { color: "#f1fa8c" },
  builtin: { color: "#8be9fd" },
  inserted: { color: "#50fa7b" },
  operator: { color: "#ff79c6" },
  entity: { color: "#ff79c6", cursor: "help" },
  url: { color: "#ff79c6" },
  ".language-css .token.string": { color: "#ff79c6" },
  ".style .token.string": { color: "#ff79c6" },
  variable: { color: "#ff79c6" },
  atrule: { color: "#8be9fd" },
  "attr-value": { color: "#f1fa8c" },
  keyword: { color: "#ff79c6", fontWeight: "600" },
  function: { color: "#8be9fd" },
  "class-name": { color: "#f1fa8c", fontWeight: "600" },
  regex: { color: "#bd93f9" },
  important: { color: "#bd93f9", fontWeight: "bold" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
};

// Map common language names
function mapLanguage(lang: string): string {
  const map: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    tsx: "jsx",
    "c++": "cpp",
    "c#": "csharp",
    shell: "bash",
    sh: "bash",
    zsh: "bash",
    ini: "properties",
    dockerfile: "docker",
    http: "http",
  };
  return map[lang.toLowerCase()] || lang.toLowerCase();
}

export default function CodeBlock({ code, language = "javascript", filename }: CodeBlockProps) {
  const { isDark } = useDarkMode();
  const lang = mapLanguage(language);
  const theme = isDark ? customDarkTheme : customLightTheme;

  const dotColor = isDark
    ? ["#ff5f56", "#ffbd2e", "#27c93f"]
    : ["#e0443e", "#dea123", "#1aab29"];

  return (
    <div className="code-block-wrapper my-5 rounded-xl overflow-hidden border border-app-default shadow-sm max-w-full">
      {/* Header bar */}
      <div
        className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 bg-app-code-header"
      >
        <div className="flex items-center gap-2 min-w-0">
          {/* Window dots */}
          <div className="hidden sm:flex gap-1.5 mr-3">
            {dotColor.map((color, i) => (
              <span
                key={i}
                className="block w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {/* Language badge */}
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-app-heading opacity-70">
            {language}
          </span>
        </div>
        {/* Filename or copy hint */}
        <span className="text-[11px] opacity-50 font-mono truncate max-w-[120px] sm:max-w-[200px]">
          {filename || "snippet"}
        </span>
      </div>

      {/* Code content */}
      <SyntaxHighlighter
        language={lang}
        style={theme}
        showLineNumbers
        lineNumberStyle={{
          minWidth: "2em",
          paddingRight: "0.6em",
          color: "var(--app-text-subtle)",
          fontSize: "11px",
          textAlign: "right",
        }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
