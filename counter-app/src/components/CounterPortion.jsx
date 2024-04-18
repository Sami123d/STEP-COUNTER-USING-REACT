import React from 'react'

function CounterPortion({step, setCount, count}) {

  const increment = () => {
    return(
    setCount(count + step ))
  }
  const decrement = ( ) => {
    return(setCount(count - step  ))
  }

  return (
    <div className='stepUI'>
      <button className="styleButton" onClick={decrement}>-</button>
      <h1>Count: {count}</h1>
      <button className="styleButton" onClick={increment}>+</button>
    </div>
  )
}

export default CounterPortion