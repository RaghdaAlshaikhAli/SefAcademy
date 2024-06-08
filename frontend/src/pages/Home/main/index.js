import React from "react";
import Content from "../../../components/main_content";
import "./style.scss";
import Category from "../categories";
import BottomButton from "../../../components/DownScrollButton";

const Main = () => {
  return (
    <section className="MainSection">
      <main>
        <Content title="Welcome To" subtitle="Software Engineering Future" />
      </main>
      <Category />
      <div className="buttonButtomm">
        <BottomButton />
      </div>
    </section>
  );
};

export default Main;
