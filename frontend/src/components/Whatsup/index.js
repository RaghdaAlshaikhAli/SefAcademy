import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import "./style.css";
import whatsap from "../../assets/images/whatsapp.png";

const Contact = () => {
  const [isWhatsAppClicked, setIsWhatsAppClicked] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsAppClicked(!isWhatsAppClicked);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/201555177645`, "_blank");
  };
  const openWhatsApp2 = () => {
    window.open(`https://wa.me/201097629509`, "_blank");
  };

  return (
    <motion.section
      className="Contact_section"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="whatsap_div">
        {isWhatsAppClicked ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <AiOutlineClose onClick={handleWhatsAppClick} className="close" />
          </motion.div>
        ) : (
          <img
            src={whatsap}
            alt=""
            id="whatsap"
            style={{ cursor: "pointer" }}
            onClick={handleWhatsAppClick}
          />
        )}
      </div>
      {isWhatsAppClicked && (
        <div className="customer_service" id="customer_service">
          <div className="hello_customer">
            <div className="customer">
              <BsWhatsapp
                className="whatsap_icon"
                style={{ width: "60px", height: "60px", marginBottom: "1rem" }}
              />
              <div className="Conversation">
                <h5>Start a Conversation</h5>
                <p>
                  Hi! Click one of our member below to chat on <b>WhatsApp</b>
                </p>
              </div>
            </div>
          </div>
          <div className="div2">
            <p>The team typically replies in a few minutes.</p>
            <div className="Buttons">
              <motion.a
                className="Two_button"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="First_button">
                  <img
                    src={whatsap}
                    alt="customer"
                    className="customer"
                    loading="lazy"
                  />
                  <div>
                    <p className="Support_p" onClick={openWhatsApp}>
                      Support Number 1
                    </p>
                    <p onClick={openWhatsApp}>Hello</p>
                  </div>{" "}
                </div>
                <BsWhatsapp
                  style={{ width: "20px", height: "20px", color: "#73b93f" }}
                />
              </motion.a>
              <motion.a
                className="Two_button"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="First_button">
                  <img
                    src={whatsap}
                    alt="customer"
                    className="customer"
                    loading="lazy"
                  />
                  <div>
                    <p className="Support_p" onClick={openWhatsApp2}>
                      Support Number 2
                    </p>
                    <p onClick={openWhatsApp2}>Welcome</p>
                  </div>
                </div>
                <BsWhatsapp
                  style={{ width: "20px", height: "20px", color: "#73b93f" }}
                />
              </motion.a>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
