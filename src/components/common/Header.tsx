import disneyLogo from "../../assets/logo.png";
import { Clapperboard, House, Plus, Search, TvMinimalPlay } from "lucide-react";
import { navMenu } from "@/constant/interface";
import ProfileMenu from "./ProfileMenu";
import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";

const navigation: navMenu[] = [
  {
    label: "Home",
    icon: <House />,
  },
  {
    label: "Search",
    icon: <Search />,
  },
  {
    label: "Watch List",
    icon: <Plus />,
  },
  {
    label: "Movie",
    icon: <Clapperboard />,
  },
  {
    label: "Series",
    icon: <TvMinimalPlay />,
  },
];

const Header: FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <header className="flex items-center gap-6 p-1">
        <img src={disneyLogo} alt="logo" className="w-[80px] md:w-[100px] object-cover" />
        <div className="flex gap-2 justify-between w-full">
          <div className="flex items-center gap-8">
            {navigation.map(({ icon, label }) => (
              <div className="flex gap-4 items-center font-semibold text-[16px] cursor-pointer hover:underline underline-offset-8">
                {icon}
                <h2>{label}</h2>
              </div>
            ))}
          </div>
          <ProfileMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
{
  /* <header className="flex flex-row w-full justify-between bg-neutral-600 bg-opacity-75 h-16 sticky">
        <div className="container flex mx-auto px-2 items-center h-full flex-row">
          <div className="inline-block">
            <img src={logo} alt="logo" height={65} width={65} />
          </div>
          <p className="text-xl font-medium"> CineScope</p>
        </div>
        <nav className="w-full flex items-center justify-end gap-4 mx-4">
          {isAuthenticated &&
            navigation?.map((menu, idx) => {
              return (
                <div>
                  <NavLink id={`${menu}-${idx}`} to={menu.href}>
                    {menu.label}
                  </NavLink>
                </div>
              );
            })}
          <ModeToggle />
          {isAuthenticated && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out hover:cursor-pointer"
              onClick={logOutHandler}
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          )}
        </nav>
      </header> */
}
