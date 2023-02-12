import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const Countdown = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let milliseconds = 1500000;
  let deadline = Date.now() + milliseconds;

  const getTime = () => {
    const time = (deadline) - Date.now();
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="timer">
        <div className='timer-box'>
          <p >{minutes}</p>
          <p className='little-text'> minutes</p>
        </div>
        <div className='timer-box'>
          <p >{seconds} </p>
          <p className='little-text'> seconds</p>
        </div>
      </div>

    </div>

  )
}

export default Countdown