import axios from "axios";
import {CART, USER_ORDERS} from "./types";
import {loadProgressBar} from "axios-progress-bar";
const qs = require('query-string');
loadProgressBar();
const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};



export const addToCart = (quantity, id, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
     let bodyFormData = new FormData();
      bodyFormData.append('product_key', id);
      bodyFormData.append('quantity', quantity);
    axios.post('/user/addtocart/', bodyFormData, {headers: Header})
        .then(res => {
             props.history.push('/')

        }).catch(err => {

        })
};


export const viewCart = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/user/viewcart/', {headers: Header})
        .then(res => {
            dispatch({
                type: CART,
                cart: res.data.products,
            });
        });
};

export const checkout = (quantity, id, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
     let bodyFormData = new FormData();
      bodyFormData.append('product_key', id);
      bodyFormData.append('quantity', quantity);
    axios.post('/user/checkout/', bodyFormData, {headers: Header})
        .then(res => {
             props.history.push('/')

        }).catch(err => {

        })
};

export const viewOrders = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/user/vieworders/', {headers: Header})
        .then(res => {
            dispatch({
                type: USER_ORDERS,
                orders: res.data.orders,
            });
        });
};