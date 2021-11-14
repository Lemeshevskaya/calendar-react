import React, { Component } from 'react';

export default class CreateLable extends Component {
  render() {
    const {lable} = this.props;
    const {times} = this.props;
    const period = [];
    times.map((time) => {
      if (time === lable.timeStart) {
        period.push(times.indexOf(time));
      } else if (time === lable.timeEnd) {
        period.push(times.indexOf(time));
      }
      return (period)
    })
    const startTime = period[0];
    const endTime = period[1]
    return (
      <div className="card"
      style={{
        gridRowStart: `${startTime}`,
        gridRowEnd: `${endTime}`
      }}>
        <h3 className="card-header">{lable.eventname}</h3>
        <div className="card-body">
          <p>{lable.location}</p>
          <div>{lable.timeStart}</div>
          <div>{lable.timeEnd}</div>
        </div>
      </div>
    )
  }
}


