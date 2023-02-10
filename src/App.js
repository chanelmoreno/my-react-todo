import React from 'react';
import { Header, NavBar, Todo } from './components';
import './index.css';

const App = () => {
  return (
    <div class='app'>
      <div class='app-area'>
        <NavBar />
        <Todo />

      </div>
    </div>

  )
}

export default App