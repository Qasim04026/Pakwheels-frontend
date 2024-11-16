"use client"
import React from 'react'

export default function Header() {
  return (
    <div className='h-96 relative overflow-hidden bd-gradient-to-r from-black to-white-700 font-sams px-8 py-8 mb-8'> 
      <div className='absolute inset-0 cpacity-20' >
        <img src="https://www.shutterstock.com/image-vector/car-abstract-vector-3d-modern-600nw-1951315810.jpg"
          className='w-full h-full object-covre' />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center py-2 '>
        <h2 className='text-white text-lg sm:text-5xl font-bold-blue mb-4 py-3'>Find Used Cars in Pakistan</h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl px-3 py-0'>
        With thousands of cars, we have just the right one for you</p>
        <div style={{ position: 'relative' }} className=' bg-black h-9 flex flex-col sm:flex-row gap-2 space-y-3 sm:space-y-0 sm-x-5  '>
           
                  <input type='text' className="py-2 px-10 outline-black text-center w-{200px} pr-6  lg:block md:block"
                    placeholder="Car Make or Modle" />
                     <input type='text' className="py-2 px-10 outline-black text-center w-{200px} pr-6  lg:block md:block"
                    placeholder="All Cities" />
                     <input type='text' className="py-2 px-10 outline-black text-center w-{200px} pr-6  lg:block md:block"
                    placeholder="Price range" />

                     </div>
<div className='py-5'>
    <button  type="button"
    className='bg-transparent border-spacing-4 border-white text-white text-sm font-samibold py-4 px-4 rounded-sm shadow-lg hover:bg-transparent transition duration-300'>
    Advance Filter
  </button> 
  </div>       
       
      </div>
    </div>
  )
}
