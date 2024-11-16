"use client";
import React from "react";

interface BookingProps {
  setOrderPlaced: (value: boolean) => void;
}

export default function Booking({ setOrderPlaced }: BookingProps) {
   const handleOrderClick = () => {
     setOrderPlaced(true);
         
   };
 
  

  return (
    <section className="bg-gradient-to-r bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-800">Enter Your Detail</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-red-800">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-600 rounded-md"
              required />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-600 rounded-md"
              required />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Card Number"
              className="w-full p-3 border border-gray-600 rounded-md"
              required />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border border-gray-600 rounded-md"
              required />
          </div>
          <div className="mb-4">
            <button 
              type="button"
              onClick={handleOrderClick}
              className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900">
              Place Your Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
