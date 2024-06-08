import React from "react";
import Item from "../../../components/Item";
import "./style.scss";
import experiance from "../../../assets/images/teacher-professor-avatar-svgrepo-com (3).svg";
import Question from "../../../assets/images/teacher-professor-avatar-svgrepo-com.svg";
import Support from "../../../assets/images/teacher-professor-avatar-svgrepo-com3.svg";

const WhyChoice = () => {
  const items = [
    {
      id: 1,
      title: "Highly Experienced",
      title2: "Highly experienced content developers and presenters.",
      img: experiance,
    },
    {
      id: 2,
      title: "Question, Quiz & Course",
      title2:
        "Periodic competition questions for continuous development with our students.",
      img: Question,
    },
    {
      id: 3,
      title: "Dedicated Support",
      title2:
        "A complete technical support team specialized in the field of programming is with you at any time.",
      img: Support,
    },
  ];

  return (
    <div>
      <div className="Second_Section-contnent">
        <h2 className="Second_Section_title">Why Choose Us?</h2>
        <p className="aboutus_p">A choice that makes the difference.</p>
      </div>
      <div className="grid-container2 grid-container-second">
        {items.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            title2={item.title2}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChoice;
