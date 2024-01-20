import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a text",
    })
    .min(1)
    .max(256),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a text",
    })
    .email({
      message: "Must be a valid email",
    }),
  password: z
    .string({
      required_error: "Password is needed",
      invalid_type_error: "Password must be a text",
    })
    .min(1)
    .max(256),
});

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a text",
    })
    .email({
      message: "Must be a valid email",
    }),
  password: z
    .string({
      required_error: "Password is needed",
      invalid_type_error: "Password must be a text",
    })
    .min(1)

    /*       6, {
      message: "Password must have 6 chars",
    }) */
    .max(256),
});
