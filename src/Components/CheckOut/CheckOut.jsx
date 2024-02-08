import React from "react";
import { Form, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { SlCalender } from "react-icons/sl";
import FormFeild from "../FormFeild/FormFeild";

const CheckOut = () => {
  return (
    <div>
      <div className="bg-[#F5F7F9] lg:px-32 px-10">
        <div className="text-center py-[60px]">
          <h1 className="text-[60px] text-[#55595E] font-bold ">Checkout</h1>
        </div>
        <hr className="border-[2px] border-[#000000] w-full" />
        <div className="flex items-center gap-4 text-black mb-12 mt-4">
          <SlCalender />
          <div className="lg:flex lg:justify-center lg:items-center lg:gap-1 font-light">
            <h1>Returning Customer?</h1>
            <Link className="hover:text-blue-500">Click here to log in</Link>
          </div>
        </div>
        <hr className="border-[2px] border-[#000000] w-full" />
        <div className="flex items-center gap-4 text-black mb-12 mt-4">
          <SlCalender />
          <div className="lg:flex lg:justify-center lg:items-center lg:gap-1 font-light">
            <h1>Returning Customer?</h1>
            <Link className="hover:text-blue-500">Click here to log in</Link>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <div className="">
                <FormFeild></FormFeild>
              </div>
            </div>
            <div>
              <div className="text-black border-[2px]">
                <div className="p-5">
                  <h1>Your Order</h1>
                  <div className=" flex justify-center items-center gap-40 bg-white">
                      <div className="p-5 ">
                          <h1>Product</h1>
                          <p>Blue Jeans x1</p>
                          <p>Subtotal</p>
                          <p>Total</p>
                      </div>
                      <div className="p-5">
                        <h1>Subtotal</h1>
                        <p>$150.00</p>
                        <p>$150.00</p>
                        <p>$150.00</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
