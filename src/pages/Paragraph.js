import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { PARAGRAPH } from "./route";

const Paragraph = () => {
  const navigate = useNavigate();

  // states
  const [text, settext] = useState("");
  const [para, setPara] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("paragraph");
      const { data } = await axios.post(PARAGRAPH, { text });
      setPara(data);
    } catch (err) {
      // console.log(error);
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
        className={`summarize-container ${error ? "error" : ""}`}
        style={{
          width: "40%",
          margin: "2rem auto",
          padding: "1rem",
          borderRadius: "5px",
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "var(--color-primary)", // Change to your desired background color
        }}
      >
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <h3>Generate Paragraph</h3>
          <div className="summary_text">
            <textarea
              placeholder="Add your text"
              required
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
          </div>
          <div style={{ display: "grid", justifyItems: "end" }}>
            <button className="btnn mb-3 " type="submit">
              Generate
            </button>
          </div>
          <div>
            <p>
              Not this tool? <a href="/">GO BACK</a>
            </p>
          </div>
        </form>

        <div className={`paragraph-card ${para ? "" : "placeholder"}`}>
          {para ? (
            <p>{para}</p>
          ) : (
            <p className="placeholder-text">Your Paragraph Will Appear Here</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Paragraph;
