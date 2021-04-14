import React from 'react';
import SettingsDrawer from "../../reusable-components/Drawers/Static/settings-drawer";
import SmartFooter from "../Footers/smart-footer";
import {addProfile, getUser, setUserInfo} from "../../actions/profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addProfilePicture} from "../../actions/authentication";
import NoLabelTextfield from "../../reusable-components/material-io/no-label-textfield";
import Form from "../../reusable-components/form";
import Joi from "joi-browser";

class MyProfile extends Form {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            data: {}
        }
        this.hiddenFileInput = React.createRef();

    }

    schema = {
        email: Joi.string().trim().email().regex(/[^$|\s+]/).allow(null).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "any.required":
                        return {message: "Email is required"};
                    case "string.regex.base":
                        return {message: "Invalid email"};
                    case "string.email":
                        return {message: "Invalid email"}
                    case "any.empty":
                        return {
                            message: "Email is required"
                        }
                }
            })

        }),
        first_name: Joi.string().trim().required().error(errors => {
            return {message: "First Name is required"};
        }),
        last_name: Joi.string().trim().required().error(errors => {
            return {message: "Last Name is required"};
        }),
        account_type: Joi.allow("").optional(),
        phone: Joi.string().trim().regex(/^$|^(\+92)|[0-9]{11}$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "any.required":
                        return {message: "Phone is required"};
                    case "string.regex.base":
                        return {message: "Invalid phone number"};
                    case "string.email":
                        return {message: "Invalid phone number"}
                    case "any.empty":
                        return {
                            message: "Phone is required"
                        }
                    case "string.base":
                        return {
                            message: "Phone is required"
                        }
                }
            })

        }),
        date_of_birth: Joi.string().trim().optional().error(errors => {
            return {message: "Birthday is required"};
        }),
        about: Joi.string().trim().optional().error(errors => {
            return {message: "About is required"};
        }),
        location: Joi.string().allow(null, "").trim().regex(/^$|^[a-zA-Z,\s]+$/).optional().error(errors => {
            return {message: "The format is not correct"}
        }),
        language: Joi.string().trim().optional().error(errors => {
            return {message: "Language is required"}
        }),
        gender: Joi.string().trim().optional().error(errors => {
            return {message: "Gender is required"}
        }),

        profile_image: Joi.allow("").optional(),
        cover_image: Joi.allow("").optional()

    };
    handleSubmitProfile = (event) => {
        event.preventDefault();
        const errors = this.validateUserProfile();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit(event);

    }

    componentDidMount() {
        this.props.getUser();
        Joi.validate(this.state, this.schema)
    }

    handleImageClick = event => {
        this.hiddenFileInput.current.click();
    };
    doSubmit = event => {
        event.preventDefault();
        this.props.addProfile(this.props.user, this.props, "editProfile");

    };

    doImageSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append("profile_image", e.target.files[0], e.target.files[0].name);
        fd.append("image_type", 'profile');
        this.props.addProfilePicture(fd, this.props);
    };


    render() {
        return (
            <div>
                <div className="page my-page">
                    <div className="page__content">
                        <div className="main-wrapper">
                            <SettingsDrawer/>
                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                                <div className="container l">
                                    <header className="mb4 db">
                                        <h1 className="bold">My Account</h1>
                                    </header>
                                    <div className="shadow border rounded-sm db pa3">
                                        <header className="mb4">
                                            <h3 className="bold">My Profile</h3>
                                        </header>
                                        <div className="row">
                                            <div className="col s12 m6 push-6">
                                                <div className="shadow border rounded-sm db pa3 w-90-l mb3">
                                                    <h6 className="bold pb3">PROFILE PICTURE</h6>
                                                    <div className="flex items-center flex-wrap">
                                                        <div className="mb2">
                                                            <figure className="img-avatar l ma0">
                                                                <img className="img-cover round w-100"
                                                                     src={this.props.user && this.props.user.profile_image ? this.props.user.profile_image : "/static/user_avatar.svg"}
                                                                     alt=""/>
                                                            </figure>
                                                        </div>
                                                        <div className="ml2">
                                                            <button className="btn btn-sm btn-outline gray"
                                                                    onClick={event => this.handleImageClick(event)}>
                                                                <i className="material-icons" style={{color: '#0258ff'}}
                                                                >file_upload</i>
                                                                UPLOAD PHOTO
                                                            </button>
                                                            <input
                                                                type="file"
                                                                ref={this.hiddenFileInput}
                                                                onChange={this.doImageSubmit}
                                                                accept=".jpg, .png, .jpeg"
                                                                id="user-profile-picture-personal-info"
                                                                style={{display: 'none'}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s12 m6 pull-6">
                                                <div className="w-90-l">
                                                    <div className="mb3">
                                                        <NoLabelTextfield placeholder="Enter your first name"
                                                                          label="FIRST NAME"
                                                                          type="text"
                                                                          onChange={this.handleChangeUser}
                                                                          name="first_name"
                                                                          value={this.props.user && this.props.user.first_name ? this.props.user.first_name : ""}
                                                                          error={this.state.errors.first_name}
                                                        />
                                                    </div>
                                                    <div className="mb3">
                                                        <NoLabelTextfield placeholder="Enter your last name"
                                                                          label="LAST NAME"
                                                                          type="text"
                                                                          onChange={this.handleChangeUser}
                                                                          name="last_name"
                                                                          value={this.props.user && this.props.user.last_name ? this.props.user.last_name : ""}
                                                                          error={this.state.errors.last_name}
                                                        />
                                                    </div>
                                                    <div className="mb3">
                                                        <NoLabelTextfield placeholder="Enter your email ID"
                                                                          label="EMAIL"
                                                                          type="text"
                                                                          name="email"
                                                                          onChange={this.handleChangeUser}
                                                                          value={this.props.user && this.props.user.email}
                                                                          error={this.state.errors.email}
                                                        />
                                                    </div>
                                                    <div className="mb3">
                                                        <NoLabelTextfield placeholder="Enter your phone number"
                                                                          label="PHONE"
                                                                          type="tel"
                                                                          name="phone"
                                                                          onChange={this.handleChangeUser}
                                                                          value={this.props.user && this.props.user.phone}
                                                                          error={this.state.errors.phone}

                                                        />
                                                    </div>
                                                    <div className="mt4 mb3">
                                                        <button className="btn btn-primary btn-lg"
                                                                disabled={Object.keys(this.state.errors).length > 0 ? true : ""}
                                                                onClick={(e) => this.handleSubmitProfile(e)}>
                                                            UPDATE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <SmartFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default withRouter(connect(mapStateToProps, {getUser, addProfilePicture, addProfile, setUserInfo})(MyProfile))
