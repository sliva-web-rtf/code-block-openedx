import { ErrorType } from "../types";
import { BaseError } from "./BaseError";

const DEFAULT_FETCH_ERROR_MESSAGE = "Не удалось загрузить данные";

export class FetchError extends BaseError {
  constructor(message: string = DEFAULT_FETCH_ERROR_MESSAGE) {
    super(ErrorType.FETCH, message);
  }
}
