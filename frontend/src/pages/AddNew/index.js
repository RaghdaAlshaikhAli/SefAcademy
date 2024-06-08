import Content from "../../components/content";
import AddNew2 from "../../assets/images/AddNew.jpg";
import AddUserForm from "./form";

const AddNew = () => {
  return (
    <div>
      <Content content={"ADD NEW"} backgroundImage={AddNew2} />
      <AddUserForm />
    </div>
  );
};

export default AddNew;
