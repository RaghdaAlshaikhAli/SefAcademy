import React from "react";
import "./style.scss";
import Main from "./main";
import Choice from "./whyChoice/index";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Main />
        <Choice />
      </div>
    </div>
  );
};

export default Home;
