import React from "react";
import Corso from "./Corso";

const CoursesList = ({ corsi, listName }) => {
  return (
    <>
      <ul className="corsos">
        {corsi
          .filter((corso) => corso.category === `${listName}`)
          .map((corso) => (
            <Corso coursesObj={corso} key={corso.tiolo} />
          ))}
      </ul>
      <hr
        color="blue"
        style={{ padding: "1px", width: "70%", borderRadius: "5px" }}
      />
    </>
  );
};

export default CoursesList;
