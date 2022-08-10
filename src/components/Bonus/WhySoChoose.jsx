import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/k2.jpg";
import CountUp from "react-countup";
import { FcCancel } from "react-icons/fc";
import "./about.css";

const WhySoChoose = () => {
  return (
    <section>
      <Container>
        <div className="intro_center">
          <h2>Những khó khăn mà bạn phải đối mặt khi học tiếng Anh? </h2>
        </div>
        <Row>
          <Col lg="6" md="6">
            <div className="choose_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose_img">
              <h5>
                {" "}
                <FcCancel className="iconCancel" />
                Bạn đang trong tình trạng mất gốc, mất căn bản?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn chưa tìm được phương pháp học phù hợp?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn bơi trong vô vàn tài liệu miễn phí ?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn đang trong tình trạng mất gốc, mất căn bản?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn khó khăn trong quá trình học 4 kỹ năng?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn chưa có định hướng TOEIC, IELTS cụ thể?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn không tìm được lộ trình phù hợp cho mình?
              </h5>
              <h5>
                <FcCancel className="iconCancel" />
                Bạn thiếu tự tin với vốn từ vựng ít ỏi?
              </h5>
              <div className="register">
                <a href="#" className="register-Link">
                  Tư vấn giải pháp
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhySoChoose;
