import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Navigation from "./navigation";
import SmartFooter from "../components/Footers/smart-footer";
import TableCategory from "../reusable-components/tableCategory";

class ManageCategory extends Component {

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
        return (
            <Fragment>
                <TableCategory/>
            </Fragment>
        );
    }
}

export default ManageCategory;