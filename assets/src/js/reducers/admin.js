import {PRODUCTS} from "../actions/types";

export const initialState = {}

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
