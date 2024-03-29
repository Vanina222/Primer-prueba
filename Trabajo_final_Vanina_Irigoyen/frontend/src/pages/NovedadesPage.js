import React, { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";
import "../styles/NovedadesPage.css";

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargaNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };
    cargaNovedades();
  }, []);

  return (
    <section className="holder-2">
      {loading ? (
        <p>Cargando Novedades...</p>
      ) : (
        novedades.map((item) => (
          <NovedadItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo}
          />
        ))
      )}
    </section>
  );
};

export default NovedadesPage;
