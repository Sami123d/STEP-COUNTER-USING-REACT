import "../index.css"

function StepPortion({step, setStep}) {

  const increment = () => {
    return(
    setStep(step + 1))
  }
  const decrement = ( ) => {
    return(setStep(step - 1))
  }

  return (
    <div className='stepUI'>
      <button className="styleButton" onClick={decrement}>-</button>
      <h1>step: {step}</h1>
      <button className="styleButton" onClick={increment}>+</button>
    </div>
  )
}

export default StepPortion