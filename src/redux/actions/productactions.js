import {ActionTypes} from "../constants/action-types";
const {SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, ADD_TO_CART, REMOVE_TO_CART} = ActionTypes

export const setproducts = (products) => {
    return {
        type:SET_PRODUCTS,
        payload: products
    }
}
export const selectedproducts = (product) => {
    return {
        type:SELECTED_PRODUCT,
        payload: product
    }
}
export const removeselectedproducts = (product) => {
    return {
        type:REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}


