export type UserInput = {
  input: {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    passwordConfirmation: string;
    image: string;
    biography: string;
  };
};

export type ContextAuth = {
  isAuth: boolean;
  userId: string;
};

export type LoginInput = {
  input: {
    userName: string;
    password: string;
  };
};

export type Id = {
  id: string;
};

export type UserName = {
  userName: string;
};

export type QuestionInput = {
  input: {
    question: string;
    owner: UserInput;
    answers: [AnswerInput];
    upvotes: number;
    report: string;
  };
};

export type AnswerInput = {
  description: string;
  flag: boolean;
};

export type QuizInput = {
  input: {
    id: Id;
    title: string;
    questions: [QuestionInput];
    creator: Id;
  };
};
