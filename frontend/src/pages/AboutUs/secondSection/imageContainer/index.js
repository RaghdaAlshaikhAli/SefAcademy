import React from "react";
import "./style.scss";
import quoc from "../../../../assets/images/double-quote-sans-right-svgrepo-com.svg";

const ImageContainer = () => {
  return (
    <div className="grid-container3">
      <div className="image-container">
        <img src={quoc} alt="image" />
      </div>
      <div className="text-container">
        <h2 className="text_container_h2">
          Cras tristique turpis justo, eu consequat sem adipiscing ut. Donec
          posuere bibendum metus.
        </h2>
        <p>Tony Nguyen, Co-Founder</p>
      </div>
    </div>
  );
};
export default ImageContainer;
