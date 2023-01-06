import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getUserOrders } from "../Actions/OrderActions";

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrderReducer);

  const { orders } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h1 style={{ fontSize: "40px", textAlign: "center", marginTop: "2rem" }}>
        My Orders
      </h1>
      <div className="orders ">
        <div className="col-md-8">
          <div className=" shadow-lg p-3 mb-5 bg-white rounded mt-5 ">
            <div className=" w-100 m-3 ">
              <h3 >Items</h3>
              <p> Shahi Paneer[half] * 1 = 150/-</p>
              <p> Paneer Butter Masala [half] * 2 = 180/-</p>
            </div>
            <div className=" w-100 m-3">
              <h3 >Address</h3>
              <p>City: RCF colony, Alibag</p>
              <p>Country: India</p>
              <p>Pincode: 402201</p>
            </div>
            <div className=" w-100 m-3">
              <h3 >Order Informtion</h3>
              <p>Order Amount: 390/-</p>
              <p>2022-12-29</p>
              <p>Transaction Id : card_1MKEP8SFsE1EXjyK3kocPEfB</p>
              <p>Order Id: 63a97cff3f8000e96a935822</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
