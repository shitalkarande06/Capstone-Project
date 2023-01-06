import React from "react";
// import LandPage from "./LandPage";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Actions/UserAction";

export default function NavBar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-sm shadow-sm p-3 bg-body rounded ">
        <div className="container-fluid">
          <a href="/" className="heading">
            <h2>Food Zone</h2>
          </a>
          <ul className="navbar-nav ">
            {currentUser ? (
             <div className="list" >
               <li  className="mt-2" onClick={()=>dispatch(logoutUser())}>Logout</li>
              <a className="m-2 " href="/orders">Orders</a>
             </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
