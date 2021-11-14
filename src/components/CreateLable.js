import React, { Component } from 'react';

export default class CreateLable extends Component {
  render() {
    const {lable} = this.props;
    const {times} = this.props;
    const startTime = times.indexOf(lable.timeStart);
    const endTime = times.indexOf(lable.timeEnd);
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


