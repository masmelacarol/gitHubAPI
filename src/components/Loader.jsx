import React from "react";
import '../assets/styles/components/Loader.scss';

const Loader = () => (
  <div className="container-loader">
    <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  </div>
);

export default Loader;