import { ILanguage } from "@/entities/Language/models/ILanguage";
import { TaskResponseDto } from "../dtos/TaskResponseDto";
import { ITask } from "./ITask";
import { Language } from "@/entities/Language/models/Language";

export class Task implements ITask {
  private _title: string;
  private _content: string;
  private _format: string | null;
  private _languages: ILanguage[];
  private _attempts: number;
  private _maxAttempts: number;

  constructor({
    title,
    content,
    format,
    languages,
    attempts,
    maxAttempts,
  }: TaskResponseDto) {
    this._title = title;
    this._content = content;
    this._format = format;
    this._languages = languages.map((l) => new Language(l));
    this._attempts = attempts;
    this._maxAttempts = maxAttempts;
  }

  public get title() {
    return this._title;
  }

  public get content() {
    return this._content;
  }

  public get format() {
    return this._format;
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
}

const x =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5FZGl0Q291cnNlIjp0cnVlLCJleHAiOjE3MzI0Nzk1NjgsImlzQXV0aG9yIjp0cnVlLCJpc0NvYXV0aG9yIjp0cnVlLCJpc1RlYWNoZXIiOnRydWUsInN1YiI6IjExYWYwMmRhLWJmOWUtNDc2OS1hYTA3LTM2OTAzNTE3NzMzYyJ9.KYoUE1JQRt_3G5rncmf6SktKRHVEKuso7IgP9Lf0bo0";