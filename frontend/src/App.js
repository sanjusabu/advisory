import React, { useContext, useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import AdminLogin from "./Admin Login";
import { AuthContext } from "./context/auth-context";

function App() {
  const auth = useContext(AuthContext);
  let routes;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setuserId] = useState("");

  const login = useCallback((uid) => {
    localStorage.setItem("user", uid);
    setIsLoggedIn(true);
    setuserId(localStorage.getItem("user"));
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null);
  }, []);

  useEffect(() => {
    if (localStorage.hasOwnProperty("user")) {
      setuserId(localStorage.getItem("user"));
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    );
  }
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
