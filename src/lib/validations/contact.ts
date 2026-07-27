import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name is required"),

  companyName: z.string().optional(),

  email: z
    .string()
    .email("Enter a valid email"),

  phone: z
    .string()
    .min(10, "Enter a valid phone number"),

  service: z
    .string()
    .min(1, "Please select a service"),

  budget: z.string().optional(),

  message: z
    .string()
    .min(10, "Please enter at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;