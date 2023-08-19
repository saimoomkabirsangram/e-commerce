import React from "react";
import { Link } from "react-router-dom";

const SpecialEdition = () => {
  return (
    // <div className="lg:p-16 bg-cyan-600/20 text-black">
    //   <div className="bg-[url('https://i.ibb.co/KsnQxnz/10024.jpg')] lg:h-[600px] lg:w-full bg-cover">
    //     <div className="flex flex-col lg:justify-start lg:items-start sm:justify-center sm:items-center">
    //       <h3>Limited Time Offer</h3>
    //       <h1>Special Edition</h1>
    //       <h2>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    //       </h2>
    //       <h2>Buy This T-shirt At 20% Discount, Use Code OFF20</h2>
    //       <Link>
    //         <button
    //           className="rounded lg:px-8 lg:py-3 hover:bg-black
    //       hover:text-white font-bold py-2 text-black bg-white"
    //         >
    //           Shop Now
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="lg:p-16 p-5 bg-cyan-600/20 text-black">
      <div className="bg-[url('https://i.ibb.co/KsnQxnz/10024.jpg')] lg:h-[600px] h-[300px] lg:w-full bg-cover ">
        <div className="lg:py-44 lg:px-0 pt-10  lg:text-start text-center lg:p-0 p-5">
          <div className="headerText flex flex-col lg:justify-start lg:items-start justify-center items-center lg:ms-28">
            <p className="font-mono text-white text-2xl lg:mb-5 mb-2">Limited Time Offer!</p>
            <h1 className=" text-white text-4xl lg:text-5xl font-bold">
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
