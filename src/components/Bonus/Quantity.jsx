import React from "react";
import { Container } from "reactstrap";
import "./about.css";
const Quantity = () => {
  return (
    <section>
      <Container>
        <div className="quantityComponents">
          <div className="hero1"></div>
        </div>
        <div className="router_heading">
          <h1 className="noSub">4 LÝ DO TẠI SAO MỌI NGƯỜI ĐỀU THÍCH </h1>
          <h1>CHỌN"BEST IELTS"</h1>
          <div className="subHeading">
            <p className="subText">
              Jaxtina là hệ thống trung tâm tiếng anh uy tín chuyên đào tạo GIỎI
              TOÀN DIỆN 4 kỹ năng Nghe - Nói - Đọc - Viết, IELTS, TOEIC đầu tiên
              tại Việt Nam với quy mô trên toàn quốc. Sở hữu kinh nghiệm trên 8
              năm, Jaxtina xây dựng lộ trình các khoá học trở nên nhanh hơn, dễ
              học hơn và phù hợp hơn với mục tiêu riêng từng người.
            </p>
            <h5>_________</h5>
          </div>
          <div className="hero2"></div>
          <div className="coverButton2">
            <p style={{ textAlign: "center" }}>
              <a className="button2" href="#">
                Nhận tư vấn
              </a>
            </p>
          </div>
          <h1 className="noSub">Mọi trung tâm đều cam kết và </h1>
          <h1>BEST IELTS hoàn toàn khác biệt</h1>
        </div>
      </Container>
    </section>
  );
};

export default Quantity;
