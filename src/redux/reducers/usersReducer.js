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

const INITIAL_STATE = {
    repos: '',
    dataUser: '',
    value: '',
    suggestion: '',
    exists: false,
    errorExists: '',
    form: {
        firstName: '',
        lastName: '',
        documentID: '',
        birth: '',
        email: '',
        userGit: ''
    },
    loading: false,
    error: null,
    errorsInput: ''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                form: action.payload,
                loading: false,
                error: null
            }
        case DATA_USER:
            return {
                ...state,
                dataUser: action.payload,
                loading: false,
                error: null

            }
        case GET_ALL_REPOS:
            return {
                ...state,
                repos: action.payload,
                exists: true,
                loading: false,
                error: null
            }
        case LOADING:
            return {...state, loading: true, error: null }
        case ERROR:
            return {...state, error: action.payload, loading: false }
        case REPO_SEARCH:
            return {
                ...state,
                suggestion: action.payload,
                loading: false,
                error: null
            }
        case GET_VALUE:
            return {
                ...state,
                value: action.payload,
                loading: false,
                error: null
            }
        case VALIDATE_INPUTS:
            {
                return {
                    ...state,
                    errorsInput: action.payload,
                    loading: false,
                    error: null
                }
            }
        case ERROR_USER_GIT:
            return {
                ...state,
                errorExists: action.payload,
                exists: false,
                loading: false,
                error: null
            }

        default:
            return state;
    }
}