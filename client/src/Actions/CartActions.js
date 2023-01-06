
export const addToCart=(foodItem, quantity, size)=>(dispatch, getState )=>{

    var cartItem ={
        name: foodItem.name,
        _id : foodItem._id,
        img: foodItem.img,
        size: size,
        quantity: Number(quantity),
        price: foodItem.price,
        prices : foodItem.price[0][size]*quantity
    }
     // limiting adding quantity
    if(cartItem.quantity>10){
        alert('You cannot add more than 10 quantites')
    } else{
        if(cartItem.quantity<0){
            dispatch({type: 'DELETE_FROM-CART', Payload:foodItem})

        }
        else{
            dispatch({type: "ADD_TO_CART", payload: cartItem})
        }
        
    }

   


const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems) )

}

export const deleteFromCart=(foodItem)=>(dispatch, getState)=>{
    dispatch({type: 'DELETE_FROM-CART', Payload:foodItem})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))   
}