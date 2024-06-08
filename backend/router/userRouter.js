import express from "express";
import {
  addNewAdmin,
  addNewStudent,
  getAllStudents,
  getAllAdmins,
  getStudentByUserId,
  getUserDetails,
  login,
  logout,
  deleteUser,
  updateUser,
  getCountOfAllStudents,
} from "../controller/userController.js";
import {
  isSuperAdminAuthenticated,
  isAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/admin/addnew", isSuperAdminAuthenticated, addNewAdmin);
router.post("/students/addnew", isAuthenticated, addNewStudent);
router.get("/admins", isSuperAdminAuthenticated, getAllAdmins);
router.get("/admin/me", isAuthenticated, getUserDetails);
router.get("/superadmin/logout", isAuthenticated, logout);
router.get("/students/userId", getStudentByUserId);
router.get("/students", isAuthenticated, getAllStudents);
router.get("/countStudents", isAuthenticated, getCountOfAllStudents);
router.delete("/:id",isAuthenticated, deleteUser);
router.put("/updateUser/:userId",isAuthenticated, updateUser);

export default router;
