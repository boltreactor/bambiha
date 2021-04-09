import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import {addCategory, editCategory, getCategory} from "../actions/admin";
import {connect} from 'react-redux';
import NoLabelTextfield from "../reusable-components/material-io/no-label-textfield";
import Select from "@material-ui/core/Select";
import {InputLabel, MenuItem} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Joi from "joi-browser";
import Form from "../reusable-components/form";


class NewCategory extends Form {
    constructor(props) {
        super(props);

        this.props.match.params.id !== 'new' && this.props.getCategory(this.props.match.params.id)
        this.state = {
            category: "",
            data: {
                name: "",
                status: 1,
            },
            categoryId: this.props.match.params.id,
            selected: "enable",
            errors: {}
        }
    }

    schema = {
        name: Joi.string().required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "any.empty":
                        return {message: "Category is required"};
                }
            })
        }),
        user_key: Joi.allow("").optional(),
        id: Joi.allow("").optional(),
        status: Joi.allow("").optional(),
        date: Joi.allow("").optional(),

    }
    handleStatus = (event) => {
        event.preventDefault()
        const data = this.state.data
        data["status"] = event.target.value === "enable" ? 1 : 0
        this.setState({data})
    }
    addToCategory = () => {
        debugger
        const category = this.state.data.name
        const id = this.props.match.params.id
        const status = id === undefined ? this.state.data.status === "enable" ? 1 : 0 : this.state.data.status
        id === undefined ? this.props.addCategory(category, this.props) : this.props.editCategory(id, category, status, this.props)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id && this.props.category.name !== undefined && prevProps !== this.props) {
            let data = {
                name: this.props.category.name,
                status: this.props.category.status
            }
            // this.props.match.params.id && prevProps !== this.props &&
            this.setState({data: data})
        }
    }

    render() {
        const status = [
            'enable',
            'disable',
        ];
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* Add Category */}
                        <section className="container s mt4" style={{maxWidth: '420px'}}>
                            <header className="mt4 mb2 tc">
                                <h3 className="bold">Add new category</h3>
                                <p>
                                    Manually add new category
                                </p>
                            </header>
                            <div className="mv4">
                                <NoLabelTextfield
                                    type="text"
                                    name="name"
                                    label="Category name"
                                    error={this.state.errors.name}
                                    onChange={this.handleChange}
                                    value={this.state.data.name ? this.state.data.name : ''}/>

                                {this.props.match.params.id && <FormControl style={{
                                    minWidth: 325,
                                    // marginLeft: "10px",
                                    marginTop: "20px"
                                }}>
                                    <InputLabel
                                        id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="Enable/Disable"
                                        id="Enable/Disable"
                                        value={this.state.data.status === 1 ? "enable" : "disable"}
                                        onChange={this.handleStatus}>
                                        {status.map((values) => (
                                            <MenuItem key={values}
                                                      value={values}>
                                                {values}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>}

                                <div className="mt4 mb4">
                                    <button className="btn btn-primary btn-lg" disabled={this.validateProduct()}
                                            onClick={this.addToCategory}>
                                        <i className="v-mid material-icons mr1"
                                           style={{fontSize: '18px'}}>lock</i> Add
                                    </button>
                                    <Link to="/admin/categories" className="link-mute">
                                        <button className="btn btn-outline-primary btn-lg ml3">
                                            CANCEL
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    category: state.admin.category
})

export default connect(mapStateToProps, {addCategory, editCategory, getCategory})(NewCategory);