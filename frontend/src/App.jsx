import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

import {
  Dashboard,
  SubmitForm,
  Aghlam,
  Forms,
  OperatorDashboard,
  OperatorLogin,
  OperatorSubmit,
  PmForms,
  PmSubmit,
  Technician,
  TechnicianDashboard,
  TechnicianLogin,
  TechnicianSubmit,
  NotFound,
  Start,
} from "./Pages";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to={"/login"} />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}
function App() {
  const location = useLocation();
  const showSidebar = !["/login", "/registeruser", "/"].includes(
    location.pathname
  );

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BackGround */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Conditionally render Sidebar */}
      {showSidebar && <Sidebar />}

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/submitform" element={<SubmitForm />} />
        <Route path="/aghlam" element={<Aghlam />} />
        <Route path="/operatordashboard" element={<OperatorDashboard />} />
        <Route path="/operatorlogin" element={<OperatorLogin />} />
        <Route path="/operatorsubmit" element={<OperatorSubmit />} />
        <Route path="/pmforms" element={<PmForms />} />
        <Route path="/pmsubmit" element={<PmSubmit />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/techniciandashboard" element={<TechnicianDashboard />} />
        <Route path="/technicianlogin" element={<TechnicianLogin />} />
        <Route path="/techniciansubmit" element={<TechnicianSubmit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
