import { z } from "zod";
export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must at least of 10 Characters.")
    .max(300, "Content must be no longer than 300 Characters"),
});
