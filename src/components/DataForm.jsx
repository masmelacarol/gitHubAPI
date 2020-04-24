import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/DataForm.scss";
import avatarUser from "../assets/images/avatar.svg";

const DataForm = (props) => (
  <div className="DataForm">
    <div className="DataForm__avatar">
      <div className="DataForm__avatar--container avatar">
        <img
          src={props.dataUser.avatar_url || avatarUser}
          alt="Avatar del usuario"
        />
      </div>
    </div>
    <div className="DataForm__info">
      <div className="DataForm__info--row">
        <div className="DataForm__info--columns">
          <div className="info-card">
            <h6>Nombre Completo:</h6>
            <p>
              {" "}
              {props.form.firstName} {props.form.lastName}{" "}
            </p>
          </div>
          <div className="info-card">
            <h6>Cédula:</h6>
            <p> {props.form.documentID}</p>
          </div>
          <div className="info-card">
            <h6>Fecha de nacimiento:</h6>
            <p> {props.form.birth} </p>
          </div>
        </div>
        <div className="DataForm__info--columns">
          <div className="info-card">
            <h6>Correo electrónico: </h6>
            <p> {props.form.email}</p>
          </div>
          <div className="info-card">
            <h6>Usuario de GitHub: </h6>
            <p> {props.form.userGit}</p>
          </div>
          <div className="info-card">
            <h6>Biografía: </h6>
            <p> {props.dataUser.bio || ""}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapToStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapToStateToProps)(DataForm);
