import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<p>Somthing went wrong...</p>}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  </ErrorBoundary>
);
