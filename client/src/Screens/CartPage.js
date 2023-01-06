import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Actions/CartActions";
import { deleteFromCart } from "../Actions/CartActions";
import Checkout from "../Components/Checkout";

export default function CartPage() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  var subtotal = cartItems.reduce((x, item) => x + item.prices, 0);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className=" cart-items  m-2 ">
        <div className="text-align-center ">
          <h2
            style={{ fontSize: "40px", textAlign: "center", marginTop: "20px" }}
          >
            My Cart
          </h2>
        </div>
        {cartItems.map((item) => {
          return (
            <div
              className=" item-box flex-container  mt-3 shadow p-3 mb-5 bg-white rounded   "  >
              <div className="text m-4 w-100 ">
                <h4>
                  {item.name}[{item.size}]
                </h4>
                <h4>
                  price: {item.quantity} * {item.price[0][item.size]} ={" "}
                  {item.prices}
                </h4>
                <h4 style={{ display: "inline" }}>Quantity :</h4>
                <i
                  className="bi bi-plus m-2"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1, item.size));
                  }}
                ></i>
                <b>{item.quantity}</b>
                <i
                  className="bi bi-dash-lg m-2"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.size));
                  }}
                ></i>
                <hr style={{ border: "none" }} />
              </div>
              <div className="m-1 w-100">
                <img
                  src={item.img}
                  style={{
                    height: "150px",
                    width: "150px",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                />
              </div>
              <div className="m-1 w-100 mt-2">
                <i
                  className="bi bi-trash"
                  aria-hidden="true"
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                ></i>
              </div>
            </div>
          );
        })}

        <div className="m-3">
          <h2 style={{ fontSize: "30px" }}>SubTotal : {subtotal} Rs</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
