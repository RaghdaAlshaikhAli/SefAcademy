import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [students, setStudents] = useState([]);
  const { isAuthenticated } = useContext(Context);

  // Fetch requests function
  const fetchRequests = async (page) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/requests/getall`,
        {
          params: { page, limit: 50 },
          withCredentials: true,
        }
      );
      if (Array.isArray(data.requests)) {
        setRequests(data.requests);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
        if (data.requests.length === 0) {
          toast.error("No Requests Found!");
        }
      } else {
        toast.error("Unexpected response format");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // Fetch students function
  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/users/countStudents`,
        {
          withCredentials: true,
        }
      );
      setStudents(data.students);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // Initial fetch of requests and students on component mount
  useEffect(() => {
    fetchRequests(currentPage);
    fetchStudents();
  }, [currentPage]);

  // Delete request function
  const deleteRequest = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/requests/${id}`,
        { withCredentials: true }
      );
      toast.success(data.message);
      // Update requests after deletion
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
      // Fetch updated requests after deletion
      const updatedPage =
        requests.length === 1 && currentPage > 1 ? currentPage - 1 : currentPage;
      setCurrentPage(updatedPage);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img src="/user3.png" alt="docImg" />
          <div className="content">
            <div>
              <p>Hello </p>
            </div>
          </div>
        </div>
        <div className="secondBox">
          <p>Total Requests</p>
          <h3>{requests.length}</h3>
        </div>
        <div className="thirdBox">
          <p>Total Students</p>
          <h3>{students.length}</h3>
        </div>
      </div>
      <div className="banner2">
        <h1>Requests</h1>
        {requests.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Password</th>
                  <th>UserId</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((element) => (
                  <tr key={element._id}>
                    <td>{element.Name}</td>
                    <td>{element.age}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
                    <td>{element.password}</td>
                    <td>{element.userId}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteRequest(element._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <h2>No Requests!</h2>
        )}
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default Dashboard;
