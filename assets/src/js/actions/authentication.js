import axios from "axios";
import {loadProgressBar} from 'axios-progress-bar';
import {
    CHANGE_PASSWORD_MSG,
    ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
    MESSAGE,
    SET_USER,
    SIGNUP,
    VERIFICATION
} from "./types";

const qs = require('query-string');
loadProgressBar();

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain'
};
export const signup = (user, props) => dispatch => {

    axios.post("/auth/register/", user, {headers: Header})
        .then(res => {
                if (res.data.status === 1) {
                    axios.post("/auth/login/", {
                        email: user.email,
                        password: user.password
                    }, {headers: Header}).then(res => {
                        if (res.data.user.user_role === 2)
                            localStorage.setItem("admin", true)
                        else
                            localStorage.setItem('admin', false)
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
export const clearAuthErrors = (props) => dispatch => {
    dispatch({
        type: ERROR,
        error: ""
    });
}
export const login = (user, props) => dispatch => {
    axios.post("/auth/login/", user, {headers: Header}).then(res => {
        if (res.data.user.user_role === 2)
            localStorage.setItem("admin", true)
        else
            localStorage.setItem('admin', false)
        localStorage.setItem("loginStatus", true)
        localStorage.setItem("token", res.data.user.token);
        dispatch({
            type: ERROR,
            error: ""
        });
        dispatch({
            type: MESSAGE,
            message: false
        });
        dispatch({
            type: LOGIN_SUCCESS,
            loginStatus: true
        });
        const {state} = props.location;
        window.location = state ? state.from.pathname : "/dashboard";
    }).catch(err => {
        dispatch({
            type: ERROR,
            error: err.response.data.message
        });
        dispatch({
            type: LOGIN_FAILED,
            loginStatus: false
        });
    })
};

export const verifyEmail = (uid, token) => dispatch => {
    axios.post('/auth/users/activation/', {uid, token}, {headers: Header})
        .then(res => {
            dispatch({
                type: VERIFICATION,
                verification: true
            })
        })
        .catch(err => {
            dispatch({
                type: VERIFICATION,
                verification: false
            })
        })
};

export const resendEmail = (email) => dispatch => {
    axios.post('/auth/users/resend_activation/', {email}, {headers: Header})
        .then(res => {
            dispatch({
                type: ERROR,
                error: ""
            });
        })
        .catch(err => {
            if (err.response.status === 400) {
                dispatch({
                    type: ERROR,
                    error: err.response.data[0]
                })
            }
        })
};

export const resetPassword = (email) => dispatch => {
    axios.post('/auth/forgot/', {email}, {headers: Header})
        .then(res => {
            if (res.status === 200) {

                dispatch({
                    type: MESSAGE,
                    message: true,
                    snackMsg: res.data.message,
                });
                setTimeout(() => {
                    dispatch({
                        type: MESSAGE,
                        message: false
                    })
                }, 4000);
                dispatch({
                    type: ERROR,
                    error: ""
                });
            }
        })
        .catch(err => {
            if (err.response.status === 400) {
                dispatch({
                    type: ERROR,
                    error: err.response.data.message
                })
            }
        })
};

export const newPassword = (token, new_password, re_new_password, props) => dispatch => {
    axios.post('/auth/reset-password-email/', {token, new_password, re_new_password}, {headers: Header})
        .then(res => {
            if (res.status === 204) {
                dispatch({
                    type: MESSAGE,
                    message: true
                });
                // setTimeout(() => {
                //   dispatch({
                //     type: MESSAGE,
                //     message: false
                //   })
                // }, 4000);
                props.history.push('/login')
            }
        }).catch(err => {
        props.history.push('/resend/new-password')
    })
};

export const changePassword = (re_new_password, new_password, current_password, email) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;

    axios.post('/auth/set_password/', {re_new_password, new_password, current_password}, {headers: Header})
        .then(res => {

                if (res.status === 204) {
                    localStorage.removeItem("token");
                    dispatch({
                        type: ERROR,
                        error: "",
                        error_new: "",
                        error_current: ""
                    });
                    dispatch({
                        type: CHANGE_PASSWORD_MSG,
                        change_pass: true
                    });
                    const user = {email: email, password: new_password}
                    axios.post("/auth/login/", user, {headers: Header}).then(res => {
                        localStorage.setItem("loginStatus", true)
                        localStorage.setItem("token", res.data.user.token);
                        dispatch({
                            type: LOGIN_SUCCESS,
                            loginStatus: true
                        });
                    }).catch(err => {
                        dispatch({
                            type: ERROR,
                            error: err.response.data.message
                        });
                        dispatch({
                            type: LOGIN_FAILED,
                            loginStatus: false
                        });
                    })
                }
            }
        ).catch(err => {
            dispatch({
                    type: ERROR,
                    error_current: err.response.data.message,
                    error: ""
                }
            )

        }
    )
};

export const logout = () => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;

    dispatch({
        type: LOGOUT,
        loginStatus: false
    });
    localStorage.clear();
    window.location = '/';
};

export const socialLogin = (user, props) => dispatch => {
    axios.post('/auth/social-login/', user, {headers: Header})
        .then(res => {
            localStorage.setItem("loginStatus", true)
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                loginStatus: true
            });
            const {state} = props.location;
            window.location = state ? state.from.pathname : "/";
        });
};

export const addProfilePicture = (profilePicture, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.put('/auth/profile-image/', profilePicture, {headers: Header})
        .then(res => {
            dispatch({
                type: SET_USER,
                user: {...props.user, ...res.data},
                userHistory: {...props.user, ...res.data},
                loginStatus: true
            })
        })

};


export const addCoverPicture = (coverPicture, props) => dispatch => {
    Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    axios.put('/auth/profile-image/', coverPicture, {headers: Header})
        .then(res => {
            dispatch({
                type: SET_USER,
                user: {...props.user, ...res.data},
                userHistory: {...props.user, ...res.data},
                loginStatus: true
            })
        })

};

export const setLoginStatus = (bool) => dispatch => {
    dispatch({
        type: LOGIN_SUCCESS,
        loginStatus: bool
    })
};

export const setChangePass = (msg) => dispatch => {
    dispatch({
        type: CHANGE_PASSWORD_MSG,
        change_pass: msg
    })
};


export const getLinkedinToken = (client_id, secret, code, redirect_url) => async dispatch => {
    // Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
    // return await axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${client_id}&client_secret=${secret}&code=${code}&redirect_uri=${redirect_url}`, {
    //   headers: {
    //     'Cookie': 'lang=v=2&lang=en-us; bscookie="v=1&20210121095810c82296f3-fa2b-42f7-87e8-78e4a21b5f41AQEI6xVdHYa7kQ_x7Nt8GH8_SIR_ApNU"; lissc=1; lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611223371:t=1611284246:v=1:sig=AQFKtZaI0BKQjHARj7wzU0S_rAvALp5k"; bcookie="v=2&c4c022a1-db6b-4b7b-86c0-8b4b13a656c2"'
    //   }
    // })
    var config = {
        method: 'post',
        url: `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${client_id}&client_secret=${secret}&code=${code}&redirect_uri=${redirect_url}`,
        headers: Header
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
};
//
// var config = {
//   method: 'post',
//   url: `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${client_id}&client_secret=${secret}&code=${code}&redirect_uri=${redirect_url}`,
//   headers: {
//     'Cookie': 'lang=v=2&lang=en-us; bscookie="v=1&20210121095810c82296f3-fa2b-42f7-87e8-78e4a21b5f41AQEI6xVdHYa7kQ_x7Nt8GH8_SIR_ApNU"; lissc=1; lidc="b=VB79:s=V:r=V:g=2698:u=279:i=1611223371:t=1611284246:v=1:sig=AQFKtZaI0BKQjHARj7wzU0S_rAvALp5k"; bcookie="v=2&c4c022a1-db6b-4b7b-86c0-8b4b13a656c2"'
//   }
// };
//
// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


export const createLinkedInLogin = (user, props) => dispatch => {
    axios.post('/auth/social-login-linkedin/', user, {headers: Header})
        .then(res => {
            localStorage.setItem("loginStatus", true)
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                loginStatus: true
            });
            const {state} = props.location;
            window.location = state ? state.from.pathname : "/";
        });
};


// export const googleLogin = () => dispatch => {
//     axios.get(`/auth/socials/o/google-oauth2/?redirect_uri=${window.location.origin}/`, {headers: Header})
//         .then(res => {
//             window.open(res.data.authorization_url);
//         });
// };

// export const glogin = (code, state, props) => dispatch => {
//     Header["Content-Type"] = 'application/x-www-form-urlencoded';
//     axios.post('/auth/socials/o/google-oauth2/', qs.stringify({code: code, state: state}), {headers: Header})
//         .then(res => {
//             localStorage.setItem("loginStatus", true)
//             localStorage.setItem("token", res.data.access);
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 loginStatus: true
//             });
//             props.history.push('/');
//             dispatch({
//                 type: MESSAGE,
//                 message: false
//             });
//
//             Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
//             Header["Content-Type"] = 'application/x-www-form-urlencoded';
//             axios.put('/auth/users/me/', qs.stringify({username: res.data.user, account_type: 1}), {headers: Header})
//                 .then(res => {
//                     dispatch(getUser())
//                 });
//         });
// }
//
//
// export const facebookLogin = () => dispatch => {
//     axios.get('/auth/socials/o/facebook/?redirect_uri=http://localhost:8000/', {headers: Header})
//         .then(res => {
//             window.open(res.data.authorization_url);
//         });
// };
// export const flogin = (code, state, props) => dispatch => {
//     Header["Content-Type"] = 'application/x-www-form-urlencoded';
//     axios.post('/auth/socials/o/facebook/', qs.stringify({code: code, state: state}), {headers: Header})
//         .then(res => {
//             localStorage.setItem("token", res.data.access);
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 loginStatus: true
//             });
//             props.history.push('/');
//             dispatch({
//                 type: MESSAGE,
//                 message: false
//             });
//             Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
//             Header["Content-Type"] = 'application/x-www-form-urlencoded';
//             axios.put('/auth/users/me/', qs.stringify({
//                 username: res.data.user,
//                 account_type: 2
//             }), {headers: Header})
//         });
// };