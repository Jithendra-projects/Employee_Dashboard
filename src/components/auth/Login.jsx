import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const bgUrl = new URL("../../assets/login-bg.png", import.meta.url).href;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      {/* BACKGROUND IMAGE */}
      <img src={bgUrl} alt="background" className="login-bg" />

      <h1 className="page-title">Employee Dashboard</h1>

      <div className="login-overlay"></div>

      {/* LOGIN CARD */}
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon">✉</span>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon">🔒</span>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register-text">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}
