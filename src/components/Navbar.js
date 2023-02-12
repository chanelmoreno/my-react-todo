import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {

  const reportMsg = 'Reporting for duty! No reports available right now though'
  const settingMsg = 'No settings currently, just a simple ol\' app'
  const loginMsg = 'I am purely for decorative purposed :P'


  function alertMe(message) {
    alert(`${message}`)
  }

  return (
    <div>
      <div className='nav'>
        <div>
          <h1>☑️ Pomofocus Clone</h1>
        </div>
        <div className='nav-buttons'>
          <button onClick={() => alertMe(reportMsg)}>📇 Report</button>
          <button onClick={() => alertMe(settingMsg)}>⚙️ Setting</button>
          <button onClick={() => alertMe(loginMsg)}>💁‍♀️ Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
