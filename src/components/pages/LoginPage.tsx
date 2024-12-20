import { FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { KeySquare } from "lucide-react";
import { Button } from "../ui/button";
import { LoaderComponent } from "../common/LoaderComponent";

const LoginPage: FC = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    debugger;
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  const handleLoginWithAuth = () => {
    loginWithRedirect();
  };

  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-center items-center flex-col">
          {isLoading ? (
            <LoaderComponent size="large" show />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-normal">Login</CardTitle>
                <CardDescription>Enter your email below to login into your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button type="button" className="w-full" onClick={handleLoginWithAuth}>
                  <KeySquare />
                  Continue with Google
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
