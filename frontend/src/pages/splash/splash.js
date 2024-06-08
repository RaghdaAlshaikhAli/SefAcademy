import React from "react";
import "./style.css";

const Splash = ({ onAnimationEnd }) => {
  return (
    <div id="preload" onAnimationEnd={onAnimationEnd}>
      <div className="cssload-loader-style-1">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    </div>
  );
};

export default Splash;
