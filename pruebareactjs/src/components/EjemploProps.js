import React from "react";

export default function EjemploProps(props) {
    let cuenta = props.cuenta;
  return (
    <div>
      {cuenta > 1 ? (
        <h2>Clickeaste {cuenta} veces.</h2>
      ) : (
        <h2>Clickeaste {cuenta} vez.</h2>
      )}
    </div>
  );
}
