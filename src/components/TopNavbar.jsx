import React from "react";

const TopNavbar = ({ increase, decrease }) => {
  return (
    <nav className="navbar">
      <div className="typing-text">
        WELCOME TO OUR BEST ENGINEERING COLLEGE RVIT .....
      </div>
      <div className="typing-text2">
        LEARN THE MANTRA&apos;S TO LIFE SUCCESS .....
      </div>
      <div className="navbar-links">
        <button onClick={increase} className="link">A+</button>
        <button onClick={decrease} className="link">A-</button>
      </div>
    </nav>
  );
};

export default TopNavbar;
