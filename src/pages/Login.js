import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import './Login.css'
// https://mern-clonechatgpt.onrender.com

const Login = () => {
  const navigate = useNavigate();

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //register ctrl

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/auth/login", { email, password });
      // const res =await axios.post("http://192.168.0.120:5000/auth/login", { email, password });
      toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
      // console.log(1234, res.data );
      navigate("/");
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://192.168.0.120:5000/auth/login', { email, password });
  //     const { tokens } = response.data;
  //     // localStorage.setItem('token', accessToken);
  //     // onLogin();
  //     console.log(tokens)
  //   } catch (error) {
  //     console.error('Login error:', error.response.data.message);
  //   }
  // };

  return (
    <div
    className={`signin-container ${error ? 'error' : ''}`}
    style={{
      width:  '30%',
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: '5px',
      boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor:" var(--color-bg-variant)", // Change to your desired background color
    }}
  >
    {error && <div className="error-message">{error}</div>}
    <form onSubmit={handleSubmit}>
    <div  style={{justifyItems:"center",display:"grid",marginBottom:"20px"}}>
    <h3 >Sign In</h3>
    </div>
   
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
      <div className=" mt-5 " style={{justifyItems:"center",display:"grid"}}>
      <button type="submit" className="btnn">Sign In</button>
      </div>
      <p className="mt-3">
        Don't have an account? <a href="/register">Please Register</a>
      </p>
    </form>
  </div>
  );
};

export default Login;
