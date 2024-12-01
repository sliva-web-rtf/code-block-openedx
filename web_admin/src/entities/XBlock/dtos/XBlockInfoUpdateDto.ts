import { z } from "zod";

export const XBlockInfoUpdateSchema = z.object({
  sectionId: z.string().uuid().min(1),
  relationId: z.string().uuid().min(1),
});

export type XBlockInfoUpdateDto = z.infer<typeof XBlockInfoUpdateSchema>;
