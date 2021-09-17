import mongoose, { ConnectOptions } from "mongoose";

/**
 * Mongoose Connection
 **/
export const connectDB = (dbString: string) =>
  mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);

const db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});
