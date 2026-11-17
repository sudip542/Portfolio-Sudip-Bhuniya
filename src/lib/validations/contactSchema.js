import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." })
    .trim(),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(150, { message: "Subject must not exceed 150 characters." })
    .trim(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message must not exceed 2000 characters." })
    .trim(),
});
