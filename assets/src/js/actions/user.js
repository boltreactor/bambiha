import axios from "axios";
import {CART, FAVORITES, HEADER_CATEGORIES, USER_ORDERS, USER_PRODUCTS} from "./types";
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
            props.history.push('/cart')

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
export const checkout = (props, address) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('address', address);
    axios.post('/user/checkout/', bodyFormData, {headers: Header})
        .then(res => {
            props.history.push('/orders')

        }).catch(err => {

    });
};

export const getUserCategories = () => dispatch => {
    axios.get('/user/getcategories/', {headers: Header})
        .then(res => {
            dispatch({
                type: HEADER_CATEGORIES,
                header_categories: res.data.category
            });
        });
};

export const getUserProducts = (id) => dispatch => {
    let config = {
        headers: Header,
        params: {
            category_key: id,
        },
    }
    axios.get('/user/getproducts/', config)
        .then(res => {
            dispatch({
                type: USER_PRODUCTS,
                products: res.data.products
            });
        });
};

export const manageFavorite = (id, props) => dispatch => {

    let bodyFormData = new FormData();
    bodyFormData.append('product_key', id);
    axios.post('/user/managefavorites/', bodyFormData, {headers: Header})
        .then(res => {
            props.history.push('/favorites')

        }).catch(err => {

    })
};

export const getFavorite = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/user/getfavorites/', {headers: Header})
        .then(res => {
            dispatch({
                type: FAVORITES,
                favorites: res.data.favorites
            });
        });
};
