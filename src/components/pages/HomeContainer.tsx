import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";

const HomeContainer = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Button onClick={() => logout()}>Home Container</Button>
    </div>
  );
};

export default HomeContainer;
