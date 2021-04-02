import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


function AdminProtectedRoute({path, component: Component, render, user, ...rest}) {
    let loginStatus = localStorage.getItem("loginStatus")
    let isAdmin = localStorage.getItem('admin')
    return (
        <Route {...rest} render={props => {
            if (!loginStatus && !isAdmin) return <Redirect to={{
                pathname: "/",
                state: {from: props.location}
            }}/>;
            return Component ? <Component {...props}/> : render(props);
        }}/>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
    // loginStatus: state.authentication.loginStatus
});

export default withRouter(connect(mapStateToProps)(AdminProtectedRoute));