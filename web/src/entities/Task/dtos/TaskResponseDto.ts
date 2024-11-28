import { LanguageResponseDto } from "@/entities/Language/dtos/LanguageResponseDto";

export type TaskResponseDto = {
  title: string;
  content: string;
  format: {
    inputFormat: string;
    outputFormat: string;
  };
  languages: LanguageResponseDto[];
  maxAttempts: number;
  attempts: number;
  restrictions: {
    memoryLimitInKib: number;
    timeLimit: string;
  };
  exampleTests: {
    stdin: string;
    stdout: string;
  }[]
};
