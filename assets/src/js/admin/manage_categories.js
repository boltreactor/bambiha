import React, {Component, Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import Navigation from "./navigation";
import {getAllCategories, editCategory} from "../actions/admin";
import {connect} from 'react-redux';
import CustomTable from "../reusable-components/custom-table";
import SmartFooter from "../components/Footers/smart-footer";

class ManageCategory extends Component {
    state = {
        id: null,
        Categories: true,
        HelpSupport: false,
    }

    // componentDidMount() {
    //     this.props.getAllCategories();
    //
    // }

    componentWillReceiveProps(nextProps, nextContext) {
        this.props.getAllCategories();
    }

    handleTab = (e) => {
        let name = e.target.text
        if (name === "Categories") {
            this.setState({Categories: true, HelpSupport: false})
        } else {
            this.setState({Categories: false, HelpSupport: true})
        }
    }

    handleRadioButton = (event) => {
        event.preventDefault();
        this.setState({id: event.target.value})
    };

    onEdit = (event) => {
        event.preventDefault();
        return this.props.history.push(`/admin/categories/${this.state.id}`)
    }
    handleDisable = (event) => {
        event.preventDefault();
        let category
        let id = this.state.id
        let status
        this.props.categories.map(cat => {
            if (cat.id === this.state.id) {
                cat.status === 1 ? status = 0 : status = 1
                category = cat.name
            }
        })
        this.state.id && this.props.editCategory(id, category, status, this.props)
    }


    // state = {
    //     Categories: true,
    //     HelpSupport: false
    // }
    //
    // handleTab = (e) => {
    //     let name = e.target.text
    //     debugger
    //     if (name === "Categories") {
    //         this.setState({Categories: true, HelpSupport: false})
    //     } else {
    //         this.setState({Categories: false, HelpSupport: true})
    //     }
    // }

    render() {
        const headers = [{name: 'Category name'}, {name: 'Date and Time'}, {name: "status"}];
        const {categories} = this.props;
        return (
            <Fragment>
                <div className="page my-page">
                    <div className="page__content">
                        {/* */}
                        <div className="main-wrapper">
                            {/* */}
                            <Navigation/>

                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                                <div className="container l">
                                    {/* */}
                                    <header className="mb4 db flex items-center flex-wrap">
                                        <div className="mb4 mb0-m mb0-l">
                                            <h1 className="bold">Categories</h1>
                                        </div>
                                        <div className="flex-grow-1 ml3 tr">
                                            <Link to="/admin/categories/new" className="link-mute">
                                                <button className="btn btn-primary btn-lg">
                                                    Add New Category
                                                </button>
                                            </Link>
                                        </div>
                                    </header>
                                    {/* */}
                                    <div className="tab-wrapper">
                                        {/* */}
                                        <header className="tab-header">
                                            <Link to="#" className="tab-item link-mute" aria-selected="true">
                                                Categories
                                            </Link>
                                            <Link to="#" className="tab-item link-mute" aria-selected="false">
                                                Help & Support
                                            </Link>
                                        </header>
                                        {/* Categories */}
                                        <div className="tab-content">
                                            <div className="mb4">
                                                <h3 className="bold">{this.state.Categories === true ? categories.length > 0 ?
                                                    <div>
                                                        Categories<span className="ml2"
                                                                        style={{color: '#0258ff'}}>{categories.length}</span>
                                                    </div>
                                                    : "Catagories Management" : "Help & Support"}</h3>
                                            </div>

                                            {/*{/ Table /}*/}
                                            {this.state.Categories &&
                                            <div>
                                                <div className="tc">
                                                    {!categories.length > 0 ? <div>
                                                        <header className="mt3 my-page">
                                                            <h3 className="bold">Categories</h3>
                                                        </header>
                                                        <p>
                                                            Categories management made easy. <br/>
                                                            All Categories at the store will be shown here.
                                                        </p>
                                                    </div> : <CustomTable headers={headers}
                                                                          data={categories} onEdit={this.onEdit}
                                                                          onChange={this.handleRadioButton}
                                                                          onDisable={this.handleDisable}
                                                                          id={this.state.id}/>}
                                                </div>
                                            </div>}


                                            <div
                                                className={this.state.HelpSupport === true ? "tab-no-data" : "tab-no-data hide"}>
                                                <div className="tc">
                                                    <header className="mt3 my-page">
                                                        <h3 className="bold">Help & Support</h3>
                                                    </header>
                                                    <p>
                                                        24/7 chat support — message us at anytime!
                                                    </p>
                                                    <div className="mv3">
                                                        <Link to="tel:00923165953458" className="link-mute">
                                                            <button className="btn btn-primary btn-lg">
                                                                <i className="material-icons-outlined">phone</i> Contact
                                                                Us
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <SmartFooter/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.admin.categories
})

export default withRouter(connect(mapStateToProps, {getAllCategories, editCategory})(ManageCategory));
