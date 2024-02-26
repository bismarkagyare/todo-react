import React from 'react';
import { BiTask } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <div className='bg-[#fefcfe] p-4'>
      <h2>Home</h2>
      <article className='flex items-center gap-2 text-lg'>
        <BiTask />
        <p>All Tasks</p>
      </article>
      <article className='flex items-center gap-2 text-lg'>
        <SlCalender />
        <p>Today</p>
      </article>
      <article className='flex items-center gap-2 text-lg'>
        <IoCalendarNumberSharp />
        <p>Upcoming</p>
      </article>
      <article className='flex items-center gap-2 text-lg'>
        <FaStar />
        <p>Important</p>
      </article>
    </div>
  );
};

export default Sidebar;
