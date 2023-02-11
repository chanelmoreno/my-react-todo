import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {

  return (
    <div>
      <div className='nav'>
        <div>
          <h1>☑️ Pomofocus Clone</h1>
        </div>
        <div className='nav-buttons'>
          <button>📇 Report</button>
          <button>⚙️ Setting</button>
          <button>💁‍♀️ Login</button>
        </div>
      </div>
    </div>


  );
};

export default Navbar;
