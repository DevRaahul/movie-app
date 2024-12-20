import { FC, useEffect } from "react";
import { Button } from "../ui/button";
import { KeySquare } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginForm: FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Button type="button" className="w-full" onClick={() => loginWithRedirect()}>
        <KeySquare />
        Continue with Google
      </Button>
    </>
  );
};

export default LoginForm;
