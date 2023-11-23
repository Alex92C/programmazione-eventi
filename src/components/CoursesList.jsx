import React from "react";
import Corso from "./Corso";

const CoursesList = ({ corsi, listName }) => {
  console.log("COURSELIST CORSI", corsi);

  return (
    <ul className="corsos">
      {corsi
        .filter((corso) => corso.category === `${listName}`)
        .map((corso) => (
          <Corso coursesObj={corso} key={corso.tiolo} />
        ))}
    </ul>
  );
};

export default CoursesList;
