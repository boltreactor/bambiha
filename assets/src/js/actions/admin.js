import axios from "axios";
import {loadProgressBar} from 'axios-progress-bar';
import {
    PRODUCTS
} from "./types";

const qs = require('query-string');
loadProgressBar();

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
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
