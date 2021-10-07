import {AnswerInput} from "../../utils/types";

export interface AnswerProps {
    data: AnswerInput;
    editQuestion: boolean;
};

export interface AnswerPresenterProps extends AnswerProps {
    saveAnswerData: (answerId: string, answerData: AnswerInput) => void; 
}

export interface AnswerFormProps extends AnswerProps {
    saveAnswer: (answerData: AnswerInput, newEditState: boolean) => void;
    setEdit: (newEditState: boolean) => void;
}

export interface AnswerViewProps extends AnswerProps {
    setEdit: (newEditState: boolean) => void;
}