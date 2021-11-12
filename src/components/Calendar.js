import React, { Component } from 'react';
import {timeList, timeHour} from '../common/timeList';
import {DayHours, DayField} from './DayHours'

export default class Calendar extends Component {
  render() {
    return (
      <div className= 'grid day-calendar'>
        <DayHours time={timeList}></DayHours>
        <DayField time={timeHour}></DayField>
      </div>
    )
  }
}
