import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/jwtToken.js";

// login
export const login = catchAsyncErrors(async (req, res, next) => {
  const { userId, password, role } = req.body;

  if (!userId || !password || !role) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const user = await User.findOne({ userId }).select("+password");
  
  if (!user) {
    return next(new ErrorHandler("Invalid User ID Or Password!", 400));
  }

  if (password !== user.password) {
    return next(new ErrorHandler("Invalid User ID Or Password!", 400));
  }

  if (role !== user.role) {
    return next(new ErrorHandler(`User Not Found With This Role!`, 400));
  }

  generateToken(user, "Login Successfully!", 201, res);
});


// Add new Admin
export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const { Name, email, phone, password, age, userId , role} =
    req.body;
  if (
    !Name ||
    !email ||
    !phone ||
    !password ||
    !age ||
    !userId ||
    !role

  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ userId });
  if (isRegistered) {
    return next(new ErrorHandler("Admin With This User ID Already Exists!", 400));
  }

  let userRole;
  if (role === "Admin" || role === "SuperAdmin") {
    userRole = role;
  } else {
    return next(new ErrorHandler("Invalid User Role!", 400));
  }

  const admin = await User.create({
    Name, email, phone, password, age, userId ,
    role: userRole,
  });
  res.status(200).json({
    success: true,
    message: "New Admin Registered",
    admin,
  });
});


// Add new Student
export const addNewStudent = catchAsyncErrors(async (req, res, next) => {
  const { Name, email, phone, password, age, userId, current_Cycle, rank, mark } = req.body;

  if (!Name || !email || !phone || !password || !age || !userId || !current_Cycle || rank === undefined || mark === undefined) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ userId });
  if (isRegistered) {
    return next(new ErrorHandler("Student With This User Id Already Exists!", 400));
  }

  const student = await User.create({
    Name,
    email,
    phone,
    password,
    age,
    userId,
    current_Cycle,
    role: "Student",
    rank,
    mark
  });

  res.status(200).json({
    success: true,
    message: "New Student Registered",
    student,
  });
});


// // Get All Students
// export const getAllStudents = catchAsyncErrors(async (req, res, next) => {
//   const { page = 1, limit = 50, search = "", filter = "", sort = "" } = req.query;
//   const query = { role: "Student" };

//   if (search) {
//     query.Name = { $regex: search, $options: "i" };
//   }

//   if (filter) {
//     query.current_Cycle =  { $regex: filter, $options: "i" };;
//   }

//   let sortOptions = {};
//   switch (sort) {
//     case "name_asc":
//       sortOptions = { Name: 1 };
//       break;
//     case "name_desc":
//       sortOptions = { Name: -1 };
//       break;
//     case "mark_asc":
//       sortOptions = { mark: 1 };
//       break;
//     case "mark_desc":
//       sortOptions = { mark: -1 };
//       break;
//     case "rank_asc":
//       sortOptions = { rank: 1 };
//       break;
//     case "rank_desc":
//       sortOptions = { rank: -1 };
//       break;
//     default:
//       break;
//   }

//   const totalStudents = await User.countDocuments(query);
//   const students = await User.find(query)
//     .sort(sortOptions)
//     .skip((page - 1) * limit)
//     .limit(limit);

//   const totalPages = Math.ceil(totalStudents / limit);

//   res.status(200).json({
//     success: true,
//     currentPage: parseInt(page),
//     totalPages,
//     students,
//   });
// });

export const getAllStudents = catchAsyncErrors(async (req, res, next) => {
  const { page = 1, limit = 50, search = "", filter = "", sort = "" } = req.query;
  const query = { role: "Student" };

  if (search) {
    query.Name = { $regex: search, $options: "i" };
  }

  if (filter) {
    query.current_Cycle =  { $regex: filter, $options: "i" };;
  }

  let sortOptions = {};
  switch (sort) {
    case "name_asc":
      sortOptions = { Name: 1 };
      break;
    case "name_desc":
      sortOptions = { Name: -1 };
      break;
    case "mark_asc":
      sortOptions = { mark: 1 };
      break;
    case "mark_desc":
      sortOptions = { mark: -1 };
      break;
    case "rank_asc":
      sortOptions = { rank: 1 };
      break;
    case "rank_desc":
      sortOptions = { rank: -1 };
      break;
    default:
      break;
  }

  const totalStudents = await User.countDocuments(query);
  const students = await User.find(query)
    .sort(sortOptions)
    .skip((page - 1) * limit)
    .limit(limit);

  const totalPages = Math.ceil(totalStudents / limit);

  res.status(200).json({
    success: true,
    currentPage: parseInt(page),
    totalPages,
    students,
  });
});

export const getCountOfAllStudents = catchAsyncErrors(async (req, res, next) => {

  const query = { role: "Student" };
  const students = await User.find(query);

  res.status(200).json({
    success: true,
    students,
  });
});

// Get User Details
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const users = req.user;
  res.status(200).json({
    success: true,
    users,
  });
});

// Get All Admins
export const getAllAdmins = catchAsyncErrors(async (req, res, next) => {
  const { page = 1, limit = 50, search = "", sort = "", filter = "" } = req.query;

  const query = { $or: [{ role: "Admin" }, { role: "SuperAdmin" }] };

  if (search) {
    query.Name = { $regex: search, $options: "i" };
  }

  if (filter) {
    query.role ={ $regex: filter, $options: "i" };;
  }

  let sortOptions = {};
  switch (sort) {
    case "name_asc":
      sortOptions = { Name: 1 };
      break;
    case "name_desc":
      sortOptions = { Name: -1 };
      break;
    default:
      break;
  }

  const totalAdmins = await User.countDocuments(query);

  const admins = await User.find(query)
    .sort(sortOptions)
    .skip((page - 1) * limit)
    .limit(limit);

  const totalPages = Math.ceil(totalAdmins / limit);

  res.status(200).json({
    success: true,
    currentPage: parseInt(page),
    totalPages,
    admins,
  });
});


// Get Student By userId
export const getStudentByUserId = catchAsyncErrors(async (req, res, next) => {
  const { userId } = req.query;
  if (!userId) {
    return next(new ErrorHandler("UserId is required", 400));
  }

  const student = await User.findOne({ userId, role: "Student" });
  if (!student) {
    return next(new ErrorHandler("Student not found", 404));
  }

  res.status(200).json({
    success: true,
    student,
  });
});


// Logout
export const logout = catchAsyncErrors(async (req, res, next) => {
  const adminToken = req.cookies.adminToken;
  const superAdminToken = req.cookies.superAdminToken;

  let cookieName;
  if (adminToken) {
    cookieName = "adminToken";
  } else if (superAdminToken) {
    cookieName = "superAdminToken";
  } else {
    return next(new ErrorHandler("No valid token found!", 400));
  }

  res.cookie(cookieName, "", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});


// Delete User
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "User Deleted Successfully!",
  });
});

// Update User
export const updateUser = catchAsyncErrors(async (req, res, next) => {
  const { userId } = req.params;
  const { Name, email, phone, age, current_Cycle, rank, mark, role ,password} = req.body;

  if (!userId) {
    return next(new ErrorHandler("UserId is required", 400));
  }

  const user = await User.findOne({ userId });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  user.Name = Name || user.Name;
  user.email = email || user.email;
  user.phone = phone || user.phone;
  user.age = age || user.age;
  user.current_Cycle = current_Cycle !== undefined? current_Cycle: user.current_Cycle;
  user.rank = rank !== undefined ? rank : user.rank;
  user.mark = mark !== undefined ? mark : user.mark;
  user.role = role || user.role;
  user.password = password || user.password;

  

  await user.save();

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    user,
  });
});

// Get Current User
export const getCurrentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  
  res.status(200).json({
    success: true,
    user,
  });
});
