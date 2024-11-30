import { BaseError, ErrorType } from "./BaseError";

export class FetchError extends BaseError {
  constructor() {
    super(ErrorType.UNKNOWN, "Не удалось загрузить данные");
  }
}
