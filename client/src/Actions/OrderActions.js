import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUREST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post('/api/orders/placeorders', {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS", payload:response.data });
    console.log(response);

  } 
  catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIELD" });
    console.log(error);
  }
};


//Redux thunk function to display orders 
export const getUserOrders = () => async (dispatch, getState)=> {
  
  const currentUser = getState().loginUserReducer.currentUser
  dispatch({ type: "GET_FOODLIST_REQUEST" }); //sending req to reducers on function call

 // async opertions
 try{
    const response =  await axios.post('/api/orders/getuserorders', {userid: currentUser._id})
    console.log(response);
    dispatch({ type: "GET_USER_ORDER_SUCCESFUL", payload: response.data });

 } catch(error){
    dispatch({ type: "GET_USER_ORDER_FAILED", payload: error });

 }

};

