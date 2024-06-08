import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "..";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const AddNewStudent = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [age, setAge] = useState("");
  const [current_Cycle, setCurrentCycle] = useState("");
  const [rank, setRank] = useState("0");
  const [mark, setMark] = useState("0");

  const handleAddNewStudent = async (e) => {
    e.preventDefault();
    console.log({ Name, email, phone, password, age, userId, current_Cycle, rank, mark }); // تسجيل القيم للتحقق منها
    try {
      if (!Name || !email || !phone || !password || !age || !userId || !current_Cycle || !rank || !mark) {
        toast.error("Please fill in all fields");
        return;
      }

      const res = await axios.post(
        "http://localhost:4000/api/v1/users/students/addnew",
        { Name, password, phone, email, userId, age, current_Cycle, mark, rank },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setUserId("");
      setAge("");
      setCurrentCycle("");
      setRank("0");
      setMark("0");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page">
      <section className="container form-component add-student-form">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="form-title">REGISTER A NEW STUDENT</h1>
        <form onSubmit={handleAddNewStudent}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Current Cycle"
              value={current_Cycle}
              onChange={(e) => setCurrentCycle(e.target.value)}
            />
            <input
              type="number"
              placeholder="Total"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rank"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Register New Student</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewStudent;
