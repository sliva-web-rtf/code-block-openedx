import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XBlockContextProvider } from "@/entities/XBlock";
import { MainPage } from "@/pages/MainPage";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <XBlockContextProvider>
        <MainPage />
      </XBlockContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
