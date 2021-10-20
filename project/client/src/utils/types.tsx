export type FormInputs = {
    userName: string;
    password: string;
    passwordConfirmation: string;
};

export type AnswerInput = {
    AnswerId: string;
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

export type AnswerType = {
    description: string; 
    flag: Boolean; 
}

export type QuestionType = {
    question: string;
    userId: string | null;
    answers: AnswerType[];
    upvotes: number;
    report: string;
}

export type QuizType = {
    title: string;
    description: string;
    questions: QuestionType[];
    creator: string; 
}   

