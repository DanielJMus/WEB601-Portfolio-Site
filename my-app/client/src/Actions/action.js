export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

export function setLoginSuccess (isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function setLoginError (isLoginError) {
    return {
        type: LOGIN_ERROR,
        isLoginError
    };
}

export function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(false));

        sendLoginRequest(username, password)
            .then(success => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
            })
            .catch(error => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(error));
            })
    }
}

/* Handles login credential checking for user, checks their email and password within
the user database and returns whether the login was successful or not. */
function sendLoginRequest (email, password) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:4200/api/users/' + email, {
            method: 'get'
        }).then(res =>
            res.json().then(json => {
                if(json.length > 0) {
                    if(json[0].Password === password) {
                        return resolve(true);
                    }
                }
                return reject(new Error("Invalid username or password"));
            })
        );
    });
}