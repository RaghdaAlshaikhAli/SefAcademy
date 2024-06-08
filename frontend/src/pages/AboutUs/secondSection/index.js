import React from "react";
import "./style.scss";
import TeamSection from "./team_section/teamSection";
import ImageContainer from "./imageContainer";
import CourseSection from "./courseService";
import Counter from "./counter";
const SecondSection = () => {
  return (
    <>
      <div className="Second_Section-contnent">
        <h2 className="about_title">
          Learn with passion to live with purpose.
        </h2>
        <p className="aboutus_p">
          Neque convallis a cras semper auctor. Libero id faucibus nisl
          tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto.
        </p>
      </div>
      <div className="grid-container">
        <Counter />
      </div>

      <div className="grid-container2">
        <CourseSection />
      </div>

      <div className="grid-container33">
        <ImageContainer />
      </div>

      <div className="team_Section">
        <h2 className="about_title">Meet Our Team</h2>
        <p className="aboutus_p">
          Plugins your themes with even more features.
        </p>
        <TeamSection />
      </div>
    </>
  );
};

export default SecondSection;
