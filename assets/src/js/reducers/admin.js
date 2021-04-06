import React from 'react';
import {
    CATEGORIES,
    ADMIN_PRODUCT,
    ADMIN_PRODUCTS,
    DEL_PRODUCT,
    CATEGORY,
    ADMIN_ORDERS,
    USERS,
    HEADER_CATEGORIES,
    EDIT_CATEGORY, USER_STATUS
} from "../actions/types";

export const initialState = {
    user: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
    },
    user_status: {},
    categories: [],
    category: {},
    products: [],
    product: {},
    orders: [],
    loginStatus: false,
    notification_settings: null,
    msg: null,
    show: false,
    users: {}

};

export default function (state = initialState, action) {
    switch (action.type) {
        case CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case EDIT_CATEGORY: {
            return {
                ...state,
                categories: state.categories.map(category => category.id === action.category.id ? action.category : category)
            }
        }
        case CATEGORY: {
            return {
                ...state,
                category: action.category
            }
        }

        case ADMIN_PRODUCT: {
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

        case ADMIN_PRODUCTS: {
            return {
                ...state,
                products: action.products
            }
        }
        case ADMIN_ORDERS: {
            return {
                ...state,
                orders: action.orders
            }
        }
        case USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case USER_STATUS: {
            return {
                ...state,
                user_status: action.user
            }
        }

        default:
            return state;

    }
}

