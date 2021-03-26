import axios from "axios";
import {PRODUCTS, PRODUCT, CATEGORIES, CATEGORY, DEL_PRODUCT} from "./types";
import {loadProgressBar} from 'axios-progress-bar';
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


export const addProduct = (product, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`
    Header['Content-Type'] =  'multipart/form-data'

    axios.post("/admin/addproduct/", product, {headers: Header})
        .then(res => {
              props.history.push('/admin/products')

            }
        ).catch(err => {


        }
    )
};

export const editProduct = () => dispatch => {

    axios.post("/auth/register/", user, {headers: Header})
        .then(res => {
                if (res.data.status === 1) {
                    axios.post("/auth/login/", {
                        email: user.email,
                        password: user.password
                    }, {headers: Header}).then(res => {
                        localStorage.setItem("loginStatus", true)
                        localStorage.setItem("token", res.data.user.token);
                        dispatch({
                            type: ERROR,
                            error: ""
                        });
                        dispatch({
                            type: LOGIN_SUCCESS,
                            loginStatus: true
                        });
                    });
                    dispatch({
                        type: ERROR,
                        error: ""
                    });
                    dispatch({
                        type: SIGNUP,
                        user: res.data.user
                    });
                } else if (res.data.status === 0) {
                    dispatch({
                        type: ERROR,
                        error: res.data.message
                    });
                }

            }
        ).catch(err => {


        }
    )
};
export const getAllProducts = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/admin/allproducts/', {headers: Header})
        .then(res => {
            dispatch({
                type: PRODUCTS,
                products: res.data.products,
            });
        });
};

export const deleteCategory = (category_key) => dispatch => {
    debugger
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/admin/deletecategory/', {
        headers: Header, params: {
            category_key: category_key
        },
    })
        .then(res => {
            console.log(res)
        });
};
