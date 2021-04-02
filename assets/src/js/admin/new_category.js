import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import {addCategory, editCategory, getCategory} from "../actions/admin";
import {connect} from 'react-redux';
import NoLabelTextfield from "../reusable-components/material-io/no-label-textfield";
import Select from "@material-ui/core/Select";
import {InputLabel, MenuItem} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.props.getCategory(this.props.match.params.id)
        this.state = {
            category: "",
            categoryId: this.props.match.params.id,
            selected: "enable",
        }
    }

    handleStatus = (event) => {
        event.preventDefault()
        debugger
        this.setState({selected: event.target.value})
    }


    handleNameChange = ({currentTarget: input}) => {
        this.setState({category: input.value})
    }

    addToCategory = () => {
        const category = this.state.category
        const id = this.props.match.params.id
        const status = this.state.selected === "enable" ? 1 : 0
        id === undefined ? this.props.addCategory(category, this.props) : this.props.editCategory(id, category, status, this.props)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.props.match.params.id && nextProps.category && this.setState({category: nextProps.category.name})
        // && this.props.category.status === 1 ? this.setState({selected: "disable"}) : this.setState({selected: "enable"})

    }


    // componentDidMount() {
    //     const categoryId = this.props.match.params.id
    //     this.setState({categoryId})
    //     this.props.getCategory(categoryId)
    //     this.props.getAllCategories()
    //     const categories=[...this.props.categories]
    //     console.log(categories)
    //     this.setState({categories})
    //     const obj = this.props.categories.filter(category => (
    //         this.props.match.params.id === category.id
    //     ))
    //     console.log(this.props.category)
    //     const category = this.props.category
    //     category !== undefined && this.setState({category: category.name})
    // }

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
                                    name="Category Name"
                                    label="Category name"
                                    onChange={this.handleNameChange}
                                    value={this.state.category ? this.state.category : ''}/>

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
                                        value={this.state.selected}
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
                                    <button className="btn btn-primary btn-lg" onClick={this.addToCategory}>
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