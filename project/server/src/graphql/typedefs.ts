import root from "./schemas/root";
import users from "./schemas/user";
import quiz from "./schemas/quiz";
import questions from "./schemas/question";
import answers from "./schemas/answer";
import history from "./schemas/history";

const typeDefs = [root, users, questions, answers, quiz, history];

export default typeDefs;
