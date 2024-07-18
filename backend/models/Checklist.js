import mongoose from "mongoose";
const Schema = mongoose.Schema;

const checklistSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    default: "Check if your wedding date is on an auspicious day",
  },
  category: {
    type: String,
    required: true,
    default: "Planning",
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "done"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Checklist = mongoose.model("Checklist", checklistSchema);

export default Checklist;
