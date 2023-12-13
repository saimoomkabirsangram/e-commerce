import React from "react";

const Card = ({ person }) => {
  return (
      <div className="rounded flex justify-center items-center text-center  bg-white  w-[200px] h-[200px] ">
        <div className="">
          <figure className="px-6 pt-2">
            <img
              className="w-20 h-20 mb-5 object-cover rounded-full border-4 border-white"
              src={person.image}
              alt={person.name}
            />
          </figure>
          <div className="">
            <h2 className="text-black font-bold text-lg">{person.name}</h2>
            <p className=" text-black">{person.position}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
