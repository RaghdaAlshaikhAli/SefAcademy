import "./style.scss";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UserDetailsForm = () => {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:4000/api/v1/users/students/userId?userId=${userId}`,
  //       { withCredentials: true }
  //     );
  //     setUserData(data.student);
  //   } catch (error) {
  //     toast.error(
  //       error.response.data.message ||
  //         "An error occurred while fetching the user details."
  //     );
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/users/students/userId?userId=${userId}`,
        { withCredentials: true }
      );
      if (response.data) {
        setUserData(response.data.student);
      } else {
        toast.error("An error occurred while fetching the user details.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "An error occurred while fetching the user details."
      );
    }
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="userId"
            placeholder="Enter User Id"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">
          Get Details
        </button>
      </form>
      {userData && (
        <div className="user-details">
          <h3 className="title">Welcome Back !</h3>
          <table className="styled-table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{userData.Name}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{userData.age}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <td>ID</td>
                <td>{userData.userId}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{userData.phone}</td>
              </tr>
              <tr>
                <td>Current Cycle</td>
                <td>{userData.current_Cycle}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{userData.mark}</td>
              </tr>
              <tr>
                <td>Rank</td>
                <td>{userData.rank}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserDetailsForm;
