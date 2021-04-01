import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import { getProduct} from "../actions/admin";
import {connect} from "react-redux";


class ProductDetail extends Component {

  componentDidMount() {
      this.props.getProduct(this.props.match.params.id)
    }


    render() {
        const {product} = this.props;

        return (
             <div className="page">
        <div className="page__content-fluid">
          {/* */}
          <div className="flex ma2" style={{height: '56px'}}>
            <div className="flex-grow-1">
            </div>
            <div className="mr3">
              <Link to="/product" className="link-mute link-dark">
                <button className="mdc-icon-button material-icons">close</button>
              </Link>
            </div>
          </div>
          <div className="row">
            {product.images !== undefined && product.images.map((img, index)=> {
              return <div key={index} className="col s12 mb3">
                <div className="img-wrapper l">
                  <img className="w-100 h-100" src={img} alt=""/>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.admin.product
})

export default withRouter(connect(mapStateToProps, {getProduct})(ProductDetail));
