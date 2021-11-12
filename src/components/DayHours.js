import React from 'react';
import classnames from 'classnames';

function DayHours(props) {
  const timeList = props.time;
  const list = 
    timeList.map((time,index) => {
      return (
        <div key ={index}>
          <div className='row1'>
            {time}
          </div>
          <div className='row1'></div>
          <div className='row1'></div>
          <div className='row1'>
            :30
          </div>
          <div className='row1'></div>
          <div className='row1'></div>
        </div>
      )
    });
  return (
    <div className= 'hour-number'>
      {list}
    </div>
  )
}

function DayField(props) {
  const timeHours = props.time;
  const listField = 
  timeHours.map((time,index) => {
    let times = time;
    return (
      <div key={index} className={classnames('row1', times)}>
      </div>
    )
  });
  return (
    <div>{listField}</div>
  )
}

export {DayHours, DayField};