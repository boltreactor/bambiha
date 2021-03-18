import React, {Component, Fragment} from 'react';
// import TextField from "@material-ui/core/TextField";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {withStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import {VisibilityOffOutlined} from "@material-ui/icons";

const styles = theme => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2419BE"
            //#13ab67
        },

    }
});

class GooglePlacesInput extends Component {
    render() {
        const {input_props, label, value} = this.props
        const {classes} = this.props;
        return (
            <div style={{"background": "#FFF"}}>
                <TextField
                    className={classes.root}
                    placeholder={label}
                    variant="outlined"
                    value={value}
                    fullWidth
                    {...input_props}

                />
            </div>
        );
    }
}

export default withStyles(styles)(GooglePlacesInput);
