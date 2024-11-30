import { ILanguage } from "@/entities/Language/models/ILanguage";

export interface ITask {
  title: string;
  content: string;
  languages: ILanguage[];
  maxAttempts: number;
  attempts: number;
  memoryLimit: string;
  timeLimit: Date;
  inputFormat: string;
  outputFormat: string;
  exampleTests: {
    stdin: string;
    stdout: string;
  }[];
}
