import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import HomePage from "@/pages/HomePage";
import ModulePage from "@/pages/ModulePage";
import ChapterPage from "@/pages/ChapterPage";
import TentangPage from "@/pages/TentangPage";
import GlossaryPage from "@/pages/GlossaryPage";

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayContent, setDisplayContent] = useState(children);
  const [transitionClass, setTransitionClass] = useState("entering");
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current === location.pathname) {
      setTransitionClass("");
      return;
    }

    // Start exit
    setTransitionClass("exiting");

    const exitTimer = setTimeout(() => {
      setDisplayContent(children);
      setTransitionClass("entering");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      prevPath.current = location.pathname;

      const enterTimer = setTimeout(() => {
        setTransitionClass("");
      }, 400);
      return () => clearTimeout(enterTimer);
    }, 200);

    return () => clearTimeout(exitTimer);
  }, [location.pathname, children]);

  // Initial load
  useEffect(() => {
    if (prevPath.current === location.pathname) {
      setDisplayContent(children);
    }
  }, [children]);

  return (
    <div
      className={`page-transition-wrapper ${transitionClass}`}
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {displayContent}
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-grow">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/modul" element={<ModulePage />} />
            <Route path="/modul/:moduleId" element={<ModulePage />} />
            <Route
              path="/modul/:moduleId/chapter/:chapterId"
              element={<ChapterPage />}
            />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/glosarium" element={<GlossaryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
