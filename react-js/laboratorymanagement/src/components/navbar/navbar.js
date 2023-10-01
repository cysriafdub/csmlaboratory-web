import React, { useState } from 'react';
import './navbar.css';

import Dashboard from '../dashboard/dashboards.js';


import Borrow from '../manageRequest/borrowing.js';
import Returning from '../manageRequest/returning.js';
import Breakage from '../manageRequest/breakage.js';


import Glassware from '../Inventory/glasswares';
import Miscellaneous from '../manageRequest/borrowing.js';
import Other from '../manageRequest/borrowing.js';



import home from "../../Assets/images/Home.png";
import manage from "../../Assets/images/manage.png";
import group from "../../Assets/images/Group.png";
import warning from "../../Assets/images/Warning.png";
import lamp from "../../Assets/images/Lamp.png";
import newgenes from "../../Assets/images/NewGenes.png";
import grouplog from "../../Assets/images/group_log.png";
import requests  from "../../Assets/images/requests.png";




function Navbar() {
  const [selectedOption, setSelectedOption] = useState('');
  const [subOption, setSubOption] = useState('');

  const handleSideItemClick = (option) => {
    setSelectedOption(option);
    
    // Set the default sub-option based on the selected option
    if (option === 'manage') {
      setSubOption('borrowing');
    } else if (option === 'inventory') {
      setSubOption('glassware');
    } else {
      setSubOption(''); // Reset sub-option for other menu items
    }
  };


  const handleSubOptionClick = (subOption, event) => {
    event.stopPropagation();
    setSubOption(subOption);
  };

  return (
    <section className="navbar">
      <ul>
        <button
          className={`sideItems ${selectedOption === 'dashboard' ? 'selected' : ''}`}
          onClick={() => handleSideItemClick('dashboard')}
        >
          <div className='imageItem'>
            <img src={home} className='imageFit' alt="Home"/>
          </div>
          Dashboard
          {selectedOption === 'dashboard' && <Dashboard selectedOption={selectedOption} />}
        </button>   

         <button
            className={`sideItems ${selectedOption === 'manage' ? 'selected' : ''}`}
            onClick={() => handleSideItemClick('manage')}
          >
            <div className='imageItem'>  
              <img src={manage} className='imageFit' alt="Manage"/>
            </div>
            Manage Request
          </button>

             {/* sub options for manage request */}


            {selectedOption === 'manage' && (
              <div className="sub-options">
                <button
                  className={`sub-option ${subOption === 'borrowing' ? 'active' : ''}`}
                  onClick={(event) => handleSubOptionClick('borrowing', event)}
                >
                  <div className='iconSubContainer'>
                    <img src={requests} className='iconSub' />
                    Breakage
                  </div>
                </button>
                <button
                  className={`sub-option ${subOption === 'returning' ? 'active' : ''}`}
                  onClick={(event) => handleSubOptionClick('returning', event)}
                >
                  <div className='iconSubContainer'>
                    <img src={requests} className='iconSub' />
                    Returning
                  </div>
                </button>
                <button
                  className={`sub-option ${subOption === 'breakage' ? 'active' : ''}`}
                  onClick={(event) => handleSubOptionClick('breakage', event)}
                >
                  <div className='iconSubContainer'>
                    <img src={requests} className='iconSub' />
                    Breakage
                  </div>
                </button>
              </div>
            )}

            {/* navigating to options */}

            {selectedOption === 'manage' && subOption === 'borrowing' && (
          
              <Borrow subOption={subOption} />
            )}

            {selectedOption === 'manage' && subOption === 'returning' && (
              <Returning subOption={subOption} />
            )}

            {selectedOption === 'manage' && subOption === 'breakage' && (
              <Breakage subOption={subOption} />
            )}

        
        <button
                  className={`sideItems ${selectedOption === 'inventory' ? 'selected' : ''}`}
                  onClick={() => handleSideItemClick('inventory')}
                >
                  <div className='imageItem'>
                    <img src={group} className='imageFit' alt="Inventory"/>
                  </div>
                  Inventory
        </button>


          {/* sub options for manage request */}

          {selectedOption === 'inventory' && (
              <div className="sub-options">
                <button
                  className={`sub-option ${subOption === 'glassware' ? 'active' : ''}`}
                  onClick={(event) => handleSubOptionClick('glassware', event)}
                >
                   <div className='iconSubContainer'>
                    <img src={requests} className='iconSub' />
                     Glassware
                  </div>
                </button>


                <button
                  className={`sub-option ${subOption === 'miscellaneous' ? 'active' : ''}`}
                  onClick={(event) => handleSubOptionClick('miscellaneous', event)}
                >
                  <div className='iconSubContainer'>
                    <img src={requests} className='iconSub' />
                    Miscellaneous
                  </div>

                </button>


                <button
                  className={`sub-option ${subOption === 'other' ? 'active' : ''}`}
                  onClick={(event) => handleSubOptionClick('other', event)}
                >
                  <div className='iconSubContainer'>
                    <img src={requests} className='iconSub' />
                    Other Items
                  </div>
                </button>
              </div>
            )}


          {/* navigating to options */}
            {selectedOption === 'inventory' && subOption === 'glassware' && (
                    
              <Glassware subOption={subOption} />
            )}

            {selectedOption === 'inventory' && subOption === 'miscellaneous' && (
              <Miscellaneous subOption={subOption} />
            )}

            {selectedOption === 'inventory' && subOption === 'other' && (
              <Other subOption={subOption} />
            )}

        <button
          className={`sideItems ${selectedOption === 'reports' ? 'selected' : ''}`}
          onClick={() => handleSideItemClick('reports')}
        >
          <div className='imageItem'>
            <img src={warning} className='imageFit' alt="Reports"/>
          </div>
          Reports
        </button>

        <button
          className={`sideItems ${selectedOption === 'help' ? 'selected' : ''}`}
          onClick={() => handleSideItemClick('help')}
        >
          <div className='imageItem'>
            <img src={lamp} className='imageFit' alt="Help"/>
          </div>
          Help and Support
        </button>
        
        <div className='imageNewGenes'>
          <img src={grouplog} className="imgNG" alt="Group Logo"/>
          <img src={newgenes} alt="New Genes"/>
        </div>
      </ul>
    </section>
  );
}

export default Navbar;
