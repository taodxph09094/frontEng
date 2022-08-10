import React from "react";
import { Container } from "reactstrap";
import "./about.css";
import { FcCheckmark } from "react-icons/fc";

const RouterStudy = () => {
  return (
    <section>
      <Container>
        <div className="router_heading">
          <h1>LỘ TRÌNH CÁC KHÓA HỌC TIẾNG ANH </h1>
          <h1>TẠI TRUNG TÂM "BEST IELTS"</h1>
          <div className="subHeading">
            <h6>
              Thấu hiểu những khó khăn, "BEST IELTS" xây dựng lộ trình học tiếng
              anh từ mất gốc hiệu quả
            </h6>
            <h6>
              và đặc biệt trong thời gian này có hỗ trợ trả góp học phí 0% lãi
              suất
            </h6>
            <h5>_________</h5>
          </div>
        </div>

        <div className="box1">
          <div className="card1">
            <h5>Tiếng anh dành cho người mất gốc</h5>
            <div className="pra">
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Thời gian:</b> 3 tháng
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" />{" "}
                <b>Điểm khác biệt của khóa học:</b> Khóa học này sẽ giúp học
                viên xây dựng nền tảng vững chắc, mở rộng vốn từ vựng tiếng anh
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Kết thúc khóa học:</b>{" "}
                Xây dựng hệ thống ngữ pháp nền tảng Biết cách hỏi và trả lời
                những câu hỏi đơn giản với những chủ đề gần gũi với thực tế.
                Luyện nghe hiểu các đoạn hội thoại tốc độ vừa phải và đọc hiểu
                đoạn văn ngắn, đơn giản
              </p>
              <p style={{ textAlign: "center" }}>
                <a className="button1" href="#">
                  Nhận tư vấn
                </a>
              </p>
            </div>
          </div>

          <div className="card1">
            <h5>Phát triển toàn diện 4 kỹ năng</h5>
            <div className="pra">
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Thời gian:</b> 3 tháng
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" />{" "}
                <b>Điểm khác biệt của khóa học:</b> Giúp học viên phát triển
                toàn diện 4 kỹ năng ở mức cơ bản để có thể tự tin học tiếng anh
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Kết thúc khóa học:</b>{" "}
                Tự tin tranh luận đưa ra ý kiến các nhân Đọc báo, xem TV, chương
                trình thực tế ở mức cơ bản. Viết những đoạn văn về những chủ đề
                quen thuộc, thông tin cá nhân và CV hay thư mô tả những trải
                nghiệm và cảm xúc cá nhân...
              </p>
              <p style={{ textAlign: "center" }}>
                <a className="button1" href="#">
                  Nhận tư vấn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="box1">
          <div className="card1">
            <h5>TOEIC 650+ Tập trung nâng cao</h5>
            <div className="pra">
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Thời gian:</b> 3 tháng
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" />{" "}
                <b>Điểm khác biệt của khóa học:</b> Khóa học được thiết kế riêng
                cho sinh viên và người đi làm có mong muốn đạt Toeic 650+
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Kết thúc khóa học:</b>{" "}
                Đạt Toeic 650+ Cải thiện từ vựng-ngữ pháp-phát âm IELTS và sự
                linh hoạt khi áp dụng speaking-writing. Nội dung gói gọn đủ 4
                dạng bài Listening và 3 dạng bài Reading. Phân tích và áp dụng
                thành thạo kỹ thuật làm bài reading
              </p>
              <p style={{ textAlign: "center" }}>
                <a className="button1" href="#">
                  Nhận tư vấn
                </a>
              </p>
            </div>
          </div>

          <div className="card1">
            <h5>IELTS INTENSIVE Tập trung chuyên sâu</h5>
            <div className="pra">
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Thời gian:</b> 3 tháng
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" />{" "}
                <b>Điểm khác biệt của khóa học:</b> Giúp học viên nắm vững chiến
                lược và chiến thuật làm các dạng bài trong đề thi IELTS
              </p>
              <p className="pContent">
                <FcCheckmark className="iconCheck" /> <b>Kết thúc khóa học:</b>{" "}
                Đạt IELTS 6.0-6.5+ Tăng tốc cải thiện hệ thống từ vựng, ngữ pháp
                và phát âm để tăng tốc điểm số. Tăng cường cải thiện khả năng
                listening thông qua luyện tập tăng tốc độ nghe và các dạng đề
                Tăng cường khả năng speaking
              </p>
              <p style={{ textAlign: "center" }}>
                <a className="button1" href="#">
                  Nhận tư vấn
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RouterStudy;
