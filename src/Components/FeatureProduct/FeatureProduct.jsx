import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi2"; // Import the shopping cart icon from react-icons library
// import "./FeatureProduct.css"; // Import a separate CSS file for styling

const FeatureProduct = ({ product }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="mt-5 lg:mt-0 py-5">
      <div className="card text-black relative">
        <figure
          className="rounded-none relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Add to Cart Icon */}
          <div
            className={`absolute top-5 right-5 cart-icon ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-center items-center gap-2">
              {/* <p className="font-semibold bg-white">Add To Cart</p> */}
              <div
                className="font-semibold text-white tooltip tooltip-open tooltip-left"
                data-tip="Add To Cart"
              >
              </div>
              <a href="#" className=" bg-yellow-300 rounded-3xl p-2">
                <HiShoppingBag size={20} />
              </a>
            </div>
          </div>

          <img
            src={product.image}
            alt="Shoes"
            className="object-cover w-[250px] h-[250px]"
            style={{ objectFit: "cover" }}
          />
        </figure>
        <div className="lg:mt-5 lg:py-3 text-center lg:text-start lg:ms-0 mt-5">
          <h2 className="font-semibold  mb-2">{product.name}</h2>
          <h3 className="mb-2 font-extralight">{product.gender}</h3>
          <p className="mb-2 font-semibold">{product.price}$</p>
          <div>
            <div className="rating w-20">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
