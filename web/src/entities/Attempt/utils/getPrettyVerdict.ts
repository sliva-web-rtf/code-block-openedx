import { AnswerVerdict } from "../libs/verdict";

const PRETTY_VERDICT_MAP: Record<AnswerVerdict, string> = {
  [AnswerVerdict.OK]: "ОК",
  [AnswerVerdict.WA]: "WA",
  [AnswerVerdict.TIMEOUT]: "Вышло время",
  [AnswerVerdict.UNKNOWN]: "Ошибка",
};

export const getPrettyVerdict = (verdict: AnswerVerdict) => {
  return PRETTY_VERDICT_MAP[verdict];
};
