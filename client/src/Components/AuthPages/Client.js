import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";

// import foodItems from "../../Db/FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Actions/CartActions";

export default function Client({ foodItem }) {
  const [size, setsize] = useState("half");
  const [quantity, setquantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(foodItem, quantity, size));
  }

  return (
    <div className="food-menu shadow-lg p-3 bg-white rounded   ">
      <div onClick={handleShow}>
        <h5 className="item-name mt-5">{foodItem.name}</h5>
        <img
          src={foodItem.img}
          alt="footItem-img"
          className="img-fluid"
          style={{ height: "150px", width: "150px" }}
        />
      </div>

      <div className="item-card">
        <div className="w-100 m-1">
          <p className = "p">Size</p>
          <select
            value={size}
            onChange={(e) => {
              setsize(e.target.value);
            }}
          >
            {foodItem.size.map((size) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p className="P-1">Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="item-card">
        <div className=" w-100">
          <h6 className="m">
            Price: {foodItem.price[0][size] * quantity} Rs/-
          </h6>
        </div>
        <div className="mb-5 w-100">
          <button className="btn btn-primary btn-sm" onClick={addtocart}>
            Add to cart
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{foodItem.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={foodItem.img}
            style={{ height: "300px", width: "300px", padding: "20px" }}
          />
          <p className="p-1">{foodItem.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
