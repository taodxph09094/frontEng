import { FormControl } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { clearErrors, loadUser, updateProfile } from "../actions/userAction";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import Loader from "../components/layout/Loader/Loader";
import { UPDATE_PROFILE_RESET } from "../constants/userConstants";
// import "../components/User/Profile.css";
const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Chỉnh sửa thành công");
      dispatch(loadUser());

      history.push("/account");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, history, user, isUpdated]);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      <Header />
      <HeroSection />
      {loading ? (
        <Loader />
      ) : (
        <section>
          <Container>
            <Row>
              <Col md="8">
                <div className="intro_center">
                  <h5>Chỉnh sửa thông tin</h5>
                </div>
                <Card>
                  <CardBody>
                    <Form onSubmit={updateProfileSubmit}>
                      <Row>
                        <Col className="px-1" md="3">
                          <FormGroup>
                            <label>Họ tên</label>

                            <Input
                              defaultValue={name}
                              placeholder={name}
                              type="text"
                              required
                              onChange={(e) => setName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="4">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <Input
                              defaultValue={email}
                              placeholder={email}
                              type="text"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                      >
                        Chỉnh sửa
                      </Button>
                      <div className="clearfix"></div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="pl-1" md="4">
                <Card className="card-user">
                  <div id="updateProfileImage">
                    <img src={avatarPreview} alt="Avatar Preview" />
                  </div>
                  <Input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </Card>
              </Col>
            </Row>
            <Footer />
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Profile;
