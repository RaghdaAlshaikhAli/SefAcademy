import React from "react";
import "./style.scss";
import image2 from "../../../../assets/images/Technical Support.jpg";
import image3 from "../../../../assets/images/Collaborate together.jpg";
import image1 from "../../../../assets/images/Home.jpg";

const CourseSection = () => {
  return (
    <>
      <div className="grid-item together">
        <img src={image1} alt="Image" />
        <h2>Course service providers</h2>
        <p>
          Course service provider to work with you constantly to advance you to
          a better level in the world of programming
        </p>
      </div>
      <div className="grid-item together">
        <img src={image2} alt="Image" />
        <h2>Technical Support</h2>
        <p>
          A complete technical support team specialized in the field of
          programming is with you at any time
        </p>
      </div>
      <div className="grid-item together">
        <img src={image3} alt="Image" />
        <h2>Collaborate together</h2>
        <p>
          Collaborate together to get the best out of yourself in the world of
          programming
        </p>
      </div>
    </>
  );
};
export default CourseSection;
