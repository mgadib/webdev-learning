import * as React from "react";
import { markdownToHtml } from "@/lib/markdownProcessor";

interface MarkdownExplanationProps {
  explanation: string;
}

export default function MarkdownExplanation({ explanation }: MarkdownExplanationProps) {
  const [html, setHtml] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let isMounted = true;
    
    markdownToHtml(explanation)
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
  }, [explanation]);

  if (loading) {
    return <div className="text-app-heading animate-pulse">Loading...</div>;
  }

  if (!html) {
    return <div className="text-app-heading">No content available</div>;
  }

  return <div
    dangerouslySetInnerHTML={{ __html: html }}
    className="prose prose-sm max-w-none"
  />;
}