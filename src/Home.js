import React, { useRef } from "react";
import Desktop from "./components/Desktop";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import CoursesList from "./components/CoursesList";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Button from "react-bootstrap/Button";

function Main({ corsi }) {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const widthRatio = pdfWidth / imgWidth;
      const heightRatio = imgHeight * widthRatio;
      const totalPDFs = Math.ceil(heightRatio / pdfHeight);

      //Add an image that is not visible on the webpage
      pdf.addImage(
        "https://media.licdn.com/dms/image/C4E1BAQFYZSM6jQ54xA/company-background_10000/0/1643621563885/mediaconsult_formazione_consulenza_cover?e=2147483647&v=beta&t=ao7GtwTTChLge9pOL2HUPZVmrNOC60kgeQAFlAvKPGU",
        "JPEG",
        0,
        0,
        pdfWidth,
        pdfHeight / 4
      );

      for (let i = 0; i < totalPDFs; i++) {
        if (i !== 0) pdf.addPage();
        pdf.addImage(
          imgData,
          "PNG",
          0,
          -i * pdfHeight + pdfHeight / 4,
          pdfWidth,
          heightRatio
        );
      }

      pdf.save("Programmazione.pdf");
    });
  };

  const numCorsi = corsi.length;
  return (
    <main className="menu" ref={pdfRef}>
      <p>
        LE NOSTRE AREE: Appalti pubblici, anticorruzione, MePA, Personale e
        Organizzazione
      </p>

      {numCorsi > 0 ? (
        <>
          <h3>Le principali novità del codice</h3>
          <CoursesList corsi={corsi} listName={"appalti"} />
          <h3>Redazione atti e gestione gara</h3>
          <CoursesList corsi={corsi} listName={"redazione atti"} />
          <h3>Soggetti</h3>
          <CoursesList corsi={corsi} listName={"soggetti"} />
          <h3>Piattaforme e adempimenti (MePA, BDAP, FVOE, SDAPA)</h3>
          <CoursesList corsi={corsi} listName={"piattaforme"} />
          <Button className="btn" onClick={downloadPDF}>
            Scarica PDF
          </Button>
        </>
      ) : (
        <p>La nuova programmazione è in arrivo...</p>
      )}
    </main>
  );
}

const Home = ({ corsi }) => {
  return (
    <div className="container">
      <Desktop />
      <Main corsi={corsi} />

      <Footer />

      <button className="btn">
        <Link to="/admin">Admin area</Link>
      </button>
    </div>
  );
};

export default Home;
