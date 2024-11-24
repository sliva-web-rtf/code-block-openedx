import { LanguageResponseDto } from "@/entities/Language/dtos/LanguageResponseDto";

export type TaskResponseDto = {
  title: string;
  content: string;
  format: string | null;
  languages: LanguageResponseDto[];
  maxAttempts: number;
  attempts: number;
}