import React, { useState } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

import home from "../../Assets/images/Home.png";
import manage from "../../Assets/images/manage.png";
import requests from "../../Assets/images/requests.png";
import group from "../../Assets/images/Group.png";
import warning from "../../Assets/images/Warning.png"
import help from "../../Assets/images/Lamp.png"
import ng from "../../Assets/images/NewGenes.png"


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
        
        <Link to="/borrowing/pending">
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
            <Link to="/borrowing/pending"
             
                className={`sub-option ${subOption === 'borrowing' ? 'active' : ''}`}
                onClick={() =>  handleSubOptionClick('borrowing')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Borrowing"/>
                  Borrowing
                </div>
             
            </Link>

            <Link to="/returning/pending"
                className={`sub-option ${subOption === 'returning' ? 'active' : ''}`}
                onClick={() =>  handleSubOptionClick('returning')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Returning"/>
                  Returning
                </div>
              
            </Link>

            <Link to="/breakage/list"
             
                className={`sub-option ${subOption === 'breakage' ? 'active' : ''}`}
                onClick={() =>  handleSubOptionClick('breakage')}
              >
                <div className='iconSubContainer'>
                  <img src={requests} className='iconSub' alt="Breakage"/>
                  Breakage
                </div>
              
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
                  <img src={group} className='imageFit' alt="Inventory"/>
                </div>
                Inventory
              </button>
            </Link>  
            
            {/* Sub options for manage request */}
            {(selectedOption === 'inventory' || isInventorySubMenuOpen) && (
              <div className="sub-options">
                <Link to="/glassware"
                  
                    className={`sub-option ${subOption === 'glassware' ? 'active' : ''}`}
                    onClick={() =>  handleSubOptionClick('glassware')}
                  >
                    <div className='iconSubContainer'>
                      <img src={requests} className='iconSub' alt="Glassware"/>
                      Glassware
                    </div>
                
                </Link>

                <Link to="/miscellaneous"
                 
                    className={`sub-option ${subOption === 'miscellaneous' ? 'active' : ''}`}
                    onClick={() =>  handleSubOptionClick('miscellaneous')}
                  >
                    <div className='iconSubContainer'>
                      <img src={requests} className='iconSub' alt="Miscellaneous"/>
                      Miscellaneous
                    </div>
           
                </Link>

                <Link to="/other"
                
                    className={`sub-option ${subOption === 'other' ? 'active' : ''}`}
                    onClick={() =>  handleSubOptionClick('other')}
                  >
                    <div className='iconSubContainer'>
                      <img src={requests} className='iconSub' alt="Other Items"/>
                      Other Items
                    </div>
                  
                </Link>
          </div>
        )}

        <Link to="/reports">
          <button
            className={`sideItems ${selectedOption === 'reports' ? 'selected' : ''}`}
            onClick={() => handleSideItemClick('reports')}
          >
            <div className='imageItem'>
              <img src={warning} className='imageFit' alt="Home"/>
            </div>
            Reports
          </button>
        </Link>

        <Link to="/help">
          <button
            className={`sideItems ${selectedOption === 'help' ? 'selected' : ''}`}
            onClick={() => handleSideItemClick('help')}
          >
            <div className='imageItem'>
              <img src={help} className='imageFit' alt="Home"/>
            </div>
            Help and Support 
          </button>
        </Link>
        
      </ul>
          <div className='imageNewGenes'>
            <img src={ng} className='imgNG'/> 
          </div>
    </section>
  );
}

export default Navbar;