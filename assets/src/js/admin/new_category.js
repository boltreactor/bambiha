import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import {addCategory, getAllCategories} from "../actions/admin";
import {connect} from 'react-redux';
import OutlinedTextfield from "../reusable-components/outlined-textfield";

class NewCategory extends Component {
    state = {
        category: "",
        categoryId: "",
        toEdit: {}
    }

    handleNameChange = ({currentTarget: input}) => {
        this.setState({category: input.value})
    }

    addToCategory = () => {
        const category = this.state.category
        this.props.addCategory(category)
    }

    componentDidMount() {
        const categoryId = this.props.match.params.id
        this.setState({categoryId})
        this.props.getAllCategories()
        const obj = this.props.categories.filter(category => (
            this.props.match.params.id === category.id
        ))
        debugger
        console.log(obj[0])
        this.setState({toEdit: obj[0]})
    }

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
                                <OutlinedTextfield
                                    type="text"
                                    name="Category Name"
                                    label="Category name"
                                    value={this.state.toEdit && this.state.toEdit.name || ''}
                                    onChange={this.handleNameChange}/>

                                <div className="mt4 mb4">
                                    <Link to="/admin/categories" className="link-mute">
                                        <button className="btn btn-primary btn-lg" onClick={this.addToCategory}>
                                            <i className="v-mid material-icons mr1"
                                               style={{fontSize: '18px'}}>lock</i> Add
                                        </button>
                                    </Link>
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
    categories: state.admin.categories
})

export default connect(mapStateToProps, {addCategory, getAllCategories})(NewCategory);