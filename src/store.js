import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import {
  allOrdersSysReducer,
  newOrderSysReducer,
  orderSysDetailsReducer,
  orderSysReducer,
} from "./reducers/orderSysReducer";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  newOrderSystem: newOrderSysReducer,
  orderSystemDetails: orderSysDetailsReducer,
  allOrderSystem: allOrdersSysReducer,
  orderSystem: orderSysReducer,
});

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };

const middleware = [thunk];

const store = createStore(
  reducer,
  //   initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
