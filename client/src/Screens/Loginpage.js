import React from 'react'
import { useState, useEffect } from "react";
import{useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../Actions/UserAction';


export default function Loginpage() {

  // use Hook variables to take input values
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const dispatch = useDispatch()

useEffect(()=>{
  if(localStorage.getItem('currentUser')){
    window.location.href = '/Homepage'
  }
}, [])


// function to handle onClick event
function login(){
  const user = {email, password}
  dispatch(loginUser(user))
}


  return (
    // login form screen
    <div className="row justify-content-center m-5">
      <div className="col-md-5 m-5 text-center shadow p-3 mb-5 bg-white rounded">
      <h2 className="text-center m-3">Login</h2>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
           <input type="text"
           placeholder="password" 
           className="form-control"
           value={password}
           required
           onChange={(e)=>{setpassword(e.target.value)}} />
           <button className="btn btn-primary 
            w-25 "
          onClick={login} >Login</button>
          <br/> <br/>
          <a style ={{color:"black", textDecoration:"none", marginLeft:"15px",}}href="/Signup">Click here to Register</a>
      </div>
      <div className="list-res m-5 ">
            <h1 style={{fontFamily:"cursive", marginBottom:"30px"}}>List of all Restaurants</h1>

      <ul class="list-group  text-center">
  <li class="list-group-item"><a href="https://www.eatfit.in/">EatFit-Order healthy and tasty food</a></li>
  <li class="list-group-item"><a href="https://www.foodchow.com/">FoodChow</a></li>
  <li class="list-group-item"><a href="https://www.gloriafood.com/">GloriaFood</a></li>
  <li class="list-group-item"><a href="https://www.swiggy.com/">Swiggy</a></li>
  <li class="list-group-item"><a href="https://limetray.com/online-food-ordering-system">TIMETRAY</a></li>
</ul>

      </div>

    </div>
  )
}
