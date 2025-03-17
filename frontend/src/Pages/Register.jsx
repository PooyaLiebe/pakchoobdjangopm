import React from "react";
import LoginRegisterForm from "../Components/LoginRegisterForm";

function Register() {
  return <LoginRegisterForm route="/api/user/register/" method="register" />;
}
export default Register;
