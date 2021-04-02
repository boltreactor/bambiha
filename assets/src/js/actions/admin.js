import axios from "axios";
import {
    ADMIN_PRODUCTS,
    ADMIN_PRODUCT,
    CATEGORIES,
    CATEGORY,
    DEL_PRODUCT,
    ADMIN_ORDERS,
    USERS,
    HEADER_CATEGORIES, EDIT_CATEGORY
} from "./types";
import {loadProgressBar} from 'axios-progress-bar';

const qs = require('query-string');
loadProgressBar();
const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};

export const addCategory = (category, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('category', category);
    axios.post(`/admin/addcategory/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/categories")
        })

};
export const editCategory = (id, category, status, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('category_key', id);
    bodyFormData.append('category', category);
    bodyFormData.append('status', status);
    debugger
    axios.post(`/admin/editcategory/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/categories")
            dispatch({
                type: EDIT_CATEGORY,
                category: category
            })
        })
}


export const getAllCategories = () => dispatch => {
    // Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
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
                type: ADMIN_PRODUCT,
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
    Header['Content-Type'] = 'multipart/form-data'

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
export const getAllProducts = (id) => dispatch => {
    // Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let config = {
        headers: Header,
        params: {
            category_key: id,
        },
    }
    axios.get('/admin/allproducts/', config)
        .then(res => {
            dispatch({
                type: ADMIN_PRODUCTS,
                products: res.data.products,
            });
        });
};

export const deleteCategory = (category_key) => dispatch => {
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
export const getAllOrders = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/admin/vieworders/', {headers: Header})
        .then(res => {
            dispatch({
                type: ADMIN_ORDERS,
                orders: res.data.orders,
            });
        });
};
export const getAllUsers = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/auth/all-users/', {headers: Header})
        .then(res => {
            dispatch({
                type: USERS,
                users: res.data.users,
            });
        });
};
