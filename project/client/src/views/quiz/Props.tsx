import { QuizInput } from "utils/types";

export interface QuizProps {
    data: QuizInput;
    editState: boolean;
}

export interface QuizViewProps extends QuizProps {
    setEdit: (newEditState: boolean) => void;
}

export interface QuizFromProps extends QuizProps {
    setQuizData: (quizData: QuizInput) => void; 
    setEdit: (newEditState: boolean) => void;
}

export interface QuizPresenterProps extends QuizProps {
    // Use when we display quizzes 
    quizData: QuizInput;
}