import React from "react";

const HomeCard = ({ card }) => {
  console.log(card);

  return (
    <div className="flex justify-center items-center py-5">
      <div className="card w-full glass">
        <figure>
          <img src={card.img} alt="car!" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">{card?.title}</h2>
          <p>{card?.description}</p>
          <div className="card-actions justify-start">
            <button className="btn bg-grey text-white ">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
