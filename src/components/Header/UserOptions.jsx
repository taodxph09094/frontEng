import React, { Fragment, useState } from "react";
import "./header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
// import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

const UserOptions = ({ user }) => {
  // const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    { icon: <PersonIcon />, name: "Thông tin tài khoản", func: account },
    {
      icon: <ListAltIcon />,
      name: "Lịch sử đơn",
      func: orders,
    },
    { icon: <ExitToAppIcon />, name: "Đăng xuất", func: logoutUser },
  ];

  if (user.role === "teacher") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "student") {
    // options.unshift({
    //   icon: (
    //     <ShoppingCartIcon
    //       style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
    //     />
    //   ),
    //   name: `Giỏ(${cartItems.length})`,
    //   func: cart,
    // });
  }

  function dashboard() {
    history.push("/admin/dashboard");
  }

  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function cart() {
    history.push("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Đăng xuất thành công");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
