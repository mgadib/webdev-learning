import * as React from "react";
import { markdownToHtml, markdownToReactElements } from "@/lib/markdownProcessor";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  const [elements, setElements] = React.useState<React.ReactNode | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const useArticleStyles = className.trim() === "";

  React.useEffect(() => {
    let isMounted = true;
    
    const processor = useArticleStyles ? markdownToReactElements : markdownToHtml;

    processor(content)
      .then((result) => {
        if (isMounted) {
          setElements(
            useArticleStyles ? (
              result as React.ReactNode
            ) : (
              <div className="contents" dangerouslySetInnerHTML={{ __html: result as string }} />
            )
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error processing markdown:", error);
        if (isMounted) {
          setElements(<p>Error loading content</p>);
          setLoading(false);
        }
      });
    
    return () => {
      isMounted = false;
    };
  }, [content, useArticleStyles]);

  if (loading) {
    return <div className={`text-app-heading animate-pulse ${className}`}>Loading...</div>;
  }

  if (!elements) {
    return <div className={`text-app-heading ${className}`}>No content available</div>;
  }

  return <div className={`max-w-none mobile-break ${className}`}>{elements}</div>;
}
