import {
  REDIRECT_TO_LOGIN,
  SNACKBAR,
  NOTIFICATIONS_SETTINGS,
  PROFILE,
  SET_USER,
  SET_PROFILE,
  MESSAGE,
  TOGGLE_DRAWER,
  MAP_ERROR_MESSAGE,
  IMAGES,
  ID_FOR_IMAGES,
  IMAGES_VIEW,
  CURRENT_LISTING,
  // STATE_IMAGES,
} from '../actions/types';
import React from 'react';

export const initialState = {
  user: {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  },
  currentListing: null,
  listing: {
    title: "",
    subject: "",
    languages: "",
    ageLevels: "",
    subjectOverview: "",
    teachingExperience: "",
    address: "",
    city: "",
    country: "",
    id: "",
    lat: "",
    lng: "",
    images: [],
    lessonPlace: "",
    price: "",
    studentNotes: "",
  },
  loginStatus: false,
  notification_settings: null,
  msg: null,
  show: false

};
export default function (state = initialState, action) {
  switch (action.type) {
    case REDIRECT_TO_LOGIN: {
      return {
        ...state,
        user: action.user
      }
    }
    case SET_USER: {
      return {
        ...state,
        user: action.user,
        loginStatus: action.loginStatus
      }
    }

    case MESSAGE: {
      return {
        ...state,
        message: action.message
      }
    }
    case PROFILE: {
      return {
        ...state,
        user: {
          ...state.user,
          // profiles: action.profiles
        }
      }
    }

    case TOGGLE_DRAWER: {
      return {
        ...state,
        toggleDrawer: action.toggleDrawer
      }
    }
    case NOTIFICATIONS_SETTINGS: {
      return {
        ...state,
        notification_settings: action.notification_settings
      }
    }
    case SNACKBAR: {
      return {
        ...state,
        show: action.show,
        msg: action.msg
      }
    }
    case CURRENT_LISTING: {
      return {
        ...state,
        currentListing: action.currentListing,
      }
    }
    default:
      return state;
  }

}