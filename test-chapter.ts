import { markdownToHtml } from './src/lib/markdownProcessor.ts';
import { getChapter } from './src/data/chapters.ts';

// Get the first chapter
const chapter = getChapter(1, "1.1");

if (chapter) {
  console.log("Testing chapter:", chapter.title);
  console.log("Excerpt of explanation:", chapter.explanation.substring(0, 200) + "...");
  
  markdownToHtml(chapter.explanation).then(html => {
    console.log("HTML output (first 500 chars):");
    console.log(html.substring(0, 500) + "...");
  }).catch(error => {
    console.error("Error processing markdown:", error);
  });
} else {
  console.log("Chapter not found");
}