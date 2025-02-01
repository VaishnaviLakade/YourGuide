import React from "react";
import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-main">
      <h1>Landing Page</h1>
      <p>Hello and welcome!</p>

      {/* Login and Register Buttons */}
      <div className="action-buttons">
        <button
          onClick={() => navigate("/SelectRole")} // Redirect to role selection page
          className="landing-login-button"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/SelectRole")} // Redirect to registration page
          className="landing-register-button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Landing;
