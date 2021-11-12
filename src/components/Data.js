import React from 'react';
import moment from 'moment';

export default function Data() {
  return (
    <div>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
    </div>
  )
}
