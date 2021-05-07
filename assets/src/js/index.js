import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/app';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./Store/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <App/>

        </BrowserRouter>

    </Provider>,
    document.getElementById('react-app')
);