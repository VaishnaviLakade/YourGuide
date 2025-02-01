import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css"; // Reuse the same styles

const SelectRole = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-main">
      <h1>Select Role,</h1>
      <p>to Login</p>

      <div className="action-buttons">
        <button className="landing-login-button" onClick={() => navigate("/MentorLogin")} >Mentor</button>
        <button className="landing-login-button" onClick={() => navigate("/MenteeLogin")}>Mentee</button>
        <button className="landing-login-button" onClick={() => navigate("/AdminLogin")}>Admin</button>
      </div>
    </div>
  );
};

export default SelectRole;
