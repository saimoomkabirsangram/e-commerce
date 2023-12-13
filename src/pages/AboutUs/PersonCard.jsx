import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";

const PersonCard = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./TeamData.json");
        const data = await response.json();
        console.log("Fetched Data:", data);
        setPeople(data);
      } catch (error) {
        console.error("Error Fetching Data:");
      }
    };

    fetchData();
  }, []);

  

  return (
    <div>
      {people.map((person) => (
        <AboutUs key={person.id} person={person}></AboutUs>
      ))}
    </div>
  );
};

export default PersonCard;
