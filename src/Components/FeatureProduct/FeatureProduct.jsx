import React from "react";

const FeatureProduct = ({ product }) => {
  // console.log(product)
  return (
    <div className="mt-5 lg:mt-0">
      <div className="card w-full text-black bg-cyan-600/20">
        <figure className="px-10 pt-10">
          <img src={product.image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <h3 className="">{product.gender}</h3>
          <p>{product.description}</p>
          <p>{product.price}$</p>
          <div>
            <div className="rating w-20">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
          {/* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
