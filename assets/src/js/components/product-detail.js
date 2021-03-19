import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class ProductDetail extends Component {
    render() {
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
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
            <div className="col s12 mb3">
              <div className="img-wrapper l">
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default ProductDetail;