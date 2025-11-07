import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../footer";
// import CustomCursor from "../cursor";
// import ContactForm from "./ContactForm";
// import GetIn from "./GetIn";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact-body">
      <div className="main-wrapperr">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="contact">
          <h1 className="contact-title">
            <span className="contact-highlight">CONTACT</span> US
          </h1>
          <p className="contact-subtitle">GET IN TOUCH FOR DETAILS</p>
        </div>
      </div>

     
    </div>
  );
}

export default Contact;
