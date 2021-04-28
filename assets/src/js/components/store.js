import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import StoreDrawer from "../reusable-components/Drawers/Static/store-drawer";
import {connect} from "react-redux";
import {getUserProducts} from "../actions/user";
import SkeletonShopLoader from "./Skeleton/shop_skeleton";
import SkeletonTableLoader from "./Skeleton/table_skeleton";

class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.getUserProducts(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getUserProducts(this.props.match.params.id)
        }
    }
    handleDisabledClick = (e,item)=>{
        item.status===0? e.preventDefault():null
    }

    render() {
        debugger
        return (
            <div className="page">
                <div className="page__content">
                    <div className="main-wrapper">
                        <StoreDrawer/>
                        <main className="main" style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                            <div className="container l">
                                <div className="row mt6">
                                    <SkeletonShopLoader/>
                                    {this.props.products && this.props.products.length !== 0 ?

                                        this.props.products.map(item => {
                                            return (
                                                <div key={item.id} className="col s12 m6 l4 mb3">
                                                     <Link to={`/product/${item.id}`}  onClick={e=>this.handleDisabledClick(e, item)} className="link-mute">
                                                        <div className="img-wrapper s">
                                                            <img className="w-100 h-100"
                                                                 src={item.images.length !== 0 ? item.images[0] : "/static/show-1.jpeg"}
                                                                 alt=""/>
                                                        </div>
                                                        <div className="mv3">
                                                            <div><h4>{item.title}</h4></div>
                                                            <div><h6>{item.price}</h6></div>
                                                        </div>
                                                        <div className="mv3"><div style={{float:"right"}}>{item.status===0&&<p style={{color: "red"}}>Product Not Available</p>}</div>
                                                       </div></Link>
                                                </div>
                                            )
                                        })
                                        : <h3>No product found</h3>}
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="mv5" style={{borderBottom: '1px solid #dbe3eb'}}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="mb3">
                                            <h4>Related Categories</h4>
                                        </div>
                                        <div className="mb3">
                                            <div className="flex flex-wrap">
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        Best Selling Products
                                                    </Link>
                                                </div>
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        Best Shoes
                                                    </Link>
                                                </div>
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        Best Training & Gym
                                                    </Link>
                                                </div>
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        New Men's Shoes
                                                    </Link>
                                                </div>
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        New Sports Shoes
                                                    </Link>
                                                </div>
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        Best Women's Products
                                                    </Link>
                                                </div>
                                                <div className="ma2 montserrat">
                                                    <Link
                                                        className="f6 link dim br-pill ba ph3 pv2 mb2 dib black link-mute"
                                                        to="#0">
                                                        Best Selling Accessories
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
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.user.products
})

export default withRouter(connect(mapStateToProps, {getUserProducts})(Store));
