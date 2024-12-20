import axiosInstance from "@/constant/AxiosConfig";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/components/pages/LoginPage";
import PageNotFound from "@/components/pages/PageNotFound";

const AppRoutes = () => {
  const [, updateGlobalData] = useGlobalContext();

  const fetchConfigData = () => {
    axiosInstance.get("configuration").then((res) => {
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
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
