import axios from "axios";
import {
    ADD_CARD,
    DELETE_BANK,
    DELETE_BANK_ERROR,
    DELETE_CARD, ERROR,
    GET_BALANCE,
    GET_BANKS,
    GET_CARDS,
    PAYMENT_INTENT,
    VAT
} from "./types";

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain',
};


export const addCard = (card_token) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('card_token', card_token);
    axios.post(`/payment/add-method/`, bodyFormData, {headers: Header})
        .then(res => {

            dispatch({
                type: ADD_CARD,
                card: res.data.user
            });
        });
};

export const addBank = (bank_token) => async dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('bank_token', bank_token);
    return await axios.post(`/payment/add-bank-account/`, bodyFormData, {headers: Header})
};
export const getCards = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/payment/get-methods/', {headers: Header})
        .then(res => {

            dispatch({
                type: GET_CARDS,
                user_cards: res.data.user_cards,
            });
        });
}
export const getBanks = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/payment/get-banks/', {headers: Header})
        .then(res => {

            dispatch({
                type: GET_BANKS,
                user_banks: res.data.acct,
            });
        });
}

export const getBalance = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/payment/get-balance/', {headers: Header})
        .then(res => {
            dispatch({
                type: GET_BALANCE,
                user_balance: res.data.all_transfers,
            });
        });
}

export const deleteCard = (source_id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    let body
    bodyFormData.append('card_id', source_id);
    axios.post('/payment/delete-method/', bodyFormData, {headers: Header})
        .then(res => {
            dispatch({
                type: DELETE_CARD,
                user_cards: res.data.user_cards,
            });
        });
}
export const deleteBank = (source_id, bank_id) => dispatch => {
    debugger
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('acc_id', source_id);
    bodyFormData.append('bank_id', bank_id);
    axios.post('/payment/delete-payout-method/', bodyFormData, {headers: Header})
        .then(res => {
            debugger
            dispatch({
                type: DELETE_BANK,
                user_banks: res.data.acct,
            });
        }).catch(error=>{
            error["message"]==="Request failed with status code 500" &&
                dispatch({
                    type:DELETE_BANK_ERROR,
                    error_msg:" You cannot delete the default external account for your default currency. Please add another before deleting this."
                })
            debugger

    })
}

export const paymentIntent = (amount, currency) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('amount', amount);
    bodyFormData.append('currency', currency);
    axios.post('/payment/create-payment-intent/', bodyFormData, {headers: Header})
        .then(res => {
            dispatch({
                type: PAYMENT_INTENT,
                intent_id: res.data.intent_id,
                client_secret: res.data.client_secret
            });
        });
}

export const addVAT = (data, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('country', data.country);
    bodyFormData.append('vat_no', data.vat_id);
    bodyFormData.append('name_reg', data.name_vat_registration);
    bodyFormData.append('address_line', data.address_line);
    bodyFormData.append('city', data.city);
    bodyFormData.append('provence', data.province);
    bodyFormData.append('zip_code', data.zip_code);
    axios.post('/payment/add-vat/', bodyFormData, {headers: Header})
        .then(res => {
            if (res.status === 200)
                props.history.goBack()
        });
}


export const updateVAT = (data, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('id', data.id);
    bodyFormData.append('country', data.country);
    bodyFormData.append('vat_no', data.vat_id);
    bodyFormData.append('name_reg', data.name_vat_registration);
    bodyFormData.append('address_line', data.address_line);
    bodyFormData.append('city', data.city);
    bodyFormData.append('provence', data.province);
    bodyFormData.append('zip_code', data.zip_code);
    axios.post('/payment/edit-vat/', bodyFormData, {headers: Header})
        .then(res => {
            if (res.status === 200)
                props.history.goBack()

        });
}

export const getVAT = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/payment/get-vat/', {headers: Header})
        .then(res => {
            dispatch({
                type: VAT,
                user_vat: res.data.vat,
            });
        });
}


export const deleteVAT = (id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('id', id);
    axios.post('/payment/delete-vat/', bodyFormData, {headers: Header})
        .then(res => {
            dispatch({
                type: VAT,
                user_vat: res.data.vat,
            });
        });
}
export const clearBankError = () => dispatch => {
    debugger
    dispatch({
        type: DELETE_BANK_ERROR,
        error_msg: ""
    });
}


