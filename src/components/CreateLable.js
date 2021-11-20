import React, { Component } from 'react';

export default class CreateLable extends Component {
  
  render() {

    const {lable} = this.props;
    const startTimeLable = lable.startTimeLable;
    const endTimeLable = lable.endTimeLable;
    const startLableColumn = lable.startLableColumn;
    const endLableColumn =lable.endLableColumn;
    

    return (
      <div className="lable"
      style={{
        gridRowStart: `${startTimeLable}`,
        gridRowEnd: `${endTimeLable}`,
        gridColumnStart: `${startLableColumn}`,
        gridColumnEnd: `${endLableColumn}`,
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


