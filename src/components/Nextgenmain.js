import React from "react";
import "../style/Nextgenmain.css";
import Navbar from "./Navbar";

function Nextgenmain() {
  return (
    <div className="next-body">
        
      <div className="main-wrapperr">
        <Navbar/>
        <div className="next">
          <h1 className="next-title">
            <span className="next-highlight">NEXTGEN</span> AI
          </h1>
          <p className="next-subtitle">
            UNLOCKING THE FUTURE,
            <br />
            POWERED BY AI
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nextgenmain;
