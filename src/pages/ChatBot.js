import React, { useState } from "react";
import axios from "axios";
import { CHATBOT } from "./route";

const ChatBot = () => {
  // states
  const [text, settext] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(CHATBOT, { text });
      console.log(data);
      setResponse(data);
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
        className={`chatbot-container ${error ? "error" : ""}`}
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
          <h3>Ask with Chatbot</h3>
          <div className="summary_text">
            <textarea
              placeholder="Type your message..."
              required
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
          </div>
          <div style={{}}>
            <button className="btnn mb-3 " type="submit">
              Chat
            </button>
          </div>
          <div>
            <p>
              Not this tool? <a href="/">GO BACK</a>
            </p>
          </div>
        </form>

        <div className={`response-card ${response ? "" : "placeholder"}`}>
          {response ? (
            <p>{response}</p>
          ) : (
            <p className="placeholder-text">Bot Response</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
