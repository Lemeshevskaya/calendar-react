import React, { Component } from 'react';
import {uniqueId} from 'lodash';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import isEmpty from '../validation/is-empty';
import CreateLable from './CreateLable';
import {timeList, timeHour} from '../common/timeList';
import {DayHours, DayField} from './DayHours'

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: '',
      location: '',
      timeStart: '',
      timeEnd: '',
      startTimeLable: '',
      endTimeLable: '',
      startLableColumn: '',
      endLableColumn: '',
      error: '',
      lable: [],
      col1: timeHour.reduce((a, v) => ({ ...a, [v]: 0}), {}),
      col2: timeHour.reduce((a, v) => ({ ...a, [v]: 0}), {})
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const startTimeLable = timeHour.indexOf(this.state.timeStart);
    const endTimeLable = timeHour.indexOf(this.state.timeEnd);
    let startLableColumn;
    let endLableColumn;
    
    if(isEmpty(this.state.eventname) || isEmpty(this.state.location) || isEmpty(this.state.timeStart) || isEmpty(this.state.timeEnd)) {
      this.setState({
        error: 'All fields must be filled'
      });
    } else if(startTimeLable >= endTimeLable) {
      this.setState({
        error: 'The start time must be less than the end time of the event'
      });
    } else {

      const labletimes = timeHour.slice(startTimeLable,endTimeLable);
      const col1 = this.state.col1;
      const col2 = this.state.col2;

      for (let elem of labletimes) {
          if(col1[elem] !== 0) {
              if(col2[elem] !== 0) {
                this.setState({
                  error: 'Two events already have a given time'
                }); 
                return;
              } else {
                for (let elem of labletimes) {
                  col2[elem] = 1;
                  startLableColumn = 2;
                  endLableColumn = 3;
                }
                break;
              }
        } else {
          col1[elem] = 1;
          startLableColumn = 1;
          endLableColumn = 3;
        }
      };

      const data = {
        eventname: this.state.eventname,
        location: this.state.location,
        timeStart: this.state.timeStart,
        timeEnd: this.state.timeEnd,
        startTimeLable: startTimeLable,
        endTimeLable: endTimeLable,
        startLableColumn: startLableColumn,
        endLableColumn: endLableColumn,
      };
      console.log(col1, col2, data);

      const Lable = (
      <CreateLable lable = {data} key = {uniqueId()}/>);
      var lables = this.state.lable.slice();
      lables.push(Lable);
      this.setState({ lable: lables });
    }
  }
    
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({error:''})
  }

  render() {

    // Select options for time
    const options = timeHour;

    return (
      <div className="create-event">
        <h2 className="text-center">Create event</h2>
        <div className="row form-event">
          <div className="col m-auto">
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Name event"
                name="eventname"
                value={this.state.eventname}
                onChange={this.onChange}
                info="Name event"
              />
              <TextFieldGroup
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                info="Location event"
              />
              <SelectListGroup
                placeholder="Start time"
                name="timeStart"
                value={this.state.timeStart}
                onChange={this.onChange}
                options={options}
                info="Start time"
              />
              <SelectListGroup
                placeholder="End time"
                name="timeEnd"
                value={this.state.timeEnd}
                onChange={this.onChange}
                options={options}
                info="End time"
              />
              <div className = 'error'>
                 {this.state.error}
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary button-form"
              />
            </form>
          </div>
        </div>
        <div className= 'grid day-calendar'>
          <DayHours time={timeList}></DayHours>
          <DayField time={timeHour} lable={this.state.lable}></DayField>
        </div>
    </div>
    )
  }
}
