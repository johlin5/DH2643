import mongoose, { ConnectOptions, Mongoose } from "mongoose";
import { log } from "../utils/utils";

/**
 * Mongoose Connection
 **/
export const connectDB = (dbString: string): Promise<Mongoose> =>
  mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);

const db = mongoose.connection;
db.on("error", () => {
  log.error("Error while connecting to DB");
});
