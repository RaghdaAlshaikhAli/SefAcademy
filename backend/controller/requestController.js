import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Request } from "../models/requestModel.js";

export const sendRequest = catchAsyncErrors(async (req, res, next) => {
  const { Name, email, phone, age, userId, password, current_Cycle } = req.body;
  if (
    !Name ||
    !email ||
    !phone ||
    !age ||
    !password ||
    !userId ||
    !current_Cycle
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  await Request.create({
    Name,
    email,
    phone,
    age,
    userId,
    password,
    current_Cycle,
    role: "Student",
  });
  res.status(200).json({
    success: true,
    message: "Request Sent!",
  });
});

export const getAllRequest = catchAsyncErrors(async (req, res, next) => {
  const { page = 1, limit = 50 } = req.query;

  const totalRequests = await Request.countDocuments();
  const requests = await Request.find()
    .skip((page - 1) * limit)
    .limit(limit);

  const totalPages = Math.ceil(totalRequests / limit);

  res.status(200).json({
    success: true,
    currentPage: parseInt(page),
    totalPages,
    requests,
  });
});


export const deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const request = await Request.findById(req.params.id);
  if (!request) {
    return next(new ErrorHandler("Request not found", 404));
  }
  await Request.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Request Deleted Successfully!",
  });
});
