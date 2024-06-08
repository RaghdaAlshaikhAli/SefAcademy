import React, { useEffect, useState } from "react";
import "./style.scss";
import OneCategory from "./oneCategroy";
import fur from "../../../assets/images/online-class-svgrepo-com.svg";
import book from "../../../assets/images/book-svgrepo-com.svg";
import student from "../../../assets/images/student-studying-on-his-desk-with-a-lamp-and-a-book-svgrepo-com.svg";

const Category = () => {
  return (
    <div className="category">
      <div className="flexx">
        <OneCategory title={"BEST INDUSTRY LEADERS"} photo={student} />
        <OneCategory title={"LEARN COURSES ONLINE"} photo={fur} />
        <OneCategory title={"BOOK LIBRARY & STORE"} photo={book} />
      </div>
    </div>
  );
};
export default Category;
