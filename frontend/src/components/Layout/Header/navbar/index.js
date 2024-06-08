import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import menu_icon from "../../../../assets/images/align-justify.svg";

const Nav = ({ activeItem, onNavigate }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleItemClick = (itemName) => {
    onNavigate();
  };

  return (
    <nav className="Nav_Container">
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <Link to="/" onClick={() => handleItemClick("Home")}>
          <li className={activeItem === "Home" ? "active" : ""}>Home</li>
        </Link>
        <Link to="/aboutus" onClick={() => handleItemClick("About Us")}>
          <li className={activeItem === "About Us" ? "active" : ""}>
            About Us
          </li>
        </Link>
        <Link to="/contactus" onClick={() => handleItemClick("Contact")}>
          <li className={activeItem === "Contact" ? "active" : ""}>Contact</li>
        </Link>
        <Link to="/result" onClick={() => handleItemClick("Result")}>
          <li className={activeItem === "Result" ? "active" : ""}>Result</li>
        </Link>
        <Link to="/addnew" onClick={() => handleItemClick("Add New")}>
          <li className={activeItem === "Add New" ? "active" : ""}>Add New</li>
        </Link>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Nav;
