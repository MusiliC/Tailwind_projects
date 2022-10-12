import React, { useState } from "react";

import { HiMenu, } from "react-icons/hi";
import { TbLetterX } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen bg-zinc-200 h-[80px] z-10 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 space-x-4">
          <button className="bg-transparent border-none text-black ">
            Sign in
          </button>
          <button className="px-6 py-3"> Register</button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <HiMenu className="w-5" /> : <TbLetterX className="h-15" />}
        </div>
      </div>

      <div className="md:hidden mr-4">
        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="text-center border-b-2 border-zinc-300 w-full">
            Home
          </li>
          <li className="text-center border-b-2 border-zinc-300 w-full">
            About
          </li>
          <li className="text-center border-b-2 border-zinc-300 w-full">
            Support
          </li>
          <li className="text-center border-b-2 border-zinc-300 w-full">
            Platform
          </li>
          <li className="text-center border-b-2 border-zinc-300 w-full">
            Pricing
          </li>
          <div className="flex flex-col justify-center space-y-4 ">
            <button className="bg-transparent text-indigo-600  px-6 py-3">
              Sign in
            </button>
            <button className="px-6 py-3"> Register</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
