import { IGlobalData } from "@/constant/interface";
import { createContext, FC, useContext, useMemo, useState } from "react";

export const GlobalContext = createContext<any | null>(null);
export const useGlobalContext = (): any => useContext(GlobalContext);

const GlobalContextProvider: FC<IGlobalData> = (props) => {
  const [globalData, setGlobalData] = useState<any>();

  const updateGlobalData = (data: any) => {
    setGlobalData((prev: any) => {
      return {
        ...prev,
        ...data,
      };
    });
  };
  const contextValue = useMemo(() => [globalData, updateGlobalData], [globalData, updateGlobalData]);

  return <GlobalContext.Provider value={contextValue}>{props?.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
