import React from "react";

function Corso({ coursesObj }) {
  // if (corsoObj.soldOut) return null;

  return (
    <li className={`corso ${coursesObj.soldout ? "sold-out" : ""}`}>
      <img
        src={
          coursesObj.tipoEvento === 0 ? "images/webinar.jpg" : "images/aula.jpg"
        }
        alt={coursesObj.titolo}
      />
      <div>
        <h3>{coursesObj.titolo}</h3>
        <p>{coursesObj.relatori}</p>

        <span>{coursesObj.soldout ? "SOLD OUT" : coursesObj.data}</span>
      </div>
    </li>
  );
}

export default Corso;
