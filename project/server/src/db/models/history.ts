import mongoose from "mongoose";

export interface HistoryDoc extends mongoose.Document {
  id: string;
  quizTitle: string;
  score: number;
  maxScore: number;
  userId: string;
  date: string;
}

const historySchema = new mongoose.Schema({
  id: { type: String, required: true },
  quizTitle: { type: String, required: true },
  score: { type: Number, required: true, default: 0 },
  maxScore: { type: Number, required: true },
  userId: { type: String, required: true },
  date: { type: String }
});

export const History = mongoose.model<HistoryDoc>("History", historySchema);
