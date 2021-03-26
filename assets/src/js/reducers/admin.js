import React from 'react';
import {CATEGORIES, PRODUCT, DEL_PRODUCT, CATEGORY} from "../actions/types";

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

    default:
      return state;

  }
}
