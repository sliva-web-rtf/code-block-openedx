import { Language } from "@/entities/Language";
import { Example } from "./Example";
import { Restrictions } from "./Restrictions";

export type Task = {
  title: string;
  description: string;
  max_attempts: number;
  attempts: number;
  restrictons: Restrictions;
  languages: Language[];
  type_testing: "STD" | "UNIT";
  input_format: string;
  examples: Example[];
  output_format: string;
};
