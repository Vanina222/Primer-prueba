import React from "react";
import Materiales from "./Materiales";

function HomePage() {
  return (
    <div className="contenedor-HomePage">
      <Materiales
        nombre="Casa Irigoyen"
        descripcion="Construye tus sueños sobre una base sólida. Encuentra en nuestro corralón una amplia gama de materiales de construcción de la más alta calidad para transformar tus proyectos en realidades duraderas."
        imagen="frente-corralon"
      />
      <Materiales
        nombre="Entrega a domicilio"
        descripcion="Elimina la carga del transporte. Con nuestro servicio de entrega a domicilio, tus materiales de construcción estarán justo donde los necesitas, ahorrándote tiempo y esfuerzo."
        imagen="fletes"
      />

      <Materiales
        nombre="Carpintería"
        descripcion="Diseña tu espacio soñado. Transformamos tus ideas en muebles a medida que reflejan tu estilo y se ajustan perfectamente a tu hogar."
        imagen="carpinteria"
        Tus
      />
      <Materiales
        nombre="Asesoramiento técnico"
        descripcion="Construye con confianza. Nuestro equipo de expertos está aquí para brindarte asesoramiento técnico personalizado, asegurando que elijas los materiales adecuados para un resultado exitoso."
        imagen="asesoramiento"
      />
    </div>
  );
}

export default HomePage;
