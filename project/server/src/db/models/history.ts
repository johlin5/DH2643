import mongoose from "mongoose";

export interface HistoryDoc extends mongoose.Document {
  id: string;
  quizId: string;
  score: number;
  userId: string;
  date: string;
}

const historySchema = new mongoose.Schema({
  id: { type: String, required: true },
  quizId: { type: String, required: true },
  score: { type: Number, required: true, default: 0 },
  userId: { type: String, required: true },
  date: { type: String }
});

export const History = mongoose.model<HistoryDoc>("History", historySchema);
