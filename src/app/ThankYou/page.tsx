// ThankYou/page.tsx
"use client";
import React from "react";

export default function ThankYou() {
  return (
    <div className="flex flex-col h-auto py-10">
      <h1 className="text-center text-2xl hover:text-cyan-600 text-blue-900 font-bold mb-4 py-4">
        Thank You For Shopping!!!
      </h1>
      <p className="text-center text-xl hover:text-cyan-700 text-blue-900 font-medium mb-4 py-1">
        Your order will be delivered in 3 business days
      </p>
      <footer className="flex flex-col h-auto py-4">
        <div className="flex flex-row justify-center gap-1">
          <a
            href="https://www.facebook.com/qasim.raza.7564129"
            target="blank"
            rel="nofollow noopener"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
              alt="facebook logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/qasim-raza-761104267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
            rel="nofollow noopener"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"
              alt="linkedin logo"
            />
          </a>
        </div>
        <h3 className="text-center text-sm hover:text-cyan-600 text-blue-900 font-bold mb-2 py-2">
          Created By Qasim Raza
        </h3>
      </footer>
    </div>
  );
}
