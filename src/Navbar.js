import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
    return (
        <>
         <nav className='flex justify-between items-center h-16 bg-gray-100 text-black relative 
         shadow-sm font-arial '>
            <Link to='/' className='pl-8 text-xl'>
            Ghost CAR 
            </Link>
            <div className='px-4 cursor-pointer md:hidden' onClick={ toggle }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
            viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" 
             strokeWidth={2} d="M4 8h16M4 16h16" />
           </svg>
            </div>
            <div className='pr-8 md:block hidden'>
               <Link className='p-4 text-gray-500' to='/'>Home</Link>
               <Link className='p-4 text-gray-500' to='/body'>Products</Link>
               <Link className='p-4 text-gray-500' to='/about'>About Us</Link>
               <Link className='p-4 text-gray-500' to='/contact'>Contact</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;

