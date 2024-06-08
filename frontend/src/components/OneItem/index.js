import React from "react";

const OneItem = ({ title, title2, img, backgroundColor }) => {
  return (
    <div className="Container" backgroundColor={backgroundColor}>
      <div className="Img">
        <img src={img} />
      </div>
      <div className="Content">
        <h3>{title2}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default OneItem;
