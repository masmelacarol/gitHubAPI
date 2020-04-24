import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userIcon from '../assets/images/avatar.svg'
import '../assets/styles/components/Header.scss';


const Header = (props) => (
  <div className="Header">
    <div className="Header__logo">
      <img src={props.dataUser.avatar_url || userIcon} alt=""/>
      {(props.form.firstName && props.form.userGit) ? <p>{props.form.firstName} {props.form.lastName}</p>: null}
    </div>
    <nav className="Header__nav">
      <ul className="Header__nav--ul">
        <li className="Header__nav--li"><Link to="/">Inicio</Link></li>
        <li className="Header__nav--li"><button>Salir </button></li>
      </ul>
    </nav>
  </div>
);

const mapStateToProps = ({usersReducer}) => usersReducer;

export default connect(mapStateToProps, null)(Header);