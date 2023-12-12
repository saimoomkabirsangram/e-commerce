// import React from "react";

// const HomeCard = ({ card }) => {

//   return (
//     <div className="flex justify-center items-center py-5">
//       <div className="card w-full glass">
//         <figure>
//           <img src={card.img} alt="car!" />
//         </figure>
//         <div className="card-body text-black">
//           <h2 className="card-title">{card?.title}</h2>
//           <p>{card?.description}</p>
//           <div className="card-actions justify-start">
//             <button className="btn bg-grey text-white ">Shop Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCard;

// HomeCard.jsx
// import React from "react";
// import './HomeCard.css'


// const HomeCard = ({ card }) => {
//   return (
//     <div className="relative  w-full overflow-hidden shadow-lg group mt-10 mb-20">
//       <img className="transition-transform group-hover:scale-110 duration-200 object-cover" src={card?.img} alt="" />
//       <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent">
//         <div className="p-10 text-white">
//         <h1 className="font-bold mb-2 text-xl">{card?.title}</h1>
//         <p className="mb-4">{card?.description}</p>
//         <button className="px-4 py-2 bg-white text-black font-semibold hover:text-white hover:bg-black ">Shop Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCard;

import React from "react";
import "./HomeCard.css";

const HomeCard = ({ card }) => {
  return (
    <div className="relative  overflow-hidden shadow-lg group mt-10 mb-20 h-96">
      <img
        className="transition-transform group-hover:scale-110 duration-200 object-cover w-full h-full"
        src={card?.img}
        alt=""
      />
      <div className="absolute inset-0 flex  items-end bg-gradient-to-t from-black/80 to-transparent">
        <div className="p-10 text-white">
          <h1 className="font-bold mb-2 text-xl">{card?.title}</h1>
          <p className="mb-4">{card?.description}</p>
          <button className="px-4 py-2 w-full lg:w-1/2 bg-white text-black font-semibold hover:text-white hover:bg-black">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
