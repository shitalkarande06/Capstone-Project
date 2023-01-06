import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { getAllFoodListReducer } from "./Reducers/FoodlistReducer";
import { cartReducer } from "./Reducers/CartReducer";
import { loginUserReducer, registerUserReducer } from "./Reducers/UserReducer";
import { placeOrderUserReducer, getUserOrderReducer } from "./Reducers/OrderReducer";




// parent reducer function for all child reducer function

const finalReducer = combineReducers({
  getAllFoodListReducer: getAllFoodListReducer,
  cartReducer: cartReducer,
  registerUserReducer : registerUserReducer,
  loginUserReducer: loginUserReducer,
 placeOrderUserReducer:placeOrderUserReducer,
 getUserOrderReducer: getUserOrderReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null;

const intialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer:{
    currentUser:currentUser
  }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  intialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
