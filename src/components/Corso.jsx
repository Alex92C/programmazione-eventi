import React from "react";

function Corso({ coursesObj }) {
  // if (corsoObj.soldOut) return null;

  return (
    <li className={`corso ${coursesObj.soldout ? "sold-out" : ""}`}>
      <img
        src={
          coursesObj.tipoEvento === "aula"
            ? "images/aula.jpg"
            : "images/webinar.jpg"
        }
        alt={coursesObj.titolo}
        style={coursesObj.tipoEvento === "aula" ? { scale: "0.8" } : {}}
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
