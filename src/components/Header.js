import React from 'react';
import Logo from '../assets/logo.png'
import {BiChevronDown} from "react-icons/bi";

const Header = () => {
  return (
    <header className='py-6  border-b'>

      <div className='container mx-auto
       flex justify-between items-center 
       '>
         {/* Wide screen */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          
          <div className='flex items-center gap-20'>
            <div to={"/"} className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} className="w-8 object-cover" alt="logo" />
              <p className="text-headingColor text-xl font-semibold"> Realestate</p>
            </div>
            <ul className='flex gap-5 mr-auto'>
              <li className='px-3 py-2 cursor-pointer hover:text-purple-600 hover:bg-slate-200 rounded-md'>Rent</li>
              <li className='px-3 py-2 cursor-pointer hover:text-purple-600 hover:bg-slate-200 rounded-md'>Buy</li>
              <li className='px-3 py-2 cursor-pointer hover:text-purple-600 hover:bg-slate-200 rounded-md'>Sell</li>
              <li className='px-3 py-2 cursor-pointer hover:text-purple-600 hover:bg-slate-200 rounded-md flex items-center gap-2'>Manage Property <BiChevronDown /> </li>
              <li className='px-3 py-2 cursor-pointer hover:text-purple-600 hover:bg-slate-200 rounded-md flex items-center gap-2'>Resources <BiChevronDown /></li>
            </ul>
          </div>

          <div className='flex gap-6'>
            <button className=' text-purple-600 font-medium px-5 py-2 rounded-md border-2 border-gray'>Login</button>
            <button className=' text-white font-medium px-5 py-2 rounded-md bg-purple-500'>Sign up</button>
          </div>
        </div>

        {/* Wide screen */}
        <div className="flex md:hidden w-full h-full items-center justify-between">
          
          <div className='flex items-center gap-20'>
            <div to={"/"} className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} className="w-8 object-cover" alt="logo" />
              <p className="text-headingColor text-xl font-semibold"> Realestate</p>
            </div>
            
          </div>

          <div className='flex gap-6'>
            <button className=' text-purple-600 font-medium px-5 py-2 rounded-md border-2 border-gray'>Login</button>
            <button className=' text-white font-medium px-5 py-2 rounded-md bg-purple-500'>Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
