import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IMAGE } from "./route";

const ScifiImage = () => {
  const navigate = useNavigate();

  // states
  const [text, settext] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(IMAGE, { text });
      setImage(data);
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
        className={`scifi-image-container ${error ? "error" : ""}`}
        style={{
          width: "40%",
          margin: "2rem auto",
          padding: "2rem",
          borderRadius: "5px",
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "var(--color-primary)", // Change to your desired background color
        }}
      >
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <h3>Scifi Image Generator</h3>
          <div className="image_text">
            <textarea
              placeholder="Type your text to generate an image..."
              required
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
          </div>
          <div style={{ display: "grid", justifyItems: "end" }}>
            <button className="btnn mb-3" type="submit">
              Generate
            </button>
          </div>
          <div>
            <p>
              Not this tool? <a href="/">GO BACK</a>
            </p>
          </div>
        </form>

        <div className={`image-card ${image ? "" : "placeholder"}`}>
          {image ? (
            <div className="image-wrapper">
              <img src={image} alt="Scifi Image" />
            </div>
          ) : (
            <p className="placeholder-text">
              Your Scifi Image Will Appear Here
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ScifiImage;
