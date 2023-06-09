import React from "react";
import "../styles/ContactoPage.css";

const ContactoPage = (props) => {
  return (
    <main className="contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Teléfono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p class="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación.</h2>
        <p>También puedes contactarte a travéz de: </p>
        <ul>
          <li>Teléfono: 02241 481 470/562 </li>
          <li>Whatsapp: 2241 471 869</li>
          <li>Mail: casairigoyen@cer-ranchos.com.ar</li>
          <li>Instagram: casairigoyensrl</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
