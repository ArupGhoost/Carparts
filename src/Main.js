import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
        
           <div className='bg-white h-screen flex flex-col justify-center
           items-center'>
               <h1 className='lg:text-8xl md:text-7xl sm:text-5xl 
               text-3xl font-black mb-8'>
                   Car<span className='text-gray-500'>OM</span>ania
               </h1>
               <Link to='/body' className='py-6 px-10 bg-gray-100 rounded-full text-2xl hover:bg-gray-200 flex justify-around items-center'>
                  Order
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
               </Link>
               <p className='pt-4 lg:text-xl md:text-xl sm:text-xl text-xl text-gray-500'>We sell car parts, accessories with perfect price</p>
           </div>
          
        </>
    )
}

export default Main
