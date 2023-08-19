import React from 'react'

const Categories = () => {
  return (
    <div className='w-1/2'>
        <div className="mt-10 p-5">
            <div className="flex">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-white lg:w-52 w-full max-w-xs"
              />
              <button className="px-4 py-3 rounded bg-black ms-2">→</button>
            </div>
            <h1 className="mt-10  text-2xl p-1">Categories</h1>
            <div className="flex ">
              <div className="p-1 font-bold">
                <h3 className="mt-5">Accessoried</h3>
                <h3 className="">Men</h3>
                <h3 className="">Women</h3>
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
          <div></div>
    </div>
  )
}

export default Categories
