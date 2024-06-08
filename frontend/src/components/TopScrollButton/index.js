import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect to update visibility state based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // useEffect to update border color based on visibility state
  useEffect(() => {
    const button = document.querySelector(".scroll-to-top-button");
    if (isVisible) {
      button.style.borderColor = "#FFB606";
    } else {
      button.style.borderColor = "transparent";
    }
  }, [isVisible]);

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
