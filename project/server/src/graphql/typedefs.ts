import root from "./schemas/root";
import users from "./schemas/user";
import auth from "./schemas/authentication";
import quiz from "./schemas/quiz";

const typeDefs = [root, users, auth, quiz];

export default typeDefs;
