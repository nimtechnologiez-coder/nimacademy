import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../style/ContactForm.css";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_lagtknp", // ✅ Your EmailJS Service ID
        "template_duhup25", // ✅ Your EmailJS Template ID
        form.current,
        "TSRsf-ZxaarV3fTup" // ⚠️ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <div className="contact-form-outer">
      <form ref={form} onSubmit={sendEmail} className="contact-form-inner">
        <h2 className="contact-form-title">Get in Touch</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your E-Mail Address"
          className="contact-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="contact-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
          rows={6}
          required
        ></textarea>

        <button
          className="contact-submit"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit Now"}
        </button>

        {status === "success" && (
          <p className="contact-success">
            ✅ Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="contact-error">
            ❌ Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
