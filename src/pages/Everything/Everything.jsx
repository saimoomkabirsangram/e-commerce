import React from "react";
import Categories from "./Categories";
import Productlist from "./Productlist";

const Everything = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 ">
      <Categories />
      <Productlist />
    </div>
  );
};

export default Everything;
