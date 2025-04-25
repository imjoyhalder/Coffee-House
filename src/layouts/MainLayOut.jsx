import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* Footer */}
        </div>
    );
};

export default MainLayOut;