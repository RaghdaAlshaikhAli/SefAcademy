// import React from "react";
// import not from "/dashboard/public/not.gif";
import "./style.css";

const NotFound = () => {
  return (
    <div className="notPage">
      <div className="not">
        <img src="/notFoundd.gif" alt="" />
      </div>
      <h1>Ups!... no results found</h1>
      <p>Please try another search</p>
    </div>
  );
};

export default NotFound;
