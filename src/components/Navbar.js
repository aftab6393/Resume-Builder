import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import logo from "../assets/logo.png"; 
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; // ✅ Import Icons
import "../App.css";  

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Navbar Menu (For Mobile View)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links Section */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {!user ? (
            <>
              <Link to="/signup" className={location.pathname === "/signup" ? "active-link" : ""}>Sign Up</Link>
              <Link to="/signin" className={location.pathname === "/signin" ? "active-link" : ""}>Sign In</Link>
            </>
          ) : (
            <>
              <Link to="/resume" className={location.pathname === "/resume" ? "active-link" : ""}>Resume</Link>
              <Link to="/details" className={location.pathname === "/details" ? "active-link" : ""}>Details</Link>
              <button className="logout-btn" onClick={() => dispatch(logout())}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
