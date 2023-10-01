import React, { useState } from 'react';
import logo from "../../Assets/images/logo.png";
import './borrowing.css';
import {BsHourglassSplit} from 'react-icons/bs'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

import {RxDotFilled} from 'react-icons/rx'
function Borrow() {
  const [selectedStatus, setSelectedStatus] = useState('Pending'); // Set 'Pending' as the default

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const pendingItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Pending'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Pending'
    }
    
  ]
  const acceptedItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Approved'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Approved'
    }
    
    
   
  ]

  return (
    <section className="content">
      <div className="titleHeader">
        <div className='titleName'> Manage Requests </div>
      
      </div>

      <div className='borrowStatusContainer'>
        
           <div
              className={`borrowMiniContainer ${selectedStatus === 'Pending' ? 'selected-item' : ''}`}
              onClick={() => handleStatusClick('Pending')}
            >
              
              
              <div className='borrowIconContainer'>
                
                  <BsHourglassSplit className='icon' />
               
              </div>
              <div className="borrowStatusTitle">Pending Approve</div>
            </div>

           
         


        
          <div
            className={`borrowMiniContainer ${selectedStatus === 'Accepted' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('Accepted')}
          > 
            <div className='borrowIconContainer'>
                
                <BsFillCheckCircleFill className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Accepted </div>
          </div>
   


        
          <div
            className={`borrowMiniContainer ${selectedStatus === 'Rejected' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('Rejected')}
          > 

          <div className='borrowIconContainer'>
                
                <MdCancel className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Rejected </div>
          </div>
        </div>
     

      {selectedStatus && (
        <div className="selectedStatusContainer">
          {selectedStatus === 'Pending' && (
            <div className="optionContainer"> 
              <div
              className="selectedStatusTitle">{selectedStatus} Approve</div>
              {pendingItems.map((item) => (
             
                <div className='transactionContainer'>
                  <div className='transactionFirstRow'>
                    <div>Transaction ID #{item.id} </div>
                    <div className='transactionStatusContainer'>
                      <div className='statusIconContainer'>  
                         <RxDotFilled className='iconPendingChecking'/> </div>
                      <div className='itemPendingStatusText'> {item.status}</div>
                    </div>
                   
                  </div>
                  <div className='transactionSecondRow'>

                    <div className='transactionDate'>
                        {item.date}
                    </div>
                    <div className='transactionDate'>
                        {item.time}
                    </div>

                  </div>
                  <div className='transactionThirdRow'>
                    Tap to View
                  </div>
                </div>
              
              ))}
            </div>
          )}

        {selectedStatus === 'Accepted' && (
            <div className="optionContainer"> 
              <div
              className="selectedStatusTitle">{selectedStatus}/Approve </div>
              {acceptedItems.map((item) => (
             
                <div className='transactionContainer'>
                  <div className='transactionFirstRow'>
                    <div>Transaction ID #{item.id} </div>
                    <div className='transactionStatusContainer'>
                      <div className='statusIconContainer'>  
                         <RxDotFilled className='iconApprove'/> </div>
                      <div className='itemApproveStatusText'> {item.status}</div>
                    </div>
                   
                  </div>
                  <div className='transactionSecondRow'>

                    <div className='transactionDate'>
                        {item.date}
                    </div>
                    <div className='transactionDate'>
                        {item.time}
                    </div>

                  </div>
                  <div className='transactionThirdRow'>
                    Tap to View
                  </div>
                </div>
              
              ))}
            </div>
          )}

          {selectedStatus === 'Rejected' && (
            <div className="optionContainer">
              <div className="selectedStatusTitle">{selectedStatus}</div>
              {/* Content for Rejected */}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Borrow;
