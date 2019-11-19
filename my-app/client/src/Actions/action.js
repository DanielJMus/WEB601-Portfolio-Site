export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_ADMIN = 'SET_ADMIN';

// Whether the site is waiting for the user to try logging in
export function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

// Whether the user is successfully logged into their account
export function setLoginSuccess (isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

// Any errors that occur when logging into an account
export function setLoginError (isLoginError) {
    return {
        type: LOGIN_ERROR,
        isLoginError
    };
}

// Whether or not the user is an administrator (And has access to the Admin panel)
export function setIsAdministrator (isAdministrator) {
    return {
        type: SET_ADMIN,
        isAdministrator
    };
}

export function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(false));
        dispatch(setIsAdministrator(false));

        sendLoginRequest(username, password)
            .then(isAdmin => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
                if(isAdmin === true) {
                    dispatch(setIsAdministrator(true));
                }
            })
            .catch(error => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(error));
            })
    }
}

// Log the user out and reset the state values
export function logout() {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(false));
        dispatch(setIsAdministrator(false));
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
                        return resolve(json[0].Admin === 1);
                    }
                }
                return reject(new Error("Invalid username or password"));
            })
        );
    });
}