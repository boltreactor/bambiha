import React, {Component, Fragment} from 'react';
// import TextField from "@material-ui/core/TextField";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {withStyles} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import {VisibilityOffOutlined} from "@material-ui/icons";

const styles = theme => ({

notchedOutline: {
    // borderWidth: '1px',
    // borderColor: 'green !important'
  },
});

class OutlinedTextfield extends Component {
    render() {
        const {name, type, label, onChange, error, onClick, isHidden, value} = this.props;
           const {classes} = this.props;
        return (
            // <Fragment>
            //     <div
            //         className={name.includes('password') ? "mdc-text-field mdc-text-field--filled mdc-text-field--outlined mdc-text-field--with-trailing-icon" : "mdc-text-field mdc-text-field--outlined"}
            //         data-mdc-auto-init="MDCTextField">
            //         {name.includes('password') && <i className="material-icons-outlined mdc-text-field__icon"
            //                                          onClick={onClick}>{isHidden ? "visibility" : "visibility_off"}</i>}
            //         <input className="mdc-text-field__input" id={name} name={name} type={type} onChange={onChange}
            //                value={value} inputlabelprops={{shrink: true}}/>
            //         <div className="mdc-notched-outline">
            //             <div className="mdc-notched-outline__leading"/>
            //             <div className="mdc-notched-outline__notch">
            //                 <label htmlFor={name} className="mdc-floating-label">{label}</label>
            //             </div>
            //             <div className="mdc-notched-outline__trailing"/>
            //         </div>
            //     </div>
            //     <div className="mdc-text-field-helper-line">{error}
            //         <div className="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true"/>
            //     </div>
            // </Fragment>
        <TextField
            // className={classes}
            fullWidth
            size="medium"
            error={!!error}
            name={name}
            label={label}
            value={value}
            type={type}
            helperText={error}
            variant="outlined"
            onChange={onChange}
             InputLabelProps={{
            classes: {
              root: classes.cssLabel,
            },
          }}
          // InputProps={{
          //   classes: {
          //     root: classes.cssOutlinedInput,
          //     focused: classes.cssFocused,
          //     notchedOutline: classes.notchedOutline,
          //   },
          //   inputMode: "numeric"
          // }}
          //   InputProps={name.includes("password") ? {
          //       endAdornment: <InputAdornment  onClick={onClick} position="end"> {isHidden ?<VisibilityOffOutlined   style={{ color: "#7f838a"}} /> :
          //        <VisibilityOutlined  fontSize= '15' style={{ color: '#7f838a'}}/>}</InputAdornment>
          //
          //   } : null}
        />
    )
        ;
    }
}

export default withStyles(styles)(OutlinedTextfield);
