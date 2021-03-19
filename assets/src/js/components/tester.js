import React, {Component, Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import TopAppBar from "./Headers/top-app-bar";
import Footer from "./Footers/estore-footer";


class Tester extends Component {
    render() {
        return (
            <div>
                <TopAppBar/>

                <Footer/>
            </div>
        );
    }
}
export default withRouter(Tester);
