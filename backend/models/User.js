import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    eventLocation: {
      type: String,
    },
    country: {
      type: String,
    },
    eventDate: {
      type: Date,
    },
    phone: {
      type: String,
    },
    userStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
