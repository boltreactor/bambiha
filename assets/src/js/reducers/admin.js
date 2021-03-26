import {
    CATEGORY,
    CATEGORIES, PRODUCT, DEL_PRODUCT,
} from '../actions/types';
import React from 'react';

export const initialState = {
    user: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
    },
    categories: [],
    products: [],
    loginStatus: false,
    notification_settings: null,
    msg: null,
    show: false,
    category:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CATEGORY: {
            return {
                ...state,
                category: action.category,
            }
        }
        case CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }

        case PRODUCT: {
            return {
                ...state,
                products: action.products
            }
        }

        case DEL_PRODUCT: {
            return {
                ...state,
                products: action.products
            }
        }

        default:
            return state;

    }
}
