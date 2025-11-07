import React, { useEffect, useRef, useState } from "react";
import "../style/Navbar.css";
import logo from "../images/nimlogo.png";
 
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef(null);
 
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
 
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
 
    const spans = hamburgerRef.current?.querySelectorAll("span");
    if (spans && spans.length === 3) {
      if (open) {
        spans[0].style.transform = "rotate(45deg) translateY(8px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
      } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";
      }
    }
  }, [open]);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLinkClick = () => setOpen(false);
 
  return (
    <>
      <nav className="transparent-nav" aria-label="Main navigation">
        <div className="logo">
          <img src={logo} alt="NIM Company Logo" className="logo-img" />
        </div>
 
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/nextgen">NextGen</a>
          <a href="/internship">Internship</a>
          <a href="/contact">Contact Us</a>
          <a href="/apply" className="cta">Apply Now</a>
        </div>
 
        <div
          className="hamburger"
          ref={hamburgerRef}
          role="button"
          tabIndex={0}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={open ? handleClose : handleOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
 
      {/* ✅ Overlay for mobile */}
      <div
        className={`overlay ${open ? "open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={handleClose}
        >
          &times;
        </button>
 
        <div className="overlay-inner" role="menu" aria-label="Main menu">
          <a href="/" role="menuitem" onClick={handleLinkClick}>Home</a>
          <a href="/courses" role="menuitem" onClick={handleLinkClick}>Courses</a>
          <a href="/nextgen" role="menuitem" onClick={handleLinkClick}>NextGen</a>
          <a href="/internship" role="menuitem" onClick={handleLinkClick}>Internship</a>
          <a href="/contact" role="menuitem" onClick={handleLinkClick}>Contact Us</a>
 
          {/* ✅ Added Apply Now Button for mobile view */}
          <a href="/apply" className="cta-btn" role="menuitem" onClick={handleLinkClick}>
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};
 
export default Navbar;