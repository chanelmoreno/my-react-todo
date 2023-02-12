import React from 'react';
import { useState, useEffect } from 'react';
import { Countdown } from '../components';
import '../App.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerStarted, setisTimerStarted] = useState(false)

  const startTimer = () => {
    setisTimerStarted(true);
  }

  const pauseTimer = () => {
    setisTimerStarted(false);
  }

  return (
    <div >
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

 // const pauseTimer = () => {
  //   console.log(minutes)
  //   console.log(seconds)
  //   deadline = Date.now() + milliseconds;
  // }