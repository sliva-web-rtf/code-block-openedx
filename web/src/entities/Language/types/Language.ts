export type Language = {
  name: string;
  image: string;
};

export type LanguageWithTemplate = Language & {
  template: string;
};
