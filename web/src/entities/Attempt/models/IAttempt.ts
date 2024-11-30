import { AnswerVerdict } from "../libs/verdict";

export interface IAttempt {
  createdAt: Date;
  verdict: AnswerVerdict;
  score: number;
  test: number;
  time: Date;
}
