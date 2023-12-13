import React from "react";
import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:mx-20">
        <div className="text-black text-center ">
          <hr />
          <h1 className="my-14 lg:text-3xl  font-bold hover:text-blue-500">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h1>
          <hr />
        </div>
      <footer className="footer  text-black  my-4 text-center mb-10">

        <div className="">
          <h1 className="font-bold text-3xl mb-6 ">DNK 2.0 </h1>
          <p className="font-bold text-2xl">
          The best look anytime, anywhere.
          </p>
        </div>
        <div>
          <span className="footer-title text-black">For Her</span>
          <a >Women Jeans</a>
          <a >Tops and Shirts</a>
          <a >Women Jackets</a>
          <a >Heels and Flats</a>
          <a >Women Accessories</a>
        </div>
        <div>
          <span className="footer-title text-black">For Him</span>
          <a >Men Jeans</a>
          <a >Men Shirts</a>
          <a >Men Shoes</a>
          <a >Men Accessories</a>
          <a >Men Jackets</a>
        </div>
        <div>
          <span className="footer-title text-black">Subscribe</span>
          <input class="shadow appearance-none border rounded bg-white w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Your Email Address"/>
          <button
              className="rounded  lg:py-3  mb-1  
              hover:text-white font-bold py-1 px-1 text-white bg-blue-500  block  w-full"
            >
              SUBSCRIBE
            </button>
        </div>
        
      </footer>
      <hr />
      <div className="lg:flex block justify-between items-center py-8 text-black">
        <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
        <div className="flex justify-center items-center mr-24">
          <div className="text-xl mx-2">
          <LiaFacebookF />
          </div>
          <div  className="text-xl mx-2">
          <FaYoutube />
          </div>
          <div  className="text-xl mx-2">
          <IoLogoTwitter />
          </div>
          <div  className="text-xl mx-2">
          <FaInstagram />
          </div>
          <div  className="text-xl mx-2">
          <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
