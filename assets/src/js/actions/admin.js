import axios from "axios";
import {
    ADMIN_PRODUCTS,
    ADMIN_PRODUCT,
    CATEGORIES,
    CATEGORY,
    DEL_PRODUCT,
    ADMIN_ORDERS,
    USERS,
    HEADER_CATEGORIES, EDIT_CATEGORY, DELETE_PRODUCT_IMAGES
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

export const editProduct = (fd, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.post(`/admin/editproduct/`, fd, {headers: Header})
        .then(res => {
            props.history.push("/admin/products")
        })
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

export const imagesToDelete = (imageToDelete) => dispatch => {
    dispatch({
        type: DELETE_PRODUCT_IMAGES,
        imageToDelete: imageToDelete,
    });
};

export const disableUser = (id, status, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('user_key', id);
    bodyFormData.append('status', status);
    axios.post(`/admin/manage_status/`, bodyFormData, {headers: Header})
        .then(res => {

            getAllUsers()
            // props.history.push("/admin/users")
        })

};

export const deleteOrder = (id, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('order_key', id);

    axios.post(`/admin/deleteorder/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/orders")
        })
};


export const updateOrderStatus = (id, status, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('order_key', id);
    bodyFormData.append('status', status);
    axios.post(`/admin/updatestatus/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/orders")
        })

};

