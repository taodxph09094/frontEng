import React from "react";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./about.css";
const Endow = () => {
  return (
    <section>
      <Container>
        <div className="intro_center">
          <h2>
            DUY NHẤT THÁNG 8 <br /> CHƯƠNG TRÌNH ƯU ĐÃI HẤP DẪN{" "}
          </h2>
        </div>
        <Row>
          <Col lg="6" md="6">
            <div className="choose_img">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/292707371_389521579994546_3143904737745902932_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Uzl9aee_wwEAX9zfFAL&_nc_ht=scontent.fhan14-1.fna&oh=03_AVLzoC6F_dQXOmg6UE_d71q1MdJPUKLN04TBsZsksbuS8w&oe=631AAF6A"
                alt=""
                className="w-100"
              />
              <div className="register1">
                <Link to={`/registerCourse`} className="register-Link">
                  Tư vấn giải pháp
                </Link>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose_img1">
              <img
                src="https://anhngubis.com/wp-content/uploads/2022/03/uu-dai-hoc-phi-hoc-kem-tieng-anh-anh-ngu-bis-quang-ngai-1024x1024.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Endow;
