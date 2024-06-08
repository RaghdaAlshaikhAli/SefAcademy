import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "./style.css";
const ScrollToBottomButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-bottom-button`} onClick={scrollToBottom}>
      <FaArrowDown />
    </div>
  );
};

export default ScrollToBottomButton;
