import React from 'react';
import { useState, useEffect } from 'react';
import { Countdown } from '../components';
import '../App.css';

const Timer = () => {
  const [isTimerStarted, setisTimerStarted] = useState(false)

  const startTimer = () => {
    setisTimerStarted(true);
  }

  const pauseTimer = () => {
    setisTimerStarted(false);
  }

  return (
    <div >
      <h1 className="title">Countdown</h1>
      {isTimerStarted ? (
        <div>
          <Countdown />
          <div className="timer" >
            <button onClick={() => pauseTimer()} className='start-button'>🚫 Stop</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="timer">
            <div className='timer-box'>
              <p>25</p>
              <p className='little-text'> minutes</p>
            </div>
            <div className='timer-box'>
              <p >00 </p>
              <p className='little-text'> seconds</p>
            </div>
          </div>
          <div className="timer" >
            <button onClick={() => startTimer()} className='start-button'>🟢 Start</button>
          </div>

        </div>
      )}
    </div>
  )
};

export default Timer;

