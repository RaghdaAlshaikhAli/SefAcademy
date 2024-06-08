import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Name Is Required!"],
      minLength: [2, "Name Must Contain At Least 2 Characters!"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    userId: {
      type: String,
      required: [true, "userId Is Required!"],
      unique: [true, "The user ID must be unique"],
    },
    age: {
      type: String,
      minLength: [2, "Age Must Contain more than 1 Digits!"],
      maxLength: [3, "Age Must Contain less than 3 Digits!"],
    },
    phone: {
      type: String,
      minLength: [3, "Phone Number Must Contain more than 7 Digits!"],
      maxLength: [15, "Phone Number Must Contain less than 15 Digits!"],
    },
    password: {
      type: String,
      required: [true, "Password Is Required!"],
      minLength: [7, "Password Must Contain At Least 7 Characters!"],
      select: true,
    },
    current_Cycle: {
      type: String,
    },
    mark: {
      type: Number,
      default: 0,
    },
    rank: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["SuperAdmin", "Admin", "Student"],
    },
  },
  { timestamps: true }
);

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
