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
  },
  gender: {
    type: String,
  },
  group: {
    type: String,
  },
  menu: {
    type: String,
  },
};

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;
