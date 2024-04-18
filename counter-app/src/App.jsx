import React, { useState } from "react";
import StepPortion from "./components/StepPortion";
import CounterPortion from "./components/CounterPortion";
import StatusBar from "./components/StatusBar";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="container2">STEP COUNTER</div>
      <div className="main-div">
        <StepPortion step={step} setStep={setStep} />
        <CounterPortion count={count} setCount={setCount} step={step} />
        <StatusBar count={count} />
      </div>
    </div>
  );
}

export default App;
