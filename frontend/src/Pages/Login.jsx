 
import React from "react";
import LoginRegisterForm from "../Components/LoginRegisterForm";

const Login = () => {
  return <LoginRegisterForm route={"/api/token/"} method="login" />;
};

export default Login;
