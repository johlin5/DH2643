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
    userId: string;
    answers: AnswerInput[];
    upvotes: number;
    report: string;
}

export type QuizInput = {
    title: string;
    questions: QuestionInput[];
    creator: string; 
}

