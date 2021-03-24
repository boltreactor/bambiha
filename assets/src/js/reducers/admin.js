import {
    ADD_CATEGORY,
    EDIT_CATEGORY
} from '../actions/types';
import React from 'react';

export const initialState = {
    name: "",
    id: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY: {
            return {
                ...state,
                name: action.name,
                id: action.id
            }
        }
        case EDIT_CATEGORY: {
            return {
                ...state,
                name: action.name,
                id: action.id
            }
        }
        default:
            return state;
    }
}