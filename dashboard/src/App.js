import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewStudent from "./components/AddNewStudent";
import Admins from "./components/Admin";
import Students from "./components/Students";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import NotFound from "./components/NotFoundPage";
import { Context } from ".";
import "./index.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, admin, setAdmin } = useContext(Context);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/users/admin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.users);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
        setTimeout(() => {
          setRedirect(true);
        }, 200);
      }
    };
    fetchUser();
  }, [setAdmin, setIsAuthenticated]);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : redirect ? <Navigate to="/login" /> : null} />
        <Route path="/login" element={<Login />} />
        <Route path="/students/addnew" element={isAuthenticated ? <AddNewStudent /> : redirect ? <Navigate to="/login" /> : null} />
        <Route path="/admin/addnew" element={isAuthenticated && admin?.role === 'SuperAdmin' ? <AddNewAdmin /> : redirect ? <Navigate to="/login" /> : null} />
        <Route path="/admins" element={isAuthenticated ? <Admins /> : redirect ? <Navigate to="/login" /> : null} />
        <Route path="/students" element={isAuthenticated ? <Students /> : redirect ? <Navigate to="/login" /> : null} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
