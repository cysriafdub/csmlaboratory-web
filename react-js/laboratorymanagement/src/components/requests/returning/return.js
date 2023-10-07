import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './return.css'
import {BsHourglassSplit} from 'react-icons/bs'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

import Pending from '../returningViews/returnPendingView';
import Return from '../returningViews/returnReturnedView.js';

function Returning() {
  const { status } = useParams();
  const [selectedStatus, setSelectedStatus] = useState('pending');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <section className="content">
      <div className="titleHeader">
        <div className='titleName'> Manage Requests </div>
      </div>

      <div className='borrowStatusContainer'>
        <Link
          to="/returning/pending"
           className={`borrowMiniContainer ${selectedStatus === 'pending' ? 'selected-item' : ''}`}
              onClick={() => handleStatusClick('pending')}
            > 
              <div className='borrowIconContainer'>
                
                  <BsHourglassSplit className='icon' />        
              </div>
              <div className="borrowStatusTitle">Pending Approve</div>
          
        </Link>

        <Link
          to="/returning/returned"
          className={`borrowMiniContainer ${selectedStatus === 'returned' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('returned')}
          > 
            <div className='borrowIconContainer'>
                
                <BsFillCheckCircleFill className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Returned </div>
        </Link>

        
        

       


       

        {/* Add similar links for 'rejected' status if needed */}
      </div>

      <div className="selectedStatusContainer">
        {selectedStatus === 'pending' && <Pending />}
        {selectedStatus === 'returned' && <Return />}
        
      </div>
    </section>
  );
}

export default Returning;
