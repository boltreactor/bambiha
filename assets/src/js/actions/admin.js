import axios from "axios";
import {loadProgressBar} from 'axios-progress-bar';
import {
    ADD_CATEGORY,
    EDIT_CATEGORY,
    ALL_CATEGORIES, GET_CATEGORY, GET_PRODUCT, DEL_PRODUCT
} from "./types";

const qs = require('query-string');
loadProgressBar();

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};

export const addCategory = (category) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('category', category);
    axios.post(`/admin/addcategory/`, bodyFormData, {headers: Header})
        .then(res => {
            dispatch({
                type: ADD_CATEGORY,
                category: res.data.category,
            })
        })

};
export const editCategory = (id, category) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('category_key', id);
    bodyFormData.append('category', category);
    axios.post(`/admin/addcategory/`, bodyFormData, {headers: Header})
        .then(res => {
            dispatch({
                type: EDIT_CATEGORY,
                category: res.data.category,
            })
        })
};


export const getAllCategories = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/admin/allcategories/', {headers: Header})
        .then(res => {
            dispatch({
                type: ALL_CATEGORIES,
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
                type: GET_CATEGORY,
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
                type: GET_PRODUCT,
                products: res.data.product
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
            dispatch({
                type: DEL_PRODUCT,
                products: res.data.product
            });
        });
};
