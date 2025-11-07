import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import "../style/Institution.css";

function HowItWorks() {
  return (
    <div className="howitworks-section">
      <h2 className="howitworks-title">
        <span className="hiw-blue">How </span>
        <span className="hiw-green">It Works ?</span>
      </h2>
      <p className="howitworks-desc">
        College collaboration brings immense value by fostering academic growth,
        industry exposure, and innovation. Through strategic partnerships with
        educational institutions and organizations, students gain access to
        advanced learning resources, skill development programs, and real-world
        training opportunities. Collaborative initiatives enhance research,
        enable knowledge sharing, and bridge the gap between academia and
        industry. These collaborations also promote student and faculty exchange,
        joint certifications, and career-oriented workshops that improve
        employability and professional growth. Overall, college collaboration
        creates a dynamic learning environment that drives excellence, innovation,
        and future-ready education.
      </p>
    </div>
  );
}

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_lagtknp", // ✅ Your EmailJS service ID
        "template_duhup25", // ✅ Your EmailJS template ID
        form.current,
        "TSRsf-ZxaarV3fTup" // ⚠️ Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <div className="cf-container">
      <form ref={form} onSubmit={sendEmail} className="cf-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="cf-input"
          required
        />
        <input
          type="text"
          name="institute"
          placeholder="Institute Name"
          className="cf-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail Address"
          className="cf-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="cf-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="cf-textarea"
          rows={6}
          required
        ></textarea>

        <div className="cf-submit-wrap">
          <button
            type="submit"
            className="cf-submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit Now"}
          </button>
          <button type="button" className="cf-submit-btn"> Attach File </button>
        </div>

        {status === "success" && (
          <p className="cf-success">✅ Your message has been sent successfully!</p>
        )}
        {status === "error" && (
          <p className="cf-error">❌ Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}

function Colleges() {
  return (
    <div className="workwithcolleges-section">
      <h2 className="wwc-heading">
        <span className="wwc-blue">How we </span>
        <span className="wwc-green">Work with Colleges ?</span>
      </h2>
      <ol className="wwc-list">
        <li>Identify student interest areas and skill requirements.</li>
        <li>Customize internship programs to align with academic schedules.</li>
        <li>Deliver high-quality training via industry professionals.</li>
        <li>Provide certifications and performance reports for each student.</li>
      </ol>
    </div>
  );
}

function Institution() {
  return (
    <div className="apply-body">
      <div className="main-wrapperr">
        <Navbar />
        <div className="hero">
          <h1 className="ins-title">
            INSTITUTIONAL <span className="ins-highlight">COLLABORATION</span>
          </h1>
        </div>
      </div>

      <Colleges />
      <ContactForm />
      <HowItWorks />
    </div>
  );
}

export default Institution;
