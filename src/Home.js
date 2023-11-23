import React from "react";
import Desktop from "./components/Desktop";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import CoursesList from "./components/CoursesList";

function Main({ corsi }) {
  // const pdfRef = useRef();

  // const downloadPDF = () => {
  //   const input = pdfRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4", true);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const imgWidth = canvas.width;
  //     const imgHeight = canvas.height;
  //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  //     const imgX = (pdfWidth - imgWidth * ratio) / 2;
  //     const imgY = 30;
  //     pdf.addImage(
  //       imgData,
  //       "PNG",
  //       imgX,
  //       imgY,
  //       imgWidth * ratio,
  //       imgHeight * ratio
  //     );
  //     pdf.save("invoice.pdf");
  //   });
  // };

  // ref={pdfRef}

  const numCorsi = corsi.length;
  return (
    <main className="menu">
      <p>
        LE NOSTRE AREE: Appalti pubblici, anticorruzione, MePA, Personale e
        Organizzazione
      </p>

      {numCorsi > 0 ? (
        <>
          <h3>Le principali novità del codice</h3>
          <CoursesList corsi={corsi} listName={"APPALTI"} />
          <h3>Redazione atti e gestione gara</h3>
          <CoursesList corsi={corsi} listName={"REDAZIONE ATTI"} />
          <h3>Soggetti</h3>
          <CoursesList corsi={corsi} listName={"SOGGETTI"} />
          <h3>Piattaforme e adempimenti (MePA, BDAP, FVOE, SDAPA)</h3>
          <CoursesList corsi={corsi} listName={"PIATTAFORME"} />

          {/* <button className="btn" onClick={downloadPDF}>
            Scarica PDF
          </button> */}
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
