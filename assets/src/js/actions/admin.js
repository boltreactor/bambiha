import axios from "axios";
import {loadProgressBar} from 'axios-progress-bar';
import {CATEGORIES, CATEGORY, PRODUCT, DEL_PRODUCT} from "./types";

const qs = require('query-string');
loadProgressBar();

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};



export const getAllCategories = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/admin/allcategories/', {headers: Header})
        .then(res => {
            dispatch({
                type: CATEGORIES,
                categories: res.data.category
            });
        });
};

export const getCategory = (id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let config = {
        headers: Header,
        params: {
            category_key: id,
        },
    }
    axios.get('/admin/getcategory/', config)
        .then(res => {
            dispatch({
                type: CATEGORY,
                category: res.data.category
            });
        });
};

export const getProduct = (id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let config = {
        headers: Header,
        params: {
            product_key: id,
        },
    }
    axios.get('/admin/getproduct/', config)
        .then(res => {
            dispatch({
                type: PRODUCT,
                product: res.data.product
            });
        });
};

export const delProduct = (id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let config = {
        headers: Header,
        params: {
            product_key: id,
        },
    }
    axios.get('/admin/deleteproduct/', config)
        .then(res => {
            // dispatch({
            //     type: DEL_PRODUCT
            //
            // });
        });
};
