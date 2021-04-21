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
        country: Joi.string().trim().required().error(errors => {
            return {message: "Country is required"};
        }),
        vat_id: Joi.string().trim().required().error(errors => {
            return {message: "VAT ID is required"};
        }),
        name_vat_registration: Joi.string().trim().required().error(errors => {
            return {message: "Name on registration is required"};
        }),
        address_line: Joi.string().trim().required().error(errors => {
            return {message: "Address Line is required"};
        }),
        city: Joi.string().trim().required().error(errors => {
            return {message: "City is required"};
        }),
        province: Joi.string().trim().required().error(errors => {
            return {message: "Province/Region is required"};
        }),
        zip_code: Joi.string().trim().required().error(errors => {
            return {message: "Zip code is required"};
        }),
    }


    handleChangeText = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];


        this.setState({errors})
        //     ,
        //     () => {
        //     if (Object.keys(this.state.errors).length > 0) {
        //         // console.log(this.state.errors)
        //     }
        // });
        this.setState({...this.state, data: {...this.state.data, [input.name]: input.value}})
    };


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
                                        onChange={this.handleChangeText}
                                        placeholder={"Enter country or region"}/>
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"vat_id"}
                                        label={"ADD VAT ID NUMBER"}
                                        error={this.state.errors.vat_id}
                                        value={this.state.data.vat_id}
                                        onChange={this.handleChangeText}
                                        placeholder={"Enter VAT ID number"}/>

                                </div>
                                <div className="col s12 mb3">
                                    <NoLabelTextfield
                                        name={"name_vat_registration"}
                                        value={this.state.data.name_vat_registration}
                                        label={"NAME ON REGISTRATION"}
                                        onChange={this.handleChangeText}
                                        error={this.state.errors.name_vat_registration}
                                        placeholder={"Enter name on registration"}/>
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"address_line"}
                                        value={this.state.data.address_line}
                                        label={"ADDRESS LINE"}
                                        error={this.state.errors.address_line}
                                        onChange={this.handleChangeText}
                                        placeholder={"E.g. Main St."}/>
                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"city"}
                                        value={this.state.data.city}
                                        label={"CITY"}
                                        error={this.state.errors.city}
                                        onChange={this.handleChangeText}
                                        placeholder={"Enter city"}/>

                                </div>
                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"province"}
                                        value={this.state.data.province}
                                        label={"PROVINCE/REGION"}
                                        error={this.state.errors.province}
                                        onChange={this.handleChangeText}
                                        placeholder={"Enter province or region"}/>

                                </div>

                                <div className="col s12 m6 mb3">
                                    <NoLabelTextfield
                                        name={"zip_code"}
                                        value={this.state.data.zip_code}
                                        error={this.state.errors.zip_code}
                                        label={"ZIP/POSTAL CODE"}
                                        onChange={this.handleChangeText}
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