import { useEffect } from "react";
import { API_URL } from "./constant/ApiEndPoints";
import axiosInstance from "./constant/AxiosConfig";
import { useGlobalContext } from "./context/GlobalContext";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
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
      <Header />
      {/* <SideNav /> */}
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
