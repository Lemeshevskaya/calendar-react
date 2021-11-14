import React, { Component } from 'react';

export default class CreateLable extends Component {
  render() {
    const {lable} = this.props;
    const {times} = this.props;
    const startTime = times.indexOf(lable.timeStart);
    const endTime = times.indexOf(lable.timeEnd);
    return (
      <div className="lable"
      style={{
        gridRowStart: `${startTime}`,
        gridRowEnd: `${endTime}`
      }}>
        <h6 className="lable-item">{lable.eventname}</h6>
        <p className="lable-item">{lable.location}</p>
        <div className="lable-item">
          <span>{lable.timeStart} - </span>
          <span>{lable.timeEnd}</span>
        </div>
      </div>
    )
  }
}


