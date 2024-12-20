import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import LoginForm from "./LoginForm";

const LoginPage: FC = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="h-full flex justify-center items-center flex-col">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-normal">Login</CardTitle>
              <CardDescription>Enter your email below to login into your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
