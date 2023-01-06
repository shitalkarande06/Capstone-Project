export const registerUserReducer = (state={}, action)=>{

    switch(action.type)
    {
        case 'USER_RESGISTER_REQUEST' : return{
            loading:true
        }
        case 'USER_RESGIESTER_SUCCESS' : return{
            loading:false,
            success:true,
            
        }
        case 'USER_REGISTER_FALIED' : return{
            loading:false,
            error:action.payload
        }
        default : return state;
    }
    
}


export const loginUserReducer = (state={}, action)=>{

    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST': return{
            loading:true
        }
        case 'user_LOGIN_SUCCESS' : return{
            loading: false,
            success:true,
            currentUser:action.payload
        }
        case 'user_LOGIN_FAILED': return{
            loading:false,
            error:action.payload
        }
        default: return state;
    }


}
