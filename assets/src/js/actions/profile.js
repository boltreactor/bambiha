import axios from "axios";
import {IMAGES, NOTIFICATIONS_SETTINGS, SET_PROFILE, SET_USER, SNACKBAR, TOGGLE_DRAWER} from "./types";
import {showLoader} from "./user";

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};

export const getUser = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/auth/profile/', {headers: Header})
        .then(res => {
            dispatch({
                type: SET_USER,
                user: res.data.user,
                userHistory: res.data,
                loginStatus: true
            });
        });
};

export const addPictures = (Pictures, id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.put(`/profile/${id}/images/`, Pictures, {headers: Header})
        .then(res => {
            dispatch({
                type: IMAGES,
                images: res.data.images
            })
        })

};


export const deleteImage = (id, new_images, profile_id) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.delete(`/profile/${profile_id}/images/${id}/`, {headers: Header})
        .then(res => {
            dispatch({
                type: IMAGES,
                images: new_images
            })
        })

};

export const addProfile = (profile, props, component) => dispatch => {
    dispatch(showLoader(true))
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.post('/auth/profile/', profile, {headers: Header})
        .then(res => {
            // dispatch({
            //   type: ID_FOR_IMAGES,
            //   id: res.data.profiles[res.data.profiles.length - 1].id
            // });
            dispatch({
                type: SET_USER,
                loginStatus: true,
                user: res.data.user,
            })
        }).finally(() => {
        dispatch(showLoader(false))
    })

    // dispatch({
    //   type: SNACKBAR,
    //   msg: component === "listing" ? "Your listing has been updated" : "Your personal Information has been updated",
    //   show: true
    // })
    // });
    if (component !== "editProfile")
        props.history.goBack()

    // if(component==='editProfile') {
    //     props.history.push('/settings')
    // }
    // else if(component==='listing'){
    //       props.history.push('/dashboard/me/my-listings')
    // }
    // if(component==="dasboardEdit"){
    //     props.history.push('/dashboard')
    // }

};

export const addProfileAndPictures = (profile, fd, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.put('/profile/profile/', profile, {headers: Header})
        .then(res => {
            dispatch({
                type: SET_USER,
                loginStatus: true,
                user: res.data,
            });
            axios.put(`/profile/${res.data.profiles[res.data.profiles.length - 1].id}/images/`, fd, {headers: Header})
                .then(res => {
                    dispatch({
                        type: IMAGES,
                        images: res.data.images
                    })
                })
            dispatch({
                type: SNACKBAR,
                msg: "Your listing has been created",
                show: true
            })
        });

    if (props) {
        props.history.push('/dashboard/me/my-listings')
    }


};


export const toggleDrawers = (open) => dispatch => {
    dispatch({
        type: TOGGLE_DRAWER,
        toggleDrawer: open
    })
};

export const removeSnackbar = (msg, show) => dispatch => {
    dispatch({
        type: SNACKBAR,
        msg: msg,
        show: show
    })
};

export const setUserInfo = (userInformation) => dispatch => {
    dispatch({
        type: SET_USER,
        loginStatus: true,
        user: userInformation,
    })
};
export const setProfileInfo = (new_profile) => dispatch => {
    dispatch(showLoader(true))
    dispatch({
        type: SET_PROFILE,
        new_profile: new_profile,
    }).finally(() => {
        dispatch(showLoader(false))
    });
};

export const setNotificationSettings = (settings) => dispatch => {
    dispatch({
        type: NOTIFICATIONS_SETTINGS,
        notification_settings: settings
    })
};


export const addNotificationSettings = (settings) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.post('/auth/notification-settings/', settings, {headers: Header})
        .then(res => {
            dispatch({
                type: NOTIFICATIONS_SETTINGS,
                notification_settings: res.data.notifications
            });
        });


};

export const getNotificationSettings = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.get('/auth/notification-settings/', {headers: Header})
        .then(res => {
            dispatch({
                type: NOTIFICATIONS_SETTINGS,
                notification_settings: res.data.notifications
            });
        });


};
export const addSocialConnection = (user) => dispatch => {
    axios.post('/auth/add-social-connection/', user, {headers: Header})
        .then(res => {
            dispatch({
                type: SET_USER,
                user: res.data,
                loginStatus: true
            });
        });
};