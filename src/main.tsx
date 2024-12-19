import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<p>Somthing went wrong...</p>}>
    <App />
  </ErrorBoundary>
);
