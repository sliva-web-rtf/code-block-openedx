import type { AttemptResponseDto } from "../dtos/AttemptResponseDto";
import { AnswerVerdict } from "../libs/verdict";
import { IAttempt } from "./IAttempt";

export class Attempt implements IAttempt {
  private _createdAt: string;
  private _verdict: AnswerVerdict;
  private _score: number;
  private _test: number;
  private _time: Date;

  constructor({ createdAt, verdict, score, test, time }: AttemptResponseDto) {
    this._createdAt = createdAt;
    this._verdict = verdict;
    this._score = Number.parseInt(score);
    this._test = Number.parseInt(test);
    this._time = this.getDateFromTime(time);
  }

  private getDateFromTime(time: string): Date {
    const milliseconds = Math.floor(Number(time.slice(0, time.length - 1)) * 1000)
    return new Date(milliseconds)
  }

  public get createdAt() {
    return new Date(this._createdAt);
  }

  public get verdict() {
    return this._verdict;
  }

  public get score() {
    return this._score;
  }

  public get test() {
    return this._test;
  }

  public get time() {
    return this._time;
  }
}
