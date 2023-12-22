import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ref, push, onValue, remove } from "firebase/database";
import database from "./firebase";

import Admin from "./Admin";
import Home from "./Home";
import LoginForm from "./components/LoginForm";

import "bootstrap/dist/css/bootstrap.min.css";

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [corsi, setCorsi] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const [titolo, setTitolo] = useState("");
  const [relatori, setRelatori] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState({ tipoEvento: "" });
  const [category, setCategory] = useState("");
  const [soldout, setSoldout] = useState(false);
  const [deleteTitle, setDeleteTitle] = useState("");

  // const [selectedValue, setSelectedValue] = useState("");

  const { tipoEvento } = tipo;

  // const deleteRef = useRef(null); // ref per il bottone di cancellazione

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

  const handleDeleteTitleChange = (e) => {
    setDeleteTitle(e.target.value);
  };

  //Funzione lettura dati da Firebase
  const getData = () => {
    return onValue(
      ref(database, "eventi/"),
      (snapshot) => {
        const data = snapshot.val();
        console.log(" DATA", data);
        if (data) {
          // Check if data exists
          const transformedData = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setCorsi(transformedData);
          console.log("TRANSFORM DATA", transformedData);
        } else {
          setCorsi([]); // If no data, set corsi to an empty array
        }
      },
      { onlyOnce: true }
    );
  };

  //Funzione salvataggio dati su Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    const pushData = () => {
      push(ref(database, "eventi/"), {
        titolo: titolo,
        relatori: relatori,
        data: data,
        tipoEvento: tipoEvento,
        category: category,
        soldout: soldout,
      })
        .then(() => {
          console.log("Data pushed");
          getData(); // Recupera i dati dal database dopo l'inserimento
        })
        .catch((err) => {
          console.log(err);
        });
    };

    console.log("CORSI", corsi);

    pushData();

    alert("L'evento è stato aggiunto");
    setTitolo("");
    setRelatori("");
    setData("");
    setTipo({ tipoEvento: "" });
    setCategory("");
    setSoldout(false);
  };

  //Funzione cancellazione dati da Firebase

  const handleDelete = (e) => {
    e.preventDefault();
    const selectedValue = corsi.find((corso) => {
      return corso.titolo === deleteTitle;
    });

    if (selectedValue) {
      return remove(ref(database, `eventi/${selectedValue.id}`)).then(() => {
        getData(); // Recupera i dati dal database dopo la cancellazione
        setDeleteTitle("");
        alert("L'evento è stato eliminato");
      });
    } else {
      console.log("Evento non trovato");
      alert("Evento non trovato");
    }
    console.log("DELETE TITLE", deleteTitle);
    console.log("CORSI AL DELETE", corsi);
  };

  // Recupera i dati quando la pagina viene caricata
  useEffect(() => {
    getData();
  }, []);

  // Login all'admin area
  // const handleLogin = (password) => {
  //   const correctPassword = "Admin2023";
  //   if (password === correctPassword) {
  //     setAuthenticated(true);
  //   } else {
  //     alert("Incorrect password");
  //   }
  // };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home corsi={corsi} />}></Route>
          <Route
            path="/login"
            element={<LoginForm setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/admin"
            element={
              authenticated ? (
                <Admin
                  {...{
                    titolo,
                    relatori,
                    data,
                    tipoEvento,
                    category,
                    soldout,
                    deleteTitle,
                    handleSetTitolo,
                    handleSetRelatori,
                    handleSetData,
                    handleSetSoldout,
                    handleChange,
                    handleSubmit,
                    handleSetCategory,
                    handleDeleteTitleChange,
                    handleDelete,
                  }}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
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
