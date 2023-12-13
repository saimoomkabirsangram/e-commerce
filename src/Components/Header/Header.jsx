import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; 
const Header = () => {
  return (
    <div className="header-img">

      <div className="lg:py-44 lg:px-0 pt-10 lg:text-start text-center">
        <div className="headerText flex flex-col lg:justify-start lg:items-start justify-center items-center lg:ms-28">
          <h1 className=" text-white text-5xl lg:text-7xl font-bold">
            Raining Offers For <br /> Hot Summer!
          </h1>
          <h2 className="text-white lg:text-2xl text-2xl mt-2  font-bold lg:mt-5 ">
            25% Off On All Products
          </h2>
        </div>
        <div className="headerButton lg:flex lg:ms-28 lg:mt-5 mt-2 p-5 lg:p-0 lg:justify-start lg:items-start justify-center items-center ">
          <button
            className=" lg:px-4 lg:py-3 hover:bg-black mb-1 mr-3
              hover:text-white font-bold py-1 px-1 text-black bg-white  block lg:w-[180px] w-full"
          >
            <Link>Shop Now</Link>
          </button>
            <button
              className=" lg:px-4 lg:py-3 lg:ms-2 hover:bg-white
        hover:text-black font-bold py-1 px-1 text-white border block lg:w-[180px] w-full"
            >
          <Link>
              Find More
          </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
