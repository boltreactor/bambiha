import React, {PureComponent, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

class NotFound extends PureComponent {
    render() {
        return (

            <main className="page page--grid">
                <div className="page__wrapper">
                    <div id="alerts" style={{maxWidth: '504px', margin: '16px auto'}}/>
                    <div id="global-status-container" style={{maxWidth: '504px', margin: '16px auto'}}/>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="canvas-register clearfix">
                                <div className="brand">
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="header">
                                                <h2 className="logo mdc-typography--title">
                                                    <a href="/">
                                                        KompassEra
                                                    </a>
                                                </h2>
                                                <p>
                                                    Error Message: 404
                                                </p>
                                                <p style={{textAlign: 'center'}}>
                                                    Helpful links:
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb3 text-center" style={{marginTop: '-20px'}}>
                                    <div style={{
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        color: '#666',
                                        lineHeight: '24px'
                                    }}>
                                        <a href="#">
                                            Home
                                        </a>
                                    </div>
                                    <div style={{
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        color: '#666',
                                        lineHeight: '24px'
                                    }}>
                                        <a href="#">
                                            Sign in
                                        </a>
                                    </div>
                                    <div style={{
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        color: '#666',
                                        lineHeight: '24px'
                                    }}>
                                        <a href="#">
                                            Register
                                        </a>
                                    </div>
                                    <div style={{
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        color: '#666',
                                        lineHeight: '24px'
                                    }}>
                                        <a href="#">
                                            Help Center
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        );
    }
}

export default withRouter(NotFound);