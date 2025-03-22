/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import api from "../api.js";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants.js";

const Login = ({ route, method }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password, role });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);

      alert(error);
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          {error && <div className="text-danger">{error}</div>}
          <h1>{name}</h1>
          <div className="input-box">
            <input
              type="text"
              value={username}
              placeholder="نام کاربری"
              autoComplete="off"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="کلمه عبور"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <select
              value={role} // This sets the default value when the component loads
              onChange={(e) => setRole(e.target.value)} // Handles the selection changes
              required
            >
              <option value="Admin">Admin</option>
              <option value="Technician">Technician</option>
              <option value="Operator">Operator</option>
            </select>
          </div>
          <button type="submit">{name}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
