import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Hai bisogno di aiuto? Contattaci tra le {openHour}:00 e le {closeHour}
          :00.
        </p>
      )}
    </footer>
    //  return React.createElement("footer", null, "we're currently open!");
  );
}

export default Footer;
