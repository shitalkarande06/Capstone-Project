import React from "react";
import { useState  } from "react";
import{useDispatch} from 'react-redux';
import { registerUser } from "../Actions/UserAction";

export default function Signuppage() {

  // use Hook variables to take input values
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobileNo, setmobileNO] = useState("");
  const [cpassword, setcpassword] = useState("");

const dispatch = useDispatch()
// function to handle onClick event
     function signUp(){
        if(password!=cpassword){
            alert("passwords not matched")
        }
        else{
            const user = {
                name,
                email,
                password,
                mobileNo
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }


  return (
    <div className="row justify-content-center m-5">

    {/* sign-Up form screen */}

      <div className="col-md-5 m-5 text-center shadow p-3 mb-5 bg-white rounded">
        <div>
          <h2 className="text-center m-3"> Sign Up</h2>
          <input
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
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
           
           <input type="text"
           placeholder="Mobile No." 
           className="form-control"
           value={mobileNo}
           required
           onChange={(e)=>{setmobileNO(e.target.value)}} />


          <input
            type="text"
            placeholder="confirm password"
            className="form-control"
            value={cpassword}
            required
            onChange={(e)=>{setcpassword(e.target.value)}}
            
          />
          <button className="btn btn-primary w-25 "
          onClick={signUp}>Sign Up</button>
          <br/> <br/>
           <a style ={{color:"black", textDecoration:"none", marginLeft:"15px",}}href="/login">Click here to Login</a>
        </div>
      </div>
    </div>
  );
}

