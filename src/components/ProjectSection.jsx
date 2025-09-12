import React from "react";

const ProjectSection = () => {
  return (
    <section className="project-a">
      <section className="home">
        <div className="home-content">
          <h1>
            About<span> Mind Innovation<br /></span>a passionate frontend developer
          </h1>
          <p>
            "You can&apos;t look at the competition and say you are going to do it better."  
            <br /> In this event more and more groups can participate...
          </p>
          <div className="btn-box">
            <button className="btn1">Join us</button>
            <button className="btn2">About</button>
          </div>
        </div>
        <div className="img-box">
          <img src="/images/about-a.jpg" alt="About" />
        </div>
      </section>
    </section>
  );
};

export default ProjectSection;
