import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/banner.jpg";
import heroIm1g from "../../assests/images/k1.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero"></div>
      {/* <section className="about">
        <div className="main">
          <img src={heroIm1g} />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>
              {" "}
              <span> Developer</span>
            </h5>
            <p>
              I am a front-end web developer. I make the website more &amp; more
              interactive with web animations. A responsive design makes your
              website accessible to all users, regardless of their device.
              Besides, I can also process data on the web and can create
              applications.
            </p>
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HeroSection;
