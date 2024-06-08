import React from "react";
import "./style.css";
import telephone from "../../assets/images/telephone.svg";

const Announcement = () => {
  return (
    <div className="Announcement_Container">
      <p>Contact us:</p>
      <a className="a_div" href="tel:+201555177645" target="_blank">
        <div className="contact_div contact_div_hed">
          <img className="Contact_img_tel" src={telephone} alt="telephone" />
          <span className="contact_a contact_a2">201555177645</span>
        </div>
      </a>
      <span>|</span>
      <a className="a_div" href="tel:+201097629509" target="_blank">
        <div className="contact_div contact_div_hed">
          <img className="Contact_img_tel" src={telephone} alt="telephone" />
          <span className="contact_a contact_a2">201097629509</span>
        </div>
      </a>
    </div>
  );
};

export default Announcement;
