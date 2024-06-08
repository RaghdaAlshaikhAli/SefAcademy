import React from "react";
import UserDetailsForm from "./contnet"; // Assuming 'content' is a typo here
import ResultContent from "../../components/ResultContent";
import "./Result.scss";

const Result = () => {
  return (
    <section className="Result">
      <div className="ResultContainer">
        <ResultContent
          title="Welcome Back !"
          description="Get your result now."
        />
        <UserDetailsForm />
      </div>
    </section>
  );
};

export default Result;
