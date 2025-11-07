import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Applynowthree.css";
 
function EnrollmentForm() {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm(
        "service_sc6x3ip",      // ✅ Your EmailJS Service ID
        "template_zyy38x1",  // ✅ Your Template ID
        form.current,           // ✅ The form reference
        "R69ZFR-rHZbYbxnGV"     // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Enrollment submitted successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ EmailJS error:", error);
          alert("Failed to submit enrollment. Please try again.");
        }
      );
  };
 
  return (
    <form ref={form} onSubmit={sendEmail} className="enroll-form-card">
      <input
        className="enroll-input"
        type="text"
        name="firstName"
        placeholder="First Name"
        required
      />
      <input
        className="enroll-input"
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
      />
      <input
        className="enroll-input"
        type="email"
        name="email"
        placeholder="E-Mail Address"
        required
      />
      <input
        className="enroll-input"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
      />
      <select className="enroll-input" name="course" required>
        <option value="">Select Course</option>
        <option value="Full Stack">Full Stack</option>
        <option value="AI Program">AI Program</option>
        <option value="Data Science">Data Science</option>
      </select>
      <button className="enroll-submit-btn" type="submit">
        Submit Now
      </button>
    </form>
  );
}
 
export default EnrollmentForm;