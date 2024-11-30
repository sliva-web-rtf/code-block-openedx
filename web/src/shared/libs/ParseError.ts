import { BaseError, ErrorType } from "./BaseError";

export class ParseError extends BaseError {
  constructor() {
    super(ErrorType.PARSE, "Не удалось валидировать данные");
  }
}
