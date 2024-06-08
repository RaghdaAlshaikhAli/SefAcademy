import React from "react";
import "./style.scss";
import Nav from "./navbar";
import Logo from "../../logo";

const Header = ({ activeItem, onNavigate }) => {
  return (
    <header className="header">
      <Logo />
      <Nav activeItem={activeItem} onNavigate={onNavigate} />
    </header>
  );
};

export default Header;
