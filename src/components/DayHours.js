import React from 'react';

function DayHours(props) {
  const timeList = props.time;
  const list = 
    timeList.map((time,index) => {
      return (
        <div key ={index}>
          <div className='rowHight colorLight'>
            {time}
          </div>
          <div className='rowHight colorLight'></div>
          <div className='rowHight colorLight'></div>
          <div className='rowHight colorDark'>
            :30
          </div>
          <div className='rowHight colorDark'></div>
          <div className='rowHight colorDark'></div>
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
  const timeLength = timePeriod.length - 2;
  return (
    // create grid template
    <div className = "grid gridField" style={{gridTemplateRows: `repeat(${timeLength}, 12px)`}}>
      {lableNew}
    </div>
    
  )
}

export {DayHours, DayField};