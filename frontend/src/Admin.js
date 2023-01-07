import React, { useEffect, useState, useContext } from "react";
// import { GlobalContext } from "./GlobalState";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRequest } from "../src/hooks/request-hook";
import { AuthContext } from "./context/auth-context";
const UserList = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const navigateHome = () => {
    auth.logout();
    localStorage.removeItem("user");
    navigate("/");
  };
  const [user, setusers] = useState([]);
  const [chg, setchg] = useState(false);

  const { sendRequest } = useRequest();

  useEffect(() => {
    setchg(true);
    const Details = async () => {
      const resp = await sendRequest(
        "https://advisorywebsite.onrender.com/users/getusers",
        "POST",
        JSON.stringify({ u: "jrkljg" }),
        { "Content-Type": "application/json" }
      );
      setusers(resp);
    };
    Details();
  }, [chg]);
  console.log(user);

  const deleteHandler = async (e) => {
    e.preventDefault();
    setchg(false);
    console.log(e.target.value);
    const res = await sendRequest(
      "https://advisorywebsite.onrender.com/users/deleteusers",
      "POST",
      JSON.stringify({
        email: e.target.value,
      }),
      { "Content-Type": "application/json" }
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <h1 className="text-white">Admin</h1>
        <button variant="primary" className="ms-auto" onClick={navigateHome}>
          <span style={{ color: "black" }}>Logout</span>
        </button>
      </nav>
      <ul className="mt-4">
        {user.length > 0 ? (
          <>
            <nav className="navbar navbar-expand-md navbar-light bg-primary">
              <a className="navbar-brand ms-3" href="/">
                Users
              </a>
            </nav>
            {user.map((data) => (
              <>
                <li className="d-flex m-3" key={data.id}>
                  <ul>
                    <strong>{data.name}</strong>
                  </ul>
                  <ul>
                    <strong>{data.email}</strong>
                  </ul>
                  <ul>
                    <strong>{data.mobile}</strong>
                  </ul>
                  <ul>
                    <strong>{data.subject}</strong>
                  </ul>
                  <ul>
                    <strong>{data.message}</strong>
                  </ul>
                  <button
                    className="ms-auto"
                    value={data.email}
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                </li>
                <hr />
              </>
            ))}
            <h5>No of Users: {user.length}</h5>
          </>
        ) : (
          <h4 className="text-center">No Users</h4>
        )}
      </ul>
    </>
  );
};

export default UserList;
