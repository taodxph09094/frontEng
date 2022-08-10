import { Profiler, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/userAction";
import Courses from "./components/Courses-section/Courses";
import Home from "./pages/Home";
import RegisterCourse from "./pages/RegisterCourse";
import store from "./store";
import UserOptions from "./components/Header/UserOptions";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import LoginSignUp from "./components/User/LoginSignUp";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Profile from "./pages/Profile";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      {isAuthenticated && <UserOptions user={user} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/registerCourse" component={RegisterCourse} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/login" component={LoginSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
