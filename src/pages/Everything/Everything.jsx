import React from "react";
import Outlet2 from "./Outlet2";
import Outlet3 from "./Outlet3";


const Everything = () => {
  return (
    <div className="lg:flex lg:justify-between lg:bg-gray-300 bg-white">
      <Outlet2></Outlet2>
      <Outlet3></Outlet3>
    </div>
  );
};

export default Everything;
