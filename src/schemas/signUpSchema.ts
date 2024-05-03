import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 Character")
  .max(20, "Username must not be morethan 20 Character");
export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
