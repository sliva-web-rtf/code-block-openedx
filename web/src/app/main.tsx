import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainPage } from "@/pages/MainPage";
import { ThemeProvider } from "@/shared/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XBlockContextProvider } from "@/entities/XBlock";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <XBlockContextProvider>
          <MainPage />
        </XBlockContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
