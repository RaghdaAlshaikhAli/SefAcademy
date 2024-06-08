import React, { useEffect, useRef } from "react";
import "./style.scss";
import { motion, useAnimation } from "framer-motion";
import global from "../../../../assets/images/earth-globe-planet-svgrepo-com.svg";
import study from "../../../../assets/images/girl-studying-on-a-laptop-svgrepo-com.svg";
import board from "../../../../assets/images/mortarboard-svgrepo-com.svg";
import blackboard from "../../../../assets/images/blackboard-svgrepo-com.svg";

const Counter = () => {
  const controls = useAnimation();
  const lastItemControls = useAnimation();
  const counterRef = useRef(null);
  const lastItemRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            controls.start({ opacity: 1, x: 0 });
            lastItemControls.start({ opacity: 1, x: 0 });
            startCounting();
            hasAnimated.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => observer.disconnect();
  }, [controls, lastItemControls]);

  const startCounting = () => {
    let valueDisplays = document.querySelectorAll(".num");
    let totalDuration = 2000;

    let startTimestamp = null;

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      let progress = timestamp - startTimestamp;
      valueDisplays.forEach((valueDisplay) => {
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let currentValue = Math.min(
          Math.floor((progress / totalDuration) * endValue),
          endValue
        );
        valueDisplay.innerText = currentValue;
      });
      if (progress < totalDuration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  };

  return (
    <>
      <motion.div
        className="grid-item grid-item2"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        ref={counterRef}
      >
        <img src={global} alt="Image" />
        <h2 className="green num" data-val="94532">
          0
        </h2>
        <p>Foreign Followers</p>
      </motion.div>
      <div className="grid-item grid-item2">
        <img src={blackboard} alt="Image" />
        <h2 className="blue num" data-val="11223">
          0
        </h2>
        <p>Classes Complete</p>
      </div>
      <div className="grid-item grid-item2">
        <img src={study} alt="Image" />
        <h2 className="yellow num" data-val="25678">
          0
        </h2>
        <p>Students Enrolled</p>
      </div>
      <motion.div
        className="grid-item grid-item2"
        initial={{ opacity: 0, x: -50 }}
        animate={lastItemControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        ref={lastItemRef}
      >
        <img src={board} alt="Image" />
        <h2 className="red num" data-val="2678">
          0
        </h2>
        <p>Certified Teachers</p>
      </motion.div>
    </>
  );
};

export default Counter;
