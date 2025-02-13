"use server";

import { RegisterFormSchema } from "@/lib/rules";

export async function register(state, formaData) {
  const validatedFiels = RegisterFormSchema.safeParse({
    email: formaData.get("email"),
    password: formaData.get("password"),
    confirm: formaData.get("confirm"),
  });

  console.log(validatedFiels);

  if (!validatedFiels.success) {
    console.log(validatedFiels.error.flatten().fieldErrors);

    return {
      error: validatedFiels.error.flatten().fieldErrors,
      email: formaData.get("email"),
    };
  }

  console.log(validatedFiels);
}
