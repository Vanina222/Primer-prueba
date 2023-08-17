import React from "react";
import logo from "../../images/logo.png";
import "../../styles/Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src={logo} width="100" alt="Logo Casa Irigoyen" />
        <p className="nombre-empresa">Casa Irigoyen</p>
        <p className="slogan">... lo de Pirincho desde 1981</p>
      </div>
    </header>
  );
};

export default Header;
