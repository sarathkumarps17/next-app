"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Control, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { validatePassword } from "@/helpers/validateCredentials";
import Credentials from "./Credentials";

export const signUpFomSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 2 character long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().refine(validatePassword, {
    message: "Your password doest not follow the password policy",
  }),
  passwordVerify: z.string(),
});

export default function SignUpFrom() {
  const form = useForm<z.infer<typeof signUpFomSchema>>({
    resolver: zodResolver(signUpFomSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof signUpFomSchema>) => {
    if (data.password !== data.passwordVerify)
      return form.setError("passwordVerify", {
        type: "custom",
        message: "Passwords does not match",
      });
    console.log({ data });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Credentials control={form.control} />
        <FormField
          control={form.control}
          name="passwordVerify"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conform Password</FormLabel>
              <FormControl>
                <Input
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  type="password"
                  placeholder="Re enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-auto text-center">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </Form>
  );
}
