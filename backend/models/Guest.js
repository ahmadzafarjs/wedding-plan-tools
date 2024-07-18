import mongoose from "mongoose";

const guestSchema = {
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  ageCategory: {
    type: String,
    enum: ["Adult", "Child", "Baby"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  group: {
    type: String,
  },
  menu: {
    type: String,
    enum: ["Adults", "Children", "No menu", "Other"],
  },
};

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;
