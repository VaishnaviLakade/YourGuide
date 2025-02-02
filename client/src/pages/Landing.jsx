import React from "react";
import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";
import Image from "../assets/bg2.jpg"

const Landing = () => {
  const navigate = useNavigate();

  return (
   
    <div
    className="register-main"
    style={{
      backgroundImage: `url(${Image})`, // Set the background image using the imported image
      backgroundSize: "cover", // Ensure it covers the entire container
      backgroundPosition: "center", // Center the image
      height: "100vh", // Make sure it covers the full screen height
      width: "100%", // Make sure it covers the full screen width
      
    }}
  >

    <div className="landing-main">     
      <h2>Get started with</h2>
      <h1>INTERVIEW BUDDY!</h1>
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
          onClick={() => navigate("/SelectRoleRegister")} // Redirect to registration page
          className="landing-register-button"
        >
          Register
        </button>
      </div>
    </div>
     </div>
  );
};

export default Landing;
