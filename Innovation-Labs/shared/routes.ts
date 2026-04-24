import { z } from "zod";
import { insertContactSchema } from "./schema";

export const api = {
  contact: {
    submit: {
      method: "POST",
      path: "/api/contact",
      input: insertContactSchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
        400: z.object({ message: z.string() }),
        500: z.object({ message: z.string() }),
      },
    },
  },
};
