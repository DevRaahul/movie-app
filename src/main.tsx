import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";
import "./index.css";
import GlobalContextProvider from "./context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<p>Somthing went wrong...</p>}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalContextProvider>
        <div className="h-full w-full">
          <AppRoutes />
        </div>
      </GlobalContextProvider>
    </ThemeProvider>
  </ErrorBoundary>
);
