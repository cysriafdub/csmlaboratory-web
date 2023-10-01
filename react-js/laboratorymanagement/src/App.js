// src/App.js
import React from 'react';
import './App.css'; // Import your global styles if you have any
import Header from './components/header/header'; // Import the Header component
import Nav from './components/navbar/navbar';
// import Request from './components/requests/requests';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Borrow from './components/manageRequest/borrowing.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav /> 

     
      
   
    </div>
  );
}

export default App;
