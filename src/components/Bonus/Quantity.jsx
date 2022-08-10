import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
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
              <Link to={`/registerCourse`} className="button2">
                Nhận tư vấn
              </Link>
            </p>
          </div>
          <h1 className="noSub">Mọi trung tâm đều cam kết và </h1>
          <h1>BEST IELTS HOÀN TOÀN KHÁC BIỆT !</h1>
          <div className="">
            <p className="confirmSubText">
              <FcCheckmark className="iconCheck1" /> BEST IELTS cam kết với học
              viên bằng hợp đồng đào tạo
            </p>
            <p className="confirmSubText">
              <FcCheckmark className="iconCheck1" /> Học viên học lại hoàn toàn
              miễn phí
            </p>
            <p className="confirmSubText">
              <FcCheckmark className="iconCheck1" /> <b>ĐẶC BIỆT </b> BEST IELTS
              tặng khoá luyện phát âm với giáo viên bản ngữ và{" "}
              <b> hỗ trợ học kèm 1:1 </b>nếu học viên nào cần bổ trợ
            </p>
          </div>
          <div className="importNotification">
            <div className="text__importNotification">
              <h1>Tìm hiểu thêm học phí và lịch học cho lộ</h1>
              <h1> trình từ mất gốc tới thành thạo tiếng anh</h1>
              <div className="p__importNotification">
                <p style={{ textAlign: "center" }}>
                  BEST IELTS tin rằng, việc cung cấp 1 khóa học phải xuất phát
                  từ nhu cầu thực tế của học viên. Vì thế bạn cần
                  <br />
                  được biết chính xác kiến thức sẽ nhận được cũng như học phí
                  phải chi trả khi lựa chọn BEST IELTS
                </p>
              </div>
              <div className="button__importNotification">
                <p style={{ textAlign: "center" }}>
                  <Link to={`/registerCourse`} className="button3">
                    NHẬN BÁO PHÍ VÀ LỊCH HỌC
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="subHeading1">
            <h1>PHƯƠNG PHÁP GIẢNG DẠY HIỆN ĐẠI </h1>
            <p style={{ textAlign: "center" }}>
              BEST IELTS áp dụng 2 phương pháp học tân tiến là "FLIPPED
              LEARNING" được các trường Đại <br /> học hàng đầu nước Mỹ sử dụng
              và độc quyền phương pháp học " 3C" có tính ứng dụng cao.
            </p>
          </div>
          <div className="image__PP"></div>
          <div className="subHeading1">
            <h1>
              CON SỐ THÌ KHÔNG BIẾT NÓI DỐI, ĐÂY CHÍNH <br />{" "}
              <span style={{ color: "#B60934" }}>
                LÀ CAM KẾT CHẤT LƯỢNG CỦA BEST IELTS
              </span>
            </h1>
          </div>
          <div className="image__PP2"></div>
          {/* <h1>BEST IELTS HOÀN TOÀN KHÁC BIỆT !</h1> */}
        </div>
      </Container>
    </section>
  );
};

export default Quantity;
