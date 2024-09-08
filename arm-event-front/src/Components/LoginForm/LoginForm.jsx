import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaUser, FaLock } from "react-icons/fa";
import { login } from "../../services/authenticationService";
import { loginModel } from "../../models/loginModel"; // Correct import path and casing

const LoginForm = () => {
  const [formData, setFormData] = useState(new loginModel()); // Initialize with LoginModel
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(formData);
      setSuccess("Login Successful");
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err); // Log the error for debugging
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

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
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/some-valid-path">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
