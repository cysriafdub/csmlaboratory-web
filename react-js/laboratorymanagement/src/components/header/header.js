// src/components/Header/Header.js
import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {LuSettings} from 'react-icons/lu'


function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <header className="header">
      
      <div className="imgLogo">
        <img className ="imglogo" src={logo} alt="My Image"/>
      </div>
      <div className='iconSettings'>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <LuSettings className ='icon'/>
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          style: {
            backgroundColor: '#87A982',
          }
        }}
        >
          <MenuItem onClick={handleClose} className='menuItem'>
            <AccountCircleOutlinedIcon sx={{marginRight: 2,}} /> Labtech
          </MenuItem>
          <Link to="/login">
            <MenuItem onClick={handleClose}>
              <LogoutOutlinedIcon sx={{marginRight: 2,}}/>
              Logout</MenuItem>
          </Link>
        </Menu>
      </div>
      
      
                
       
      
    </header>
  );
}

export default Header;
