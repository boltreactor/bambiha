import React, {Component} from 'react';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

class Reactdate extends Component {
  state={
    focusedInput:false,
    startDate:moment(),
    endDate:moment()
  };
  onChange=e=>{
      this.setDate({date:e.target.value})};
  render() {
    return (
        <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="start-date" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="end-date" // PropTypes.string.isRequired,
            onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({focusedInput})} // PropTypes.func.isRequired,
        />
    );
  }
}

export default Reactdate;