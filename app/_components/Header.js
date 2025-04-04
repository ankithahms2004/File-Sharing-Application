// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import React from 'react'

// function Header() {
//   return (
//     <div>
//         <header className="bg-white">
//   <div
//     className="mx-auto flex h-16 
//     max-w-screen-xl items-center
//      gap-3 px-4 sm:px-6 lg:px-8 border-b shadow-lg"
//   >
//   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
//   <h1 className='font-bold text-2xl text-slate-800 underline pl-0'><span className='text-slate-500'>Xfer</span>Link:</h1>
//     <div className="flex flex-1 items-center justify-end md:justify-between">
//       <nav aria-label="Global" className="hidden md:block">
        
//         <ul className="flex ml-64 items-center gap-8 justify-center text-md  text-slate-900 transition hover:text-slate-600">
//           <li>
//             <a className="transition hover:font-semibold hover:underline " 
//             href="/">
//               Home
//             </a>
//           </li>

//           <li>
//             <a
//             className="transition hover:font-semibold hover:underline " href="/upload">
//               Upload
//             </a>
//           </li>

//           <li>
//             <a className="transition hover:font-semibold hover:underline " href="/about">
//               About Us
//             </a>
//           </li>

//           <li>
//             <a className="transition hover:font-semibold hover:underline " href="/working">
//               How Does it work?
//             </a>
//           </li>

         
//         </ul>
//       </nav>

//       <div className="flex items-center gap-4">
//         <div className="sm:flex sm:gap-4">
//           <a
//             className="block rounded-md
//              bg-primary px-5 py-2.5 
//              text-sm font-medium text-black shadow-md 
//              transition hover:shadow-lg"
//             href="/upload"
//           >
//             Get Started
//           </a>
//           <UserButton/>

         
//         </div>

//         <button
//           className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
//         >
//           <span className="sr-only">Toggle menu</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
// </header>
//     </div>
//   )
// }

// export default Header










"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
            <path
              fill="#F06225"
              d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
            ></path>
            <path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
          </svg>
          <h1 className="font-bold text-2xl text-slate-800 underline cursor-pointer">
            <span className="text-slate-500">Xfer</span>Link:
          </h1>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-md text-slate-900">
          <ul  className="flex ml-64 items-center gap-8 justify-center text-md  text-slate-900 transition hover:text-slate-600">
          <li>
             <a className="transition hover:font-semibold hover:underline " 
            href="/">
              Home
            </a>
          </li>

          <li>
            <a
            className="transition hover:font-semibold hover:underline " href="/upload">
              Upload
            </a>
          </li>

          <li>
            <a className="transition hover:font-semibold hover:underline " href="/about">
              About Us
            </a>
          </li>

          <li>
            <a className="transition hover:font-semibold hover:underline " href="/working">
              How Does it work?
            </a>
          </li>
          </ul>
        </nav>

        {/* Buttons & User Icon */}
        <div className="flex items-center gap-4">
          <a
            href="/upload"
            className="hidden sm:inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-black shadow-md transition hover:shadow-lg"
          >
            Get Started
          </a>
          <UserButton />

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2.5 text-gray-600 transition hover:text-gray-600/75"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {/* {["Home", "Upload", "About Us", "How It Works"].map((item, index) => ( */}
              <><li>
                <a className="transition hover:font-semibold hover:underline "
                  href="/">
                  Home
                </a>
              </li><li>
                  <a
                    className="transition hover:font-semibold hover:underline " href="/upload">
                    Upload
                  </a>
                </li><li>
                  <a className="transition hover:font-semibold hover:underline " href="/about">
                    About Us
                  </a>
                </li><li>
                  <a className="transition hover:font-semibold hover:underline " href="/working">
                    How Does it work?
                  </a>
                </li></>
            {/* ))} */}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
