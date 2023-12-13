import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";

const PersonCard = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("./TeamData.json");
        const data = await response.json();
        console.log("Fetched Data:", data);
        setPeoples(data);
      } catch (error) {
        console.error("Error Fetching Data:");
      }
    };

  }, []);

  

  return (
    <div>
      {peoples.map((person) => (
        <AboutUs key={person?.id} person={person}></AboutUs>
      ))}
    </div>
  );
};

export default PersonCard;
