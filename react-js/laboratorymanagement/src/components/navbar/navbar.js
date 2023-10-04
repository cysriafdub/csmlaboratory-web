import React, { useState } from 'react';
import './navbar.css';

import Dashboard from '../dashboard/dashboards.js';
import Borrow from '../manageRequest/borrowing.js';
import Returning from '../manageRequest/returning.js';
import Breakage from '../manageRequest/breakage.js';
import Glassware from '../Inventory/glasswares';
import Miscellaneous from '../Inventory/miscallaneous';
import Other from '../Inventory/otheritems';
import { Link } from 'react-router-dom';

import home from "../../Assets/images/Home.png";
import manage from "../../Assets/images/manage.png";
import requests from "../../Assets/images/requests.png";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  // const [isSubOption, setSubOption] = useState('');

  const handleSideItemClick = (option) => {
    // Toggle the sub-menu visibility when "Manage" is clicked
    if (option === 'manage') {
      // setSubOption('borrowing');
      setIsSubMenuOpen(!isSubMenuOpen);
      setSelectedOption('manage'); // Set the selectedOption to 'manage'
    } else {
      setSelectedOption(option);
      setIsSubMenuOpen(false); // Closethe sub-menu when other side items are clicked
    }
  };



  return (
    <section className="navbar">
      <ul>
        <Link to="/dashboard">
          <button
            className={`sideItems ${selectedOption === 'dashboard' ? 'selected' : ''}`}
            onClick={() => handleSideItemClick('dashboard')}
          >
            <div className='imageItem'>
              <img src={home} className='imageFit' alt="Home"/>
            </div>
            Dashboard
          </button>
        </Link>
        <Link to="/borrowing">
          <button
            className={`sideItems ${selectedOption === 'manage' ? 'selected' : ''}`}
            onClick={() => handleSideItemClick('manage')}
          >
            <div className='imageItem'>
              <img src={manage} className='imageFit' alt="Manage"/>
            </div>
            Manage Request
          </button>
        </Link>

        {/* Sub options for manage request */}
        {(selectedOption === 'manage' || isSubMenuOpen) && (
          <div className="sub-options">
            <Link to="/borrowing">
              <button
                className={`sub-option ${selectedOption === 'borrowing' ? 'active' : ''}`}
                onClick={() => setSelectedOption('borrowing')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Borrowing"/>
                  Borrowing
                </div>
              </button>
            </Link>

            <Link to="/returning">
              <button
                className={`sub-option ${selectedOption === 'returning' ? 'active' : ''}`}
                onClick={() => setSelectedOption('returning')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Returning"/>
                  Returning
                </div>
              </button>
            </Link>

            <Link to="/breakage">
              <button
                className={`sub-option ${selectedOption === 'breakage' ? 'active' : ''}`}
                onClick={() => setSelectedOption('breakage')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Breakage"/>
                  Breakage
                </div>
              </button>
            </Link>
          
          </div>
        )}
      </ul>
    </section>
  );
}

export default Navbar;
