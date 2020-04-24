import React from 'react';
import {connect} from 'react-redux';
import '../assets/styles/components/ContactForm.scss';


const ContactForm = (props) => (
    <div className="Form">
        <div className="Form__body">
            <h2 className="font-weight-bold mb-5"> Datos del usuario de Git:</h2>
            <form className="Form__body--row" onSubmit={props.onSubmit}>
                <div className="Form__body--columns">
                    <div className="form-group">
                        <label>Nombres: </label>
                        <input 
                            id="firstName" 
                            className="form-control" 
                            onChange={props.onChange} 
                            value={props.form.firstName} 
                            name="firstName" 
                            type="text"
                            required 
                            ></input>
                        {props.errorsInput.firstName && <p className="danger">{props.errorsInput.firstName}</p>}
                    </div>
                    <div className="form-group">
                        <label>Apellidos: </label>
                        <input 
                            className="form-control" 
                            onChange={props.onChange} 
                            value={props.form.lastName} 
                            name="lastName" 
                            type="text"
                            required 
                            />
                        {props.errorsInput.lastName && <p className="danger">{props.errorsInput.lastName}</p>}
                    </div>
                    <div className="form-group">
                        <label>Cédula: </label>
                        <input 
                            className="form-control" 
                            onChange={props.onChange} 
                            value={props.form.documentID} 
                            name="documentID" 
                            type="number"
                            required 
                            />
                        {props.errorsInput.documentID && <p className="danger">{props.errorsInput.documentID}</p>}
                    </div>
                </div>
                <div className="Form__body--columns">
                    <div className="form-group">
                        <label>Fecha de nacimiento: </label>
                        <input 
                            className="form-control" onChange={props.onChange} value={props.form.birth} name="birth" type="date" />
                        {props.errorsInput.birth && <p className="danger">{props.errorsInput.birth}</p>}
                    </div>
                    <div className="form-group">
                        <label>Correo electrónico: </label>
                        <input 
                            className="form-control" 
                            onChange={props.onChange} 
                            value={props.form.email} 
                            name="email" type="email"/>
                        {props.errorsInput.email && <p className="danger">{props.errorsInput.email}</p>}
                    </div>
                    <div className="form-group">
                        <label>Usuario de GitHub: </label>
                        <input 
                            className="form-control" 
                            onChange={props.onChange} value={props.form.userGit} name="userGit" type="text"/>
                            {props.errorsInput.userGit && <p className="danger">{props.errorsInput.userGit}</p>}
                    </div>            
                </div>
            </form>
            {Object.keys(props.errorsInput).length ? '' : <button onClick={props.onClick} className="Button lg">Enviar</button>}
            
        </div>
    </div>
);

const mapStateToProps = ({usersReducer}) => usersReducer;

export default connect(mapStateToProps)(ContactForm);