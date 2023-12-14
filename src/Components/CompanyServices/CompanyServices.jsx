import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import { IoBodyOutline } from 'react-icons/io5';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { SlLock } from 'react-icons/sl';

const CompanyServices = () => {
  return (
    <div className="lg:mx-32">
      <div className='block lg:flex text-black text-center lg:my-20 my-6'>
        <div className='lg:my-0 my-20 mx-3'>
          <div className='flex justify-center items-center text-6xl '>
            <img className='h-[1em] w-[1em]' src="https://i.ibb.co/ykM18L9/10015.png" alt="" />
          </div>
          <h1 className='font-bold py-4'>Worldwide Shipping</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div  className='lg:my-0 mb-20 mx-3'>
          <div className='flex justify-center items-center text-6xl '>
            <img className='h-[1em] w-[1em]' src="https://i.ibb.co/RTf6Yqm/10016.png" alt="" />
          </div>
          <h1 className='font-bold py-4' >Best Quality</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className='lg:my-0 mb-20 mx-3'>
          <div className='flex justify-center items-center text-6xl '>
            <img className='h-[1em] w-[1em]' src="https://i.ibb.co/gwvHGHm/10017.png" alt="" />
          </div>
          <h1 className='font-bold py-4'>Best Offers</h1>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className='lg:my-0 mb-20 mx-3'>
          <div className='flex justify-center items-center text-6xl '>
            <img className='h-[1em] w-[1em]' src="https://i.ibb.co/n6J3dT6/10018.png" alt="" />
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
