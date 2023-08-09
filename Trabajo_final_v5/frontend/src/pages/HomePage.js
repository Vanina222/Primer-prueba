import React from "react";
import Materiales from "./Materiales";

function HomePage() {
  return (
    <div className="contenedor-HomePage">
      <Materiales
        nombre="pepa"
        descripcion="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        imagen="fletes"
      />
      <Materiales
        nombre="bbb"
        descripcion="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
        imagen="carpinteria"
      />
    </div>
  );
}

export default HomePage;
