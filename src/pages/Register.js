import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/auth/register", { username, email, password });
      toast.success("User Register Successfully");
      navigate("/login");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (

    <div
    className={`signup-container ${error ? 'error' : ''}`}
    style={{
      width:'30%' ,
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: '5px',
      boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'var(--color-bg-variant)', // Change to your desired background color
    }}
  >
    {error && <div className="error-message">{error}</div>}
    <form onSubmit={handleSubmit}>
      <div style={{justifyItems:"center",display:"grid",marginBottom:"20px"}}><h3>Sign Up</h3></div>
      <input
        type="text"
        placeholder="Username"
        required
        className="form-control "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-5 " style={{justifyItems:"center",display:"grid"}}>
      <button type="submit" className="btnn">Sign up</button>
      </div>
      <p className="mt-3">
        Already have an account? <a href="/login">Please Login</a>
      </p>
    </form>
  </div>

  );
};

export default Register;
