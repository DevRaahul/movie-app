import { FC } from "react";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { KeySquare } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm: FC = () => {
  //   const formSchema = z.object({
  //     username: z
  //       .string()
  //       .min(2, {
  //         message: "Username must be at least 2 characters.",
  //       })
  //       .max(50, {
  //         message: "Username should not be more than 50 characters.",
  //       }),
  //     password: z
  //       .string()
  //       .min(2, {
  //         message: "Password must be at least 2 characters.",
  //       })
  //       .max(8, {
  //         message: "Password should not be more than 8 characters.",
  //       }),
  //   });

  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       username: "",
  //       password: "",
  //     },
  //   });

  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     // Do something with the form values.
  //     console.log(values);
  //   }

  return (
    <>
      <Button type="button" className="w-full">
        <KeySquare />
        Continue with Google
      </Button>
    </>
  );
};

export default LoginForm;
