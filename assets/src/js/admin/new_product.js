import React, {Component, Fragment} from "react";
import {withRouter, Link} from 'react-router-dom';
import Form from "../reusable-components/form"
import OutlinedTextfield from "../reusable-components/outlined-textfield";
import {Label} from "@material-ui/icons";
import LabelTextfield from "../reusable-components/material-io/textfield";
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
                category_key: "",
                desc: "",
                quantity: "",
                price: "",
                status: 1,
                images: []
            },
            product_id: this.props.match.params.id
        }
        this.hiddenFileInput = React.createRef();

    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.props.match.params.id && nextProps.product && this.setState({newProduct: nextProps.product})
    //
    // }

    // componentDidMount() {
    //     this.props.getProduct(this.props.match.params.id)
    //     this.props.getAllCategories()
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id && this.props.product.title !== undefined && prevProps !== this.props) {
            let data = {
                title: this.props.product.title,
                category_key: this.props.product.category,
                desc: this.props.product.description,
                quantity: this.props.product.quantity.toString(),
                price: this.props.product.price.toString(),
                status: this.props.product.product_status,
                // images: this.props.product.images,
                images: []
            }
            console.log(data)
            this.setState({data: data})
        }
    }

    handleDeleteImageState = (event, image) => {
        event.preventDefault();
        const data = {...this.state.data}
        data["images"] = this.state.data.images.filter(i => i !== image);
        this.setState({data})
    };
    handleDeleteImageProp = (event, image) => {
        event.preventDefault()
        this.props.imagesToDelete(image)
        console.log(image)

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
        for (let i = 0; i < this.state.data.images.length; i++) {
            fd.append("images", this.state.data.images[i], this.state.data.images[i].name);
        }
        console.log(this.props.delete_product_images.length)
        // for (let i = 0; i < this.props.delete_product_images.length; i++) {
        //     debugger
        //     // fd.append("delete_images", this.props.delete_product_images[i]
        //     //     // , this.props.delete_product_images[i].name
        //     // );
        // }
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
        // console.log(this.props.categories.find(function (category) {
        //     return category.name === category_key;
        // }).id)
        this.props.match.params.id ? this.props.editProduct(fd, this.props) : this.props.addProduct(fd, this.props)
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
        category_key: Joi.string().required().error(errors => {
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
            dict.push({
                "value": this.props.categories[i].name,
                "key": this.props.categories[i].id
            });
        }
        return dict
    }
    handleFieldChange = ({currentTarget: input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data})
    }


    render() {

        // console.log(this.state.newProduct)
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
                                        <NoLabelTextfield name="title" label="Product Title"
                                            // value={this.state.data.title === "" ? product_id && this.props.product ? this.props.product.title : "" : this.state.data.title}
                                                          value={this.state.data.title ? this.state.data.title : ""}
                                                          placeholder="Enter product title"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.title}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <label className="label-text bold">Product Category <i
                                            className="material-icons red" style={{fontSize: "7px"}}>star</i>
                                        </label>
                                            <NewSelect
                                                data={this.getCategoriesList()}
                                                value={this.state.data.title === "" ? product_id && this.props.product ? this.props.product.category : "" : this.state.data.category_key}
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
                                        <NoLabelTextfield name="desc" label="Product Description"
                                                          value={this.state.data.desc ? this.state.data.desc : ""}
                                                          placeholder="Enter product description"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.desc}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="quantity" label="Product Quantity"
                                                          value={this.state.data.quantity ? this.state.data.quantity : ""}
                                                          placeholder="Enter product quantity"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.quantity}/>
                                    </div>
                                    <div className="col s12 m6 mb3">
                                        <NoLabelTextfield name="price" label="Price"
                                                          value={this.state.data.price ? this.state.data.price : ""}
                                                          placeholder="Enter product price"
                                                          onChange={this.handleChange}
                                                          error={this.state.errors.price}/>
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
                                                multiple={true}
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
                                                {product_id !== null && product_id !== undefined && Object.keys(this.props.product).length !== 0 && this.props.product.images.length > 0 ? this.props.product_images.map((image, index) => {
                                                    return <div
                                                        className="photos__cell"
                                                        key={index}>
                                                        <img
                                                            src={image}
                                                            style={{
                                                                minHeight: '124px',
                                                                width: '100%',
                                                                height: '135px'
                                                            }} alt=""/>
                                                        <div className="photos__menu">
                                                            <button
                                                                className="button2 button2--icon"
                                                                onClick={(e) => this.handleDeleteImageProp(e, image)}>
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
