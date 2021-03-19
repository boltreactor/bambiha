import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {addProfilePicture} from "../../actions/authentication";
import {getUser, toggleDrawers} from "../../actions/profile";
import SettingsHeader from "./settings-header";
import SettingsDrawer from "../../reusable-components/Drawers/Toggle/settings-drawer";
import DashboardDrawer from "../../reusable-components/Drawers/Toggle/dashboard-drawer";
import HomeDrawer from "../../reusable-components/Drawers/Toggle/home-drawer";
import TopAppBarAdmin from "./top-app-bar/top-app-bar--admin";
import TopAppBarDashboard from "./top-app-bar/top-app-bar--dashboard";

class LoggedInHeader extends Component {

    state = {
        open: false,
        hover: false
    };

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.props.getUser();
        }
    }

    doImageSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append("profile_image", e.target.files[0], e.target.files[0].name);
        this.props.addProfilePicture(fd, this.props);
    };

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    };
    selectDrawer = () => {
        if (this.props.location.pathname === ("/settings")) {
            return <SettingsDrawer/>
        } else if (this.props.location.pathname === ("/dashboard")) {
            return <DashboardDrawer/>
        } else {
            return <HomeDrawer/>
        }
    };

    render() {
        return (
            <Fragment>
                {window.location.pathname.startsWith("/admin") ? <TopAppBarAdmin/> : <TopAppBarDashboard/>}
            </Fragment>

        );

    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default withRouter(connect(mapStateToProps, {getUser, toggleDrawers, addProfilePicture})(LoggedInHeader));
