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