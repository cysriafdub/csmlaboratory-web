import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import {BsHourglassSplit} from 'react-icons/bs'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

import List from '../breakageViews/breakageList';
import Pending from '../breakageViews/breakagePending';
import Replaced from '../breakageViews/breakageReplaced';

function breakage() {
  const { status } = useParams();
  const [selectedStatus, setSelectedStatus] = useState('breakage');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <section className="content">
      <div className="titleHeader">
        <div className='titleName'> Manage Breakage </div>
      </div>

      <div className='borrowStatusContainer'>
        <Link
          to="/breakage/list"
           className={`borrowMiniContainer ${selectedStatus === 'breakage' ? 'selected-item' : ''}`}
              onClick={() => handleStatusClick('breakage')}
            > 
              <div className='borrowIconContainer'>
                
                 <BsHourglassSplit className='icon' />  
              </div>
              <div className="borrowStatusTitle">Breakage List
             </div>
          
        </Link>

        <Link
          to="/breakage/pending"
          className={`borrowMiniContainer ${selectedStatus === 'pending' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('pending')}
          > 
            <div className='borrowIconContainer'>
                
                <BsFillCheckCircleFill className='icon' />
             
            </div>
            <div className="borrowStatusTitle">pending </div>
        </Link>

        
        <Link
          to="/breakage/replaced"
          className={`borrowMiniContainer ${selectedStatus === 'replaced' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('replaced')}
          > 

          <div className='borrowIconContainer'>
                
                <MdCancel className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Replaced
            </div>
          
        </Link>

       


       

        {/* Add similar links for 'rejected' status if needed */}
      </div>
      <div className="selectedStatusContainer">
        {selectedStatus === 'breakage' && <List />}
        {selectedStatus === 'pending' && <Pending />}
        {selectedStatus === 'replaced' && <Replaced />}
        {/* Add similar conditions for 'rejected' status if needed */}
      </div>
    </section>
  );
}

export default breakage;
