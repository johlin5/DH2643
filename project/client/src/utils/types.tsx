export type FormInputs = {
    userName: string;
    password: string;
    passwordConfirmation: string;
};

export type AnswerInput = {
    AnswerId?: string;
    description: string; 
    flag: Boolean; 
}

export type QuestionInput = {
    id?: string;
    question: string;
    userId: string | null;
    answers: AnswerInput[];
    upvotes: number;
    report: string;
}

export type QuizInput = {
    title: string;
    description: string;
    questions: QuestionInput[];
    creator: string; 
}   

