import React from 'react';
import {ALL_CATEGORIES, GET_PRODUCT, DEL_PRODUCT, GET_CATEGORY} from "../actions/types";

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
  show: false

};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_CATEGORIES: {
      return {
        ...state,
        categories: action.categories
      }
    }

    case GET_CATEGORY: {
      return {
        ...state,
        categories: action.categories
      }
    }

    case GET_PRODUCT: {
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
