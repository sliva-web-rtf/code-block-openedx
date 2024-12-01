
import { ErrorType } from "../types";
import { BaseError } from "./BaseError";

const DEFAULT_PARSE_ERROR_MESSAGE = "Не удалось валидировать данные";

export class ParseError extends BaseError {
  constructor(message: string = DEFAULT_PARSE_ERROR_MESSAGE) {
    super(ErrorType.PARSE, message);
  }
}
