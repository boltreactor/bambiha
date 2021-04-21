import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import {addProfile, getUser, setUserInfo} from "../../actions/profile";
import {addCoverPicture, addProfilePicture} from "../../actions/authentication";
import SideHeader from "./sideHeader";
import DashboardDrawer from "../../reusable-components/Drawers/Static/dashboard-drawer";
import SmartFooter from "../Footers/estore-smart-footer";
import {getUserCategories} from "../../actions/user";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getUser();
        this.props.getUserCategories();
    }


    doImageSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append("profile_image", e.target.files[0], e.target.files[0].name);
        fd.append("image_type", 'profile');

        this.props.addProfilePicture(fd, this.props);
    };
    doCoverImageSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append("cover_image", e.target.files[0], e.target.files[0].name);
        fd.append("image_type", 'cover');
        this.props.addCoverPicture(fd, this.props)
    }

    render() {
        return (
            <div className="page my-page">
                <div className="page__content">
                    {/* */}
                    <div className="main-wrapper">
                        {/* */}
                        <DashboardDrawer/>
                        {/* No data placeholder */}
                        <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l mb7">
                                {/* */}
                                <header className="mb4 db">
                                    <h1 className="bold">My Products</h1>
                                </header>
                                {/* */}
                                <div className="content">
                                    {/* */}
                                    <div className="row">
                                        <div className="col s12 m6">
                                            <div className="shadow border rounded-sm db mb5">
                                                <header className="pa3 flex items-center border-bottom">
                                                    <div className="flex-grow-1">
                                                        <h2 className="bold">Weekly Purchase Stats</h2>
                                                    </div>

                                                </header>
                                                <div className="content tc">
                                                    <div className="pa3">
                                                        <div className="mv3">
                                                            <img style={{borderRadius: '8px'}} src="/static/sales.png"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="mv3">
                                                            <h3 className="bold">
                                                                Stay connected to your daily and weekly purchases using
                                                                our sales analytics.
                                                            </h3>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6">
                                            <div className="shadow border rounded-sm db mb5">
                                                <header className="pa3 flex items-center border-bottom">
                                                    <div className="flex-grow-1">
                                                        <h2 className="bold">Notifications</h2>
                                                    </div>

                                                </header>
                                                <div className="content tc">
                                                    <div className="pa3">
                                                        <div className="mv3">
                                                            <img src="/static/notifications.png" alt=""/>
                                                        </div>
                                                        <div className="mv3">
                                                            <h3 className="bold">
                                                                All your purchase, delivery and disputes Notifications
                                                                will be shown here.
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* */}
                                    <div className="row">
                                        <div className="col s12">
                                            <h1 className="bold pb4">Learn More about BAMBIHA</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {this.props.categories && this.props.categories.map((category) => {
                                            return <div className="col s12 m4">
                                                <Link to={`/category/${category.id}`}
                                                      className="link-mute">
                                                    <div className="shadow-0 rounded-sm db mb5 pa3">
                                                        <div className="flex">
                                                            {/*<div className="mh3">*/}
                                                            {/*    <i className="material-icons-outlined" style={{*/}
                                                            {/*        color: '#0258ff',*/}
                                                            {/*        fontSize: '36px'*/}
                                                            {/*    }}>accessibility_new</i>*/}
                                                            {/*</div>*/}
                                                            <div className="flex-grow-1" style={{minHeight: '136px'}}>
                                                                <h4 className="bold mb3">
                                                                    {category.name}
                                                                </h4>
                                                                <p>
                                                                    Shop all our new arrivals #bringthefuturetolight
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        })}


                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <SmartFooter/>
            </div>
        );
    }
}

const mapsStateToProps = state => ({
    user: state.user.user,
    show: state.user.show,
    msg: state.user.msg,
    categories: state.user.header_categories
});

export default withRouter(connect(mapsStateToProps, {
    setUserInfo,
    addProfilePicture,
    addCoverPicture,
    getUser,
    addProfile,
    getUserCategories,
})(Dashboard));
