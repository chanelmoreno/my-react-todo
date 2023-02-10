import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {

  return (
    <div>
      <div class='nav'>
        <div>
          <h1>☑️ Pomofocus</h1>
        </div>
        <div class='nav-buttons'>
          <button>📇 Report</button>
          <button>⚙️ Setting</button>
          <button>💁‍♀️ Login</button>
        </div>
      </div>
    </div>


  );
};

export default Navbar;
