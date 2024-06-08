import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/images/logo.png";
const Logo = () => {
  return (
    <div className="LogoApp">
      <Link to={"/"}>
        <img src={logo} className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
