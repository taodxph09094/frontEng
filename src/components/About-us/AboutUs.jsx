import React, { Fragment } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/k2.jpg";
import CountUp from "react-countup";
import "./about.css";
import Header from "../Header/Header";
import HeroSection from "../Hero-Section/HeroSection";

const AboutUs = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <section>
        <Container>
          <h2>Những khó khăn</h2>
          <h2>Mà bạn phải đối mặt khi học tiếng Anh? </h2>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi cupiditate animi deserunt libero nesciunt corporis
                  explicabo nobis ex quo molestiae!
                </p>

                <div className="about__counter">
                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={25} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Completed Projects</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={12} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Patient Around World</p>
                    </div>
                  </div>

                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={95} duration={2} suffix="M" />
                      </span>

                      <p className="counter__title">Ideas Raised Funds</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={5} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AboutUs;
