import React, { useRef } from "react";
import "../style/ContactFor.css";
import contactImg from "../images/ai.jpg";
import emailjs from "@emailjs/browser";
 
function ContactForm() {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm(
        "service_pr62wu9",     // ✅ Your EmailJS Service ID
        "template_gs1cnzz",    // ✅ Your Template ID
        form.current,          // ✅ The actual form reference
        "R69ZFR-rHZbYbxnGV"    // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
 
  return (
    <div className="contact-container">
      {/* ✉️ Left Section - Form */}
      <div className="contact-form-section">
        <h2>Have Questions? We're Just a Message Away!</h2>
 
        <form ref={form} onSubmit={sendEmail} className="form-fields">
          <div className="row">
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
          </div>
 
          <label>Email</label>
          <input type="email" name="email" required />
 
          <label>Phone Number</label>
          <input type="text" name="phone" required />
 
          <label>Subject</label>
          <input type="text" name="subject" required />
 
          <label>Message</label>
          <textarea name="message" rows="4" required></textarea>
 
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
 
      {/* 📞 Right Section - Info */}
      <div className="contact-info-section">
        <img src={contactImg} alt="Office" className="contact-img" />
 
        <div className="info">
          <div className="info-block">
            <span className="icon mail" />
            <div>
              <div className="info-title">Mail</div>
              <div>contactnimacademy@gmail.com</div>
            </div>
          </div>
 
          <div className="info-block">
            <span className="icon phone" />
            <div>
              <div className="info-title">Phone</div>
              <div>+91-7397224594</div>
            </div>
          </div>
 
          <div className="info-block">
            <span className="icon address" />
            <div>
              <div className="info-title">Address</div>
              <div>
                1st Floor, Opposite to Industry, North Konam, Rajakkamangalam
                Road, PIN: 629004, Tamil Nadu, India
              </div>
            </div>
          </div>
 
          <div className="info-block">
            <span className="icon hours" />
            <div>
              <div className="info-title">Working Hours</div>
              <div>Mon - Sun 10 am - 6:30 pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ContactForm;