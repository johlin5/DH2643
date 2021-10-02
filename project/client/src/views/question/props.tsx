import { QuestionInput } from "../../utils/types";

export interface QuestionProps {
    data: QuestionInput;
    editQuiz: boolean;
}

export interface QuestionFormProps extends QuestionProps {
    saveQuestion: (questionData: QuestionInput, editState: boolean) => void;
}

export interface QuestionViewProps extends QuestionProps{
    setEdit: (newEditState: boolean) => void;
    
}

export interface QuestionPresenterProps extends QuestionProps {
    saveQuestion: (id: string, questionData: QuestionInput) => void;
}

