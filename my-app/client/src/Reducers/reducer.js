import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, SET_ADMIN } from '../Actions/action';

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null,
    isAdministrator: false
}, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case LOGIN_ERROR:
            return {
                ...state,
                isLoginError: action.isLoginError
            };

        case SET_ADMIN:
            return {
                ...state,
                isAdministrator: action.isAdministrator
            };
    

        default:
            return state;
    }
}