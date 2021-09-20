import mongoose, { ConnectOptions } from "mongoose";
import { log } from "../utils/utils";

/**
 * Mongoose Connection
 **/
export const connectDB = (dbString: string): Promise<any> =>
  mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);

const db = mongoose.connection;
db.on("error", () => {
  log.error("Error while connecting to DB");
});
