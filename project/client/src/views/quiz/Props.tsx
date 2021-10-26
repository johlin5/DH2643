import { QuestionInput, QuizInput } from "../../utils/types";

export interface QuizProps {
  quiz: QuizInput;
}

export interface QuizFromProps extends QuizProps {
  saveQuiz: () => void;
  setQuizData: (quizData: QuizInput) => void;
  setNumberOfQuestions: (numberOfQuestions: any) => void; 
  onDeleteQuestion: (questionData: QuestionInput) => void;
  onSaveQuestion: (questionData: QuestionInput) => void;
}
