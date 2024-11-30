import { ILanguage } from "@/entities/Language";
import { TaskResponseDto } from "../dtos/TaskResponseDto";
import { ITask } from "./ITask";
import { Language } from "@/entities/Language";

export class Task implements ITask {
  private _title: string;
  private _content: string;
  private _languages: ILanguage[];
  private _attempts: number;
  private _maxAttempts: number;
  private _memoryLimitInKib: number;
  private _timeLimit: string;
  private _inputFormat: string;
  private _outputFormat: string;
  private _exampleTests: {
    stdin: string;
    stdout: string;
  }[];

  constructor({
    title,
    content,
    format,
    languages,
    attempts,
    maxAttempts,
    restrictions,
    exampleTests,
  }: TaskResponseDto) {
    this._title = title;
    this._content = content;
    this._languages = languages.map((l) => new Language(l));
    this._attempts = attempts;
    this._maxAttempts = maxAttempts;
    this._memoryLimitInKib = restrictions.memoryLimitInKib;
    this._timeLimit = restrictions.timeLimit;
    this._inputFormat = format.inputFormat;
    this._outputFormat = format.outputFormat;
    this._exampleTests = exampleTests;
  }

  public get title() {
    return this._title;
  }

  public get content() {
    return this._content;
  }

  public get inputFormat() {
    return this._inputFormat;
  }

  public get outputFormat() {
    return this._outputFormat;
  }

  public get languages() {
    return this._languages;
  }

  public get attempts() {
    return this._attempts;
  }

  public get maxAttempts() {
    return this._maxAttempts;
  }

  public get memoryLimit() {
    return Math.floor(this._memoryLimitInKib / 1024).toString();
  }

  public get timeLimit() {
    return new Date(
      Math.floor(
        Number(this._timeLimit.slice(0, this._timeLimit.length - 1)) * 1000,
      ),
    );
  }

  public get exampleTests() {
    return this._exampleTests;
  }
}
