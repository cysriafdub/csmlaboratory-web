import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

function NavHeaderVisibility() {
    const location = useLocation(); // Use useLocation inside the Router component

    const isLoginPage = location.pathname === '/login';

    return (
        <div>
            {!isLoginPage && <Header />}
            {!isLoginPage && <Sidebar />}
        </div>
    );
}

export default NavHeaderVisibility;