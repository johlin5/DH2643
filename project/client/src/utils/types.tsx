export type FormInputs = {
  userName: string;
  password: string;
  passwordConfirmation: string;
};

export type AnswerInput = {
  id?: string;
  description: string;
  flag: boolean;
};

export type QuestionInput = {
  id?: string;
  question: string;
  userId: string | null;
  answers: AnswerInput[];
};

export type QuizInput = {
  id?: string;
  title: string;
  description: string;
  questions: QuestionInput[];
  creator: string;
};
