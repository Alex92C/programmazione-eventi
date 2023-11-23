import React from "react";

function Order({ closeHour, openHour }) {
  return (
    <>
      <div className="order">
        <p>Hai domande? Chiamaci! Siamo aperti fino alle {closeHour}:00.</p>
      </div>
    </>
  );
}

export default Order;
