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
  const [subOption, setSubOption] = useState(
    selectedOption === 'manage' ? 'borrowing' : (selectedOption === 'inventory' ? 'glassware' : '')
  );

  const [isManageSubMenuOpen, setIsManageSubMenuOpen] = useState(false);
  const [isInventorySubMenuOpen, setIsInventorySubMenuOpen] = useState(false);

  const handleSideItemClick = (option) => {
    if (option === 'manage') {
      setIsManageSubMenuOpen(!isManageSubMenuOpen);
      setSelectedOption('manage');
      setIsInventorySubMenuOpen(false);
      setSubOption('borrowing');
    } else if (option === 'inventory') {
      setIsInventorySubMenuOpen(!isInventorySubMenuOpen);
      setSelectedOption('inventory');
      setIsManageSubMenuOpen(false);
      setSubOption('glassware');
    } else {
      setSelectedOption(option);
      setIsManageSubMenuOpen(false);
      setIsInventorySubMenuOpen(false);
      setSubOption('');
    }
  };

  const handleSubOptionClick = (subOption) => {
    setSubOption(subOption);
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
        {(selectedOption === 'manage' || isManageSubMenuOpen) && (
          <div className="sub-options">
            <Link to="/borrowing">
              <button
                className={`sub-option ${subOption === 'borrowing' ? 'active' : ''}`}
                onClick={() =>  handleSubOptionClick('borrowing')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Borrowing"/>
                  Borrowing
                </div>
              </button>
            </Link>

            <Link to="/returning">
              <button
                className={`sub-option ${subOption === 'returning' ? 'active' : ''}`}
                onClick={() =>  handleSubOptionClick('returning')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Returning"/>
                  Returning
                </div>
              </button>
            </Link>

            <Link to="/breakage">
              <button
                className={`sub-option ${subOption === 'breakage' ? 'active' : ''}`}
                onClick={() =>  handleSubOptionClick('breakage')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Breakage"/>
                  Breakage
                </div>
              </button>
            </Link>
          </div>
        )}
            {/* INVENTORY */}

            <Link to="/inventory">
              <button
                className={`sideItems ${selectedOption === 'inventory' ? 'selected' : ''}`}
                onClick={() => handleSideItemClick('inventory')}
              >
                <div className='imageItem'>
                  <img src={manage} className='imageFit' alt="Inventory"/>
                </div>
                Inventory
              </button>
            </Link>  
            
            {/* Sub options for manage request */}
            {(selectedOption === 'inventory' || isInventorySubMenuOpen) && (
              <div className="sub-options">
                <Link to="/glassware">
                  <button
                    className={`sub-option ${subOption === 'glassware' ? 'active' : ''}`}
                    onClick={() =>  handleSubOptionClick('glassware')}
                  >
                    <div className='iconSubContainer'>
                      <img src={requests} className='iconSub' alt="Glassware"/>
                      Glassware
                    </div>
                  </button>
                </Link>

                <Link to="/miscellaneous">
                  <button
                    className={`sub-option ${subOption === 'miscellaneous' ? 'active' : ''}`}
                    onClick={() =>  handleSubOptionClick('miscellaneous')}
                  >
                    <div className='iconSubContainer'>
                      <img src={requests} className='iconSub' alt="Miscellaneous"/>
                      Miscellaneous
                    </div>
                  </button>
                </Link>

                <Link to="/other">
                  <button
                    className={`sub-option ${subOption === 'other' ? 'active' : ''}`}
                    onClick={() =>  handleSubOptionClick('other')}
                  >
                    <div className='iconSubContainer'>
                      <img src={requests} className='iconSub' alt="Other Items"/>
                      Other Items
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