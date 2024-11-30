export enum ErrorType {
  FETCH = "fetch",
  PARSE = "parse",
  UNKNOWN = "unknown",
  BAD_ARGS = "bad_args",
}

export class BaseError {
  constructor(
    public errorType: ErrorType,
    public message: string,
  ) {}
}
