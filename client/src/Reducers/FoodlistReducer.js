// Reducer function for getting all foodItems list.
export const getAllFoodListReducer=(state ={foodItems : []}, action)=>{

    switch(action.type)
    {
        case "GET_FOODLIST_REQUEST": return{
            loading : true,
            ...state

        }
        case "GET_FOODLIST_SUCCESFUL": return{
            loading: false,
            foodItems : action.payload
        }
        case "GET_FOODLIST_FAILED": return{
           loading: false,
            error : action.payload
        }
        default: return state
    }
}








