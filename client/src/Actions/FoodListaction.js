import axios from "axios";

//Redux thunk function to perform actions on list of food items
export const getFoodItems = () => async dispatch => {
  
  dispatch({ type: "GET_FOODLIST_REQUEST" }); //sending req to reducers on function call

 // async opertions
 try{
    const response =  await axios.get('/api/foodItems/getFoodItems')
    console.log(response);
    dispatch({ type: "GET_FOODLIST_SUCCESFUL", payload: response.data });

 } catch(error){
    dispatch({ type: "GET_FOODLIST_FAILED", payload: error });

 }

};
