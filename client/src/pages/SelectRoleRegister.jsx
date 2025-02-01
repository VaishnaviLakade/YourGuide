import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css"; // Reuse the same styles

const SelectRoleRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-main">
      <h1>Select Role,</h1>
    <p>to Register</p>

      <div className="action-buttons">
        <button className="landing-login-button" onClick={() => navigate("/MentorRegister")} >Mentor</button>
        <button className="landing-login-button" onClick={() => navigate("/MenteeRegister")}>Mentee</button>
        {/* <button className="landing-login-button" onClick={() => navigate("/AdminLogin")}>Admin</button> */}
      </div>
    </div>
  );
};

export default SelectRoleRegister;
