import { AnswerInput, QuestionInput } from "../../utils/types";

export interface QuestionProps {
  questionData: QuestionInput;
}

export interface QuestionFormProps extends QuestionProps {
  handleDelete: (questionData: QuestionInput) => void;
  onAddAnswer: () => void;
  onDeleteAnswer: (answerData: AnswerInput) => void;
  onSaveAnswer: (answerData: AnswerInput) => void;
  onSetQuestion: (questionData: QuestionInput) => void;
}

export interface QuestionPresenterProps extends QuestionProps {
  handleDelete: (questionData: QuestionInput) => void;
  onSetQuestion: (questionData: QuestionInput) => void;
  updateQuestion: (questionData: QuestionInput) => void;
}
