import { z } from "zod";

export const LanguageResponseSchema = z.object({
  image: z.string().min(1),
  name: z.string().min(1),
  template: z.string().optional(),
});

export type LanguageResponseDto = z.infer<typeof LanguageResponseSchema>;
