import axios from "axios";
import {
    ADD_ITEM_TO_CART,
    CART,
    FAVORITES,
    HEADER_CATEGORIES,
    REMOVED_ITEM_FROM_CART,
    SHOW_LOADER,
    USER_ORDERS,
    USER_PRODUCTS
} from "./types";

const qs = require('query-string');
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
            dispatch({
                type: CART,
                cart: res.data.products,
            });

        }).catch(err => {

    })
};

export const addProductToCart = (quantity, product, addOrRemove) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('product_key', product.product_key);
    bodyFormData.append('quantity', quantity);
    axios.post('/user/addtocart/', bodyFormData, {headers: Header})
        .then(res => {
            addOrRemove && addOrRemove === "remove" && dispatch({
                type: REMOVED_ITEM_FROM_CART,
                product_key: product.product_key
            })
            addOrRemove && addOrRemove === "add" && dispatch({
                type: ADD_ITEM_TO_CART,
                product: product
            })

        }).catch(err => {

    })
};
export const changeQuantity = (fd) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.post('/user/updateproductquantity/', fd, {headers: Header})
        .then(res => {
            debugger
            dispatch({
                type: QUANTITY_CHANGED,
                item: res.data.cart_product
            })
        })
};


export const viewCart = () => dispatch => {
    showLoader(true)
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
export const checkout = (props, address, phone) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('address', address);
    bodyFormData.append('phone_number', phone);
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
            axios.get('/user/getfavorites/', {headers: Header})
                .then(res => {
                    dispatch({
                        type: FAVORITES,
                        favorites: res.data.favorites
                    });
                });

        }).catch(err => {

    })
};

export const getFavorite = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`
    axios.get('/user/getfavorites/', {headers: Header})
        .then(res => {
            dispatch({
                type: FAVORITES,
                favorites: res.data.favorites
            });
        });
};

export const showLoader = (show) => {
    return {
        type: SHOW_LOADER,
        loader: show
    }
}
