import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const Timer = () => {
  const [isTimerStarted, setisTimerStarted] = useState(false)
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = Date.now() + 1500000

  const getTime = () => {
    const time = (deadline) - Date.now();
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

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
            <button className='start-button'>Pause</button>
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
            <button onClick={() => setisTimerStarted(true)} className='start-button'>Start</button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Timer;