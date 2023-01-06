import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../Actions/OrderActions";
import { useDispatch, useSelector } from "react-redux";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state)=>state.placeOrderUserReducer)
  const dispatch = useDispatch()
  function tokenHander(token) 
  {
    console.log(token);
    dispatch(placeOrder(token, subtotal))
  }

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress 
        token={tokenHander}
        stripeKey="pk_test_51MJUKWSFsE1EXjyKZcJ2LoVwkNUfMhazQJALjRzeYoNZC4h26CvexOZ2o7zVJFYU4S2INEi3OGu9hNkf9LlRiXLs00RjmTFkKK"
        currency="INR"
      >
        <button className="btn bg-primary ">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
