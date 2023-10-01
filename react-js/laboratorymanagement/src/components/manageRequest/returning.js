import React, { useState } from 'react';
import logo from "../../Assets/images/logo.png";
import './returning.css';
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
      status: 'Returning'
    },
    {
      id: 1022,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Returning'
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
        <div className='titleName'> Manage Return </div>
      
      </div>

      <div className='borrowStatusContainer'>
        
           <div
              className={`borrowMiniContainer ${selectedStatus === 'Pending' ? 'selected-item' : ''}`}
              onClick={() => handleStatusClick('Pending')}
            >
              
              
              <div className='borrowIconContainer'>
                
                  <BsHourglassSplit className='icon' />
               
              </div>
              <div className="borrowStatusTitle"> Returning</div>
            </div>

           
         


        
          <div
            className={`borrowMiniContainer ${selectedStatus === 'Returned' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('Returned')}
          > 
            <div className='borrowIconContainer'>
                
                <BsFillCheckCircleFill className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Returned</div>
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

        {selectedStatus === 'Returned' && (
            <div className="optionContainer"> 
              <div
              className="selectedStatusTitle">{selectedStatus} </div>
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

          
        </div>
      )}
    </section>
  );
}

export default Borrow;
