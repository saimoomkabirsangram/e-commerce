import React from "react";

const Outlet3 = () => {
  return (
    <div className="bg-white ">
      <div className="lg:w-4/5 w-full grid grid-cols-3">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/27SjC0F/10013.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outlet3;
