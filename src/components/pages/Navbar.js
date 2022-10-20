import React from 'react';
import siteLogo from '../images/VIRGO.png';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div>
                <a href="/" >
                    <img
                        className='navbar-brand-image w-auto mx-auto h-10 mt-2'
                        src={siteLogo} alt="logo"
                    />
                </a>
            </div>
            <div className='nav-area text-center mt-6'>
                <ul className='list-none overflow-hidden inline-block'>
                    <li className='float-left px-2'>
                        <a className='' href="/new-arrival">New Arrival</a>
                    </li>
                    <li className='float-left px-2'>
                        <a className='' href="/men">Men</a>
                    </li>
                    <li className='float-left px-2'>
                        <a className='' href="/woman">Woman</a>
                    </li>
                    <li className='float-left px-2'>
                        <a className='' href="/children">Children</a>
                    </li>
                    <li className='float-left px-2'>
                        <a className='' href="/more">More</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;