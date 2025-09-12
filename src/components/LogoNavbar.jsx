import React from "react";

const LogoNavbar = () => {
  return (
    <nav className="navbar1">
      <div id="big1-s">
        <div className="child-big-s">
          <img src="/images/rvit-logo.png" alt="Rvit logo" className="img-s" />
          <img src="/images/g20-logo.png" alt="g20 logo" className="img-s" />
        </div>
        <div className="child-big-s">
          <h1 id="search">
            <a href="#"><i className="fa-brands fa-searchengin"></i></a>
          </h1>
          <input type="search" placeholder="   Search..." />
        </div>
        <div className="child-big-s">
          <h1 id="icon-s">
            <a href="https://www.instagram.com/rvitbijnor/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/rvitbijnor/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/rvitbijnor" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:admissions@rvit.ac.in"><i className="fa-solid fa-envelope"></i></a>
          </h1>
          <h1 id="icon1-s">
            <a href="https://www.rvit.ac.in/apply-best-engineering-pharmacy-college-bijnor.html" target="_blank">
              <i className="fa-solid fa-list"></i>
            </a>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default LogoNavbar;
