import React from 'react';
import classnames from 'classnames';

function DayHours(props) {
  const timeList = props.time;
  const list = 
    timeList.map((time,index) => {
      return (
        <div key ={index}>
          <div className='row1 bluecolor'>
            {time}
          </div>
          <div className='row1 bluecolor'></div>
          <div className='row1 bluecolor'></div>
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
  const lableNew = props.lable;
  const timePeriod = props.time;
  const timeLength = timePeriod.length;
  return (
    <div className = "grid" style={{gridTemplateRows: `repeat(${timeLength}, 12px)`}}>
      {lableNew}
    </div>
    
  )
}

export {DayHours, DayField};