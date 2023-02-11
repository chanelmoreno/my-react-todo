import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const Timer = () => {
  const [isTimerStarted, setisTimerStarted] = useState(false)
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const milliseconds = 1500000 //25 minutes
  let deadline = Date.now() + milliseconds

  const getTime = () => {

    const time = (deadline) - Date.now();
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  const pauseTimer = () => {
    console.log(minutes)
    console.log(seconds)
  }

  const startTimer = () => {
    setisTimerStarted(true);
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      {isTimerStarted ? (
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
          <div className="timer" >
            <button onClick={() => pauseTimer(minutes, seconds)} className='start-button'>🚫 Stop</button>
          </div>
        </div>

      ) : (
        <div>
          <div className="timer">
            <div className='timer-box'>
              <p >25</p>
              <p className='little-text'> minutes</p>
            </div>
            <div className='timer-box'>
              <p >00 </p>
              <p className='little-text'> seconds</p>
            </div>
          </div>
          <div className="timer" >
            <button onClick={() => startTimer()} className='start-button'>Start</button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Timer;