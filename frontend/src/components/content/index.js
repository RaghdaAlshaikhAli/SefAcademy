import React from "react";
import "./style.scss";

const Content = ({ content, backgroundImage }) => {
  return (
    <div
      className="content"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <h1>{content}</h1>
    </div>
  );
};

export default Content;
