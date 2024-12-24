import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import GlobalContextProvider from "./context/GlobalContext.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-vth3iikuf3r3fh2j.us.auth0.com"
    clientId="OaNqwd6zW06wHmqxCnpsFICoVtnPh9Nf"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ErrorBoundary fallback={<p>Somthing went wrong...</p>}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <GlobalContextProvider>
          <div className="h-full w-full">
            <RouterProvider router={AppRoutes} />
          </div>
        </GlobalContextProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </Auth0Provider>
);
