import React, { useState, useEffect } from 'react';
import './styles.css';

const CountdownTimer = () => {
  const [initialTime, setInitialTime] = useState(300); 
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setInitialTime(newTime);
    setTime(newTime);
  };

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className='main'>
      <h1>Countdown Timer</h1>
      <div>
        <label id='s1'>
          Set Time (in seconds):
          <input type="number" value={initialTime} onChange={handleTimeChange} />
        </label>
      </div>
      <div>
        <p id='s1'>Current Time: {formatTime(time)}</p>
        <button onClick={handleStartStop}  id='b1'>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset} id='b2'>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
