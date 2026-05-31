import * as React from "react";
import { markdownToHtml } from "@/lib/markdownProcessor";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  const [html, setHtml] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let isMounted = true;
    
    markdownToHtml(content)
      .then((result) => {
        if (isMounted) {
          setHtml(result);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error processing markdown:", error);
        if (isMounted) {
          setHtml("<p>Error loading content</p>");
          setLoading(false);
        }
      });
    
    return () => {
      isMounted = false;
    };
  }, [content]);

  if (loading) {
    return <div className={`text-app-heading animate-pulse ${className}`}>Loading...</div>;
  }

  if (!html) {
    return <div className={`text-app-heading ${className}`}>No content available</div>;
  }

  return <div
    dangerouslySetInnerHTML={{ __html: html }}
    className={`prose prose-sm max-w-none ${className}`}
  />;
}