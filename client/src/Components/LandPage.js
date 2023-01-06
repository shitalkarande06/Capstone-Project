import React from "react";
import { Link } from "react-router-dom";

export default function LandPage() {
  return (
    <div className="Land-Page">
      <div className="bg-img">
        <div>
          <p className="headline">
            <b>
              Order Food From Here, <br></br>For Fastest Delivery Ever
            </b>
          </p>
          <div class="auth-link">
            <Link to="/Signup" className="link">
              {" "}
              Admin Registeration
            </Link>
            <br />
            <Link to="/Signup" className="link">
              {" "}
              User Registeration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
