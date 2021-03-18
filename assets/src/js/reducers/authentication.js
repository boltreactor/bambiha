import {
    ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
    MESSAGE,
    PASSWORD_CHANGED,
    PROFILE,
    REDIRECT_TO_LOGIN,
    SET_PROFILE,
    SIGNUP,
    TOGGLE_DRAWER,
    VERIFICATION,CHANGE_PASSWORD_MSG
} from '../actions/types';
import React from 'react';

export const initialState = {

    loginStatus: false,
    verification: false,
    message: false,
    snackMsg: "",
    error: "",
    error_current: "",
    error_new: "",
    change_pass:""

};
export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP: {
            return {
                ...state,
            }
        }
        case ERROR: {
            return {
                ...state,
                error: action.error,
                error_new: action.error_new,
                error_current: action.error_current,
                error_reset:false
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loginStatus: action.loginStatus
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginStatus: action.loginStatus

            }
        }
        case REDIRECT_TO_LOGIN: {
            return {
                ...state,
                user: action.user
            }
        }
        case VERIFICATION: {
            return {
                ...state,
                verification: action.verification
            }
        }
        case PASSWORD_CHANGED: {
            return {
                ...state
            }
        }
        case LOGOUT: {

            return {
                ...state,
                loginStatus: action.loginStatus
            }
        }

        case SET_PROFILE: {
            return {
                ...state,
                new_profile: action.new_profile
            }
        }
        case MESSAGE: {
            return {
                ...state,
                message: action.message,
                snackMsg: action.snackMsg,
            }
        }
        case PROFILE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    profiles: action.profiles
                }
            }
        }
        case TOGGLE_DRAWER: {
            return {
                ...state,
                toggleDrawer: action.toggleDrawer
            }
        }
        case CHANGE_PASSWORD_MSG: {
            return {
                ...state,
                change_pass: action.change_pass
            }
        }
        default:
            return state;
    }

}