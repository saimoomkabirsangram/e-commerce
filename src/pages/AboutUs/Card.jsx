import React from "react";

const Card = ({ person }) => {
  return (
      <div className=" text-black rounded flex justify-center items-center text-center bg-[#F5F7F9]  w-[250px] h-[250px] border">
        <div className="">
          <figure className="px-6 pt-2">
            <img
              className="w-20 h-20 mb-5 object-cover rounded-full  border-white"
              src={person.image}
              alt={person.name}
            />
          </figure>
          <div className="">
            <h2 className="text-black font-bold text-xl">{person.name}</h2>
            <p className="font-light">{person.position}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
