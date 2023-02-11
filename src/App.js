import React from 'react';
import { NavBar, Todo, Timer } from './components';
import './index.css';

const App = () => {
  return (
    <div className='app'>
      <div className='app-area'>
        <NavBar />
        <Timer />
        <Todo />

      </div>
    </div>

  )
}

export default App