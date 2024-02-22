import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
