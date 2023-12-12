// import React from "react";

// const FeatureProduct = ({ product }) => {
//   // console.log(product)
//   return (
//     <div className="mt-5 lg:mt-0 ">
//       <div className="card  text-black">
//         <figure className="px-10 pt-10">
//           <img src={product.image} alt="Shoes" className="" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{product.name}</h2>
//           <h3 className="">{product.gender}</h3>
//           <p>{product.price}$</p>
//           <div>
//             <div className="rating w-20">
//               <input
//                 type="radio"
//                 name="rating-4"
//                 className="mask mask-star-2 bg-green-500"
//               />
//               <input
//                 type="radio"
//                 name="rating-4"
//                 className="mask mask-star-2 bg-green-500"
//                 checked
//               />
//               <input
//                 type="radio"
//                 name="rating-4"
//                 className="mask mask-star-2 bg-green-500"
//               />
//               <input
//                 type="radio"
//                 name="rating-4"
//                 className="mask mask-star-2 bg-green-500"
//               />
//               <input
//                 type="radio"
//                 name="rating-4"
//                 className="mask mask-star-2 bg-green-500"
//               />
//             </div>
//           </div>
//           {/* <div className="card-actions">
//             <button className="btn btn-primary">Buy Now</button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureProduct;
// import React from "react";
// import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon from react-icons library

// const FeatureProduct = ({ product }) => {
//   return (
//     <div className="mt-5 lg:mt-0">
//       <div className="card text-black">
//         <figure className=" rounded-none relative">
//           {/* Add to Cart Icon */}
//           <div className="absolute top-2 right-2 cart-icon opacity-0">
//             <FaShoppingCart size={20} />
//           </div>

//           <img
//             src={product.image}
//             alt="Shoes"
//             className="object-cover h-[300px] w-[300px] "
//             style={{ objectFit: "cover" }}
//             onMouseEnter={() => document.querySelector('.cart-icon').classList.add('opacity-100')}
//             onMouseLeave={() => document.querySelector('.cart-icon').classList.remove('opacity-100')}
//           />
//         </figure>
//         <div className="mt-5 py-3">
//           <h2 className="card-title">{product.name}</h2>
//           <h3>{product.gender}</h3>
//           <p className="font-bold">{product.price}$</p>
//           <div>
//             <div className="rating w-20">
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureProduct;

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
            className={`absolute top-2 right-2 cart-icon ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a href="#"><HiShoppingBag size={20} /></a>
          </div>

          <img
            src={product.image}
            alt="Shoes"
            className="object-cover w-[300px] h-[300px]"
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
