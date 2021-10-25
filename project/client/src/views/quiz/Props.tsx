import { QuizInput } from "../../utils/types";

export interface QuizProps {
  quiz: QuizInput;
}

export interface QuizFromProps extends QuizProps {
  saveQuiz: (quizData: QuizInput) => void;
}
