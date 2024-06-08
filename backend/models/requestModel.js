import mongoose from "mongoose";
import validator from "validator";

const requestSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name Is Required!"],
    minLength: [2, "Name Must Contain At Least 2 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  userId: {
    type: String,
  },
  age: {
    type: String,
    required: [true, "Age Is Required!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [7, "Phone Number Must Contain more than 7 Digits!"],
    maxLength: [15, "Phone Number Must Contain less than 15 Digits!"],
  },
  password: {
    type: String,
    minLength: [8, "Password Must Contain At Least 8 Characters!"],
  },
  current_Cycle: {
    type: String,
  },
});

export const Request = mongoose.model("Request", requestSchema);
