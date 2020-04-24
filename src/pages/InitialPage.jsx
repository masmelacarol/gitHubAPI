import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/InitialPage.scss';

const InitialPage = () => (
  <div className="InitialPage">
    <div className="InitialPage__main">
      <h1 className="InitialPage__main--title">Bienvenidos!</h1>
      <p className="InitialPage__main--aditionalInfo">¿Desea conocer los repositorios de una persona en GitHub?</p>    
    </div>
    <div className="InitialPage__button">
      <Link className="InitialPage__button--link Button" to="/home">Iniciar</Link>
    </div>

  </div>
);

export default InitialPage;