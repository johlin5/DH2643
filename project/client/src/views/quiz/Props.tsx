import { QuizInput } from "utils/types";

export interface QuizProps {
    quiz: QuizInput;
}

export interface QuizFromProps extends QuizProps {
  setQuizData: (quizData: QuizInput) => void;
  setImageData: (event:any) => any;
}
