import React from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Borrow from './components/manageRequest/borrowing.js';

import Returning from './components/manageRequest/returning.js';
import Breakage from './components/manageRequest/breakage.js';

// import Dashboard  from './components/dashboard/dashboards.js';
import Dashboard from './components/dashboard/dashboards.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/manage" element={<Borrow/>} />
         <Route path="/borrowing" element={<Borrow/>} />
         <Route path="/returning" element={<Returning/>} />
         <Route path="/breakage" element={<Breakage/>} />
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
