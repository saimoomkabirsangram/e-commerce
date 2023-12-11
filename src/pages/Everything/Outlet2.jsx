import React from 'react'
import { Link } from 'react-router-dom';

const Outlet2 = () => {
  return (
    <div className='lg:w-3/12 w-full text-black '>
        <div className="mt-10 p-5">
            <div className="flex">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-white lg:w-52 w-full max-w-xs"
              />
              <button className="px-4 py-3 rounded bg-black ms-2 text-white hover:bg-green-500">→</button>
            </div>
            <h1 className="mt-10  text-2xl p-1">Categories</h1>
            <div className="flex justify-between">
              <div className="p-1 font-bold ">
                <Link className='mt-5 block'>Accessories</Link>
                <Link className='block'>Men</Link>
                <Link className='block'>Women</Link>
              </div>
              <div className="p-1 ">
                <p className="mt-5">(0)</p>
                <p>(0)</p>
                <p>(0)</p>
              </div>
            </div>
            <div className="">
              <h1 className="mt-5 text-xl">Our Best Seller</h1>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Outlet2;