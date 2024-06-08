import { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaHouseUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "..";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context); // تحديث لاستخدام role
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    await axios
    .get("http://localhost:4000/api/v1/users/superadmin/logout", {
      withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
        navigateTo("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(false);
  };

  const gotoStudentsPage = () => {
    navigateTo("/students");
    setShow(false);
  };

  const gotoRequestsPage = () => {
    navigateTo("/admins");
    setShow(false);
  };

  const gotoAddNewStudent = () => {
    navigateTo("/students/addnew");
    setShow(false);
  };

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(false);
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <TiHome onClick={gotoHomePage} title="Home" />
          <FaCircleUser onClick={gotoStudentsPage} title="Students" />
            <MdAddModerator onClick={gotoAddNewAdmin} title="Add Admin" />
          <IoPersonAddSharp onClick={gotoAddNewStudent} title="Add Student" />
          <FaHouseUser onClick={gotoRequestsPage} title="Admins" />
          <RiLogoutBoxFill onClick={handleLogout} title="Logout" />
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
        {/* <ToastContainer/> */}
      
      </div>
    </>
  );
};

export default Sidebar;