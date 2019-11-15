const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

function SetLoginSuccess (isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function SetLoginError (isLoginError) {
    return {
        type: LOGIN_ERROR,
        isLoginError
    };
}

export function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(SetLoginSuccess(false));
        dispatch(SetLoginError(false));

        sendLoginRequest(username, password)
            .then(success => {
                dispatch(setLoginPending(false));
                dispatch(SetLoginSuccess(true));
            })
            .catch(error => {
                dispatch(setLoginPending(false));
                dispatch(SetLoginError(error));
            })
    }
}

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null
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

        default:
            return state;
    }
}

function sendLoginRequest (email, password) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:4200/api/users/' + email, {
            method: 'get'
        }).then(res =>
            res.json().then(json => {
                if(json.length > 0) {
                    if(json[0].Password == password) {
                        return resolve(true);
                    }
                }
                return reject(new Error("Invalid username or password"));
            })
        );
    });
}