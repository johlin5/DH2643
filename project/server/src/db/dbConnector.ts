import mongoose, { ConnectOptions } from "mongoose";
import { dbString } from "../properties";

/**
 * Mongoose Connection
 **/
export const connectDB = () =>
  mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);

const db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});
