import App from "@/App";
import axiosInstance from "@/constant/AxiosConfig";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
