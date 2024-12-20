import { useEffect } from "react";
import axiosInstance from "@/constant/AxiosConfig";
import { useGlobalContext } from "@/context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/components/pages/LoginPage";
import PageNotFound from "@/components/pages/PageNotFound";
import { API_URL } from "@/constant/ApiEndPoints";
import HomeContainer from "@/components/pages/HomeContainer";
import { PAGE_ROUTES } from "./Routes";

const AppRoutes = () => {
  const [, updateGlobalData] = useGlobalContext();

  const fetchConfigData = () => {
    axiosInstance.get(API_URL.CONFIG_URL).then((res) => {
      const imgData = res.data?.images;
      const { base_url: img_base_url } = imgData;
      updateGlobalData({ imgUrl: img_base_url });
    });
  };

  useEffect(() => {
    fetchConfigData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PAGE_ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={PAGE_ROUTES.HOME_PAGE} element={<HomeContainer />} />
          <Route path={PAGE_ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
