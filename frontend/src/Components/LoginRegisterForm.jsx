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
  const [error, setError] = useState();
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
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
    <div className="grid place-items-center h-screen">
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
          <button type="submit">{name}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
