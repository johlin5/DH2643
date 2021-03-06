export type FormInputs = {
  userName: string;
  password: string;
  passwordConfirmation: string;
};

export type AnswerInput = {
  AnswerId?: string;
  description: string;
  flag: boolean;
};

export type QuestionInput = {
  id?: string;
  question: string;
  userId: string | null;
  answers: AnswerInput[];
  upvotes: number;
  report: string;
};

export type QuizInput = {
  id?: string;
  title: string;
  description: string;
  questions: QuestionInput[];
  creator: string;
};
