import React from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { MdOutlineDarkMode } from 'react-icons/md';

const Header = () => {
  return (
    <header className='flex justify-between items-center w-full h-16 bg-slate-100 shadow-md font-open-sans'>
      <div className='ml-4'>
        <AiOutlineMenuFold className='text-3xl text-gray-600' />
      </div>
      <div className='flex items-center'>
        <IoCheckmarkCircleOutline className='text-3xl text-green-500 mr-1' />
        <span className='text-3xl text-gray-800 font-bold'>WhatToDo</span>
      </div>
      <div className='mr-4'>
        <MdOutlineDarkMode className='text-3xl text-gray-600' />
      </div>
    </header>
  );
};

export default Header;
