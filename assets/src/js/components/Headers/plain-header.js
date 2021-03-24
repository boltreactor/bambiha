import React, {Component} from 'react';

class PlainHeader extends Component {
    render() {
        return (
            <header className="mdc-top-app-bar mdc-top-app-bar--fixed js-top-app-bar" data-mdc-auto-init="MDCTopAppBar">
                <div className="mdc-top-app-bar__row l">
                    {/*
    <Link to="#" class="back-to-site link-mute">
      <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">arrow_back</button>
      <span class="mdc-top-app-bar__title hide-sm" style="font-size: 0.90rem;"><span class="tracked-m tracked-l">Save &amp; Exit</span></span>
    </a>
    */}
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">
                        <div className="mdc-top-app-bar__title"><span className="tracked-m tracked-l">BOLTREACTOR</span>
                        </div>
                    </section>
                </div>
            </header>
        );
    }
}

export default PlainHeader;