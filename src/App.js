import React, { useState, useEffect } from 'react';

function App() {
  const [Answer, setAnswer] = useState(0);
  const [RSR, setRSR] = useState(1);
  const [RSO, setRSO] = useState(1);
  const [LSO, setLSO] = useState(1);
  const [LSR, setLSR] = useState(1);
  const [RIR, setRIR] = useState(1);
  const [RIO, setRIO] = useState(1);
  const [LIO, setLIO] = useState(1);
  const [LIR, setLIR] = useState(1);
  const [count, setCount] = useState(0);

  function parks3Step(input) {
    if (count === 0) {
      console.log("count is zero");
    }

    if (input === 'Right') {
      console.log('you said right eye is more hyper in primary gaze');
      setRSR(0);
      setRIO(0);
      setLSO(0);
      setLIR(0);
    }

    if (input === 'Left') {
      setRSO(0);
      setRIR(0);
      setLSR(0);
      setLIO(0);
    }

    if (input === 'Right Gaze') {
      setRSO(0);
      setRIO(0);
      setLSR(0);
      setLIR(0);
    }

    if (input === 'Left Gaze') {
      setRSR(0);
      setRIR(0);
      setLSR(0);
      setLIO(0);
    }

    if (input === 'Right Head Tilt') {
      setRIO(0);
      setRIR(0);
      setLSR(0);
      setLSO(0);
    }

    if (input === 'Left Head Tilt') {
      setRSR(0);
      setRSO(0);
      setLIO(0);
      setLIR(0);
    }

    setCount(1); // Update count state

    // Rest of your code


  }

  useEffect(() => {
    let sum = RSR + RSO + LSO + LSR + RIR + RIO + LIO + LIR;
    setAnswer(sum);
    if(sum ===1){
      if(RSR === 1){
        console.log('RSR')
        setAnswer('RSR')
      }
      if(RSO === 1){
        console.log('RSO')
        setAnswer('RSO')
      }
      if(LSO === 1){
        console.log('LSO')
        setAnswer('LSO')
      }
      if(LSR === 1){
        console.log('LSR')
        setAnswer('LSR')
      }
      if(RIR === 1){
        console.log('RIR')
        setAnswer('RIR')
      }
      if(RIO === 1){
        console.log('RIO')
        setAnswer('RIO')
      }
      if(LIO === 1){
        console.log('LIO')
        setAnswer('LIO')
      }
      if(LIR === 1){
        console.log('LIR')
        setAnswer('LIR')
      }
  }
  }, [RSR, RSO, LSO, LSR, RIR, RIO, LIO, LIR]);
  return (
    <div className="App">
        <h1>Isolated Muscle: {Answer}</h1>
        <p>Which eye is hyper deviated in primary gaze?</p>
        <div>
        <input type="radio" name="primaryGaze" value="Right"onChange={() => parks3Step('Right')}/>Right
        <input type="radio" name="primaryGaze" value="Left"onChange={() => parks3Step('Left')}/>Left
        </div>
        <div>
        <input type="radio" name="sideGaze" value="Right Gaze"onChange={() => parks3Step('Right Gaze')}/>Right Gaze
        <input type="radio" name="sideGaze" value="Left Gaze"onChange={() => parks3Step('Left Gaze')}/>Left Gaze
        </div>
        <div>
        <input type="radio" name="headTilt" value="Right Head Tilt"onChange={() => parks3Step('Right Head Tilt')}/>Right Head Tilt
        <input type="radio" name="headTilt" value="Left Head Tilt"onChange={() => parks3Step('Left Head Tilt')}/>Left Head Tilt
        </div>
      <button onClick={() => parks3Step('Right')}>Right</button>
      <button onClick={() => parks3Step('Left')}>Left</button>
        <p>Is the vertical deviation greater in right gaze or left gaze?</p>
      <button onClick={() => parks3Step('Right Gaze')}>Right Gaze</button>
      <button onClick={() => parks3Step('Left Gaze')}>Left Gaze</button>
        <p>Is the vertical deviation greater with right head tilt or left head tilt?</p>
      <button onClick={() => parks3Step('Right Head Tilt')}>Right Head Tilt</button>
      <button onClick={() => parks3Step('Left Head Tilt')}>Left Head Tilt</button>
    </div>
  );
}

export default App;
