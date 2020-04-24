import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.scss';

const Home = () => (
  <div className="Home">
    <div className="Home__main">
      <h1 className="Home__main--title">Bienvenidos!</h1>
      <p className="Home__main--aditionalInfo">¿Desea conocer los repositorios de una persona en GitHub?</p>    
    </div>
    <div className="Home__button">
      <Link className="Home__button--link Button" to="/home">Iniciar</Link>
    </div>

  </div>
);

export default Home;