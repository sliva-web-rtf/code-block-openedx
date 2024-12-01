import type { ErrorType, IError } from "../types";

export class BaseError implements IError {
  constructor(
    public type: ErrorType,
    public message: string,
  ) {}
}
