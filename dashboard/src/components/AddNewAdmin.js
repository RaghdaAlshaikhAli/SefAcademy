// // import { useContext, useState, useEffect } from "react";
// // import { Context } from "../index";
// // import { Navigate, useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import axios from "axios";

// // const AddNewAdmin = () => {
// //   const { isAuthenticated, role } = useContext(Context); 
// //   const navigateTo = useNavigate();
// //   const [Name, setName] = useState("");
// //   const [age, setAge] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [userId, setUserId] = useState("");
// //   const [adminRole, setAdminRole] = useState(""); 

// //   useEffect(() => {
// //     if (isAuthenticated && role === "Admin") {
// //       navigateTo("/");
// //     }
// //   }, [isAuthenticated, role, navigateTo]);

// //   const handleAddNewAdmin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios
// //         .post(
// //           "http://localhost:4000/api/v1/users/admin/addnew",
// //           { Name, email, phone, password, age, userId, role: adminRole }, 
// //           {
// //             withCredentials: true,
// //             headers: { "Content-Type": "application/json" },
// //           }
// //         )
// //         .then((res) => {
// //           toast.success(res.data.message);
// //           setName("");
// //           setEmail("");
// //           setAge("");
// //           setPhone("");
// //           setPassword("");
// //           setUserId("");
// //           setAdminRole("");
// //         });
// //     } catch (error) {
// //       toast.error(error.response.data.message);
// //     }
// //   };

// //   if (!isAuthenticated) {
// //     return <Navigate to={"/login"} />;
// //   }

// //   return (
// //     <section className="page">
// //       <section className="container form-component add-admin-form">
// //         <img src="/logo.png" alt="logo" className="logo" />
// //         <h1 className="form-title">ADD NEW ADMIN</h1>
// //         <form onSubmit={handleAddNewAdmin}>
// //           <div>
// //             <input
// //               type="text"
// //               placeholder="Name"
// //               value={Name}
// //               onChange={(e) => setName(e.target.value)}
// //             />
// //             <input
// //               type="text"
// //               placeholder="User ID"
// //               value={userId}
// //               onChange={(e) => setUserId(e.target.value)}
// //             />
// //           </div>
// //           <div>
// //             <input
// //               type="text"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Mobile Number"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />
// //           </div>
// //           <div>
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <select value={adminRole} onChange={(e) => setAdminRole(e.target.value)}>
// //               <option value="">Select Role</option>
// //               <option value="SuperAdmin">SuperAdmin</option>
// //               <option value="Admin">Admin</option>
// //             </select>
// //           </div>
// //           <div>
// //             <input
// //               type="number"
// //               placeholder="Age"
// //               value={age}
// //               onChange={(e) => setAge(e.target.value)}
// //             />
// //           </div>
// //           <div style={{ justifyContent: "center", alignItems: "center" }}>
// //             <button type="submit">ADD NEW ADMIN</button>
// //           </div>
// //         </form>
// //       </section>
// //       <ToastContainer/>
// //     </section>
// //   );
// // };

// // export default AddNewAdmin;

// import { useContext, useState, useEffect } from "react";
// import { Context } from "../index";
// import { Navigate, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";

// const AddNewAdmin = () => {
//   const { isAuthenticated, role } = useContext(Context);
//   const navigateTo = useNavigate();
//   const [Name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [userId, setUserId] = useState("");
//   const [adminRole, setAdminRole] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/login");
//     } else if (role !== "SuperAdmin") {
//       setError("You are not authorized to access this page.");
//     }
//   }, [isAuthenticated, role, navigateTo]);

//   const handleAddNewAdmin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/users/admin/addnew",
//         { Name, email, phone, password, age, userId, role: adminRole },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(response.data.message);
//       setName("");
//       setEmail("");
//       setAge("");
//       setPhone("");
//       setPassword("");
//       setUserId("");
//       setAdminRole("");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }

//   if (error) {
//     return (
//       <section className="page">
//         <div className="error">{error}</div>
//       </section>
//     );
//   }

//   return (
//     <section className="page">
//       <section className="container form-component add-admin-form">
//         <img src="/logo.png" alt="logo" className="logo" />
//         <h1 className="form-title">ADD NEW ADMIN</h1>
//         <form onSubmit={handleAddNewAdmin}>
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               value={Name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <select
//               value={adminRole}
//               onChange={(e) => setAdminRole(e.target.value)}
//             >
//               <option value="">Select Role</option>
//               <option value="SuperAdmin">SuperAdmin</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <div style={{ justifyContent: "center", alignItems: "center" }}>
//             <button type="submit">ADD NEW ADMIN</button>
//           </div>
//         </form>
//       </section>
//       <ToastContainer />
//     </section>
//   );
// };

// export default AddNewAdmin;

// import { useContext, useState, useEffect } from "react";
// import { Context } from "../index";
// import { Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AddNewAdmin = () => {
//   const { isAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();
//   const [Name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [userId, setUserId] = useState("");
//   const [adminRole, setAdminRole] = useState("");
//   const [error, setError] = useState("");

//   // useEffect(() => {
//   //   if (!isAuthenticated) {
//   //     navigateTo("/login");
//   //   } else if (role !== "SuperAdmin") {
//   //     setError("You are not authorized to access this page.");
//   //     setTimeout(() => {
//   //       navigateTo("/");
//   //     }, 2000); // Redirect to home after 2 seconds
//   //   }
//   // }, [isAuthenticated, role, navigateTo]);

//   const handleAddNewAdmin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/users/admin/addnew",
//         { Name, email, phone, password, age, userId, role: adminRole },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(response.data.message);
//       setName("");
//       setEmail("");
//       setAge("");
//       setPhone("");
//       setPassword("");
//       setUserId("");
//       setAdminRole("");
//     } catch (error) {
//       setError(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       setTimeout(() => {
//         navigateTo("/");
//       }, 2000);
//     }
//   }, [error]);

//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }

//   if (error) {
//     return (
//       <section className="page">
//         <div className="error-message">{error}</div>
//       </section>
//     );
//   }

//   return (
//     <section className="page">
//       <section className="container form-component add-admin-form">
//         <img src="/logo.png" alt="logo" className="logo" />
//         <h1 className="form-title">ADD NEW ADMIN</h1>
//         <form onSubmit={handleAddNewAdmin}>
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               value={Name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <select
//               value={adminRole}
//               onChange={(e) => setAdminRole(e.target.value)}
//             >
//               <option value="">Select Role</option>
//               <option value="SuperAdmin">SuperAdmin</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <div style={{ justifyContent: "center", alignItems: "center" }}>
//             <button type="submit">ADD NEW ADMIN</button>
//           </div>
//         </form>
//       </section>
//       {/* <ToastContainer /> */}
//     </section>
//   );
// };
// export default AddNewAdmin;

import { useContext, useState, useEffect } from "react";
import { Context } from "../index";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";

const AddNewAdmin = () => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [error, setError] = useState("");

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/admin/addnew",
        { Name, email, phone, password, age, userId, role: adminRole },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setName("");
      setEmail("");
      setAge("");
      setPhone("");
      setPassword("");
      setUserId("");
      setAdminRole("");
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        if (error.response.status === 403) {
          setError(errorMessage);
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigateTo("/");
      }, 2000);
    }
  }, [error, navigateTo]);

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
    <section className="page">
      <section className="container form-component add-admin-form">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="form-title">ADD NEW ADMIN</h1>
        <form onSubmit={handleAddNewAdmin}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              value={adminRole}
              onChange={(e) => setAdminRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="SuperAdmin">SuperAdmin</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">ADD NEW ADMIN</button>
          </div>
        </form>
      </section>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default AddNewAdmin;
