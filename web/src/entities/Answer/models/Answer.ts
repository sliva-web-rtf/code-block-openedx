import { AnswerResponseDto } from "../dtos/AnswerResponseDto";
import { IAnswer } from "./IAnswer";

export class Answer implements IAnswer {
  private _score: string;
  private _test: string;
  private _time: string;

  constructor({ score, test, time }: AnswerResponseDto) {
    this._score = score;
    this._test = test;
    this._time = time;
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
