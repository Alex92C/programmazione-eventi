import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import Admin from "./Admin";
import Home from "./Home";

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

import "bootstrap/dist/css/bootstrap.min.css";

const coursesObj = [
  // {
  //   titolo: "il RUP, il DEC e la commissione di gara",
  //   relatori: "Cons. Marcello Faviere",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "appalti",
  //   soldout: true,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 1",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "appalti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 2",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "appalti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 3",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "appalti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 4",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "appalti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 5",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "appalti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 6",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "redazione atti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 7",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "redazione atti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 8",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "redazione atti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 9",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "redazione atti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 10",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "soggetti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 11",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "soggetti",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 12",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "piattaforme",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 13",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "piattaforme",
  //   soldout: false,
  // },
  // {
  //   titolo: "TITOLO SEMINARIO 14",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "piattaforme",
  //   soldout: false,
  // },
];

function App() {
  useEffect(() => {
    fetch("http://localhost:30000/corsi")
      .then((response) => response.json())
      .then((data) => setCorsi(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const [corsi, setCorsi] = useState([]);

  const [titolo, setTitolo] = useState("");
  const [relatori, setRelatori] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState({ tipoEvento: "" });
  const [category, setCategory] = useState("");
  const [soldout, setSoldout] = useState();

  const [selectedValue, setSelectedValue] = useState("");

  const { tipoEvento } = tipo;

  const handleSetTitolo = (e) => {
    setTitolo(e.target.value);
  };

  const handleSetRelatori = (e) => {
    setRelatori(e.target.value);
  };

  const handleSetData = (e) => {
    setData(e.target.value);
  };

  const handleSetCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSetSoldout = (e) => {
    setSoldout(e.target.checked);
  };

  const handleChange = (e) => {
    e.persist();

    setTipo((prevState) => ({
      ...prevState,
      tipoEvento: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pushNewData = () => {
      // const image = tipoEvento === 0 ? "images/webinar.jpg" : "images/aula.jpg";
      // const checkedSoldout = soldout ? true : false;
      const newAddedData = coursesObj.push({
        titolo: titolo,
        relatori: relatori,
        data: data,
        // photoName: image,
        category: category,
        soldout: soldout,
      });

      console.log("CORSI", corsi);
    };
    pushNewData();

    setCorsi(coursesObj);
    alert("L'evento è stato aggiunto");
    setTitolo("");
    setRelatori("");
    setData("");
    setTipo({ tipoEvento: "" });
    setCategory("");
    setSoldout(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const deleteData = () => {
      const index = coursesObj.findIndex((object) => {
        return object.titolo === selectedValue;
      });

      coursesObj.splice(index, 1);
    };
    deleteData();

    setCorsi(coursesObj);
    alert("L'evento è stato eliminato");
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home corsi={corsi} />}></Route>
          <Route
            exact
            path="/admin"
            element={
              <Admin
                {...{
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
                }}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
