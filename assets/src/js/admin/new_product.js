import React, {Component, Fragment} from "react";
import {withRouter, Link} from 'react-router-dom';
import Form from "../reusable-components/form"
import Joi from "joi-browser";
import NoLabelTextfield from "../reusable-components/material-io/no-label-textfield";
import {addProduct, editProduct, getProduct, getAllCategories, imagesToDelete} from "../actions/admin";
import {connect} from "react-redux";
import Select from "../reusable-components/select";
import NewSelect from "../reusable-components/new-select";

class NewProduct extends Form {
    constructor(props) {
        super(props);
        this.props.match.params.id && this.props.getProduct(this.props.match.params.id)
        this.props.getAllCategories()
        this.state = {
            errors: {},
            data: {
                title: "",
                category_key: '',
                desc: "",
                quantity: "",
                price: "",
                status: 1,
                images: []
            },
            state_images: [],
            product_id: this.props.match.params.id
        }
        this.hiddenFileInput = React.createRef();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (this.props.match.params.id && this.props.product.title !== undefined && prevProps !== this.props) {
            debugger
            let data = {
                title: this.props.product.title,
                category_key: this.props.product.category,
                desc: this.props.product.description,
                quantity: this.props.product.quantity.toString(),
                price: this.props.product.price.toString(),
                status: this.props.product.product_status,
                images: []
            }
            this.setState({data: data})
        }
    }

    handleDeleteImageState = (event, image) => {
        event.preventDefault();
        let state_images = this.state.state_images.filter(i => i !== image);
        this.setState({state_images})
    };
    handleDeleteImageProp = (event, image) => {
        event.preventDefault()
        this.props.imagesToDelete(image)
    };

    handleImageClick = (event) => {
        event.preventDefault()
        this.hiddenFileInput.current.click();
    }
    handleCategoryChange = (event) => {
        event.preventDefault();
        const errors = {...this.state.errors};
        const name = event.target.name
        const obj = {[name]: event.target.value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        if (error) errors[name] = error.details[0].message;
        else delete errors[name];
        const data = {...this.state.data};
        data[event.target.name] = event.target.value;
        this.setState({data, errors})

    };


    doSubmit = (event) => {
        event.preventDefault()
        let fd = new FormData();
        let category_key = this.state.data.category_key
        for (let i = 0; i < this.state.state_images.length; i++) {
            fd.append("images", this.state.state_images[i], this.state.state_images[i].name);
        }
        fd.append("delete_images", this.props.delete_product_images);
        fd.append("title", this.state.data.title);
        fd.append("description", this.state.data.desc);
        fd.append("quantity", this.state.data.quantity);
        fd.append("price", this.state.data.price);
        fd.append("status", this.state.data.status);
        fd.append("category_key", `${this.props.categories.find(function (category) {
            return category.name === category_key;
        }).id}`);
        this.props.match.params.id && fd.append("product_key", this.props.match.params.id);
        this.props.match.params.id ? this.props.editProduct(fd, this.props) : this.props.addProduct(fd, this.props)
    }


    imageChange = (e) => {
        e.preventDefault();
        let state_images = [...this.state.state_images, ...e.target.files]
        this.setState({state_images});
        e.target.value = ''

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
        category_key: Joi.string().required().error(errors => {
            debugger
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
        quantity: Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "Quantity is required"};
                    case "any.required":
                        return {message: "Quantity is required"};
                    case "any.empty":
                        return {message: "Quantity is required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }), price: Joi.string().trim().regex(/^[0-9]+$/).required().error(errors => {
            return errors.map(error => {
                switch (error.type) {
                    case "string.base":
                        return {message: "Price is required"};
                    case "any.required":
                        return {message: "Price is required"};
                    case "any.empty":
                        return {message: "Price is required"};
                    case "string.regex.base":
                        return {message: "Invalid"};
                }
            })
        }),
        images: Joi.allow("").optional(),
        status: Joi.allow("").optional(),
    };

    getCategoriesList = () => {
        var dict = [];
        for (var i = 0; i < this.props.categories.length; i++) {
            if (this.props.categories[i].status === 1)
                dict.push({
                    "value": this.props.categories[i].name,
                    "key": this.props.categories[i].id
                });
        }
        return dict
    }

    render() {
        const {product_id} = this.state
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
                                <form className="row" onSubmit={event => this.doSubmit(event)}
                                      encType="multipart/form-data">
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="title" label="Product Title" autocomplete="off"
                                            // value={this.state.data.title === "" ? product_id && this.props.product ? this.props.product.title : "" : this.state.data.title}
                                                          value={this.state.data.title}
                                                          placeholder="Enter product title"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.title}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <label className="label-text bold">Product Category <i
                                            className="material-icons red" style={{fontSize: "7px"}}>star</i>
                                        </label>
                                        <NewSelect
                                            placeholder="Enter category name"
                                            data={this.getCategoriesList()}
                                            name="category_key"
                                            value={this.state.data.category_key}
                                            onChange={this.handleCategoryChange}
                                        />

                                    </div>


                                    {/*<Select*/}
                                    {/*    id="category_key"*/}
                                    {/*    type="text"*/}
                                    {/*    name="category_key"*/}
                                    {/*    options={this.getCategoriesList()}*/}
                                    {/*    onChange={this.handleCategoryChange}*/}
                                    {/*    value={this.state.data.title === "" ? product_id && this.props.product ? this.props.product.category : "" : this.state.data.category_key}*/}
                                    {/*    error={this.state.errors.category_key}*/}
                                    {/*/>*/}


                                    <div className="col s12 mb3">
                                        <NoLabelTextfield name="desc" label="Product Description" autocomplete="off"
                                                          value={this.state.data.desc}
                                                          placeholder="Enter product description"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.desc}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="quantity" label="Product Quantity" autocomplete="off"
                                                          value={this.state.data.quantity}
                                                          placeholder="Enter product quantity"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.quantity}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="price" label="Price" autocomplete="off"
                                                          value={this.state.data.price}
                                                          placeholder="Enter product price"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.price}/>
                                    </div>
                                    <div className="col s12 mb3">
                                        <div className="mv3">
                                            <div className="border-dotted rounded-xs mb3">
                                                <div className="ma3">
                                                    <div className="upload-data">
                                                        <div className="flex items-center flex-wrap">
                                                            <div className="mv2">
                                                                <div style={{
                                                                    color: '#082244',
                                                                    fontFamily: 'var(--font-family-montserrat)'
                                                                }}> {/*Drop files here or */} Upload files
                                                                    manually by
                                                                    clicking <strong><span>Upload Image</span></strong> button
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 mv2 tr">
                                                                <button className="btn btn-primary btn-lg ml3"
                                                                        onClick={event => this.handleImageClick(event)}>
                                                                    <i className="v-mid material-icons mr1"
                                                                       style={{fontSize: '18px'}}>cloud_upload</i> UPLOAD
                                                                    IMAGE
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                ref={this.hiddenFileInput}
                                                onChange={event => this.imageChange(event)}
                                                accept=".jpg, .png, .jpeg"
                                                id="images"
                                                name='images'
                                                multiple={true}
                                                style={{display: 'none'}}/>
                                            <div className="media-images-gallery hide-scrollbar">
                                                <div className="h-auto overflow-auto"
                                                     style={{overflowX: 'hidden'}}>
                                                    <ul className="pl0 pr0 dib w-100">
                                                        {this.state.state_images.length > 0 ? this.state.state_images.map((image, index) => {
                                                            return <li
                                                                // className="photos__cell"
                                                                key={index}>
                                                                <figure>
                                                                    <img
                                                                        src={URL.createObjectURL(image)}
                                                                        style={{
                                                                            minHeight: '124px',
                                                                            width: '100%',
                                                                            height: '135px'
                                                                        }} alt=""/>
                                                                </figure>
                                                                {/*<div className="photos__menu">*/}
                                                                <button className="btn round"
                                                                        onClick={(e) => this.handleDeleteImageState(e, image)}>
                                                                    <i className="material-icons-outlined"
                                                                       style={{color: '#fff'}}>delete</i>
                                                                </button>
                                                                {/*</div>*/}
                                                            </li>
                                                        }) : null}
                                                        {product_id !== null && product_id !== undefined && Object.keys(this.props.product).length !== 0 && this.props.product.images.length > 0 ? this.props.product_images.map((image, index) => {
                                                            return <li
                                                                // className="photos__cell"
                                                                key={index}>
                                                                <figure>
                                                                    <img
                                                                        src={image}
                                                                        style={{
                                                                            minHeight: '124px',
                                                                            width: '100%',
                                                                            height: '135px'
                                                                        }} alt=""/>
                                                                </figure>
                                                                <button className="btn round"
                                                                        onClick={(e) => this.handleDeleteImageProp(e, image)}>
                                                                    <i className="material-icons-outlined"
                                                                       style={{color: '#fff'}}>delete</i>
                                                                </button>

                                                            </li>
                                                        }) : null}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12 mb3">

                                        <button className="btn btn-primary btn-lg"
                                                disabled={this.validateProduct()}
                                                onClick={event => this.doSubmit(event)}
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

const mapStateToProps = (state) => ({
    categories: state.admin.categories,
    product: state.admin.product,
    product_images: state.admin.product_images,
    delete_product_images: state.admin.delete_product_images
});


export default withRouter(connect(mapStateToProps, {
    addProduct,
    editProduct,
    getProduct,
    getAllCategories,
    imagesToDelete
})(NewProduct));