export type AnswerRequestDto = {
  sectionId: string;
  answer: string;
  image: string;
  sectionType: "SECTION_TYPE_CODE";
  relationId: string;
  userId: string;
};
