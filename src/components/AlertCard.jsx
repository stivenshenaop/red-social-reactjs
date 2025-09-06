import React, { useState } from "react";

export default function AlertCard() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
      <button className="w3-button w3-theme-l3 w3-display-topright" onClick={() => setShow(false)} aria-label="Cerrar alerta">
        <i className="fa fa-remove" />
      </button>
      <p>
        <strong>Hey!</strong>
      </p>
      <p>People are looking at your profile. Find out who.</p>
    </div>
  );
}
