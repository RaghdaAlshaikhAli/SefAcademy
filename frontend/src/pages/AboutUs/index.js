import React from "react";
import Content from "../../components/content";
import SecondSection from "./secondSection";
import contactImg from "../../assets/images/aboutus.jpg";
import Slider from "../../components/ActiveSlider/Slider";
import Slider2 from "../../components/ActiveSlider2/Slider";
import "./style.scss";

const AboutUs = () => {
  return (
    <>
      <div className="Aboutus_Container">
        <Content content="ABOUT US" backgroundImage={contactImg} />
      </div>
      <SecondSection />
      <div className="Slider_Content">
        <h2 className="about_title">A Great Place to Grow</h2>
        <Slider />
        <Slider2 />
      </div>
    </>
  );
};

export default AboutUs;
