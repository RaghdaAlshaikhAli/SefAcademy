import React from "react";
import not from "../../../src/assets/images/notFoundd.gif";
import "./style.scss";

const NotFound = () => {
  return (
    <div className="notPage">
      <div className="not">
        <img src={not} alt="" />
      </div>
      <h1>Ups!... no results found</h1>
      <p>Please try another search</p>
    </div>
  );
};

export default NotFound;
