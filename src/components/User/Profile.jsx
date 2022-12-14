import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import HeroSection from "../Hero-Section/HeroSection";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {/* <Header />
      <HeroSection /> */}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {/* <Header /> */}
          <div className="profileContainer">
            <div>
              <h1>Thông tin cá nhân</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Sửa thông tin</Link>
            </div>
            <div>
              <div>
                <h4>Họ tên</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Đăng ký ngày</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">Lịch sử thuê sách</Link>
                <Link to="/password/update">Thay đổi mật khẩu</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
