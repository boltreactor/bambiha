import {
  ADD_CARD,
  ADD_BANK,
  GET_BALANCE,
  GET_BANKS,
  DELETE_CARD,
  GET_CARDS,
  PAYMENT_INTENT,
  DELETE_BANK,
  VAT
} from "../actions/types";

export const initialState = {
  card: null,
  user_cards: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        card: action.card
      }
    }
    case ADD_BANK: {
      return {
        ...state,

      }
    }
    case GET_CARDS: {
      return {
        ...state,
        user_cards: action.user_cards
      }
    }
    case GET_BANKS: {
      return {
        ...state,
        user_banks: action.user_banks
      }
    }
    case GET_BALANCE: {
      return {
        ...state,
        user_balance: action.user_balance
      }
    }
    case VAT: {
      return {
        ...state,
        user_vat: action.user_vat
      }
    }
    case DELETE_CARD: {
      return {
        ...state,
        user_cards: action.user_cards
      }
    }
    case DELETE_BANK: {
      return {
        ...state,
        user_banks: action.user_banks
      }
    }
    case PAYMENT_INTENT: {
      return {
        ...state,
        intent_id: action.intent_id,
        client_secret: action.client_secret
      }
    }

    default:
      return state;
  }

}
