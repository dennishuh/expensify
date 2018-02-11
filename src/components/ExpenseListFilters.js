import 'react-dates/initialize';
import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocuseChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.setTextFilter(e.target.value);
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            const sortBy = e.target.value;
            if (sortBy === "amount") {
              this.props.sortByAmount();
            } else {
              this.props.sortByDate();
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocuseChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
