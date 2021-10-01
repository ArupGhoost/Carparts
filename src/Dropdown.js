import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <>
            <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-gray-300' 
            : 'hidden'} onClick={toggle}>
            <Link className='p-4 text-gray-500' to='/'>Home</Link>
               <Link className='p-4 text-gray-500' to='/body'>Products</Link>
               <Link className='p-4 text-gray-500' to='/about'>About Us</Link>
               <Link className='p-4 text-gray-500' to='/contact'>Contact</Link>
            </div>
        </>
    )
}

export default Dropdown;