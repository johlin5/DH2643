import mongoose, { ConnectOptions } from "mongoose";
import { environment } from "../properties";
import { userSchema } from "../db_schemas/db_schemas";
const env = "development";

/**
 * Mongoose Connection
 **/
mongoose
  .connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => console.info("DATABASE CONNECTED"))
  .catch((err) => {
    console.error("DB_ERROR", err);
    process.exit(1);
  });

const db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

export const Users = mongoose.model("Users", userSchema);
