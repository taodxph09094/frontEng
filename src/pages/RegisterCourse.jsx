import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import Quantity from "../components/Bonus/Quantity";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import "../components/Bonus/about.css";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_ERRORS,
  CREATE_ORDER_RESET,
} from "../constants/orderSysConstants";
import { createOrder } from "../actions/orderSysAction";
const RegisterCourse = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, success } = useSelector(
    (state) => state.newOrderSystem
  );

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }

    if (success) {
      alert.success("Đã gửi yêu cầu");
      history.push("/");
      dispatch({ type: CREATE_ORDER_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    myForm.set("fullName", fullName);
    myForm.set("course", course);
    myForm.set("phone", phone);
    myForm.set("address", address);
    myForm.set("note", note);

    dispatch(createOrder(myForm));
  };
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <section>
        <Container>
          <div className="intro_center">
            <h2>
              DUY NHẤT THÁNG 8 <br /> CHƯƠNG TRÌNH ƯU ĐÃI HẤP DẪN{" "}
            </h2>
          </div>
          <Row>
            <Col lg="6" md="6">
              <div className="registerFormCourse">
                <div className="backgroundFormCourse">
                  <Form onSubmit={createOrderSubmitHandler}>
                    <h4>Điền thông tin của bạn vào form phía dưới</h4>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Hãy nhập email của bạn"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFullName">Họ và tên</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nhập họ và tên"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFullName">Khóa học</Label>
                      <Input
                        type="text"
                        name="course"
                        id="course"
                        placeholder="Nhập khóa học muốn đăng ký"
                        onChange={(e) => setCourse(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFullName">Số điện thoại</Label>
                      <Input
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFullName">Địa chỉ</Label>
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Nhập địa chỉ"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </FormGroup>
                    <div className="register2">
                      <Button type="submit" className="register-Link">
                        Đăng ký khóa học
                      </Button>
                    </div>
                  </Form>
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
      {/* <Quantity /> */}
      <Footer />
    </Fragment>
  );
};

export default RegisterCourse;
