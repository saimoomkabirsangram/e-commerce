import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <div className="navbar lg:p-5 p-2 text-white bg-[#2d6588] ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/everything">
                  <p>Everything</p>
                </Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link>Women</Link>
              </li>
              <li>
                <Link>Accessories</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="btn btn-ghost normal-case lg:text-3xl text-sm font-mono">
              E-Commerce
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/everything">Everything</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link>Women</Link>
              </li>
              <li>
                <Link>Accessories</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end gap-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="relative inline-block">
            <button onClick={handleCartToggle}>
              <HiShoppingBag />
            </button>

            {/* Shopping Cart Dropdown */}
            {isCartOpen && (
              <div className="cart-overlay absolute right-0  bg-white text-black shadow-lg sm:w-full">
                <div className="cart-content">
                  <div className="p-5">
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg font-bold">Shoping Cart</h1>
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
                      <div className="flex items-center gap-10 ">
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
                        <p className="font-bold" >$150.00</p>
                    </div>
                    <hr className=" border-gray-300 w-full" />
                  </div>
                 <div className="px-5 py-5 text-white ">
                 <button className="w-full bg-[#0084D7]  p-3 mb-3  " >VIEW CART</button>
                  <button className="w-full bg-[#0084D7]  p-3  mb-3">CHECKOUT</button>
                  <button className="w-full bg-[#0084D7] p-3  mb-3">CONTINUE SHOPING</button>
                  
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
    </div>
  );
};

export default Navbar;
