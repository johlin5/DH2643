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
    question: String
    owner: UserInput
    answers: [AnswerInput]
    upvotes: Number
    report: String
  }
}

export type AnswerInput = {
    description: String 
    flag: Boolean
}

export type QuizInput = {
  input: {
    id: Id
    title: String
    questions: [QuestionInput]
    creator: Id
  }
}