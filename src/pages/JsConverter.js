import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const JsConverter = () => {
  const navigate = useNavigate();
  // states
  const [text, settext] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/openai/js-converter", {
        text,
      });
      console.log(data);
      setCode(data);
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
    <>
        <div
      className={`js-converter-container ${error ? 'error' : ''}`}
      style={{
        width:'40%',
        margin: '2rem auto',
        padding: '2rem',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'var(--color-primary)', // Change to your desired background color
      }}
    >
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <h3>JS Converter</h3>
        <div className="summary_text">
        <textarea
          placeholder="Type your text to convert..."
          required
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        </div>
        <div  style={{display:"grid", justifyItems:"end"}}>
        <button className="btnn mb-3" type="submit">Convert</button>
        </div>
        <div>
        <p>
          Not this tool? <a href="/">GO BACK</a>
        </p>
        </div>
      </form>

      <div className={`code-card ${code ? '' : 'placeholder'}`}>
        {code ? (
          <pre>
            <code>{code}</code>
          </pre>
        ) : (
          <p className="placeholder-text">Your Code Will Appear Here</p>
        )}
      </div>
    </div>
    </>
  );
};

export default JsConverter;
