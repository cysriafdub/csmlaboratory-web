import React, { useState } from 'react';
import logo from "../../Assets/images/logo.png";
import './breakage.css';
import {BsHourglassSplit} from 'react-icons/bs'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

import {RxDotFilled} from 'react-icons/rx'
function Borrow() {
  const [selectedStatus, setSelectedStatus] = useState('Breakage'); // Set 'Pending' as the default

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const breakageItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Breakage'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Breakage'
    }
    
  ]
  const pendingItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Replacing'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Replacin'
    }
    
    
   
  ]
  const replacedItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Replaced'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Replaced'
    }
    
    
   
  ]


  return (
    <section className="content">
      <div className="titleHeader">
        <div className='titleName'> Manage Requests </div>
      
      </div>

      <div className='borrowStatusContainer'>
        
           <div
              className={`borrowMiniContainer ${selectedStatus === 'Breakage' ? 'selected-item' : ''}`}
              onClick={() => handleStatusClick('Breakage')}
            >
              
              
              <div className='borrowIconContainer'>
                
                  <BsHourglassSplit className='icon' />
               
              </div>
              <div className="borrowStatusTitle">Breakage List</div>
            </div>

           
         


        
          <div
            className={`borrowMiniContainer ${selectedStatus === 'Pending' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('Pending')}
          > 
            <div className='borrowIconContainer'>
                
                <BsFillCheckCircleFill className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Pending Approve </div>
          </div>
   


        
          <div
            className={`borrowMiniContainer ${selectedStatus === 'Replaced' ? 'selected-item' : ''}`}
            onClick={() => handleStatusClick('Replaced')}
          > 

          <div className='borrowIconContainer'>
                
                <MdCancel className='icon' />
             
            </div>
            <div className="borrowStatusTitle"> Replaced </div>
          </div>
        </div>
     

      {selectedStatus && (
        <div className="selectedStatusContainer">
          {selectedStatus === 'Breakage' && (
            <div className="optionContainer"> 
              <div
              className="selectedStatusTitle">{selectedStatus} List</div>
              {breakageItems.map((item) => (
             
                <div className='transactionContainer'>
                  <div className='transactionFirstRow'>
                    <div>Transaction ID #{item.id} </div>
                    <div className='transactionStatusContainer'>
                      <div className='statusIconContainer'>  
                         <RxDotFilled className='iconBreakageChecking'/> </div>
                      <div className='itemBreakageStatusText'> {item.status}</div>
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

        {selectedStatus === 'Pending' && (
            <div className="optionContainer"> 
              <div
              className="selectedStatusTitle">{selectedStatus}/Approve </div>
              {pendingItems.map((item) => (
             
                <div className='transactionContainer'>
                  <div className='transactionFirstRow'>
                    <div>Transaction ID #{item.id} </div>
                    <div className='transactionStatusContainer'>
                      <div className='statusIconContainer'>  
                         <RxDotFilled className='iconPending'/> </div>
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

          {selectedStatus === 'Replaced' && (
            <div className="optionContainer"> 
            <div
            className="selectedStatusTitle">{selectedStatus}/Approve </div>
            {replacedItems.map((item) => (
           
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
