import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_RESGISTER_REQUEST" });
  try {
    const response = await axios.post("/api/users/register",  {user} );
    console.log(response);
    dispatch({ type: "USER_RESGIESTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FALIED" });
  }
};

export const loginUser = (user) => async dispatch => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post("/api/users/login", {user});
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem('currentUser', JSON.stringify(response.data))
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser=()=>dispatch=>{
  localStorage.removeItem('currentUser')
  window.location.href="/login"
}
