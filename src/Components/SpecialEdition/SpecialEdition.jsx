import React from "react";
import { Link } from "react-router-dom";
import './SpecialEdition.css'
const SpecialEdition = () => {
  return (
    <div className="lg:py-16 p-5 bg-cyan-600/20 text-black">
      <div className="header-imgs lg:h-[400px] h-[200px]  bg-cover ">
        <div className="lg:py-32 lg:px-0 py-28  lg:text-start text-center lg:p-0 p-5">
          <div className="headerText flex flex-col lg:justify-start lg:items-start justify-center items-center lg:ms-28">
            <p className="font-mono text-white font-bold text-xl lg:mb-5 mb-2">Limited Time Offer!</p>
            <h1 className=" text-white text-3xl lg:text-5xl font-bold">
            Special Edition
            </h1>
            <p className="text-white lg:w-1/2 w-4/5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <h2 className="text-white lg:text-2xl text- mt-2   lg:mt-5 ">
            Buy This T-shirt At 20% Discount, Use Code OFF20
            </h2>
          </div>
          <div className="headerButton lg:flex lg:ms-28 mt-2 lg:mt-5 lg:p-0 lg:justify-start lg:items-start justify-center items-center ">
            <button
              className="rounded lg:px-8 lg:py-3 hover:bg-black mb-1  
              hover:text-white font-bold py-1 px-1 text-black bg-white  block lg:w-[180px] w-full"
            >
              <Link>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialEdition;
