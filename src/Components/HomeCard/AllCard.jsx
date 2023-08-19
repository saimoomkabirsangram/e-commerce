import React from 'react';
import HomeCard from './HomeCard';
import carddata from "./carddata.json";

const AllCard = () => {
  return (
    <div className='lg:flex justify-center items-center lg:gap-9  px-10 '>
      {carddata.map((card) => (
        <HomeCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllCard;
