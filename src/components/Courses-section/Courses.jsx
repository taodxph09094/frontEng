import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";
import WhySoChoose from "../Bonus/WhySoChoose";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <Fragment>
      <Header />
      <WhySoChoose />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left w-50">
                  <h2>Các khóa học online chúng tôi đang có</h2>
                  <p>
                    Mọi bài giảng đều có link tải tài liệu bài tập giúp các bạn
                    thuận tiện hơn trong việc học
                  </p>
                </div>

                <div className="w-50 text-end">
                  <button className="btn">Xem tất cả</button>
                </div>
              </div>
            </Col>
            {coursesData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CourseCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Courses;
