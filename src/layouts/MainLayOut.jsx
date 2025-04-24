import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            <div className='min-h-[calc(100vh-232px)]'>

            </div>
            <Footer></Footer>
            {/* Footer */}
        </div>
    );
};

export default MainLayOut;