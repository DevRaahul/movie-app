import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/components/pages/LoginPage";
import PageNotFound from "@/components/pages/PageNotFound";
import HomeContainer from "@/components/pages/HomeContainer";
import { PAGE_ROUTES } from "./Routes";
import App from "@/App";

const AppRoutes = createBrowserRouter([
  {
    path: PAGE_ROUTES.LOGIN_PAGE,
    element: <LoginPage />,
  },
  {
    path: PAGE_ROUTES.EMPTY_PAGE,
    element: <App />,
    children: [
      {
        path: PAGE_ROUTES.HOME_PAGE,
        element: <HomeContainer />,
      },
      {
        path: PAGE_ROUTES.PAGE_NOT_FOUND,
        element: <PageNotFound />,
      },
    ],
  },
]);

export default AppRoutes;
