import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='min-h-screen '>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;