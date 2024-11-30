import { z } from "zod";

export const XBlockResponseSchema = z.object({
  userId: z.string().min(1),
  sectionId: z.string().uuid(),
  relationId: z.string().uuid(),
});

export type XBlockResponseDto = z.infer<typeof XBlockResponseSchema>;
