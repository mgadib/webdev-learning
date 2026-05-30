import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "@/hooks/useDarkMode";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </HashRouter>
  </StrictMode>
);
