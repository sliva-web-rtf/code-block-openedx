import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainPage } from "@/pages/MainPage";
import { ThemeProvider } from "@/shared/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainPage />
    </ThemeProvider>
  </StrictMode>,
);
