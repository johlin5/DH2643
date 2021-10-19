export type FormInputs = {
    userName: string;
    password: string;
    passwordConfirmation: string;
};

export type AnswerInput = {
    id: string;
    description: string; 
    flag: string; 
}

export type QuestionInput = {
    id: string;
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

