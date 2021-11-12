import React, { Component } from 'react'

export default class CreateLable extends Component {
  render() {
    const {lable} = this.props;
    return (
      <div className="card absolut">
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


