"use server";

import { ContactFormSchema } from "@/lib/rules";

export async function submitContact(state, formData) {
  const validedFields = ContactFormSchema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  console.log(validedFields);

  if (!validedFields.success) {
    return {
      error: validedFields.error.flatten().fieldErrors,
      email: formData.get("email"),
    };
  }

  console.log(validedFields);
}
