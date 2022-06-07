import { ActionTypes } from "./constants/action-types"
import { combineReducers } from "redux";

const initialState = {
    products:[],
    product:null,
    cart: []
}



const productreducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return {
                ...state,
                products: payload
            }     
        case ActionTypes.SELECTED_PRODUCT :
            return{
                ...state,
                product: payload
            }       
        case ActionTypes.REMOVE_SELECTED_PRODUCT :
            return{
                ...state,
                product: null
            }    
        case ActionTypes.ADD_TO_CART :
            return{
                ...state,
                cart: [...state.cart, payload]
            }   
        case ActionTypes.REMOVE_TO_CART :
            const newarray = state.cart.findIndex(object=>{
               return object.id===payload.id 
            });
            console.log(newarray)
            const newarr = state.cart.filter((_,index)=> index!==newarray)
            console.log(newarr);
            return {
                ...state,
                cart: newarr
            }

        default:
            return state
    }
}


export const rootreducer= combineReducers({
    allProducts: productreducer,
})