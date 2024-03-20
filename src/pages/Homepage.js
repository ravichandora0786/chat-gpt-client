import React from "react";
import './Home_card.css'
import { useNavigate } from "react-router-dom";
import { AiOutlineFileText } from "@react-icons/all-files/ai/AiOutlineFileText";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { ImParagraphLeft } from "@react-icons/all-files/im/ImParagraphLeft";
import { SiConvertio } from "@react-icons/all-files/si/SiConvertio";
import { BsImageAlt } from "@react-icons/all-files/bs/BsImageAlt";
const Homepage = () => {
  const navigate = useNavigate();
  const loggedIns = JSON.parse(localStorage.getItem("authToken"));
  return (
    <>
      {loggedIns ? (
        <>
          <div style={{display:"flex",gap:"50px",justifyContent:"center",margin:"20px auto"}}>
            <div>
              
              <div className="card-wrap">
                <div className="card-header one">
                  <i className="card_icon"><AiOutlineFileText /></i>
                </div>
                <div className="card-content">
                  <h1 className="card-title">TEXT SUMAMRY</h1>
                  <p className="card-text"> Summarize long text into short sentences</p>
                  <button type="button" className="btnn"  onClick={() => navigate("/summary")}>Go</button>
                </div>
              </div>
            </div>

            <div>
              
              <div className="card-wrap">
                <div className="card-header one">
                  <i className="card_icon"><ImParagraphLeft /></i>
                </div>
                <div className="card-content">
                  <h1 className="card-title">Parapgraph</h1>
                  <p className="card-text">  Generate Paragraph with words</p>
                  <button type="button" className="btnn"  onClick={() => navigate("/paragraph")}>Go</button>
                </div>
              </div>
            </div>

            <div>
              
              <div className="card-wrap">
                <div className="card-header one">
                  <i className="card_icon"><BsChatDots /></i>
                </div>
                <div className="card-content">
                  <h1 className="card-title">Chatbot</h1>
                  <p className="card-text"> Chat With AI Chatbot</p>
                  <button type="button" className="btnn"  onClick={() => navigate("/chatbot")}>Go</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{display:"flex",gap:"50px",justifyContent:"center",margin:"20px auto"}}>
          
            <div>
              
              <div className="card-wrap">
                <div className="card-header one">
                  <i className="card_icon"><SiConvertio /></i>
                </div>
                <div className="card-content">
                  <h1 className="card-title">JS CONVERTER</h1>
                  <p className="card-text"> Trasnlate english to javascript code</p>
                  <button type="button" className="btnn"  onClick={() => navigate("/js-converter")}>Go</button>
                </div>
              </div>
            </div>

            <div>
              
              <div className="card-wrap">
                <div className="card-header one">
                  <i className="card_icon"><BsImageAlt /></i>
                </div>
                <div className="card-content">
                  <h1 className="card-title">Scifi Image</h1>
                  <p className="card-text"> Generate Scifi images</p>
                  <button type="button" className="btnn"  onClick={() => navigate("/scifi-image")}>Go</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div 
         style={{width:"100%",
         height:"500px",
         alignItems:"center",
         justifyItems:"center",
         display:"grid",
         color:"white"}}> 
        <h1>Welcome</h1>
        </div>
      )
      }
    </>
  );
};

export default Homepage;
