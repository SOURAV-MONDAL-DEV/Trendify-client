import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import MoreOption from '../MoreOption/MoreOption';

const Home = () => {
    return (
        <div className='lg:flex bg-gray-100 pt-16'>
            <div className='hidden lg:block basis-3/12 '>
                <Menu></Menu>
            </div>
            <div style={{maxHeight:"90vh"}} className='lg:overflow-y-scroll basis-6/12'>
                <Outlet></Outlet>
            </div>
            <div className='hidden lg:block basis-3/12 '>
                <MoreOption></MoreOption>
            </div>
        </div>
    );
};

export default Home;