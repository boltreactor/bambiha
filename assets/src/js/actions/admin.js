import axios from "axios";
import {loadProgressBar} from 'axios-progress-bar';
import {
    ADD_CATEGORY,
    EDIT_CATEGORY,
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
                name: res.data.category.name,
                id: res.data.category.id
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
                name: res.data.category.name,
                id: res.data.category.id
            })
        })
};
