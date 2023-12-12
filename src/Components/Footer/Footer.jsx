import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="text-black text-center">
          <hr />
          <h1 className="my-14">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h1>
          <hr />
        </div>
      <footer className="footer p-10 text-black lg:py-10 mt-4 text-center">

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
    </div>
  );
};

export default Footer;
