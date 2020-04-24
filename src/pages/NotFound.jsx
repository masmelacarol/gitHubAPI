import React from 'react';
import {connect} from 'react-redux';

const NotFound = (props) => (
    <div>
        {props.error
            ? <p>{props.error}</p>
            : <p>Ocurrió un problema. Intentelo más tarde.</p>}
    </div>
);

const mapStateToProps = ({usersReducer}) => usersReducer;

export default connect(mapStateToProps)(NotFound);