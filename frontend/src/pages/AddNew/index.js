import React from "react";
import { Helmet } from "react-helmet";
import Content from "../../components/content";
import AddNew2 from "../../assets/images/AddNew.jpg";
import AddUserForm from "./form";

const AddNew = () => {
  return (
    <div>
      <Helmet>
        <title>Add New</title>
        <meta name="description" content="Add a new user to the S.E Future platform. Fill out the form to add new members." />
      </Helmet>
      <Content content={"ADD NEW"} backgroundImage={AddNew2} />
      <AddUserForm />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="https://www.sefacademy.com/addnew" target="_blank" rel="noopener noreferrer">
        Add New
        </a>
      </div>
    </div>
  );
};

export default AddNew;
