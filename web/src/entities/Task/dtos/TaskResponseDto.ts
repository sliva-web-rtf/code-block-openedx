import { LanguageResponseSchema } from "@/entities/Language";
import { z } from "zod";

export const TaskResponseSchema = z.object({
  title: z.string(),
  content: z.string(),
  format: z.object({
    inputFormat: z.string(),
    outputFormat: z.string(),
  }),
  languages: z.array(LanguageResponseSchema),
  maxAttempts: z.number(),
  attempts: z.number(),
  restrictions: z.object({
    memoryLimitInKib: z.number(),
    timeLimit: z.string(),
  }),
  exampleTests: z.array(
    z.object({
      stdin: z.string(),
      stdout: z.string(),
    }),
  ),
});

export type TaskResponseDto = z.infer<typeof TaskResponseSchema>;
