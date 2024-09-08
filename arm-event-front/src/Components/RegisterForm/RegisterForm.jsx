import React, { useState } from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { register } from "../../services/authenticationService";
import { registerModel } from "../../models/registerModel"; // Correct import path and casing

const RegisterForm = () => {
  const [formData, setFormData] = useState(new registerModel());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data Submitted: ", formData);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      debugger; // Add this line to pause execution here
      await register(formData);
      setSuccess("Registration Successful");
      // Optionally redirect to login page or clear the form
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.log("Registration failed:", err);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <div className="input-box">
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <FaPhone className="icon" />
        </div>
        <div className="input-box">
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Register</button>

        <div className="login-link">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
