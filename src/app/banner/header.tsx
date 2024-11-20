"use client";

import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="h-96 relative overflow-hidden bg-gradient-to-r from-black to-white font-sans px-8 py-8 mb-8">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://www.shutterstock.com/image-vector/car-abstract-vector-3d-modern-600nw-1951315810.jpg"
          alt="3D Modern Car Illustration"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center py-2">
        <h2 className="text-white text-lg sm:text-5xl font-bold mb-4 py-3">
          Find Used Cars in Pakistan
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl px-3">
          With thousands of cars, we have just the right one for you
        </p>
        <div
          style={{ position: 'relative' }}
          className="bg-black h-9 flex flex-col sm:flex-row gap-2 space-y-3 sm:space-y-0 sm:space-x-5"
        >
          <input
            type="text"
            className="py-2 px-10 outline-black text-center w-200 pr-6 lg:block md:block"
            placeholder="Car Make or Model"
          />
          <input
            type="text"
            className="py-2 px-10 outline-black text-center w-200 pr-6 lg:block md:block"
            placeholder="All Cities"
          />
          <input
            type="text"
            className="py-2 px-10 outline-black text-center w-200 pr-6 lg:block md:block"
            placeholder="Price range"
          />
        </div>
        <div className="py-5">
          <button
            type="button"
            className="bg-transparent border border-white text-white text-sm font-semibold py-4 px-4 rounded-sm shadow-lg hover:bg-transparent transition duration-300"
          >
            Advance Filter
          </button>
        </div>
      </div>
    </div>
  );
}
