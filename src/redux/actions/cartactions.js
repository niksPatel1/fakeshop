import { ActionTypes } from "../constants/action-types";

const {ADD_TO_CART, REMOVE_TO_CART} = ActionTypes;

export const addtocart = (product) => {
    return {
        type:ADD_TO_CART,
        payload: product
    }
}
export const removetocart = (product) => {
    return {
        type:REMOVE_TO_CART,
        payload: product
    }
}