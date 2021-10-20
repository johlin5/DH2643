import { QuizType } from "utils/types";

export interface QuizProps {
    quiz: QuizType;
}

export interface QuizFromProps extends QuizProps {
  setQuizData: (quizData: QuizType) => void;
}
