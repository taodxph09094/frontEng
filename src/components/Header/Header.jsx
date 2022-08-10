import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import { loadUser } from "../../actions/userAction";
import store from "../../store";
import "./header.css";
import UserOptions from "./UserOptions";

const navLinks = [
  {
    display: "ĐĂNG KÝ HỌC",
    url: "/registerCourse",
  },
  {
    display: "CÁC KHÓA HỌC",
    url: "/courses",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <a style={{ textDecoration: "none", color: "black" }} href="/">
                <i className="ri-pantone-line"></i> BEST IELTS.
              </a>
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
