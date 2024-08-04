import { z } from "zod";

export const UserValidations = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(15, "First name must be at most 15 characters"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(15, "Last name must be at most 15 characters"),
  email: z
    .string()
    .email("Invalid email")
    .min(8, "Email must be at least 8 characters")
    .max(255, "Email must be at most 255 characters"),
  phone: z.string().max(20).optional().nullable(),
  address: z.string().max(255).optional(),
  zip: z
    .string()
    .optional()
    .refine((value: any) => /^[0-9]*$/.test(value), {
      message: "Zip code must be numeric",
    }),
});
