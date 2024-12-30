import { FC } from "react";
import { navMenu } from "@/constant/interface";

interface IHeaderItems {
  list: navMenu[];
}
const HeaderItems: FC<IHeaderItems> = ({ list }) => {
  return (
    <>
      {list.map(({ icon, label }, index) => (
        <div className="flex gap-4 items-center font-semibold text-[16px] cursor-pointer hover:underline underline-offset-8">
          {icon}
          <h2 className="hidden md:block">{label}</h2>
        </div>
      ))}
    </>
  );
};

export default HeaderItems;
