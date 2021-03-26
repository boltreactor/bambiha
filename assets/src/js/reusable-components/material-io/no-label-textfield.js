import React, {Component} from 'react';

class NoLabelTextfield extends Component {

    state = {
        focus: false
    }

    onFocus = (event) => {
        this.setState({focus: true})
    }

    onBlur = (event) => {
        this.setState({focus: false})
    }

    render() {
        const {
            onChange,
            label,
            error,
            name,
            type,
            isHidden,
            onClick,
            placeholder,
            className,
            value,
            autoFocus
        } = this.props;
        return (
            <>
                <label className="label-text bold">
                    {label}
                    <i className="material-icons red" style={{fontSize: '7px'}}>star</i>
                    {error && error.includes("required") &&
                    <span className="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                      ! Required
                    </span>}
                    {error && error === "Wrong Password or User not found!" &&
                    <span className="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                      Incorrect password
                    </span>}
                    {error && error.includes("match") &&
                    <span className="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                      Passwords do not match
                    </span>}
                    {error && error.includes("Invalid") &&
                    <span className="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                      Invalid {name === "email" ? "Email" : name==="price"? "":"Number"}
                    </span>}
                    {error && error.includes("8") && <span className="br2 pa1 ba error-msg mh1 text-caption fw6 dib">
                      Too Short
                    </span>}
                </label>


                <div
                    className={this.state.focus ? "mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label mdc-text-field--focused" : "mdc-text-field w-100 s mdc-text-field--outlined mdc-text-field--no-label"}
                    data-mdc-auto-init="MDCTextField">
                        <span className="mdc-notched-outline">
                          <span className="mdc-notched-outline__leading"/>
                          <span className="mdc-notched-outline__trailing"/>
                        </span>
                    <input className="mdc-text-field__input"
                           type={type} aria-label="Label" name={name}
                           autoFocus={autoFocus}
                           onChange={onChange}
                           onBlur={(e) => {
                               this.onBlur(e)
                           }}
                           onFocus={(e) => {
                               this.onFocus(e)
                           }}
                           value={value}
                           placeholder={placeholder}/>
                    {name.includes("password") &&
                    <button id={name}
                            className="mdc-icon-button"
                            style={{marginTop: "4px"}}
                            onClick={onClick}>
                        <i className="material-icons mdc-icon-button__icon">{isHidden ? "visibility" : "visibility_off"}</i>
                    </button>
                    }

                </div>
            </>
        );
    }
}

export default NoLabelTextfield;