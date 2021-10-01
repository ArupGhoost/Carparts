import React from 'react';
import { allProducts } from './Products';

const Body = () => {

    const myFunction2 = () => {
        alert('Coming Soon');
    }

    return (
        <>
         <div className='bg-gray-300'>
              <div className='max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
              <h2 className='sr-only'>Products</h2>

              <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {
                      allProducts.map((product) => {
                          return(
                          <a key={product.id} href={product.href} className='group' onClick={myFunction2}>
                              <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 md:h-80 lg:h-80 lg:aspect-none'>

                                  <img 
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className='w-full h-full object-center object-cover  group-hover:opacity-75'
                                  />
                              </div>
                              <h4 className='mt-4 text-center text-xl text-gray-700'>{product.name}</h4>
                              
                          </a>
                      )})
                  }
              </div>
              </div>
         </div>
        </>
    )
}

export default Body
