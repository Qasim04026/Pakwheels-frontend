"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col">
            <nav className="px-4 flex justify-center items-center flex-row w-full text-white font-medium bg-slate-900">
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <p className="text-white mb-1">Download App Via SMS</p>
                    <img className="px-3 py-3 h-auto w-56 text-lg sm:text-xl md:text-2xl lg:text-2xl" src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="logo" />
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-8">
                    <ul className="flex flex-row gap-6">
                        <li><Link href="/header" className="hidden lg:inline hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Search</Link></li>
                        <li><Link href="/Features" className="hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">New Cars</Link></li>
                        <li><Link href="/bikes" className="hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Bikes</Link></li>
                        <li><Link href="/autostore" className="hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Auto store</Link></li>
                        <li><Link href="/videos" className="hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Videos</Link></li>
                        <li><Link href="/forms" className="hidden lg:inline hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Forums</Link></li>
                        <li><Link href="/Footer" className="hidden lg:inline hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Contact Us</Link></li>
                        
                    </ul>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex gap-2 mb-2">
                        <Link href="/register" className="hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Sign Up</Link>
                        <Link href="/login" className="hover:text-red-600 hover:bg-white px-2 py-3 rounded-md text-sm font-medium">Sign In</Link>
                    </div>
                    <Link href="/post-ad" className="bg-red-600 hover:bg-red-800 rounded-md text-sm font-medium px-2 py-3 w-full text-center">
                        <span className="flex justify-between items-center w-full">
                            Post an Ad <span style={{ marginLeft: '' }}>▼</span>
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
