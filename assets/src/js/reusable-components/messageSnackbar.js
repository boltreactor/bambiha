import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {removeSnackbar} from "../actions/profile";
import {connect} from 'react-redux';


class MessageSnackbar extends Component {
    constructor(props) {
        super(props);

        this.state = {open: this.props.show};
    }

    handleClose = () => {
        this.props.removeSnackbar(null, false);

    };
    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.removeSnackbar(null, false);
    };

    render() {

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                open={this.props.show}
                autoHideDuration={3000}
                onRequestClose={this.handleRequestClose}
                variant={"success"}
                message={this.props.msg}
                onClose={this.handleClose}>
                <MuiAlert onClose={this.handleClose} severity="error" variant="filled" elevation={6}>
                    {this.props.msg}
                </MuiAlert>
            </Snackbar>

        );
    }
}

export default connect(null, {removeSnackbar})(MessageSnackbar);
