import { AnswerVerdict } from "../libs/verdict";

export type AttemptResponseDto = {
  createdAt: string;
  verdict: AnswerVerdict;
  score: string;
  time: string;
  test: string;
};

export type AttemptsResponseDto = {
  attempts: AttemptResponseDto[]
}
