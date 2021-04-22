import React from 'react';
import NoLabelTextfield from "../../../reusable-components/material-io/no-label-textfield";
import Joi from "joi-browser";
import Form from "../../../reusable-components/form";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addVAT, updateVAT} from "../../../actions/payment";
import axios from "axios";

const Header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*",
    'Accept': 'application/json, text/plain',
};

class AddVat extends Form {

    state = {
        data: {},
        errors: {}
    }

    schema = {
        country: Joi.string().trim().regex(/^[a-zA-Z][a-zA-Z]*$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        vat_id: Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        name_vat_registration: Joi.string().trim().regex(/^[a-zA-Z][a-zA-Z]*$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        address_line: Joi.string().trim().required().error(errors => {
            return {message: "Address Line is required"};
        }),
        city:  Joi.string().trim().regex(/^[a-zA-Z][a-zA-Z]*$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        province: Joi.string().trim().regex(/^[a-zA-Z][a-zA-Z]*$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        zip_code: Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "required"};
                    case "any.required":
                        return {message: "required"};
                    case "any.empty":
                        return {message: "required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        })
    }

    add_vat = (event) => {
        event.preventDefault()
        this.props.addVat(this.state.data, this.props)
    }

    update_vat = (event) => {
        event.preventDefault()
        this.props.updateVAT(this.state.data, this.props)
    }

    componentDidMount() {
        if (this.props.match.params.vat_id) {
            Header["Authorization"] = `Token ${localStorage.getItem("token")}`;
            axios.get('/payment/get-vat-by-id/?id=' + this.props.match.params.vat_id, {headers: Header})
                .then(res => {
                    this.setState({
                        ...this.state, data: {
                            ...this.state.data,
                            "id": this.props.match.params.vat_id,
                            "country": res.data.vat.country,
                            "vat_id": res.data.vat.vat_no,
                            "name_vat_registration": res.data.vat.name_reg,
                            "address_line": res.data.vat.address_line,
                            "city": res.data.vat.city,
                            "province": res.data.vat.provence,
                            "zip_code": res.data.vat.zip_code,
                        }
                    })
                });
        }
    }


    render() {
        return (
            <div className="page my-page">
                <div className="page__content">
                    <section className="container s mt4" style={{maxWidth: '600px'}}>
                        <header className="mt4 mb2 tc">
                            <h3 className="bold">Add VAT ID Number</h3>
                            {/*
                              <p>
                                To get paid, you need to set up a payout method
                              </p>
                              */}
                        </header>
                        <div className="mv4">
                            <div className="row">
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"country"}
                                        label={"COUNTRY/REGION"}
                                        error={this.state.errors.country}
                                        value={this.state.data.country}
                                        onChange={this.handleChange}
                                        placeholder={"Enter country or region"}/>
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"vat_id"}
                                        label={"ADD VAT ID NUMBER"}
                                        error={this.state.errors.vat_id}
                                        value={this.state.data.vat_id}
                                        onChange={this.handleChange}
                                        placeholder={"Enter VAT ID number"}/>

                                </div>
                                <div className="col s12 mb3">
                                    <NoLabelTextfield
                                        name={"name_vat_registration"}
                                        value={this.state.data.name_vat_registration}
                                        label={"NAME ON REGISTRATION"}
                                        onChange={this.handleChange}
                                        error={this.state.errors.name_vat_registration}
                                        placeholder={"Enter name on registration"}/>
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"address_line"}
                                        value={this.state.data.address_line}
                                        label={"ADDRESS LINE"}
                                        error={this.state.errors.address_line}
                                        onChange={this.handleChange}
                                        placeholder={"E.g. Main St."}/>
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"city"}
                                        value={this.state.data.city}
                                        label={"CITY"}
                                        error={this.state.errors.city}
                                        onChange={this.handleChange}
                                        placeholder={"Enter city"}/>

                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"province"}
                                        value={this.state.data.province}
                                        label={"PROVINCE/REGION"}
                                        error={this.state.errors.province}
                                        onChange={this.handleChange}
                                        placeholder={"Enter province or region"}/>

                                </div>

                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"zip_code"}
                                        value={this.state.data.zip_code}
                                        error={this.state.errors.zip_code}
                                        label={"ZIP/POSTAL CODE"}
                                        onChange={this.handleChange}
                                        placeholder={"Enter zip or postal code"}/>
                                </div>
                                <div className="col s12 mt3 mb3">
                                    {this.props.match.params.vat_id ?
                                        <button className="btn btn-primary btn-lg"
                                                 disabled={this.validateProduct()}
                                                onClick={event => this.update_vat(event)}>
                                            UPDATE
                                        </button> :
                                        <button className="btn btn-primary btn-lg"
                                                 disabled={this.validateProduct()}
                                                onClick={event => this.add_vat(event)}>
                                            ADD
                                        </button>}

                                    <button className="btn btn-outline-primary btn-lg ml3"
                                            onClick={event => this.props.history.push('/account-settings/product-and-billings/taxes')}>
                                        CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}


export default withRouter(connect(null, {
    addVat: addVAT,
    updateVAT
})(AddVat));