import { z } from "zod";

export const taskCodeEditorSchema = z.object({
  code: z.string().min(1, "No code"),
  lang: z.string(),
});

export type TaskCodeEditorSchemaType = z.infer<typeof taskCodeEditorSchema>;
