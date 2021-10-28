import { QuestionInput, QuizInput } from "../../utils/types";

export interface QuizProps {
  quiz: QuizInput;
}

export interface QuizFromProps extends QuizProps {
  saveQuiz: (data: QuizInput) => void;
  setQuizData: (quizData: QuizInput) => void;
  setNumberOfQuestions: (numberOfQuestions: any) => void; 
  onDeleteQuestion: (questionData: QuestionInput) => void;
  onSetQuestion: (questionData: QuestionInput) => void;
  onUpdateQuestion: (questionData: QuestionInput) => void;
}
