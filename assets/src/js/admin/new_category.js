import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import {addCategory,  editCategory, getCategory} from "../actions/admin";
import {connect} from 'react-redux';
import NoLabelTextfield from "../reusable-components/material-io/no-label-textfield";

class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.props.getCategory(this.props.match.params.id)
        this.state = {
            category: "",
            categoryId: this.props.match.params.id,
        }
    }


    handleNameChange = ({currentTarget: input}) => {
        this.setState({category: input.value})
    }

    addToCategory = () => {
        const category = this.state.category
        const id = this.props.match.params.id
        id === undefined ? this.props.addCategory(category, this.props) : this.props.editCategory(id, category, this.props)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.props.match.params.id && nextProps.category && this.setState({category: nextProps.category.name})
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