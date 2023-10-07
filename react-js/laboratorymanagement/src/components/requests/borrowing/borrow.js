import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './borrow.css';
import {BsHourglassSplit} from 'react-icons/bs'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

import Pending from '../borrowingViews/borrowPendingView';
import Accepted from '../borrowingViews/borrowAcceptedView.js';

function Borrowing() {
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
          to="/borrowing/pending"
           className={`borrowMiniContainer ${selectedStatus === 'pending' ? 'selected-item' : ''}`}
              onClick={() => handleStatusClick('pending')}
            > 
              <div className='borrowIconContainer'>
                
                  <BsHourglassSplit className='icon' />        
              </div>
              <div className="borrowStatusTitle">Pending Approve</div>
          
        </Link>

        <Link
          to="/borrowing/accepted"
          className={`borrowMiniContainer ${selectedStatus === 'accepted' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('accepted')}
          > 
            <div className='borrowIconContainer'>
                
                <BsFillCheckCircleFill className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Accepted </div>
        </Link>

        
        <Link
          to="/borrowing/rejected"
          className={`borrowMiniContainer ${selectedStatus === 'rejected' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('rejected')}
          > 

          <div className='borrowIconContainer'>
                
                <MdCancel className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Rejected 
            </div>
          
        </Link>

       


       

        {/* Add similar links for 'rejected' status if needed */}
      </div>

      <div className="selectedStatusContainer">
        {selectedStatus === 'pending' && <Pending />}
        {selectedStatus === 'accepted' && <Accepted />}
        {selectedStatus === 'rejected' && <Pending />}
        {/* Add similar conditions for 'rejected' status if needed */}
      </div>
    </section>
  );
}

export default Borrowing;
