import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";

const PersonCard = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("./TeamData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} - ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setPeoples(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error.message);
      });
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
