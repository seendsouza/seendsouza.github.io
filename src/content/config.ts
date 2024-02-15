import { defineCollection } from "astro:content";
import { z } from "zod";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      coverImage: z.string().optional(),
      lang: z.enum(["en"]).default("en"),
    }),
  }),
};
