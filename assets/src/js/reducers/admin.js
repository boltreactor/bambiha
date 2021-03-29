import React from 'react';
import {CATEGORIES, PRODUCT, PRODUCTS, DEL_PRODUCT, CATEGORY, ORDERS} from "../actions/types";

export const initialState = {
    user: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
    },
    categories: [],
    category: {},
    products: [],
    product: {},
    orders: [],
    loginStatus: false,
    notification_settings: null,
    msg: null,
    show: false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }

        case CATEGORY: {
            return {
                ...state,
                category: action.category
            }
        }

        case PRODUCT: {
            return {
                ...state,
                product: action.product
            }
        }

        case DEL_PRODUCT: {
            return {
                ...state,
                products: action.products
            }
        }

        case PRODUCTS: {
            return {
                ...state,
                products: action.products
            }
        }
        case ORDERS: {
            return {
                ...state,
                orders: action.orders
            }
        }

        default:
            return state;

    }
}

