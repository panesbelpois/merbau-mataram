import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/nav.jsx';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Nav />
            <div className="pt-20"> {/* Padding to prevent content from being hidden behind fixed navbar */}
                <Outlet />
            </div>
            {/* Footer could go here */}
        </div>
    );
};

export default MainLayout;
