import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar lg:p-5 p-2 text-white bg-cyan-600/100  ">
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
                <Link to="/home"><p>Home</p></Link>
              </li>
              <li>
                <Link to="/everything" ><p>Everything</p></Link>
              </li>
              <li>
                <Link to="/men" >Men</Link>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>Accessories</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case lg:text-3xl text-sm  font-mono">
            E-commerce
          </a>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to='/home'><p>Home</p></Link>
              </li>
              <li>
                <Link to="/everything">
                <a>Everything</a>
                </Link>
              </li>
              <li>
              <Link to="/men">
                <a>Men</a>
                </Link>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>Accessories</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="">Everything</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end gap-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <Link>
            <HiShoppingBag />
          </Link>
          <Link>
            <FiUser />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
