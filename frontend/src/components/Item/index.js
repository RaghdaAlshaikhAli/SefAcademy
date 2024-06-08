import React from "react";
import "./style.scss";

const Item = ({ title, title2, img }) => {
  return (
    <div className="grid-item grid-item2">
      <img src={img} alt="Image" />
      <h2>{title}</h2>
      <p>{title2}</p>
    </div>
  );
};

export default Item;
