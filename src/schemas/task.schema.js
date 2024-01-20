// define what a real task shoudl look like

import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title required",
      invalid_type_error: "Must be a text",
    })
    .min(1)
    .max(256),
  description: z
    .string({
      required_error: "Description required",
      invalid_type_error: "Must be a text",
    })
    .min(1)
    .max(256)
    .optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title required",
      invalid_type_error: "Must be a text",
    })
    .min(1)
    .max(256)
    .optional(),
  description: z
    .string({
      required_error: "Description required",
      invalid_type_error: "Must be a text",
    })
    .min(1)
    .max(256)
    .optional(),
});
