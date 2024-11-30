import { BaseError, ErrorType } from "./BaseError";

export class BadArgsError extends BaseError {
  constructor() {
    super(ErrorType.BAD_ARGS, "Ошибка при передачи данных");
  }
}
