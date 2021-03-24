import React, {Component, Fragment} from "react";
import {withRouter, Link} from 'react-router-dom';
import Form from "../reusable-components/form"
import OutlinedTextfield from "../reusable-components/outlined-textfield";
import {Label} from "@material-ui/icons";
import LabelTextfield from "../reusable-components/material-io/textfield";
import Joi from "joi-browser";
import NoLabelTextfield from "../reusable-components/material-io/no-label-textfield";
import {addProduct} from "../actions/admin";
import {connect} from "react-redux";

class NewProduct extends Form {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            data: {
                title: "",
                category: "",
                desc: "",
                quantity: "",
                price: "",
                images: []
            },
        }
        this.hiddenFileInput = React.createRef();

    }

    handleDeleteImageState = (event, image) => {
        event.preventDefault();
        const data = {...this.state.data}
        data["images"] = this.state.data.filter(i => i !== image);
        this.setState({data})
    };

    handleImageClick = (event) => {
        event.preventDefault()

        this.hiddenFileInput.current.click();
    }
    doSubmit = () => {

        let fd = new FormData();

        for (let i = 0; i < this.state.data.images.length; i++) {
            fd.append("images", this.state.data.images[i], this.state.data.images[i].name);
        }
        fd.append("title", this.state.data.title);
        fd.append("description", this.state.data.desc);
        fd.append("quantity", this.state.data.quantity);
        fd.append("price", this.state.data.price);
        fd.append("category_key", "ag5iYW1iaWhhLTMwNTEwN3IrCxIIQ2F0ZWdvcnkiCGNhdGVnb3J5DAsSCENhdGVnb3J5GICAgJiHlpgJDA");
        this.props.addProduct(fd, this.props)
    }


    imageChange = (e) => {

        e.preventDefault();
        const data = {...this.state.data}
        data["images"] = [...this.state.data.images, ...e.target.files]
        this.setState({data});
    };

    schema = {
        title: Joi.string().required().error(errors => {
            return errors.map(error => {

                switch (error.type) {
                    case "any.empty":
                        return {message: "Title is required"};
                }
            })
        }),
        category: Joi.string().required().error(errors => {
            return errors.map(error => {

                switch (error.type) {
                    case "any.empty":
                        return {message: "Category is required"};
                }
            })
        }),
        desc: Joi.string().required().error(errors => {

            return errors.map(error => {
                switch (error.type) {
                    case "any.empty":
                        return {message: "Description is required"};
                }
            })
        }),
        quantity: Joi.number().required().error(errors => {
            return errors.map(error => {

                switch (error.type) {
                    case "number.base":
                        return {message: "Quantity is required"};
                }
            })
        }), price: Joi.number().required().error(errors => {
            return errors.map(error => {

                switch (error.type) {
                    case "number.base":
                        return {message: "Price is required"};
                }
            })
        }),
        images: Joi.allow("").optional()
    };

    render() {
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        <section className="container s mt4" style={{maxWidth: '600px'}}>
                            <header className="mt4 mb2 tc">
                                <h3 className="bold">Add new product</h3>
                                <p>
                                    To setup your online store, you need to add products
                                </p>
                            </header>
                            <div className="mv4">
                                <form className="row" onSubmit={event => this.handleSubmitProduct(event)}
                                      encType="multipart/form-data">
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="title" label="Product Title"
                                                          value={this.state.data.title}
                                                          placeholder="Enter product title"
                                                          onChange={this.handleChange}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="category" label="Product Category"
                                                          value={this.state.data.category}
                                                          placeholder="Select product category"
                                                          onChange={this.handleChange}/>
                                    </div>
                                    <div className="col s12 mb3">
                                        <NoLabelTextfield name="desc" label="Product Description"
                                                          value={this.state.data.desc}
                                                          placeholder="Enter product description"
                                                          onChange={this.handleChange}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="quantity" label="Product Quantity"
                                                          value={this.state.data.quantity}
                                                          placeholder="Enter product quantity"
                                                          onChange={this.handleChange}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="price" label="Price"
                                                          value={this.state.data.price}
                                                          placeholder="Enter product price"
                                                          onChange={this.handleChange}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <div className="mv3">
                                            <button className="btn btn-dark btn-lg"
                                                    onClick={event => this.handleImageClick(event)}>
                                                <i className="material-icons-outlined v-mid mr2">add_a_photo</i>
                                                Add Photos
                                            </button>
                                            <input
                                                type="file"
                                                ref={this.hiddenFileInput}
                                                onChange={event => this.imageChange(event)}
                                                accept=".jpg, .png, .jpeg"
                                                id="images"
                                                name='images'
                                                style={{display: 'none'}}/>
                                            <div className="photos my2">
                                                {this.state.data.images.length > 0 ? this.state.data.images.map((image, index) => {
                                                    return <div
                                                        className="photos__cell"
                                                        key={index}>
                                                        <img
                                                            src={URL.createObjectURL(image)}
                                                            style={{
                                                                minHeight: '124px',
                                                                width: '100%',
                                                                height: '135px'
                                                            }} alt=""/>
                                                        <div className="photos__menu">
                                                            <button
                                                                className="button2 button2--icon"
                                                                onClick={(e) => this.handleDeleteImageState(e, image)}>
                                                                <i className="material-icons"
                                                                   style={{color: 'rgb(237, 239, 237)'}}>delete</i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                }) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 mt3 mb3">

                                            <button className="btn btn-primary btn-lg" disabled={this.validateProduct()}
                                                     onClick={event => this.handleSubmitProduct(event)}
                                            >
                                                ADD
                                            </button>

                                        <Link to="/admin/products" className="link-mute">
                                            <button className="btn btn-outline-primary btn-lg ml3">
                                                CANCEL
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({});


export default withRouter(connect(mapStateToProps, {
    addProduct
})(NewProduct));
