import { z } from "zod";

export const taskCodeEditorSchema = z.object({
  code: z.string(),
  lang: z.string(),
});

export type TaskCodeEditorSchemaType = z.infer<typeof taskCodeEditorSchema>;
