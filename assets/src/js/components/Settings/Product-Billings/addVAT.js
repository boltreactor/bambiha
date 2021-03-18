import React, {Component} from 'react';

class AddVat extends Component {
    render() {
        return (
            <div className="page my-page">
        <div className="page__content">
            <section className="container s mt4" style={{maxWidth: '600px'}}>
            <header className="mt4 mb2 tc">
              <h3 className="bold">Add VAT ID Number</h3>
              {/*
          <p>
            To get paid, you need to set up a payout method
          </p>
          */}
            </header>
            <div className="mv4">
              <div className="row">
                <div className="col s12 m6 mb3">
                  <label className="label-text bold">COUNTRY/REGION <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter country or region" />
                  </div>
                </div>
                <div className="col s12 m6 mb3">
                  <label className="label-text bold">ADD VAT ID NUMBER <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter VAT ID number" />
                  </div>
                </div>
                <div className="col s12 mb3">
                  <label className="label-text bold">NAME ON REGISTRATION<i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter name on registration" />
                  </div>
                </div>
                <div className="col s12 m6 mb3">
                  <label className="label-text bold">ADDRESS LINE<i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="E.g. Main St." />
                  </div>
                </div>
                <div className="col s12 m6 mb3">
                  <label className="label-text bold">CITY<i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter city" />
                  </div>
                </div>
                <div className="col s12 m6 mb3">
                  <label className="label-text bold">PROVINCE/REGION<i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter province or region" />
                  </div>
                </div>
                <div className="col s12 m6 mb3">
                  <label className="label-text bold">ZIP/POSTAL CODE<i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {/*
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  ! Required
                </span>
                <span class="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                  Passwords do not match
                </span>
                */}
                  </label>
                  <div className="mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading" />
                      <span className="mdc-notched-outline__trailing" />
                    </span>
                    <input className="mdc-text-field__input" type="text" aria-label="Label" placeholder="Enter zip or postal code" />
                  </div>
                </div>
                <div className="col s12 mt3 mb3">
                  <button className="btn btn-primary btn-lg" onClick={event => this.props.history.push('/account-settings/product-and-billings')}>
                    ADD
                  </button>
                  <button className="btn btn-outline-primary btn-lg ml3" onClick={event => this.props.history.push('/account-settings/product-and-billings')}>
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
            </div>
        );
    }
}

export default AddVat;