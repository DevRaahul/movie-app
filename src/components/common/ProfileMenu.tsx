import { FC } from "react";
import dummyLogo from "../../assets/dummy.png";
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel } from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ModeToggle } from "./ThemeToggle";
import { LogOut } from "lucide-react";

const ProfileMenu: FC = () => {
  const { isAuthenticated, logout } = useAuth0();

  const logOutHandler = () => logout();

  return (
    <>
      {isAuthenticated && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={dummyLogo} alt="profile pic" className="rounded-full w-[40px] mr-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex items-center cursor-pointer">
                Change Theme <ModeToggle />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuLabel>
              <div className="flex items-center gap-4 cursor-pointer" onClick={logOutHandler}>
                Logout <LogOut />
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default ProfileMenu;
