import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  const [editAdmin, setEditAdmin] = useState(null);
  const { isAuthenticated } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const navigateTo = useNavigate();

  const fetchAdmins = async (page) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/users/admins`,
        {
          params: {
            page,
            limit: 50,
            search: searchTerm,
            filter: filterTerm,
            sort: sortTerm,
          },
          withCredentials: true,
        }
      );
      setAdmins(data.admins);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      setError(error.response.data.message); 
    }
  };

  useEffect(() => {
    fetchAdmins(currentPage);
  }, [currentPage, searchTerm, filterTerm, sortTerm]);

  const handleDelete = async (adminId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/users/${adminId}`, {
        withCredentials: true,
      });
      toast.success("Admin deleted successfully");
      fetchAdmins(currentPage);
    } catch (error) {
      toast.error(error.response.data.message); 
    }
  };

  const handleEdit = (admin) => {
    setEditAdmin(admin);
  };

  const handleUpdate = async (adminId) => {
    try {
      const updatedAdmin = { ...editAdmin, password: editAdmin.password };
      await axios.put(
        `http://localhost:4000/api/v1/users/updateUser/${adminId}`,
        updatedAdmin,
        {
          withCredentials: true,
        }
      );
      setAdmins(
        admins.map((admin) => (admin.userId === adminId ? updatedAdmin : admin))
      );
      setEditAdmin(null);
      toast.success("Admin updated successfully");
      fetchAdmins(currentPage);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditAdmin({ ...editAdmin, [name]: value });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortTerm(event.target.value);
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigateTo("/");
      }, 2000);
    }
  }, [error]);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  if (error) {
    return (
      <section className="page">
        <div className="error-message">{error}</div>
      </section>
    );
  }

  return (
    <>
      <section className="page request">
        <h1>All Admins</h1>
        <div className="banner">
          <div className="filters">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <input
              type="text"
              placeholder="Filter by Role"
              value={filterTerm}
              onChange={handleFilterChange}
            />
            <select
              className="responsive-select"
              value={sortTerm}
              onChange={handleSortChange}
            >
              <option value="">Sort by</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
            </select>
          </div>

          {admins.length > 0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>User Id</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((element) => (
                    <tr key={element._id}>
                      <td>
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <input
                            type="text"
                            name="Name"
                            value={editAdmin.Name}
                            onChange={handleInputChange}
                          />
                        ) : (
                          element.Name
                        )}
                      </td>
                      <td>{element.userId}</td>
                      <td>
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <input
                            type="email"
                            name="email"
                            value={editAdmin.email}
                            onChange={handleInputChange}
                          />
                        ) : (
                          element.email
                        )}
                      </td>
                      <td>
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <input
                            type="text"
                            name="phone"
                            value={editAdmin.phone}
                            onChange={handleInputChange}
                          />
                        ) : (
                          element.phone
                        )}
                      </td>
                      <td>
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <input
                            type="number"
                            name="age"
                            value={editAdmin.age}
                            onChange={handleInputChange}
                          />
                        ) : (
                          element.age
                        )}
                      </td>
                      <td>
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <select
                            className="responsive-select"
                            name="role"
                            value={editAdmin.role}
                            onChange={handleInputChange}
                          >
                            <option value="Admin">Admin</option>
                            <option value="SuperAdmin">SuperAdmin</option>
                          </select>
                        ) : (
                          element.role
                        )}
                      </td>
                      <td>
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <input
                            name="password"
                            value={editAdmin.password}
                            onChange={handleInputChange}
                          />
                        ) : (
                          element.password
                        )}
                      </td>
                      <td className="table-actions">
                        {editAdmin && editAdmin.userId === element.userId ? (
                          <>
                            <button
                              className="save-button"
                              onClick={() => handleUpdate(element.userId)}
                            >
                              Save
                            </button>
                            <button
                              className="cancel-button"
                              onClick={() => setEditAdmin(null)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="edit-button"
                              onClick={() => handleEdit(element)}
                            >
                              Edit
                            </button>
                            <button
                              className="delete-button"
                              onClick={() => handleDelete(element._id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.min(prevPage + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <h1>No Registered Admins Found!</h1>
          )}
        </div>
      </section>
      {/* <ToastContainer/> */}
    </>
  );
};

export default Admins;
