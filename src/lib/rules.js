import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }).trim(),
    password: z
      .string()
      .min(1, { message: "Not be empty" })
      .min(5, { message: "Be at least 5 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirm: z.string().trim(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password fields do not match",
        path: ["confirm"],
      });
    }
  });

export const ContactFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  subject: z.string().min(1, { message: "Not be empty" }).trim(),
  message: z
    .string()
    .min(1, { message: "Not be empty" })
    .min(10, { message: "Be at least 10 characters long" })
    .trim(),
});
