import {PRODUCTS} from "../actions/types";

export const initialState = {
    products:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS: {
            return {
                ...state,
                products: action.products
            }
        }
        default:
            return state;
    }
}
