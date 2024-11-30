export enum DEFAULT_URL_MOCK {
  INFO_URL = "infoUrl",
  BASE_URL = "baseUrl",
}

export const DEFAULT_URL_MOCK_MAP: Record<DEFAULT_URL_MOCK, string> = {
  [DEFAULT_URL_MOCK.INFO_URL]:
    "/handler/codeblockxblock.codeblock.d0.u0/info/?student=student_1",
  [DEFAULT_URL_MOCK.BASE_URL]: "http://127.0.0.1:8000",
};
