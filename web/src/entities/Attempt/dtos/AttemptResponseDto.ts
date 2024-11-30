import { z } from "zod";
import { AnswerVerdict } from "../libs/verdict";

export const AttemptResponseSchema = z.object({
  createdAt: z.string().datetime(),
  verdict: z.nativeEnum(AnswerVerdict),
  score: z.string().min(1),
  time: z.string().min(1),
  test: z.string().min(1),
});

export type AttemptResponseDto = z.infer<typeof AttemptResponseSchema>;

export const AttemptsResponseSchema = z.object({
  attempts: z.array(AttemptResponseSchema),
});

export type AttemptsResponseDto = z.infer<typeof AttemptsResponseSchema>;
