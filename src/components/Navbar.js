import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Navbar.css";
import { LOGOUT } from "../pages/route";
const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(LOGOUT);
      if (response) {
        localStorage.removeItem("authToken");
        toast.success("logout successfully ");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("logout failed");
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        {/* <li><a href="/about">About</a></li> */}
        {loggedIn ? (
          <>
            <li>
              {" "}
              <NavLink to="/login" onClick={handleLogout}>
                {" "}
                Logout{" "}
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/register">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login"> Sign In</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
