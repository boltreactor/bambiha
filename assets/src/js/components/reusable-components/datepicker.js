// import 'date-fns';
import React, {Component, Fragment} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";

class Calender extends Component {
    componentDidMount() {
        let currentdate = new Date();
        let currentYear = currentdate.getFullYear();
        let maxYear = currentYear-18
        let maxMonth = currentdate.getMonth()+1
        let maxDay = currentdate.getDay()+1
        let maxDate =`${maxYear}-${maxMonth}-${maxDay}`
        this.setState({maxDate})
    }

    state = {
        selectedDate: new Date(''),
        maxDate: null
    };

    render() {
        const {value, name, onChange, error} = this.props;
        return (
            <Fragment>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker

                        margin="normal"
                        id="date-picker"
                        name={name}
                        label="Birthday"
                        format="yyyy-MM-dd"
                        value={value}
                        maxDate={this.state.maxDate}
                        disableFuture={true}
                        onChange={onChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        autoOk
                        variant="inline"
                    />
                </MuiPickersUtilsProvider>
                <div>{error}</div>
            </Fragment>
        );
    }
}

export default Calender;