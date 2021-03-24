import axios from "axios";
import {PRODUCTS} from "./types";

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain',
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
