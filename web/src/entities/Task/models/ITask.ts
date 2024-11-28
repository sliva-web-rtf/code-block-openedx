import { ILanguage } from "@/entities/Language/models/ILanguage";

export interface ITask {
  title: string;
  content: string;
  format: string | null;
  languages: ILanguage[];
  maxAttempts: number;
  attempts: number;
  memoryLimit: string;
  timeLimit: Date;
}