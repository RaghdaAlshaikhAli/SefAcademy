import React from "react";
import "./style.scss";

const ResultContent = ({ title, description }) => {
  return (
    <div className="ResultContent">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ResultContent;
