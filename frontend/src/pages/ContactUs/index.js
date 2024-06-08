import React from "react";
import "./style.css";
import Content from "../../components/content/index.js";
import MySlider from "../../components/ActiveSlider2/Slider.js";
import whatsap from "../../assets/images/whatsapp_logo.svg";
import contactus from "../../assets/images/contact-centre.jpg";
import contactInfo from "../../assets/images/contactInfo.svg";
import whatsapp from "../../assets/images/whatsAppContact.svg";
import Map from "../../assets/images/map-pointer-location-svgrepo-com.svg";
import telephone from "../../assets/images/telephone.svg";
import email from "../../assets/images/email.svg";

const ContactUs = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/201555177645`, "_blank");
  };
  const openWhatsApp2 = () => {
    window.open(`https://wa.me/201097629509`, "_blank");
  };

  return (
    <div className="Contact_Container">
      <Content content={"CONTACT US"} backgroundImage={contactus} />
      <div className="grid-container2 grid-container-second">
        <div className="grid-item grid-item-contact">
          <img src={contactInfo} className="iconContact" alt="contactInfo" />
          <h2 className="icon_title">Contact info</h2>
          <div className="contact_div">
            <img className="Contact_img_tel" src={telephone} alt="telephone" />
            <a href="tel:+201555177645" className="contact_a" target="_blank" rel="noreferrer">
              201555177645
            </a>
          </div>
          <div className="contact_div">
            <img className="Contact_img_tel" src={telephone} alt="telephone" />
            <a href="tel:+201097629509" className="contact_a" target="_blank" rel="noreferrer">
              201097629509
            </a>
          </div>
          <div className="contact_div">
            <img className="Contact_img_tel" src={email} alt="email" />
            <a
              href="email:support@sefacademy.com"
              className="contact_a"
              target="_blank" rel="noreferrer"
            >
              support@sefacademy.com
            </a>
          </div>
        </div>

        <div className="grid-item grid-item-contact">
          <img src={whatsapp} className="iconContact" alt="whatsapp" />
          <h2 className="icon_title">WhatsApp</h2>
          <div className="Buttons">
            <a className="Two_button button_Contact" onClick={openWhatsApp}>
              <div className="First_button First_button_Contact">
                <img
                  src={whatsap}
                  alt="customer"
                  className="customer customer_contact"
                  loading="lazy"
                />
                <div className="button_content">
                  <p className="contact_support">
                    Support Number 1{" "}
                    <span className="span_contact">Online</span>
                  </p>
                  <p className="WhatsApp_p">Need Help? Chat with us</p>
                </div>
              </div>
            </a>
            <a className="Two_button button_Contact" onClick={openWhatsApp2}>
              <div className="First_button First_button_Contact">
                <img
                  src={whatsap}
                  alt="customer"
                  className="customer customer_contact"
                  loading="lazy"
                />
                <div className="button_content">
                  <p className=" contact_support">
                    Support Number 2{" "}
                    <span className="span_contact">Online</span>
                  </p>
                  <p className="WhatsApp_p">Need Help? Chat with us</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="grid-item grid-item-contact">
          <img src={Map} className="iconContact" alt="Map" />
          <h2 className="icon_title">Address Way​</h2>
          <p className="cairo">Cairo , Egypt</p>
        </div>
      </div>
      <div className="slider">
        <MySlider />
      </div>
    </div>
  );
};

export default ContactUs;
