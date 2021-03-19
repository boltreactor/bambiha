import React, {Component} from 'react';
import SettingsDrawer from "../../reusable-components/Drawers/Static/settings-drawer";
import SmartFooter from "../Footers/smart-footer";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {addNotificationSettings, getNotificationSettings, setNotificationSettings} from "../../actions/profile";

class GeneralSettings extends Component {

    state = {

        noti_settings: null,
        className: null

    }

    componentDidMount() {
        this.props.getNotificationSettings();
    }

    handleChange = (event) => {
        event.preventDefault()
        let settings;
        if (event.currentTarget.name === "messages_email" || event.currentTarget.name === "reminders_email" || event.currentTarget.name === "promotion_email") {
            if (event.currentTarget.checked === true) {
                settings = {
                    ...this.props.settings,
                    'unsubscribe': false,
                    [event.currentTarget.name]: !this.props.settings[event.currentTarget.name]
                }
            }
            else {
                settings = {
                    ...this.props.settings,
                    [event.currentTarget.name]: !this.props.settings[event.currentTarget.name]
                }
            }
        }

        this.props.setNotificationSettings(settings)

    }


    handleUnsub = (event) => {
        event.preventDefault()
        const settings = {
            ...this.props.settings,
            messages_sms: this.props.settings[event.currentTarget.name],
            messages_email: this.props.settings[event.currentTarget.name],
            reminders_sms: this.props.settings[event.currentTarget.name],
            reminders_email: this.props.settings[event.currentTarget.name],
            policy_sms: this.props.settings[event.currentTarget.name],
            policy_email: this.props.settings[event.currentTarget.name],
            promotion_sms: this.props.settings[event.currentTarget.name],
            promotion_email: this.props.settings[event.currentTarget.name],
            acc_support_sms: this.props.settings[event.currentTarget.name],
            acc_support_email: this.props.settings[event.currentTarget.name],
            unsubscribe: !this.props.settings[event.currentTarget.name]
        }
        this.props.setNotificationSettings(settings)
    }

    handleSubmit = (event) => {
        const notification_settings = {...this.props.settings}
        this.props.addNotificationSettings(notification_settings)
    }

    render() {
        const {settings} = this.props;
        console.log(settings)
        return (
            <div>
                <div className="page my-page">
                    <div className="page__content">
                        <div className="main-wrapper">
                            <SettingsDrawer/>
                            <main className="main"
                                  style={{backgroundColor: 'var(--dark-mode-gray)', minHeight: '100vh'}}>
                                <div className="container l">
                                    <header className="mb4 db">
                                        <h1 className="bold">My Account</h1>
                                    </header>
                                    <div className="shadow border rounded-sm db pa3">
                                        <header className="mb4">
                                            <h3 className="bold">General Settings</h3>
                                        </header>
                                        <div className="mb3">
                                            <h4 className="bold">Notifications</h4>
                                            <p className="text-space-grey mt2 mb4">
                                                Choose email notification preferences
                                            </p>
                                            <div className="mv4">

                                                <div
                                                    className={settings ? settings.messages_email ? "mdc-switch mdc-switch--checked v-mid" : "mdc-switch v-mid" : "mdc-switch v-mid"}
                                                    data-mdc-auto-init="MDCSwitch">
                                                    <div className="mdc-switch__track"/>
                                                    <div className="mdc-switch__thumb-underlay">
                                                        <div className="mdc-switch__thumb"/>
                                                        <input type="checkbox" id="basic-switch"
                                                               name="messages_email"
                                                               checked={settings ? settings.messages_email : true}
                                                               onClick={e => this.handleChange(e)}
                                                               className="mdc-switch__native-control"
                                                               role="switch"
                                                               aria-checked={true}/>
                                                    </div>
                                                </div>

                                                <label htmlFor="messages_email" className="ml2"
                                                       style={{fontFamily: 'Montserrat'}}>
                                                    Receive messages, including booking requests.
                                                </label>


                                            </div>
                                            <div className="mv4">
                                                <div
                                                    className={settings ? settings.reminders_email ? "mdc-switch mdc-switch--checked v-mid" : "mdc-switch v-mid" : "mdc-switch v-mid"}
                                                    data-mdc-auto-init="MDCSwitch">
                                                    <div className="mdc-switch__track"/>
                                                    <div className="mdc-switch__thumb-underlay">
                                                        <div className="mdc-switch__thumb"/>
                                                        <input type="checkbox" id="basic-switch"
                                                               name="reminders_email"
                                                               onClick={e => this.handleChange(e)}
                                                               checked={settings ? settings.reminders_email : true}
                                                               className="mdc-switch__native-control" role="switch"
                                                               aria-checked="true"/>
                                                    </div>
                                                </div>
                                                <label htmlFor="reminders_email" className="ml2"
                                                       style={{fontFamily: 'Montserrat'}}>
                                                    Receive booking reminders, requests to write a review, and other
                                                    reminders.
                                                </label>
                                            </div>
                                            <div className="mv4">
                                                <div
                                                    className={settings ? settings.promotion_email ? "mdc-switch mdc-switch--checked v-mid" : "mdc-switch v-mid" : "mdc-switch v-mid"}
                                                    data-mdc-auto-init="MDCSwitch">
                                                    <div className="mdc-switch__track"/>
                                                    <div className="mdc-switch__thumb-underlay">
                                                        <div className="mdc-switch__thumb"/>
                                                        <input type="checkbox" id="basic-switch"
                                                               name="promotion_email"
                                                               onClick={e => this.handleChange(e)}
                                                               className="mdc-switch__native-control" role="switch"
                                                               aria-checked="true"
                                                               checked={settings ? settings.promotion_email : true}/>
                                                    </div>
                                                </div>
                                                <label htmlFor="promotion_email" className="ml2"
                                                       style={{fontFamily: 'Montserrat'}}>
                                                    Receive coupons, promotions, surveys, product updates, and
                                                    inspiration.
                                                </label>
                                            </div>
                                            <div className="mv4">
                                                <div
                                                    className={settings ? settings.unsubscribe ? "mdc-switch mdc-switch--checked v-mid" : "mdc-switch v-mid" : "mdc-switch v-mid"}
                                                    data-mdc-auto-init="MDCSwitch">
                                                    <div className="mdc-switch__track"/>
                                                    <div className="mdc-switch__thumb-underlay">
                                                        <div className="mdc-switch__thumb"/>
                                                        <input type="checkbox" id="basic-switch"
                                                               onClick={event => this.handleUnsub(event)}
                                                               name="unsubscribe"
                                                               className="mdc-switch__native-control" role="switch"
                                                               checked={settings ? settings.unsubscribe : false}
                                                               aria-checked="false"/>
                                                    </div>
                                                </div>
                                                <label htmlFor="unsubscribe" className="ml2"
                                                       style={{fontFamily: 'Montserrat'}}>
                                                    Unsubscribe from all marketing emails
                                                </label>
                                            </div>
                                            <div className="mt4 mb3">
                                                <button className="btn btn-primary btn-lg"
                                                        onClick={(e) => this.handleSubmit(e)}>
                                                    UPDATE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <SmartFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    settings: state.user.notification_settings
})

export default withRouter(connect(mapStateToProps, {
    addNotificationSettings,
    setNotificationSettings,
    getNotificationSettings
})(GeneralSettings));
