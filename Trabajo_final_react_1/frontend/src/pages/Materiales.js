import React from "react";
import "../styles/Materiales.css";

function Materiales(props) {
  return (
    <div className="contenedor-materiales">
      <img
        className="imagen-material"
        src={require(`./../images/${props.imagen}.jpeg`)}
      />
      <div className="contenedor-texto-materiales">
        <p className="nombre-material">{props.nombre}</p>
        <p className="descricion-material">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Materiales;
