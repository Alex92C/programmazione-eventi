const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sharonale1&",
  database: "programmazione",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

// Express route to fetch data from the "category" table
app.get("/corsi", (req, res) => {
  // Define your SQL query
  const sql =
    "SELECT c.`Titolo Corso` AS titolo, c.`Evento Presenza` AS tipoEvento, c.`Corso Attivo` AS soldout, cat.`Nome Categoria` AS category, r.Nome AS relatori " +
    "FROM programmazione.corsi c " +
    "JOIN programmazione.categorie cat ON c.CATEGORIE_ID_CATEGORIA = cat.ID_CATEGORIA " +
    "JOIN programmazione.corsi_has_relatori chr ON c.ID_CORSI = chr.CORSI_ID_CORSI " +
    "JOIN programmazione.relatori r ON chr.RELATORI_ID_RELATORE = r.ID_RELATORE";

  //SELECT Titolo Corso AS titolo,
  // Evento Presenza AS tipoEvento,
  // Corso Attivo AS soldout,
  // FROM programmazione.corsi

  // OBJECT EXAMPLE
  // {
  //   titolo: "TITOLO SEMINARIO 14",
  //   relatori: "Rovelli, Carbone, Della Marta",
  //   data: "21 Ottobre",
  //   photoName: "images/webinar.jpg",
  //   category: "piattaforme",
  //   tipoEvento: "webinar",
  //   soldout: false,
  // },

  // Execute the SQL query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query: " + err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Send the results as a JSON response
    res.json(results);
  });
});

// Close the MySQL connection when the Node.js app exits
process.on("exit", () => {
  connection.end();
});

// Start your Express.js server
const port = 30000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
