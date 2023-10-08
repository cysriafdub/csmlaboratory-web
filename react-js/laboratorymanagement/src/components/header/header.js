// src/components/Header/Header.js
import React from 'react';
import './header.css';
import logo from "../../Assets/images/logo.png"


import {LuSettings} from 'react-icons/lu'
function Header() {
  return (
    <header className="header">
      
      <div className="imgLogo">
        <img className ="imglogo" src={logo} alt="My Image"/>
      </div>
      <div className='iconSettings'>
        <LuSettings className ='icon'/>
      </div>
      
                
       
      
    </header>

  );
}

export default Header;
