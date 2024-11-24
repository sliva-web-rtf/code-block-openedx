export enum DEFAULT_URL_MOCK {
  INFO_URL = "info",
}

export const DEFAULT_URL_MOCK_MAP: Record<DEFAULT_URL_MOCK, string> = {
  [DEFAULT_URL_MOCK.INFO_URL]:
    "http://127.0.0.1:8000/handler/codeblockxblock.codeblock.d0.u0/info/?student=student_1",
};
