
import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col h-0 py-8'>
        <h1 className='text-center text-lg hover:text-cyan-600 text-blue-900 font-bold mb-2'>
          Thank You For Shopping!!!
        </h1>
        <p className='text-center text-base hover:text-cyan-700 text-blue-900 font-medium mb-1'>
          Your order will be delivered in 3 business days
        </p>
        <div className='flex flex-row justify-center gap-1 mb-1'>
          <a href="https://www.facebook.com/qasim.raza.7564129" target='_blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt='facebook logo' />
          </a>
          <a href="https://www.linkedin.com/in/qasim-raza-761104267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/4494/4494497.png' alt='linkedin logo' />
          </a>
        </div>
        <h3 className='text-center text-base hover:text-cyan-600 text-blue-900 font-bold mb-1'>
          Created By Qasim Raza
        </h3>
      </footer>
    </div>
  );
}
