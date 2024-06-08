import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { toast } from "react-toastify";

const AddUserForm = () => {
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [current_Cycle, setCurrent_Cycle] = useState("");
  const [userId, setUserId] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/requests/request",
          { Name, age, email, phone, password, userId, current_Cycle },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setName("");
          setAge("");
          setEmail("");
          setPhone("");
          setPassword("");
          setUserId("");
          setCurrent_Cycle("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="new-form-container">
      <form onSubmit={handleRequest}>
        <div className="new-form-containerr">
          <div className="form-groupp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Please Enter your full name</span>
          </div>
          <div className="form-groupp">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <span>Please Enter your age</span>
          </div>
        </div>
        <div className="new-form-containerr">
          <div className="form-groupp">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Enter your email</span>
          </div>
          <div className="form-groupp">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span>Please Enter your Phone Number</span>
          </div>
        </div>
        <div className="new-form-containerr">
          <div className="form-groupp">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <span>If you do not have a personal ID, please leave it blank</span>
          </div>
          <div className="form-groupp">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Enter your password</span>
          </div>
        </div>
        <div className="new-form-containerr">
          <div className="form-groupp">
            <label htmlFor="currentCycle">Current Cycle</label>
            <select
              id="currentCycle"
              name="currentCycle"
              value={current_Cycle}
              onChange={(e) => setCurrent_Cycle(e.target.value)}
            >
              <option value="">Select Cycle</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
            </select>
            <span>Please choose your Current Cycle</span>
          </div>
        </div>
        <div className="div-submit">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
