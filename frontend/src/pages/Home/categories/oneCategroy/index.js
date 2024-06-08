import React from "react";
import "./style.scss";

const OneCategory = ({ title, title2, photo, onClick }) => {
  return (
    <div className="OneCategory">
      <img src={photo} />
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default OneCategory;
