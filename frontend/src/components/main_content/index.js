import React from "react";
import "./style.scss";
import { motion } from "framer-motion";

const Content = ({ title, subtitle }) => {
  return (
    <div className="home-content">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1 className="welcome">{title}</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="p_home_content">{subtitle}</p>
      </motion.div>
    </div>
  );
};

export default Content;
