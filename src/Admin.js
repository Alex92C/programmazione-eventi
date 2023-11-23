import React from "react";
import CourseInput from "./components/CourseInput";
import CourseDelete from "./components/CourseDelete";
import { Link } from "react-router-dom";

function Admin({
  titolo,
  relatori,
  data,
  tipoEvento,
  category,
  soldout,
  handleSetTitolo,
  handleSetRelatori,
  handleSetData,
  handleSetSoldout,
  handleChange,
  handleSubmit,
  handleSetCategory,
  coursesObj,
  handleDelete,
  selectedValue,
  setSelectedValue,
}) {
  return (
    <>
      <div>
        <h1>Pannello di controllo</h1>
        <br />
        <br />
        <h2>Inserisci un corso</h2>
        <CourseInput
          titolo={titolo}
          relatori={relatori}
          data={data}
          tipoEvento={tipoEvento}
          category={category}
          soldout={soldout}
          handleSetTitolo={handleSetTitolo}
          handleSetRelatori={handleSetRelatori}
          handleSetData={handleSetData}
          handleSetSoldout={handleSetSoldout}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSetCategory={handleSetCategory}
        />
        <br />
        <h2>Rimuovi un corso</h2>
        <CourseDelete
          coursesObj={coursesObj}
          handleDelete={handleDelete}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        {/* <CourseInput />
      <CourseDelete /> */}
      </div>
      <button className="btn">
        <Link to="/">Home</Link>
      </button>
    </>
  );
}

export default Admin;
