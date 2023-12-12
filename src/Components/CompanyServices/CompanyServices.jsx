import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import { IoBodyOutline } from 'react-icons/io5';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { SlLock } from 'react-icons/sl';

const CompanyServices = () => {
  return (
    <div>
      <div className='block lg:flex text-black text-center lg:my-20 my-6'>
        <div className='lg:my-0 my-20'>
          <div className='flex justify-center items-center text-6xl '>
            <IoEarthOutline />
          </div>
          <h1 className='font-bold py-4'>Worldwide Shipping</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div  className='lg:my-0 mb-20'>
          <div className='flex justify-center items-center text-6xl '>
            <IoBodyOutline />
          </div>
          <h1 className='font-bold py-4' >Best Quality</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className='lg:my-0 mb-20'>
          <div className='flex justify-center items-center text-6xl '>
            <MdOutlineLocalOffer />
          </div>
          <h1 className='font-bold py-4'>Best Offers</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className='lg:my-0 mb-20'>
          <div className='flex justify-center items-center text-6xl '>
            <SlLock />
          </div>
          <h1 className='font-bold py-4'>Secure Payments</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;
