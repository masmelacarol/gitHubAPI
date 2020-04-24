import {
    UPDATE_INPUT_VALUE,
    DATA_USER,
    GET_ALL_REPOS,
    LOADING,
    ERROR,
    REPO_SEARCH,
    GET_VALUE,
    VALIDATE_INPUTS,
    ERROR_USER_GIT,
} from '../types';


export const updateInputValue = event => (dispatch, getState) => {

    const { form } = getState().usersReducer;

    const updateState = {
        ...form,
        [event.target.name]: event.target.value
    };

    dispatch({
        type: UPDATE_INPUT_VALUE,
        payload: updateState
    });
}

export const validateInputs = () => (dispatch, getState) => {
    const { form: { firstName, lastName, documentID, birth, email, userGit } } = getState().usersReducer;
    const errors = {}
    if (!firstName) {
        errors.firstName = 'Required'
    }
    if (!lastName) {
        errors.lastName = 'Required'
    }
    if (!documentID) {
        errors.documentID = 'Required'
    } else if (documentID.length < 7) {
        errors.documentID = 'El numéro de identificación digitado es incorrecto.'
    }

    let today = new Date();
    let birthDay = new Date(birth)
    let age = today.getFullYear() - birthDay.getFullYear();
    if (!birth) {
        errors.birth = 'Required'
    } else if (age < 18) {
        errors.birth = 'La edad minima para este formulario es de 18 años'
    }

    if (!email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address'
    }

    if (!userGit) {
        errors.userGit = 'Required'
    }

    dispatch({
        type: VALIDATE_INPUTS,
        payload: errors
    })

}


export const dataUser = (userGit) => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        if (userGit) {
            const response = await fetch(`https://api.github.com/users/${userGit}`);
            const data = await response.json();
            console.log("dataUser -> data", data)
            dispatch({
                type: DATA_USER,
                payload: data
            });
        } else {
            console.log("Error");
            dispatch({
                type: LOADING
            })
            try {
                if (userGit) {
                    const response = await fetch(`https://api.github.com/users/${userGit}/repos`);
                    const data = await response.json();
                    dispatch({
                        type: GET_ALL_REPOS,
                        payload: data
                    });
                } else {
                    console.log("Error");
                    dispatch({
                        type: ERROR,
                        payload: 'El usuario que digito no existe. Intentelo más tarde.'
                    })
                }
            } catch (error) {
                dispatch({
                    type: ERROR,
                    payload: 'El usuario que digito no existe. Intentelo más tarde.'
                })
            }

        }
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo fallo en el sistema. Intentalo más tarde'
        })
    }

}

export const getAllRepos = (userGit) => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        if (userGit) {
            const response = await fetch(`https://api.github.com/users/${userGit}/repos`);
            const data = await response.json();
            dispatch({
                type: GET_ALL_REPOS,
                payload: data
            });
        } else {
            console.log("Error");
            dispatch({
                type: ERROR,
                payload: 'Algo fallo en el sistema. Intentalo más tarde'
            })
        }
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo fallo en el sistema. Intentalo más tarde'
        })
    }


}

export const repoSearch = (event) => (dispatch, getState) => {
    const { repos } = getState().usersReducer;

    let value = event.target.value;
    const levenshtein = require('js-levenshtein');

    let suggestion = repos.map(user => {
        if (levenshtein(value, user.name) < 10) {
            return user.name
        }
        return user.id
    });

    dispatch({
        type: REPO_SEARCH,
        payload: suggestion
    })

}

export const getValue = (event) => (dispatch) => {
    let value = event.target.value;
    dispatch({
        type: GET_VALUE,
        payload: value
    })
}

export const errorUserGit = () => (dispatch, getState) => {
    const { repos } = getState().usersReducer;
    if (repos.message === "Not Found") {
        dispatch({
            type: ERROR_USER_GIT,
            payload: 'El usuario no existe en la base de datos de git, por favor verifique el usuario ingresado.'
        })
    }
}