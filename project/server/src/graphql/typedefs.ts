import root from "./schemas/root";
import users from "./schemas/user";
import quiz from "./schemas/quiz";
import questions from "./schemas/question";
import answers from "./schemas/answer";

const typeDefs = [root, users, quiz, questions, answers];

export default typeDefs;
