import React from 'react';
import './App.css';



import Borrow from './components/manageRequest/borrowing.js';
import Returning from './components/manageRequest/returning.js';
import Breakage from './components/manageRequest/breakage.js';
import Dashboard from './components/dashboard/dashboards.js';
import Glassware from './components/Inventory/glasswares';
import Miscellaneous from './components/Inventory/miscallaneous';
import Other from './components/Inventory/otheritems';
import AddItem from './components/Inventory/additem';
import EditItem from './components/Inventory/edititem';
import Login from './components/login/login';
import NavHeaderVisibility from './components/login/loginisolate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import useLocation

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <Router> {/* Wrap your entire app with the Router */}
    
      <div className="App">
          <NavHeaderVisibility />


          <Header />
          <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage" element={<Borrow />} />
          <Route path="/borrowing" element={<Borrow />} />
          <Route path="/returning" element={<Returning />} />
          <Route path="/breakage" element={<Breakage />} />
          <Route path="/inventory" element={<Glassware />} />
          <Route path="/glassware" element={<Glassware />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/other" element={<Other />} />
          <Route path='add-item' element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
