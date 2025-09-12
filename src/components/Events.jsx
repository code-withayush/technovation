import React from "react";

const Events = () => {
  return (
    <section className="khushi">
      <section id="details-k">
        <div className="slideshow-k">
          <div className="slide-k" style={{ backgroundImage: "url('/images/bg1.jpeg')" }}></div>
          <div className="slide-k" style={{ backgroundImage: "url('/images/bg2.jpg')" }}></div>
          <div className="slide-k" style={{ backgroundImage: "url('/images/bg3.jpg')" }}></div>
          <div className="slide-k" style={{ backgroundImage: "url('/images/bg4.jpg')" }}></div>
          <div className="slide-k" style={{ backgroundImage: "url('/images/bg5.jpg')" }}></div>
        </div>

        {/* Event Details */}
        <div id="bg-blur-k"></div>
        <div className="box-about-k">
          <div className="image-k"><img src="/images/tech2.jpg" alt="About Us" /></div>
          <div className="info-k">
            <h2>9 SEPTEMBER - 26 SEPTEMBER</h2>
            <p className="p-k">Student/ Students will select one problem...</p>
          </div>
        </div>

        <div className="box-about-k">
          <div className="info-k">
            <h2>14 OCTOBER - 24 OCTOBER</h2>
            <p className="p-k">Student/students will present their roadmap...</p>
          </div>
          <div className="image-k"><img src="/images/tech1.jpg" alt="Mission" /></div>
        </div>

        <div className="box-about-k">
          <div className="image-k"><img src="/images/tech3.jpg" alt="Values" /></div>
          <div className="info-k">
            <h2>25 NOVEMBER - 29 NOVEMBER</h2>
            <p className="p-k">This evaluation process is conducted before...</p>
          </div>
        </div>

        <div className="box-about-k">
          <div className="info-k">
            <h2>WILL BE UPDATED SOON</h2>
            <p className="p-k">In this phase student/students will present...</p>
          </div>
          <div className="image-k"><img src="/images/tech4.jpg" alt="Final" /></div>
        </div>
      </section>
    </section>
  );
};

export default Events;
