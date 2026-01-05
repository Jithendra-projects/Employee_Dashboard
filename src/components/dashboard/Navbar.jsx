import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Employee Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
