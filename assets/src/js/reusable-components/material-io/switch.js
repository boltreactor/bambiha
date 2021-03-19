import React, {Component} from "react"

class Switch extends Component {
    state = {
        classes: "mdc-switch mdc-switch--checked",
        checked: false
    }
    onChange = (event) => {
        event.preventDefault();
        debugger
        if (this.state.classes === "mdc-switch mdc-switch--checked") {
            this.setState({classes: "mdc-switch"})
        } else {
            this.setState({classes: "mdc-switch mdc-switch--checked"})
        }
        this.setState({checked: event.target.checked})

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({checked: nextProps.checked})
    }

    render() {
        const {handleChange, label, id, checked} = this.props
        console.log("checked_state", this.state.checked)
        return (
            <div>
                <div className={this.state.classes} data-mdc-auto-init="MDCSwitch">
                    <div className="mdc-switch__track"/>
                    <div className="mdc-switch__thumb-underlay">
                        <div className="mdc-switch__thumb"/>
                        <input
                            onClick={(e) => this.onChange(e)}
                            // onClick={handleChange}
                            type="checkbox"
                            id={id}
                            className="mdc-switch__native-control"
                            role="switch"
                            aria-checked="true"
                            checked={this.state.checked}/>
                    </div>
                </div>
                <label htmlFor="messages_email" className="ml2"
                       style={{fontFamily: 'Montserrat'}}>
                    {label}
                </label>
            </div>
        )
    }
}

export default Switch;