import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

function NavHeaderVisibility() {
    const location = useLocation(); // Use useLocation inside the Router component

    const isLoginPage = location.pathname === '/login';

    return (
        <div>
            {!isLoginPage && <Header />}
            {!isLoginPage && <Navbar />}
        </div>
    );
}

export default NavHeaderVisibility;