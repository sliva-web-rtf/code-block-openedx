export enum ErrorType {
  FETCH = "fetch",
  PARSE = "parse",
  UNKNOWN = "unknown",
  BAD_ARGS = "bad_args",
}

export interface IError {
  type: ErrorType;
  message: string;
}
