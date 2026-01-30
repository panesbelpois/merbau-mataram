import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <div className="pt-20 min-h-[calc(100vh-300px)]">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;