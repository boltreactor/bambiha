import React, {Component, PureComponent} from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {},
        isHidden: true,
        new_profile: {},
        images: []
    };

    handleChangeProfile = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validatePropertyProfile(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        this.setState({errors});
        if (this.props.profile_id !== undefined) {
            const profile = {...this.props.user.profiles[this.props.profile_id], [input.name]: input.value};
            const p = [...this.props.user.profiles];
            p[this.props.profile_id] = profile;
            const user = {...this.props.user, profiles: p};
            this.props.setUserInfo(user)
        } else {
            const new_profile = {...this.props.new_profile, [input.name]: input.value};
            this.props.setProfileInfo(new_profile);
        }
    };

    handleChangeWeddingHall = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validatePropertyWeddingHall(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        this.setState({errors});
        if (this.props.wedding_hall_id !== null) {
            const wedding_hall = {
                ...this.props.user.wedding_halls[this.props.wedding_hall_id],
                [input.name]: input.value
            };
            const p = [...this.props.user.wedding_halls];
            p[this.props.wedding_hall_id] = wedding_hall;
            const user = {...this.props.user, wedding_halls: p};
            this.props.setUserInfo(user)
        } else {
            const new_wedding_hall = {...this.props.new_wedding_hall, [input.name]: input.value};
            this.props.setWeddingHallInfo(new_wedding_hall);
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
        if (this.props.profile_id !== undefined) {
            this.setState({errors});
            const profile = {...this.props.user.profiles[this.props.profile_id], ["gender"]: event.target.value};
            const p = [...this.props.user.profiles];
            p[this.props.profile_id] = profile;
            const user = {...this.props.user, profiles: p};
            this.props.setUserInfo(user);
        } else {
            const new_profile = {...this.props.new_profile, ["gender"]: event.target.value};
            this.props.setProfileInfo(new_profile);
        }
    };

    handleStatusChange = (event) => {
        event.preventDefault();
        const errors = {...this.state.errors};
        const obj = {["open_status"]: event.target.value};
        const schema = {["open_status"]: this.schema["open_status"]};
        const {error} = Joi.validate(obj, schema);
        if (error) errors["open_status"] = error.details[0].message;
        else delete errors["open_status"];
        if (this.props.wedding_hall_id !== null) {
            this.setState({errors});
            const wedding_hall = {
                ...this.props.user.wedding_halls[this.props.wedding_hall_id],
                ["open_status"]: event.target.value
            };
            const p = [...this.props.user.wedding_halls];
            p[this.props.wedding_hall_id] = wedding_hall;
            const user = {...this.props.user, wedding_halls: p};
            this.props.setUserInfo(user);
        } else {
            const new_wedding_hall = {...this.props.new_wedding_hall, ["open_status"]: event.target.value};
            this.props.setWeddingHallInfo(new_wedding_hall);
        }
    };


    validateUser = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            if (errors[item.path[0]] === 'profile') {
                errors[item.path[1]] = item.message;
            } else {
                errors[item.path[0]] = item.message;
            }
        console.log("validateUser", errors)
        return errors;
    }
    validateProduct = () => {

        const options = {abortEarly: false};
        console.log(this.state.data)
        
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            if (errors[item.path[0]] === 'profile') {
                errors[item.path[1]] = item.message;
            } else {
                errors[item.path[0]] = item.message;
            }
        console.log("validateUser", errors)
        return errors;
    }

    validateUserProfile = () => {
        const user = {
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            phone: this.props.user.phone,
            email: this.props.user.email
        }
        const options = {abortEarly: false};
        const {error} = Joi.validate(user, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            if (errors[item.path[0]] === 'profile') {
                errors[item.path[1]] = item.message;
            } else {
                errors[item.path[0]] = item.message;
            }
        console.log("validateUser", errors)
        return errors;
    }


    validate = () => {
        if (this.props.profile_id !== undefined && this.props.profile_id !== null) {
            const options = {abortEarly: false};
            const {error} = Joi.validate(this.props.user.profiles[this.props.profile_id], this.editSchema, options);
            if (!error) return null;
            const errors = {};
            for (let item of error.details)
                if (errors[item.path[0]] === 'profile') {
                    errors[item.path[1]] = item.message;
                } else {
                    errors[item.path[0]] = item.message;
                }
            return errors;
        } else {
            const options = {abortEarly: false};
            const {error} = Joi.validate(this.props.new_profile, this.schema, options);
            if (!error) return null;
            const errors = {};
            for (let item of error.details)
                if (errors[item.path[0]] === 'profile') {
                    errors[item.path[1]] = item.message;
                } else {
                    errors[item.path[0]] = item.message;
                }
            return errors;
        }
        ;
    }


    validatePropertyProfile = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        // const schema = {[name]:this.schema.profile[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    validatePropertyWeddingHall = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };


    validateProperty = ({name, value}) => {
        
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };
    handleSubmit = event => {
        event.preventDefault();
        const errors = this.validateUser();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit(event);
    };
    handleSubmitProduct = event => {
        event.preventDefault();
        const errors = this.validateProduct();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit(event);
    };
    handleChange = ({currentTarget: input}) => {
        
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors})
    };
    onIconClick = (event) => {
        event.preventDefault()
        this.setState({
            isHidden: !this.state.isHidden
        })
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

}

export default Form;
