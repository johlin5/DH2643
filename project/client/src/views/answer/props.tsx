import { AnswerInput } from "../../utils/types";

export interface AnswerProps {
  data: AnswerInput;
}

export interface AnswerPresenterProps extends AnswerProps {
  saveAnswerData: (answerId: string, answerData: AnswerInput) => void;
}

export interface AnswerFormProps extends AnswerProps {
  saveAnswer: (answerData: AnswerInput) => void;
}
