import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class SimpleTextfield extends Component {
    render() {
        const {name, type, label, onChange, error, onClick, isHidden, value,onBlur} = this.props;
        return (
            // <div>
            //     <div
            //         className="mdc-text-field mdc-text-field--with-trailing-icon"
            //         data-mdc-auto-init="MDCTextField"
            //         style={{width: '100%'}}>
            //         {name.includes('password') && <i className="material-icons-outlined mdc-text-field__icon"
            //                                          onClick={onClick}>{isHidden ? "visibility" : "visibility_off"}</i>}
            //         <input className="mdc-text-field__input"
            //                name={name}
            //                id={"text-field-hero-input"}
            //                type={type}
            //                onChange={onChange}
            //                value={value}
            //               />
            //         <div className="mdc-line-ripple"/>
            //         <label htmlFor="text-field-hero-input"
            //                className="mdc-floating-label">{label}</label>
            //     </div>
            //     <div className="mdc-text-field-helper-line">
            //         {error}
            //         <div className="mdc-text-field-helper-text"
            //              id="my-helper-id" aria-hidden="true"/>
            //     </div>
            // </div>

            <TextField
                multiline={name.includes("about")}
                fullWidth
                size="small"
                error={!!error}
                name={name}
                value={value}
                label={label}
                onBlur={onBlur}
                type={type}
                helperText={error}
                variant="filled"
                onChange={onChange}
                InputProps={name.includes("password") ? {

                endAdornment: <InputAdornment onClick={onClick} position="end"> {isHidden ? <i className="material-icons-outlined mdc-text-field__icon">visibility_off</i> :
                    <i className="material-icons-outlined mdc-text-field__icon">visibility</i>}</InputAdornment>,

            } : null}
            >
            </TextField>

        );
    }
}

export default SimpleTextfield;
