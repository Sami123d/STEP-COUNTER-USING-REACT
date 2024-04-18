import React from 'react'

function StatusBar({count}) {
  let today = new Date();
  let futureDate = today;
  let d = (futureDate.getDate() + count)
  console.log(d)

  futureDate.setDate(d)

  let day = futureDate.toDateString();
  console.log(day)
  return (
    <div className='status'><span className="status1">{count}</span> Day from Today is <span className="status1">{day}</span></div>
  )
}

export default StatusBar