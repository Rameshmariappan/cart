export const cartReducer = (state,action) =>{
    switch(action.type){
        case "ADD_PRODUCTS":
            return {...state,products:action.payload};
        case "ADD_TO_CART":
            return {...state,cart:[{...action.payload},...state.cart]}
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter((item)=>item.id !== action.payload.id)};
        case "CHANGE_QTY":
            return {...state,cart:state.cart.filter((ai)=>ai.id === action.payload.id ? ai.qty = action.payload.qty : ai.qty)}
        default:
            break;
    }
}