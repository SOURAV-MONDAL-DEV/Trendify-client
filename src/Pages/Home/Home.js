import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import MoreOption from '../MoreOption/MoreOption';

const Home = () => {
    return (
        <div className='md:flex bg-gray-100 pt-16'>
            <div className='hidden md:block md:basis-4/12 lg:basis-3/12 '>
                <Menu></Menu>
            </div>
            <div style={{maxHeight:"99vh"}} className='md:overflow-y-scroll md:basis-8/12 lg:basis-6/12 md:mr-4 lg:mr-0'>
                <Outlet></Outlet>
            </div>
            <div className='hidden lg:block lg:basis-3/12 '>
                <MoreOption></MoreOption>
            </div>
        </div>
    );
};

export default Home;