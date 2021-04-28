import axios from "axios";
import {
    ADMIN_ORDERS,
    ADMIN_PRODUCT,
    ADMIN_PRODUCTS,
    CATEGORIES,
    CATEGORY,
    DELETE_PRODUCT_IMAGES,
    EDIT_CATEGORY,
    EMPTY_DELETED_PRODUCTS,
    USERS
} from "./types";
import {showLoader} from "./user";

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};

export const addCategory = (category, props) => dispatch => {
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('category', category);
    axios.post(`/admin/addcategory/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/categories")
        }).finally(() => {
        dispatch(showLoader(false))
    });

};
export const editCategory = (id, category, status, props) => dispatch => {
    dispatch(showLoader(true))
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
        }).finally(() => {
        dispatch(showLoader(false))
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
        }).finally(() => {

    });
};


export const getCategory = (id) => dispatch => {
    dispatch(showLoader(true))
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
        }).finally(() => {
        dispatch(showLoader(false))
    });
};

export const getProduct = (id) => dispatch => {
    dispatch(showLoader(true))
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
        }).finally(() => {
        dispatch(showLoader(false))
    });
};

export const delProduct = (id) => dispatch => {
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let config = {
        headers: Header,
        params: {
            product_key: id,
        },
    }
    axios.get('/admin/deleteproduct/', config)
        .then(res => {
            debugger
            // dispatch({
            //     type: DEL_PRODUCT
            //
            // });
        }).finally(() => {
        dispatch(showLoader(false))
    });
};


export const addProduct = (product, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`
    Header['Content-Type'] = 'multipart/form-data'
    dispatch(showLoader(true))

    axios.post("/admin/addproduct/", product, {headers: Header})
        .then(res => {
                props.history.push('/admin/products')

            }
        ).catch(err => {

    }).finally(() => {
        dispatch(showLoader(false))
    })
};

export const editProduct = (fd, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    dispatch(showLoader(true))
    axios.post(`/admin/editproduct/`, fd, {headers: Header})
        .then(res => {
            dispatch({
                type: EMPTY_DELETED_PRODUCTS,
            });
            axios.get('/admin/allproducts/', {headers: Header})
                .then(res => {
                    dispatch({
                        type: ADMIN_PRODUCTS,
                        products: res.data.products,
                    });
                });
            props.history.push("/admin/products")
        }).finally(() => {
        dispatch(showLoader(false))
    });
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
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/admin/deletecategory/', {
        headers: Header, params: {
            category_key: category_key
        },
    })
        .then(res => {
        }).finally(() => {
        dispatch(showLoader(false))
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
            console.log("user_res")
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
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('user_key', id);
    bodyFormData.append('status', status);
    axios.post(`/admin/manage_status/`, bodyFormData, {headers: Header})
        .then(res => {

            getAllUsers()
            // props.history.push("/admin/users")
        }).finally(() => {
        dispatch(showLoader(false))

    })
};

export const manageAdmin = (id, status, props) => dispatch => {
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('user_key', id);
    bodyFormData.append('user_role', status);
    axios.post(`/admin/manage-admin/`, bodyFormData, {headers: Header})
        .then(res => {

            getAllUsers()
            // props.history.push("/admin/users")
        }).finally(() => {
        dispatch(showLoader(false))
    })
};

export const deleteOrder = (id, props) => dispatch => {
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('order_key', id);

    axios.post(`/admin/deleteorder/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/orders")
        }).finally(() => {
        dispatch(showLoader(false))
    })
};


export const updateOrderStatus = (id, status, props) => dispatch => {
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    let bodyFormData = new FormData();
    bodyFormData.append('order_key', id);
    bodyFormData.append('status', status);
    axios.post(`/admin/updatestatus/`, bodyFormData, {headers: Header})
        .then(res => {
            props.history.push("/admin/orders")
            axios.get('/admin/vieworders/', {headers: Header})
                .then(res => {
                    dispatch({
                        type: ADMIN_ORDERS,
                        orders: res.data.orders,
                    });
                });
        }).finally(() => {
        dispatch(showLoader(false))
    })
};

