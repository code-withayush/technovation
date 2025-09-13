import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Our college offers a variety of programs to prepare students...</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Campus Life</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact2">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:rvit@college.edu">rvit@college.edu</a></p>
          <p>Phone: (123) 456-7890</p>
          <br></br>
          <div className="socials">
            <a href="https://www.facebook.com/rvitbijnor/"><i className="fab fa-facebook-f"><FaFacebook></FaFacebook></i></a>
            <a href="https://x.com/rvitbijnor"><i className="fab fa-twitter"><FaTwitter></FaTwitter></i></a>
            <a href="https://www.instagram.com/rvitbijnor/"><i className="fab fa-instagram"><FaInstagram></FaInstagram></i></a>
            <a href="https://www.linkedin.com/in/rvitbijnor"><i className="fab fa-linkedin-in"><FaLinkedin></FaLinkedin></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 College Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
