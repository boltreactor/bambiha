import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import SimpleTextfield from "../../reusable-components/simple-textfield";
import {addProfilePicture} from "../../actions/authentication";
import {addProfile, getUser, setUserInfo} from "../../actions/profile";
import Joi from "joi-browser";
import Form from "../../reusable-components/form";
import Calender from "../../reusable-components/datepicker";
import Select from "../../reusable-components/select";
import {TextareaAutosize} from '@material-ui/core';


class EditPersonalInfo extends Form {

    componentDidMount() {
        this.props.getUser();
        Joi.validate(this.state, this.schema)
    }


    schema = {
        email: Joi.string().trim().email().regex(/[^$|\s+]/).allow(null).optional().error(errors => {
            return {message: "Enter a valid email"};
        }),
        first_name: Joi.string().trim().required().error(errors => {
            return {message: "First Name is required"};
        }),
        last_name: Joi.string().trim().required().error(errors => {
            return {message: "Last Name is required"};
        }),
        account_type: Joi.allow("").optional(),
        phone: Joi.string().allow("", null).trim().regex(/^$|^[0-9]{11}$/).optional().error(errors => {
            return {message: "The format is not correct"}
        }),
        date_of_birth: Joi.string().trim().required().error(errors => {
            return {message: "Birthday is required"};
        }),
        about: Joi.string().trim().required().error(errors => {
            return {message: "About is required"};
        }),
        location: Joi.string().allow(null, "").trim().regex(/^$|^[a-zA-Z,\s]+$/).optional().error(errors => {
            return {message: "The format is not correct"}
        }),
        language: Joi.string().trim().required().error(errors => {
            return {message: "Language is required"}
        }),
        gender: Joi.string().trim().required().error(errors => {
            return {message: "Gender is required"}
        }),

        profile_image: Joi.allow("").optional(),
        cover_image: Joi.allow("").optional()

    };

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            selectedDate: new Date(''),
            gender: '',
            language: [],
            data: {}

        }
    }

    doImageSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append("profile_image", e.target.files[0], e.target.files[0].name);
        fd.append("image_type", 'profile');
        this.props.addProfilePicture(fd, this.props);
    };

    handleChangeUser = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        this.setState({errors}, () => {
            if (Object.keys(this.state.errors).length > 0) {
                console.log(this.state.errors)
            }
        });
        const user = {...this.props.user, [input.name]: input.value};
        this.props.setUserInfo(user)
    };


    doSubmit = event => {
        event.preventDefault();
        this.props.addProfile(this.props.user, this.props, "editProfile");

    };

    handleDateChange = (date, currentTarget) => {
        const errors = {...this.state.errors};
        const obj = {['date_of_birth']: currentTarget};
        const schema = {['date_of_birth']: this.schema['date_of_birth']};
        const {error} = Joi.validate(obj, schema);
        if (error) errors["date_of_birth"] = error.details[0].message;
        else delete errors["date_of_birth"];
        this.setState({errors}, () => {
            if (Object.keys(this.state.errors).length > 0) {
                console.log(this.state.errors)
            }
        });
        if (date !== null) {
            const formatedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            const user = {...this.props.user, date_of_birth: formatedDate};
            this.props.setUserInfo(user)
        }


    };
    handleGenderChange = (event) => {
        event.preventDefault();
        const errors = {...this.state.errors};
        const obj = {["gender"]: event.target.value};
        const schema = {["gender"]: this.schema["gender"]};
        const {error} = Joi.validate(obj, schema);
        if (error) errors["gender"] = error.details[0].message;
        else delete errors["gender"];
        this.setState({errors});
        const user = {...this.props.user, gender: event.target.value};
        this.props.setUserInfo(user)
    };

    handleChangeMultiple = (event) => {
        const {value} = event.target;
        const list = [];
        for (let i = 0, l = value.length; i < l; i += 1) {
            if (value[i]) {
                list.push(value[i]);
            }
        }
        const errors = {...this.state.errors};
        const languages = event.target.value.filter(Boolean);
        const languagesString = languages.toString();
        const obj = {[event.target.name]: languagesString};
        const schema = {[event.target.name]: this.schema[event.target.name]};
        const {error} = Joi.validate(obj, schema);
        if (error) errors[event.target.name] = error.details[0].message;
        else delete errors[event.target.name];
        this.setState({language: languages});
        this.setState({errors});
        const user = {...this.props.user, [event.target.name]: languagesString};
        this.props.setUserInfo(user)
        // const user = {...this.props.user, [event.target.name]: languagesString};
        // this.props.setUserInfo(user)
    };

    render() {
        return (
            <main className="page">
                <div className="page__content">
                    {/* */}
                    <div className="drawer-frame-adaptive">
                        <div className="drawer">
                            <div className="drawer__content-wrapper">
                                <div className="drawer__content-inner">
                                    <div className="drawer__content">
                                        <div className="mdc-drawer__content display-flex flex--column">
                                            <div className="flex__grow-1">
                                                <nav className="mdc-list" style={{marginTop: '16px'}}
                                                     data-mdc-auto-init="MDCList">
                                                    <Link to="/settings" className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">account_circle</i>
                                                        Home
                                                    </Link>
                                                    <Link to="/settings/personal-info"
                                                          className="mdc-list-item mdc-list-item--activated mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple" aria-current="page">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">contacts</i>
                                                        Personal info
                                                    </Link>
                                                    <Link to="/settings/security"
                                                          className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">security</i>
                                                        Security
                                                    </Link>
                                                    <Link to="/settings/payments-&-payouts"
                                                          className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">payment</i>
                                                        Payments & Payouts
                                                    </Link>
                                                    <Link to="/settings/notifications"
                                                          className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">notifications</i>
                                                        Notifications
                                                    </Link>
                                                    <Link to="/help-center" className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons mdc-list-item__graphic"
                                                           aria-hidden="true">help_outline</i>
                                                        Help & Support
                                                    </Link>
                                                </nav>
                                            </div>
                                            <footer>
                                                <Link to="#"> Privacy & Terms </Link> .
                                                <Link to="#"> Help </Link>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* */}
                        <div className="content content--settings">
                            <div className="container">
                                <div className="container__content">
                                    {/* */}
                                    <div className="content__header">
                                        {/* */}
                                        <div className="text-center">
                                            <div className="mdc-typography--headline5"
                                                 style={{margin: '24px auto 16px'}}>
                                                Personal info
                                            </div>
                                            <div className="mdc-typography--body1" style={{margin: '16px auto'}}>
                                                Basic info, like your name and photo, that you use on services
                                            </div>
                                        </div>
                                    </div>
                                    {/* */}
                                    <div className="content__body">
                                        {/* */}
                                        <div className="mdc-layout-grid" style={{paddingTop: 0}}>
                                            <div className="mdc-layout-grid__inner">
                                                {/* */}
                                                <div
                                                    className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                                                    <div className="panel panel-default mb3">
                                                        <div className="panel__content mb3">
                                                            <div className="mdc-typography--headline6">
                                                                Profile
                                                                <span className="text-error" style={{
                                                                    fontSize: '18px',
                                                                    verticalAlign: 'middle'
                                                                }}>*</span>
                                                                <span className="text-error" style={{
                                                                    textTransform: 'lowercase',
                                                                    fontSize: '12px'
                                                                }}> required </span>
                                                            </div>
                                                            <div className="mdc-typography--body2 mb2"
                                                                 style={{paddingTop: '8px'}}>
                                                                Some info may be visible to other people
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center">
                                                                <div className="display-flex__first-item">
                                                                    <div className="avatar avatar--xlarge">
                                                                        {this.props.user && this.props.user.profile_image ?
                                                                            <img src={this.props.user.profile_image}
                                                                                 height={50}
                                                                                 alt=""/> : this.props.user && this.props.user.first_name && this.props.user.first_name.slice(0, 1)}
                                                                        <div className="avatar__cover">
                                                                            <label
                                                                                htmlFor="user-profile-picture-personal-info">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                     width={24}
                                                                                     height={24} viewBox="0 0 24 24"
                                                                                     style={{
                                                                                         display: 'block',
                                                                                         margin: '3px auto'
                                                                                     }}>
                                                                                    <path fill="none"
                                                                                          d="M0 0h24v24H0z"/>
                                                                                    <path fill="#dbdbdc"
                                                                                          d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"/>
                                                                                </svg>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <input
                                                                        type="file"
                                                                        onChange={this.doImageSubmit}
                                                                        accept=".jpg, .png, .jpeg"
                                                                        id="user-profile-picture-personal-info"
                                                                        style={{display: 'none'}}/>
                                                                </div>
                                                                <div className="flex__grow-1 ">
                                                                    <div className={"mb2"}>
                                                                        <SimpleTextfield
                                                                            type="text"
                                                                            name="first_name"
                                                                            onChange={this.handleChangeUser}
                                                                            value={this.props.user.first_name}
                                                                            label="First Name"
                                                                            error={this.state.errors.first_name}/>
                                                                    </div>
                                                                    <div className={"mb2"}>
                                                                        <SimpleTextfield
                                                                            type="text"
                                                                            onBlur={this.handleChangeUser}
                                                                            name="last_name"
                                                                            onChange={this.handleChangeUser}
                                                                            value={this.props.user && this.props.user.last_name ? this.props.user.last_name : ""}
                                                                            label="Last Name"
                                                                            error={this.state.errors.last_name}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item">
                                                                    <div className="mdc-typography--button1"
                                                                         style={{width: '112px'}}>
                                                                        Birthday
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">
                                                                    <Calender
                                                                        value={this.props.user && this.props.user.date_of_birth ? this.props.user.date_of_birth : null}
                                                                        name="date_of_birth" required
                                                                        onChange={this.handleDateChange}
                                                                        error={this.state.errors.date_of_birth}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item"
                                                                     style={{width: '112px'}}>
                                                                    <div className="mdc-typography--button1">
                                                                        Gender
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">
                                                                    <Select
                                                                        type="text"
                                                                        name="gender"
                                                                        onChange={this.handleGenderChange}
                                                                        value={this.props.user && this.props.user.gender ? this.props.user.gender : ""}
                                                                        label="Gender"
                                                                        error={this.state.errors.gender}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item"
                                                                     style={{width: '112px'}}>
                                                                    <div className="mdc-typography--button1">
                                                                        Language preference
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">
                                                                    <SimpleTextfield
                                                                        type="text"
                                                                        name="language"
                                                                        onChange={this.handleChangeUser}
                                                                        value={this.props.user && this.props.user.language ? [this.props.user.language] : ""}
                                                                        label="Language"
                                                                        error={this.state.errors.language}/>
                                                                    {/*<Select*/}
                                                                    {/*  type="text"*/}
                                                                    {/*  name="language"*/}
                                                                    {/*  onChange={this.handleChangeMultiple}*/}
                                                                    {/*  value={this.props.user && this.props.user.language ? [this.props.user.language] : ""}*/}
                                                                    {/*  label="Language"*/}
                                                                    {/*  error={this.state.errors.language}*/}
                                                                    {/*  options={this.state.language}*/}
                                                                    {/*/>*/}

                                                                </div>
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item"
                                                                     style={{width: '112px'}}>
                                                                    <div className="mdc-typography--button1">
                                                                        About
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">

                                                                    <label
                                                                        className="mdc-text-field mdc-text-field--textarea"
                                                                        data-mdc-auto-init="MDCTextField">
                                                                        {/*<span className="mdc-floating-label" id="about">About me</span>*/}
                                                                    </label>
                                                                    <TextareaAutosize
                                                                        rowsMin={6}
                                                                        aria-label="maximum height"
                                                                        onChange={this.handleChangeUser}
                                                                        id={"about"}
                                                                        onBlur={this.handleChangeUser}
                                                                        name={"about"}
                                                                        maxLength={140}
                                                                        cols={76}
                                                                        value={this.props.user && this.props.user.about ? this.props.user.about : ""}

                                                                    />

                                                                    {/*<textarea className="mdc-text-field__input" aria-labelledby="my-label-id" rows={4}*/}
                                                                    {/*          cols={40} maxLength={140}*/}
                                                                    {/*          name="about"*/}
                                                                    {/*          onChange={this.handleChangeUser}*/}
                                                                    {/*          value={this.props.user && this.props.user.about ? this.props.user.about : ""}*/}
                                                                    {/*/>*/}
                                                                    {/*                                    <span className="mdc-notched-outline">*/}
                                                                    {/*  <span className="mdc-notched-outline__leading"/>*/}
                                                                    {/*  <span className="mdc-notched-outline__notch">*/}

                                                                    {/*  </span>*/}
                                                                    {/*  <span className="mdc-notched-outline__trailing"/>*/}
                                                                    {/*</span>*/}

                                                                    <div className="mdc-text-field-helper-line">
                                                                        {this.state.errors.about}
                                                                        <div className="mdc-text-field-helper-text"
                                                                             id="my-helper-id" aria-hidden="true"/>
                                                                        <div
                                                                            className="mdc-text-field-character-counter">{this.props.user && this.props.user.about ? this.props.user.about.replace(/\s+/g, '').length : 0}
                                                                            / 140
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* */}
                                                <div
                                                    className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                                                    <div className="panel panel-default">
                                                        <div className="panel__content" style={{paddingBottom: '24px'}}>
                                                            <div className="mdc-typography--headline6 mb2">
                                                                Contact info
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item"
                                                                     style={{width: '112px'}}>
                                                                    <div className="mdc-typography--button1">
                                                                        Email
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">
                                                                    <SimpleTextfield
                                                                        type="text"
                                                                        name="email"
                                                                        onChange={this.handleChangeUser}
                                                                        value={this.props.user && this.props.user.email}
                                                                        label="Email"
                                                                        error={this.state.errors.email}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item"
                                                                     style={{width: '112px'}}>
                                                                    <div className="mdc-typography--button1">
                                                                        Phone
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">
                                                                    <SimpleTextfield
                                                                        type="tel"
                                                                        name="phone"
                                                                        onBlur={this.handleChangeUser}
                                                                        onChange={this.handleChangeUser}
                                                                        value={this.props.user && this.props.user.phone}
                                                                        label="Phone"
                                                                        error={this.state.errors.phone}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="display-flex display-flex--sm align-items--center mb2">
                                                                <div className="display-flex__first-item"
                                                                     style={{width: '112px'}}>
                                                                    <div className="mdc-typography--button1">
                                                                        Location
                                                                    </div>
                                                                </div>
                                                                <div className="flex__grow-1">
                                                                    <SimpleTextfield
                                                                        type="text"
                                                                        onBlur={this.handleChangeUser}
                                                                        name="location"
                                                                        onChange={this.handleChangeUser}
                                                                        value={this.props.user && this.props.user.location ? this.props.user.location : ""}
                                                                        label="Location"
                                                                        error={this.state.errors.location}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* */}
                                        <div style={{padding: '16px 16px 24px 0', textAlign: 'right'}}>
                                            <button className="mdc-button mdc-bu mr3"
                                                    onClick={this.props.history.goBack}><span
                                                className="mdc-button__ripple"/> Cancel
                                            </button>
                                            <button className="mdc-button mdc-button--unelevated"
                                                    disabled={Object.keys(this.state.errors).length > 0 ? true : ""}
                                                    onClick={this.handleSubmit}><span
                                                className="mdc-button__ripple"/> Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
});

export default withRouter(connect(mapStateToProps, {
    addProfilePicture,
    setUserInfo,
    addProfile,
    getUser
})(EditPersonalInfo));
