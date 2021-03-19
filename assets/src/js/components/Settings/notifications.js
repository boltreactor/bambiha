import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import ContentFooter from "../Footers/content-footer";
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
import {addNotificationSettings, getNotificationSettings} from "../../actions/profile";


const styles = theme => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: '#13ab67',
            '& + $track': {
                backgroundColor: '#13ab67',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#13ab67',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {}
});


class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: props.settings
        }
    }

    handleUnsub = (event) => {
        event.preventDefault()
        const settings = {
            ...this.props.settings,
            messages_sms: !event.currentTarget.checked,
            messages_email: !event.currentTarget.checked,
            reminders_sms: !event.currentTarget.checked,
            reminders_email: !event.currentTarget.checked,
            policy_sms: !event.currentTarget.checked,
            policy_email: !event.currentTarget.checked,
            promotion_sms: !event.currentTarget.checked,
            promotion_email: !event.currentTarget.checked,
            acc_support_sms: !event.currentTarget.checked,
            acc_support_email: !event.currentTarget.checked,
            unsubscribe: event.currentTarget.checked
        }
        this.props.addNotificationSettings(settings)
    }

    handleChange = (event) => {
        event.preventDefault()
        const settings = {...this.props.settings, [event.currentTarget.name]: event.currentTarget.checked}

        this.props.addNotificationSettings(settings)

    }

    componentDidMount() {
        this.props.getNotificationSettings();
    }


    render() {
        const {settings} = this.props;
        const {classes} = this.props;
        return (
            <main className="page">
                <div className="page__content">

                    <div className="drawer-frame-adaptive">

                        <div className="drawer">
                            <div className="drawer__content-wrapper">
                                <div className="drawer__content-inner">
                                    <div className="drawer__content">
                                        <div className="mdc-drawer__content display-flex flex--column">
                                            <div className="flex__grow-1">
                                                <nav className="mdc-list" style={{marginTop: '16px'}}
                                                     data-mdc-auto-init="MDCList">
                                                    <Link to="/settings" className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">account_circle</i>
                                                        Home
                                                    </Link>
                                                    <Link to="/settings/personal-info"
                                                          className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple" aria-current="page">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">contacts</i>
                                                        Personal info
                                                    </Link>
                                                    <Link to="/settings/security"
                                                          className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">security</i>
                                                        Security
                                                    </Link>
                                                    <Link to="/settings/payments-&-payouts"
                                                          className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">payment</i>
                                                        Payments & Payouts
                                                    </Link>
                                                    <Link to="/settings/notifications"
                                                          className="mdc-list-item mdc-list-item--activated mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons-outlined mdc-list-item__graphic"
                                                           aria-hidden="true">notifications</i>
                                                        Notifications
                                                    </Link>
                                                    <Link to="#" className="mdc-list-item mdc-ripple-surface"
                                                          data-mdc-auto-init="MDCRipple">
                                                        <i className="material-icons mdc-list-item__graphic"
                                                           aria-hidden="true">help_outline</i>
                                                        Help & Support
                                                    </Link>
                                                </nav>
                                            </div>
                                            <footer>
                                                <Link to="#"> Privacy & Terms </Link> .
                                                <Link to="#"> Help </Link>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content content--settings">
                            <div className="container">
                                <div className="container__content">

                                    <div className="content__header">

                                        <div className="text-center">
                                            <div className="mdc-typography--headline5"
                                                 style={{margin: '24px auto 16px'}}>
                                                Notifications
                                            </div>
                                            <div className="mdc-typography--body1" style={{margin: '16px auto'}}>
                                                Configure your notification settings by checking the delivery method you
                                                prefer.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content__body">

                                        <div className="mdc-layout-grid" style={{paddingTop: 0}}>
                                            <div className="mdc-layout-grid__inner">

                                                <div
                                                    className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                                                    <section className="user-notifications">
                                                        <div className="panel panel-default mb2">
                                                            <div style={{padding: '24px'}}>


                                                                <ul className="plain-list4">
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col s6 col--no-spacing">
                                                                                <div className="display-flex">
                                                                                    <div>
                                                                                        <div
                                                                                            className="title__ mdc-typography--headline6">
                                                                                            Notifications
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <div className="label">
                                                                                    SMS
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <div className="label">
                                                                                    Email
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col s6 col--no-spacing">
                                                                                <div className="display-flex">
                                                                                    <div>
                                                                                        <div className="title">
                                                                                            Messages
                                                                                        </div>
                                                                                        <div
                                                                                            className="mdc-typography--caption">
                                                                                            Receive messages from
                                                                                            teachers and students,
                                                                                            including booking requests.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                {/*<div className="label">*/}
                                                                                {/*    <div*/}
                                                                                {/*        className={settings ? settings.messages_sms === true ? "mdc-switch mdc-switch--large mdc-switch--checked" : "mdc-switch mdc-switch--large" : "mdc-switch mdc-switch--large"}*/}
                                                                                {/*        data-mdc-auto-init="MDCSwitch">*/}
                                                                                {/*        <div*/}
                                                                                {/*            className="mdc-switch__track"/>*/}
                                                                                {/*        <div*/}
                                                                                {/*            className="mdc-switch__thumb-underlay">*/}
                                                                                {/*            <div*/}
                                                                                {/*                className="mdc-switch__thumb"/>*/}
                                                                                {/*            <input type="checkbox"*/}
                                                                                {/*                   className="mdc-switch__native-control"*/}
                                                                                {/*                   role="switch"*/}
                                                                                {/*                   name="messages_sms"*/}
                                                                                {/*                   onChange={event => this.handleChange(event)}*/}

                                                                                {/*            />*/}
                                                                                {/*        </div>*/}
                                                                                {/*    </div>*/}
                                                                                {/*</div>*/}
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.messages_sms : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="messages_sms"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.messages_email : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="messages_email"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col s6 col--no-spacing">
                                                                                <div className="display-flex">
                                                                                    <div>
                                                                                        <div className="title">
                                                                                            Reminders
                                                                                        </div>
                                                                                        <div
                                                                                            className="mdc-typography--caption">
                                                                                            Receive booking reminders,
                                                                                            requests to write a review,
                                                                                            pricing notices,
                                                                                            and other reminders related
                                                                                            to your activities on
                                                                                            Bambiha.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.reminders_sms : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="reminders_sms"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>

                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.reminders_email : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="reminders_email"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col s6 col--no-spacing">
                                                                                <div className="display-flex">
                                                                                    <div>
                                                                                        <div className="title">
                                                                                            Promotions and tips
                                                                                        </div>
                                                                                        <div
                                                                                            className="mdc-typography--caption">
                                                                                            Receive coupons, promotions,
                                                                                            surveys, product updates,
                                                                                            and inspiration from
                                                                                            Bambiha and Bambiha's
                                                                                            partners.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.promotion_sms : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="promotion_sms"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.promotion_email : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="promotion_email"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col s6 col--no-spacing">
                                                                                <div className="display-flex">
                                                                                    <div>
                                                                                        <div className="title">
                                                                                            Policy and community
                                                                                        </div>
                                                                                        <div
                                                                                            className="mdc-typography--caption">
                                                                                            Receive updates on home
                                                                                            sharing regulations and stay
                                                                                            informed about
                                                                                            advocacy efforts to create
                                                                                            fair, responsible home
                                                                                            sharing laws in your
                                                                                            community.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.policy_sms : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="policy_sms"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.policy_email : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="policy_email"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="row">
                                                                            <div className="col s6 col--no-spacing">
                                                                                <div className="display-flex">
                                                                                    <div>
                                                                                        <div className="title">
                                                                                            Account support
                                                                                        </div>
                                                                                        <div
                                                                                            className="mdc-typography--caption">
                                                                                            Receive messages about your
                                                                                            account, your reservations,
                                                                                            legal notifications,
                                                                                            security and privacy
                                                                                            matters, and customer
                                                                                            support requests.
                                                                                            For your security, you
                                                                                            cannot disable email
                                                                                            notifications and
                                                                                            we may contact you by phone
                                                                                            or other means if needed.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.acc_support_sms : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="acc_support_sms"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                            <div className="col s3 text-right">
                                                                                <Switch
                                                                                    classes={{
                                                                                        root: classes.root,
                                                                                        switchBase: classes.switchBase,
                                                                                        thumb: classes.thumb,
                                                                                        track: classes.track,
                                                                                        checked: classes.checked,
                                                                                    }}
                                                                                    checked={settings ? settings.acc_support_email : false}
                                                                                    onChange={event => this.handleChange(event)}
                                                                                    name="acc_support_email"
                                                                                    // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="my3">
                                                            <ul className="plain-list4">
                                                                <li>
                                                                    <div className="row">
                                                                        <div className="col s8 col--no-spacing">
                                                                            <div className="display-flex">
                                                                                <div>
                                                                                    <div className="title">
                                                                                        Push notifications
                                                                                    </div>
                                                                                    <div
                                                                                        className="mdc-typography--caption">
                                                                                        Get notifications in this
                                                                                        browser on your computer, even
                                                                                        if you're not using Bambiha.
                                                                                        {/* To manage your push notification settings, use the WedKompass app. */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col s4 col--no-spacing text-right">
                                                                            <Switch
                                                                                classes={{
                                                                                    root: classes.root,
                                                                                    switchBase: classes.switchBase,
                                                                                    thumb: classes.thumb,
                                                                                    track: classes.track,
                                                                                    checked: classes.checked,
                                                                                }}
                                                                                checked={settings ? settings.push_notifications : false}
                                                                                onChange={event => this.handleChange(event)}
                                                                                name="push_notifications"
                                                                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="row">
                                                                        <div className="col s8 col--no-spacing">
                                                                            <div className="display-flex">
                                                                                <div>
                                                                                    <div className="title">
                                                                                        Unsubscribe from all marketing
                                                                                        emails
                                                                                    </div>
                                                                                    <div
                                                                                        className="mdc-typography--caption">
                                                                                        This includes recommendations,
                                                                                        study inspiration, deals,
                                                                                        things to do in your home city,
                                                                                        how Bambiha works, invites
                                                                                        and referrals,
                                                                                        surveys and research studies,
                                                                                        Bambiha for events updates,
                                                                                        subject teaching tips,
                                                                                        event hosting tips, and
                                                                                        promotions.
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col s4 col--no-spacing text-right">
                                                                            <Switch
                                                                                classes={{
                                                                                    root: classes.root,
                                                                                    switchBase: classes.switchBase,
                                                                                    thumb: classes.thumb,
                                                                                    track: classes.track,
                                                                                    checked: classes.checked,
                                                                                }}
                                                                                checked={settings ? settings.unsub_all_marketing_emails : false}
                                                                                onChange={event => this.handleChange(event)}
                                                                                name="unsub_all_marketing_emails"
                                                                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="row">
                                                                        <div className="col s8 col--no-spacing">
                                                                            <div className="display-flex">
                                                                                <div>
                                                                                    <div className="title">
                                                                                        Unsubscribe
                                                                                    </div>
                                                                                    <div
                                                                                        className="mdc-typography--caption">
                                                                                        Unsubscribe me from all email
                                                                                        notifications
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col s4 col--no-spacing text-right">
                                                                            <Switch
                                                                                classes={{
                                                                                    root: classes.root,
                                                                                    switchBase: classes.switchBase,
                                                                                    thumb: classes.thumb,
                                                                                    track: classes.track,
                                                                                    checked: classes.checked,
                                                                                }}
                                                                                checked={settings ? settings.unsubscribe : false}
                                                                                onChange={event => this.handleUnsub(event)}
                                                                                name="unsubscribe"
                                                                                // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                            />
                                                                        </div>

                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ContentFooter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    settings: state.user.notification_settings
})

export default withRouter(connect(mapStateToProps, {
    addNotificationSettings,
    getNotificationSettings
})(withStyles(styles)(Notifications)));
