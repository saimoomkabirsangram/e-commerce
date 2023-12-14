import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="navbar lg:p-5 p-2 text-white bg-[#2d6588]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li className="font-semibold">
              <Link to="/everything">
                <p>EVERYTHING</p>
              </Link>
            </li>
            <li className="font-bold">
              <Link to="/men">MEN</Link>
            </li>
            <li className="font-bold">
              <Link to="/women">WOMEN</Link>
            </li>
            <li className="font-bold">
              <Link to="/accessories">ACCESSORIES</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="normal-case lg:text-4xl text-lg font-bold">DNK 2.0</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link to="/everything">EVERYTHING</Link>
            </li>
            <li className="font-bold">
              <Link to="/men">MEN</Link>
            </li>
            <li className="font-bold">
              <Link to="/women">WOMEN</Link>
            </li>
            <li className="font-bold">
              <Link to="/accessories">ACCESSORIES</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end gap-4">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className="font-bold">
              <Link to="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </div>
        <div className="relative inline-block">
          <button onClick={handleCartToggle} className="flex items-center justify-center">
            <p className="mr-1">$300.00 </p>
            <HiShoppingBag />
          </button>

          {isCartOpen && (
            <div className="cart-overlay absolute right-0  bg-white text-black shadow-lg sm:w-full">
              <div className="cart-content">
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Shopping Cart</h1>
                    <button
                      className="text-end font-bold"
                      onClick={handleCartToggle}
                    >
                      X
                    </button>
                  </div>
                </div>
                <hr className=" border-gray-300 w-full" />
                <div className="text-black ">
                  <div className="flex justify-between items-center p-10">
                    <div className="flex items-center gap-10">
                      <img
                        className="h-[50px] w-[50px ]"
                        src="https://i.ibb.co/27SjC0F/10013.jpg"
                        alt=""
                      ></img>
                      <div>
                        <p>Black Hoodie</p>
                        <p>1 * $150.00</p>
                      </div>
                    </div>
                    <div className="border rounded-full border-black justify-end">
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div>
                  <hr className=" border-gray-300 w-full" />
                  <div className="flex justify-between p-5">
                    <p className="font-bold ">Subtotal:</p>
                    <p className="font-bold">$150.00</p>
                  </div>
                  <hr className=" border-gray-300 w-full" />
                </div>
                <div className="px-5 py-5 text-white ">
                  <button className="w-full bg-[#0084D7]  p-3 mb-3  " >VIEW CART</button>
                  <button className="w-full bg-[#0084D7]  p-3  mb-3">CHECKOUT</button>
                  <button className="w-full bg-[#0084D7] p-3  mb-3">CONTINUE SHOPPING</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link>
          <FiUser />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
